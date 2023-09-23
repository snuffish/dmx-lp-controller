import ButtonBehaviour from "../behaviours/ButtonBehaviour";
import IBehaviour from "../behaviours/IBehaviour";
import TestBehaviour from "../behaviours/TestBehaviour";
import BaseComponent from "./BaseComponent";

class CustomButton extends BaseComponent implements ButtonBehaviour {
    constructor() {
        super()
        
    }
    onPressed(): void {
        throw new Error("Method not implemented.");
    }
    onRelease(): void {
        throw new Error("Method not implemented.");
    }
}

export default CustomButton