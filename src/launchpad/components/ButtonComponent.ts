import { ButtonIn, RgbColor } from 'launchpad.js'
import Emitter, { Button } from '../../emitter'
import { Color } from '../Color'
import { buttonLogOutput } from '../Logger'
import BaseComponent from './BaseComponent'
import { DMX } from '../../utils'
import { GridMatrix } from '../Grid'
import { isEqual } from 'lodash'

export enum ButtonEvent {
    DOWN = 'DOWN',
    UP = 'UP'
} 

export const buttonPressed = (button: Button, event: ButtonEvent) => {
    button.event = event
    if (event == ButtonEvent.DOWN) buttonDown(button)
    else if (event == ButtonEvent.UP) buttonUp(button)
}

const buttonDown = (button: Button) => {
    console.log(buttonLogOutput(button))
}

const buttonUp = (button: Button) => {
    console.log(buttonLogOutput(button))
}

type Props = {
    xy: GridMatrix
    color?: RgbColor
}

class ButtonComponent extends BaseComponent {
    private _color: RgbColor = Color.RGB.off

    constructor({ xy, color = Color.RGB.red }: Props) {
        super(xy)
        this.color = color
    }

    public get color() { return this._color }
    public set color(color: RgbColor) { this._color = color }

    setRandomColor() {
        this.color = Color.RGB.random()
        Emitter.emit('setButtonColor', this, this.color)
    }

    onPressed(): void {
        const [r, g, b] = this.color
        let x = 10
        DMX.update({ 1: r/x, 2: g/x, 3: b/x })
    }
}

export default ButtonComponent
