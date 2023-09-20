import { ButtonIn } from 'launchpad.js'
import Emitter from '../../Emitter';

abstract class BaseComponent {
    private _position: ButtonIn

    constructor(position: ButtonIn) {
        this._position = position;

        Emitter.emit('addButton', this)
        Emitter.on('componentPressed', (component: any) => this.onPressed(component))
    }

    abstract onPressed(component: any): void

    get position() { return this._position }
}

export default BaseComponent
