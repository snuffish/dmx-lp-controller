// @ts-nocheck
import { autoDetect, Button, ILaunchpad, RgbColor } from 'launchpad.js';
import { DMX, range } from '../utils';
import { Color } from './Color';
import createGrid, { Grid } from './Grid';

let lp: ILaunchpad
let grid: Grid.Item[]

const init = (name: string) => {
    console.log(`Connected to ${name}`)
    grid = createGrid(lp)

    DMX.clear()
    lp.allOff()

    setupPad()
}

const rgbToDMX = (color: RgbColor) => {
    console.log(color)
    DMX.update({
        1: color[0],
        2: color[1],
        3: color[2]
    })
}

const setupPad = () => {
    // Generate colors on the pad
    for (let y of range(1,8)) {
        const item = Grid.getItem(`0x${y}`)
        item?.color.setColor(Color.RGB.random())
        item?.onTrigger = () => rgbToDMX(item?.color.rgb)
    }

    // Clear the DMX
    const soloMuteButton = Grid.getItem('8x8')
    soloMuteButton?.color.setColor(Color.RGB.red)
    if (soloMuteButton)
        soloMuteButton.onTrigger = () => DMX.clear()

    // Increase brightness
    const increaseBrightnessButton = Grid.getItem('0x0')
    if (increaseBrightnessButton) {
        increaseBrightnessButton.color.setColor(Color.RGB.green)
    }
        
    // Decrease brightness
    const decreaseBrightnessButton = Grid.getItem('1x0')
    if (decreaseBrightnessButton) {
        decreaseBrightnessButton.color.setColor(Color.RGB.orange)
    }
}

const onActionButton = (event: Grid.ButtonEvent, button: Button) => {
    console.debug(`[${event}] `, button)

    const item = Grid.getItem(button.xy)
    item?.onTrigger && item?.onTrigger()
}

const Application = async () => {
    lp = autoDetect()

    lp.once('ready', init)
    lp.on('buttonDown', button => onActionButton(Grid.ButtonEvent.DOWN, button))
    lp.on('buttonUp', button => onActionButton(Grid.ButtonEvent.UP, button))

}

Application()

