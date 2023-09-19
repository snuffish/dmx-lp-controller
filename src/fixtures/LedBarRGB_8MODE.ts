import { Button, RgbColor } from "launchpad.js";
import { Color } from '../launchpad/Color';
import { DMX } from '../utils';
import { ButtonEvent } from '../launchpad/Grid';
import FixtureBase, { ChannelControls } from './FixtureBase';

const channelSetup: ChannelControls = {
    1: {
        universeChannel: 1,
        value: 50,
        description: 'Red'
    },
    2: {
        universeChannel: 2,
        value: 100,
        description: 'Green'
    },
    3: {
        universeChannel: 3,
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

class LedBarRGB_8MODE extends FixtureBase<GridButtonType> {
    constructor({ channelMode }: Props) {
        super({ name: 'BAR 240-10 RGB', channelMode, channelSetup })
    }

    gridButtonSetup(): GridButtonType[] {
        return [
            {
                xy: [5, 8],
                color: Color.RGB.blue
            },
            {
                xy: [5, 7],
                color: Color.RGB.red
            },
            {
                xy: [5, 6],
                color: Color.RGB.orange
            },
            {
                xy: [5, 5],
                color: Color.RGB.green
            }
        ]
    }

    onActionButton(event: ButtonEvent, button: Button, gridButton: GridButtonType): void {
        console.log(`[${event}] {${this.name}} =>`, button, ` | gridButton =>`, gridButton)
        DMX.update(this.dmx)
    }

    
}

export default LedBarRGB_8MODE
