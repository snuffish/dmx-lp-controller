import { colorFromHex, colorFromRGB } from "launchpad.js/dist/colorHelpers";
import Color from "../../utils/Color";
import { GridMatrix } from "../Grid";
import BaseComponent from "./BaseComponent";
import ButtonComponent from "./ButtonComponent";
import { RgbColor } from "launchpad.js";
import { isEqual } from "lodash";

class SliderComponent extends ButtonComponent {
    private defaultColor: RgbColor= [4,4,4]

    constructor(row: number) {
        super([row, 8])

        const buttons = new Set<ButtonComponent>()

        for (let y = 8; y > 0; y--) {
            const btn = new ButtonComponent([row, y])
            btn.color = this.defaultColor
            // btn.onPressed = () =>  btn.color = Color.RGB.off 

            buttons.add(btn)
        }

        

        // setInterval(() => {
        //     buttons.forEach(btn => {
        //         btn.color = isEqual(Color.RGB.off, btn.color) ? this.defaultColor : Color.RGB.off                
        //     })
        // }, 100)
    }

    onPressed(): void {
        console.log("SLIDER!!!")
    }

    onRelease(): void {
        
    }
}

export default SliderComponent
