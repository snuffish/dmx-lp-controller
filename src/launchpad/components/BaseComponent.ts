import { ButtonIn, isButton } from 'launchpad.js'
import { lpEmitter } from '../../emitter';
import { ButtonEvent } from './ButtonComponent';
import { isEqual } from 'lodash';

export type Button = ButtonIn & { event: ButtonEvent }

const isThisComponent = (component: BaseComponent, button: Button) =>
    isButton(button) && isEqual(component.position, button.xy)

abstract class BaseComponent {
    private _position: Button

    constructor(position: Button) {
        this._position = position;

        lpEmitter.on('buttonPressed', (button: Button, event: ButtonEvent) =>
            isThisComponent(this, button) && (event == ButtonEvent.DOWN ? this.onPressed() : this.onRelease()))
    }

    abstract onPressed(): void
    abstract onRelease(): void

    get position() { return this._position }
}

export default BaseComponent
