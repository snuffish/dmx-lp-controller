import { UniverseData } from "dmx-ts"
import { IntRange } from "../types"
import { Channel, ConstructProps, DmxChannel } from "./Fixture"

// type ChannelMode = 3 | 5 | 8 | 14 | 24 | 26




type Props = ConstructProps<3>

type Funcs = {
    getDmx: () => string
}

type ReturnType = Props & {
    getDmx: Function,
    channels: Channel[]
} & Funcs


const LedBarRGB = ({
    name = 'BAR 240-10 RGB',
    channelMode,
    startChannel = 1
}: Props): ReturnType => {
    let universalChannel = startChannel
    let chn = 1
    let channels: Channel[] = Array.from({length: channelMode}).map(() => ({
        channel: chn++ as DmxChannel,
        universalChannel: universalChannel++ as DmxChannel,
        value: 0
    }))

    let fixture: ReturnType = {
        name,
        channelMode,
        channels,
        getDMX: () => "DS"        
    }

    return fixture
}

export default LedBarRGB