import { ButtonEvent } from './../launchpad/Grid';
import { Button, ILaunchpad } from "launchpad.js"
import { IntRange } from "../types"
import { UniverseData } from "dmx-ts"

export type DmxChannel = IntRange<1, 513> | -1

export type Channel = {
    universeChannel: DmxChannel
    value: IntRange<0, 256>,
    description?: string
}

export type ChannelControls = {
    [key: number]: Channel
}

type Props = {
    name: string
    channelMode: number
    channelSetup: ChannelControls
}

abstract class FixtureBase {
    // @ts-ignore
    private _lp: ILaunchpad
    private _name: string
    private _channelMode: number
    private _channels: ChannelControls
    
    constructor({ name, channelMode, channelSetup }: Props) {
        this._name = name
        this._channelMode = channelMode
        this._channels = channelSetup
    }

    private setupEvents() {
        this._lp.on('buttonDown', button => this.onActionButton(ButtonEvent.DOWN, button))
                .on('buttonUp', button => this.onActionButton(ButtonEvent.UP, button))
    }
    
    get name() { return this._name }
    get channelMode() { return this._channelMode }

    get dmx() {
        const data: UniverseData = {}
        for (const { universeChannel, value } of Object.values(this._channels)) {
            data[universeChannel] = value
        }

        console.log(this._channels)

        return data
    }

    set lp(lp: ILaunchpad) {
        this._lp = lp
        this.setupEvents()
    }

    abstract onActionButton(event: ButtonEvent, button: Button): void
}

export default FixtureBase
