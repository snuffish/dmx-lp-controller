import { RgbColor } from 'launchpad.js'
import { lpEmitter } from '../../emitter'
import { Color } from '../Color'
import { GridMatrix } from '../Grid'
import { buttonLogOutput } from '../Logger'
import BaseComponent, { Button } from './BaseComponent'

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

class ButtonComponent extends BaseComponent {
    private _color: RgbColor = Color.RGB.off
    
    constructor(position: GridMatrix) {
        super(position)
        
        this.setRandomColor()
    }
    
    public get color() { return this._color }
    public set color(color: RgbColor) { this._color = color }
    
    setRandomColor() {
        this.color = Color.RGB.random()
        lpEmitter.emit('setButtonColor', this, this.color)
    }
    
    onPressed(): void {
        const [r, g, b] = this.color
        let x = 10
        // DMX.update({ 1: r/x, 2: g/x, 3: b/x })
    }

    onRelease(): void {
        throw new Error('Method not implemented.')
    }
}

export default ButtonComponent
