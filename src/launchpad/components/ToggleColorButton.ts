import { dmxEmitter } from "../../emitter";
import { DMX, arrayToMap } from "../../utils";
import ButtonComponent from "./ButtonComponent";

export default class ToggleColorButton extends ButtonComponent {
    onPressed(): void {
        const dmx = arrayToMap(this.color)
        dmxEmitter.emit('update', dmx)
    }

    onRelease(): void {
        dmxEmitter.emit('clear')
    }
}

