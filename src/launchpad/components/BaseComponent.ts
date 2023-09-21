// @ts-nocheck
import { ButtonIn } from 'launchpad.js'
import Emitter, { Button } from '../../emitter';
import { ButtonEvent } from './ButtonComponent';
import { isEqual } from 'lodash';

abstract class BaseComponent {
    private _position: ButtonIn

    constructor(position: ButtonIn) {
        this._position = position;
        
        Emitter.on('buttonPressed', (button: Button, event: ButtonEvent) =>
            isEqual(this._position, button.xy) && this.onPressed())
    }

    abstract onPressed(): void

    get position() { return this._position }
}

export default BaseComponent
