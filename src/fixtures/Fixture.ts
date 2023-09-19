import { IntRange } from "../types"

export type DmxChannel = IntRange<1, 513> | -1

export type Channel = {
    universeChannel: DmxChannel
    value?: IntRange<0, 256>,
    description?: string
}

export type ChannelSetup = {
    [key: number]: Channel
}

export interface IFixture {
    name: string
    channels: Map<number, Channel>
}

export const channelDefault = (channelMode: number): Map<number, Channel> => new Map(
    Array(channelMode).fill(0)
    .map((_, i) => i + 1)
    .map(chn => ([chn, {
        universeChannel: -1,
        value: 0
    }]))
)









// export type DmxChannel = IntRange<1, 513>
// export type ChannelRange = DmxChannel[]
// export type ChannelValue = IntRange<0, 256>

// export type Channel = {
//     channel: DmxChannel,
//     universalChannel: DmxChannel,
//     value: ChannelValue
// }

// export type ConstructProps<CM extends number> = {
//     channelMode: CM,
//     name?: string
//     startChannel?: DmxChannel
// }