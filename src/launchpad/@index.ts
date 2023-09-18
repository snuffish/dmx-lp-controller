// @ts-nocheck
import { autoDetect, Button, colors, ILaunchpad, RgbColor } from 'launchpad.js'
import { AppLaunchpadProps, ButtonEvent, GridButton, IGrid } from '../types'
import { COLORS, DMX, LP, GRID, pipe } from '../utils'
import { colorFromHex, colorFromRGB } from 'launchpad.js/dist/colorHelpers'
import { Grid } from './Grid'

let lp: ILaunchpad

let grid: IGrid = new Set()

const hexRNGScript = (lp: ILaunchpad): void => {
    grid.clear()
    
    for (let x = 0; x <= 8; x++) {
        for (let y = 0; y <= 8; y++) {
            const rgb = COLORS.getDarkenRGBColor()
            grid.add({
                xy: [x, y],
                rgb
            })
            
            if (x === 8 || y === 0) continue

            // lp.setButtonColor([x,y], colorFromRGB(rgb))
        }
    }

    // Get the LP button and use a function-pipeline
    // const button = Grid.Panel.Right.STOP_SOLO_MUTE()
    // button?.onTrigger = pipe(DMX.clear(), lp.allOff())()

    // button?.onTrigger = () => {
    //     // When pressed: Clear the DMX Universe and the LaunchPad Lightning
    //     DMX.clear()
    //     lp.allOff()
    // }

    const newColorButton = GRID.getGridButton(grid, [8,7])
    if (newColorButton) {
        lp.setButtonColor(newColorButton.xy, LP.colorFromRGB([0,255,0]))
    }

    // const strobe1Button = GRID.getGridButton(grid, [8,6])
    // if (strobe1Button) {
    //     lp.setButtonColor(strobe1Button.xy, LP.colorFromRGB([0,255,0]))
    // }

    // const resetButton = GRID.getGridButton(grid, [8,8])
    // if (resetButton) {
    //     lp.setButtonColor(resetButton.xy, LP.colorFromRGB([255,0,0]))
    // }
}


const pressed = (event: ButtonEvent, button: Button) => {
    console.debug(`[${event}] `, button)

    // Strobe
    // if (button.nr == 39) {
    //     DMX.strobe(!(event == ButtonEvent.UP), 50)
    //     return
    // }

    // if (button.nr == 49) {
    //     DMX.strobe(!(event == ButtonEvent.UP), 100)
    //     return
    // }

    // if (button.nr == 59) {
    //     DMX.strobe(!(event == ButtonEvent.UP), 200)
    //     return
    // }

    // if (button.nr == 69) {
    //     DMX.strobe(!(event == ButtonEvent.UP), 225)
    //     return
    // }

    // New colors button
    if (button.nr == 29) {
        hexRNGScript(lp)
        return
    }

    // Mute button
    if (button.nr == 19) {
        DMX.clear()
        // lp.allOff()
        return
    }

    console.log("JAAAA")

    if (event == ButtonEvent.DOWN) {
        const gridBtn = GRID.getGridButton(grid, button.xy)
        if (gridBtn) {
            const { rgb } = gridBtn
            const dmx = {
                3: rgb[0],
                4: rgb[1],
                5: rgb[2]
            }
            console.log(dmx)

            DMX.update(dmx)
        }
    }

}

const changeDMXColor = () => {
    const darkRgb = COLORS.getDarkenRGBColor()
    DMX.update({
        3: darkRgb[0],
        4: darkRgb[1],
        5: darkRgb[2]
    })
}

const init = (name: string) => {
    console.log(`Connected to ${name}`)
    // DMX.clear()
    lp.allOff()

    setInterval(hexRNGScript, 2500)
    setInterval(changeDMXColor, 500)
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

