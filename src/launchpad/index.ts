import { Color } from './Color';
import { autoDetect, Button, ILaunchpad } from 'launchpad.js';
import { DMX } from '../utils';
import createGrid, { Grid } from './Grid';

let lp: ILaunchpad
let grid: Grid.Item[]

const init = (name: string) => {
    console.log(`Connected to ${name}`)
    grid = createGrid(lp)

    DMX.clear()
    lp.allOff()
}

const onActionButton = (event: Grid.ButtonEvent, button: Button) => {
    console.debug(`[${event}] `, button)

    const item = Grid.getItem(button.xy)
    if (event === Grid.ButtonEvent.DOWN) {
        item?.color.setColor(Color.RGB.orange)
    } else {
        item?.clear()
    }
}

const Application = async () => {
    lp = autoDetect()

    lp.once('ready', init)
    lp.on('buttonDown', button => onActionButton(Grid.ButtonEvent.DOWN, button))
    lp.on('buttonUp', button => onActionButton(Grid.ButtonEvent.UP, button))

}

Application()

