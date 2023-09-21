import { GridMatrix } from "../Grid";

abstract class BaseComponent {
    private _position: GridMatrix

    constructor(position: GridMatrix) {
        this._position = position;
        // @TODO: Map the GridMatrix to a Button object
    }

    get position() { return this._position }
}

export default BaseComponent
