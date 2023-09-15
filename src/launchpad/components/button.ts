import type { RgbColor, ButtonIn as Position } from 'launchpad.js'

type Color = {
    rgb: RgbColor,
    midi: RgbColor
}

type ButtonProps = {
    position: Position,
    color: Color
}

export default class ButtonComponent {
    private position: Position
    private color: Color

    constructor(lp: any, props: ButtonProps) {
        this.position = props.position
        this.color = props.color
    }

    setColor(color: RgbColor) {

    }
}
