import { Button, RgbColor } from "launchpad.js";
import { DMX } from '../../utils';
import { ButtonEvent } from '../../launchpad/Grid';
import FixtureBase, { ChannelControls } from '../FixtureBase';
import Color from "../../utils/Color";

const channelSetup: ChannelControls = {
    1: {
        universeChannel: 10,
        value: 50,
        description: 'Red'
    },
    2: {
        universeChannel: 11,
        value: 100,
        description: 'Green'
    },
    3: {
        universeChannel: 12,
        value: 30,
        description: 'Blue'
    }
}

interface GridButtonType {
    xy: Button['xy'],
    color: RgbColor
}

type Props = {
    channelMode: 3
}

class LedBarRGB extends FixtureBase<GridButtonType> {
    constructor({ channelMode }: Props) {
        super({ name: 'BAR 240-10 RGB', channelMode, channelSetup })
    }

    gridButtonSetup(): GridButtonType[] {
        return [
            {
                xy: [0, 8],
                color: Color.RGB.blue
            },
            {
                xy: [0, 7],
                color: Color.RGB.red
            },
            {
                xy: [0, 6],
                color: Color.RGB.orange
            },
            {
                xy: [0, 5],
                color: Color.RGB.green
            }
        ]
    }

    onActionButton(event: ButtonEvent, button: Button, gridButton: GridButtonType): void {
        console.log(`[${event}] {${this.name}} =>`, button, ` | gridButton =>`, gridButton)
        DMX.update(this.dmx)
    }
}

export default LedBarRGB
