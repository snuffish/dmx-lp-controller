import { ButtonIn, RgbColor, isButton } from 'launchpad.js'
import { lpEmitter } from '../../emitter'
import Color from '../../utils/Color'
import { GridMatrix } from '../Grid'
import { buttonLogOutput } from '../Logger'
import BaseComponent from './BaseComponent'
import IButtonBehaviour from '../behaviours/IButtonBehaviour'
import { isEqual } from 'lodash'

export type Button = ButtonIn & { event: ButtonEvent }

export enum ButtonEvent {
    DOWN = 'DOWN',
    UP = 'UP'
}

const isThisComponent = (component: BaseComponent, button: Button) =>
    isButton(button) && isEqual(component.position, button.xy)

class ButtonComponent extends BaseComponent implements IButtonBehaviour {
    private _color: RgbColor = Color.RGB.off
    
    constructor(position: GridMatrix) {
        super(position)

        lpEmitter.on('buttonPressed', (button: Button, event: ButtonEvent) =>
            isThisComponent(this, button) && (event == ButtonEvent.DOWN ? this.onPressed() : this.onRelease()))
        
        this.setRandomColor()
    }
    
    public get color() { return this._color }
    public set color(color: RgbColor) { this._color = color }
    
    setRandomColor() {
        this.color = Color.RGB.random()
        lpEmitter.emit('setButtonColor', this, this.color)
    }
    
    onPressed(): void {
        console.log(buttonLogOutput({...this.position, event: ButtonEvent.DOWN}))
        const [r, g, b] = this.color
        let x = 10
        // DMX.update({ 1: r/x, 2: g/x, 3: b/x })
    }

    onRelease(): void {
        console.log(buttonLogOutput({...this.position, event: ButtonEvent.UP}))
    }
}

export default ButtonComponent
