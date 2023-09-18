import { IntRange } from "../types"



interface ChannelMode {
    mode: number
    [key: number]: Control
}


interface Control {
    nr: IntRange<1,512>,
    value: IntRange<0, 255>,
    function: Function
}



// const mode = new Map()
// mode.add()

const data = {
    channelMode: 3,
    controls: [
        {
            channel: 1,
            value: 100
        }
    ]
}