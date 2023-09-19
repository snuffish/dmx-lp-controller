import { IntRange } from "../types"

export type DmxChannel = IntRange<1, 513>
export type ChannelRange = DmxChannel[]
export type ChannelValue = IntRange<0, 256>

export type Channel = {
    channel: DmxChannel,
    universalChannel: DmxChannel,
    value: ChannelValue
}

export type ConstructProps<CM extends number> = {
    channelMode: CM,
    name?: string
    startChannel?: DmxChannel
}