import { RgbColor } from 'launchpad.js'
import { lpEmitter } from '../../emitter'
import { DMX, arrayToMap, isThisComponent } from '../../utils'
import Color from '../../utils/Color'
import { GridMatrix } from '../Grid'
import { buttonLogOutput } from '../Logger'
import IButtonBehaviour from '../behaviours/IButtonBehaviour'
import BaseComponent from './BaseComponent'
import { Button, ButtonEvent } from '../../types'

class ButtonComponent extends BaseComponent implements IButtonBehaviour {
    private _color: RgbColor = Color.RGB.off
    
    constructor(position: GridMatrix) {
        super(position)

        lpEmitter.on('buttonPressed', (button: Button, event: ButtonEvent) =>
            isThisComponent(this, button) && (
                event == ButtonEvent.DOWN ? 
                    this.onPressed()
                : this.onRelease())
            )
    }
    
    public get color() { return this._color }
    public set color(color: RgbColor) {
        this._color = color
        lpEmitter.emit('setButtonColor', this, this.color)
    }
    
    setRandomColor() {
        this.color = Color.RGB.random()
        return this
    }
    
    onPressed(): void {
        console.log(buttonLogOutput({...this.position, event: ButtonEvent.DOWN}))
        
        const dmx = arrayToMap(this.color)

        DMX.update(dmx)
    }

    onRelease(): void {
        console.log(buttonLogOutput({...this.position, event: ButtonEvent.UP}))
        
    }
}

export default ButtonComponent
