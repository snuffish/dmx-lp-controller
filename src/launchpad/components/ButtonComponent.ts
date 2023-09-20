import { ButtonIn, RgbColor } from 'launchpad.js'
import BaseComponent from './BaseComponent'
import { Color } from '../Color'
import Emitter from '../../Emitter'
import { isEqual } from 'lodash'

class ButtonComponent extends BaseComponent {
    private _color: RgbColor = [0, 0, 0]

    constructor(position: ButtonIn) {
        super(position)
    }

    public get color() { return this._color }

    setRandomColor() {
        this._color = Color.RGB.random()

        Emitter.emit('setButtonColor', this)
    }

    onPressed(component: any): void {
        this.setRandomColor()
    }
}

export default ButtonComponent
