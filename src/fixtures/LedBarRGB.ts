import { Button, RgbColor } from "launchpad.js";
import { Color } from '../launchpad/Color';
import { DMX } from '../utils';
import { ButtonEvent } from './../launchpad/Grid';
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

type Props = {
    channelMode: 3
}

class LedBarRGB extends FixtureBase {
    gridButtons: Array<{ xy: Button['xy'], color: RgbColor }> = [
        {
            xy: [0,8],
            color: Color.RGB.blue
        },
        {
            xy: [0,7],
            color: Color.RGB.red
        },
        {
            xy: [0,6],
            color: Color.RGB.orange
        },
        {
            xy: [0,5],
            color: Color.RGB.green
        }
    ]
    
    constructor({ channelMode }: Props) {
        super({ name: 'BAR 240-10 RGB', channelMode, channelSetup })
    }

    onActionButton(event: ButtonEvent, button: Button): void {
        console.log(`[${event}] {${this.name}} =>`, button)

        DMX.update(this.dmx)
    }
}

export default LedBarRGB
