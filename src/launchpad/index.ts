import { autoDetect, Button, colors, ILaunchpad, isButton, RgbColor, waitForReady } from 'launchpad.js'
import { COLORS, DMX, LP } from '../utils'
import { ButtonEvent, AppLaunchpadProps } from '../types'
const { colorFromHex, colorFromRGB } = colors;

let lp: ILaunchpad

type GridButton = { xy: [number, number], rgb: RgbColor }

let grid: Set<GridButton> = new Set()

const getGridButton = (xy: GridButton['xy']): GridButton | false => {
    for (let item of grid) {
        if (JSON.stringify(item.xy) == JSON.stringify(xy))
            return item
    }

    return false
}

const hexRNGScript = (lp: ILaunchpad): void => {
    grid.clear()

    for (let x = 0; x <= 7; x++) {
        for (let y = 1; y <= 8; y++) {
            const rgb = COLORS.randomRGB()
            grid.add({
                xy: [x, y],
                rgb
            })

            lp.setButtonColor([x,y], LP.colorFromRGB(rgb))
        }
    }
}


const pressed = (event: ButtonEvent, button: Button) => {
    console.debug(`[${event}] `, button)

    if (button.nr == 19) {
        DMX.clear()
        lp.allOff()
        return
    }

    if (button.nr == 29) {
        DMX.clear()
        hexRNGScript(lp)
        return
    }

    if (event == ButtonEvent.DOWN) {
        const gridBtn = getGridButton(button.xy)
        if (gridBtn) {
            const { rgb } = gridBtn
            const dmx = {
                1: rgb[0],
                2: rgb[1],
                3: rgb[2]
            }
            console.log(dmx)

            DMX.update(dmx)
        }
    }

}

const init = (name: string) => {
    console.log(`Connected to ${name}`)
    DMX.clear()
    lp.allOff()

    // hexRNGScript(lp)
}

const Application = async ({ debug }: AppLaunchpadProps) => {
    lp = autoDetect({ debug })

    lp.once('ready', init)
    lp.on('buttonDown', button => pressed(ButtonEvent.DOWN, button))
    lp.on('buttonUp', button => pressed(ButtonEvent.UP, button))

}

Application({
    debug: (process.env.DEBUG || false) as boolean
})

