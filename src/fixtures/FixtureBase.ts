// @ts-nocheck
import { ButtonEvent } from './../launchpad/Grid';
import { Button, ILaunchpad } from "launchpad.js"
import { IntRange } from "../types"
import { UniverseData } from "dmx-ts"
import { colorFromRGB } from 'launchpad.js/dist/colorHelpers';
import { find, isEqual } from 'lodash';

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

abstract class FixtureBase<GBT> {
    private _lp: ILaunchpad
    private _name: string
    private _channelMode: number
    private _channels: ChannelControls
    private _gridButtons: Array<GBT>
    
    constructor({ name, channelMode, channelSetup }: Props) {
        this._name = name
        this._channelMode = channelMode
        this._channels = channelSetup
        this._gridButtons = this.gridButtonSetup()

        // console.log(findIndex(this._gridButtons, {xy: [3,5]}))
    }

    private setupEvents() {
        // this._lp.on('buttonDown', button => button.)
        const found = this._gridButtons.find(item => isEqual(item.xy, [0,7]))

        // this._lp.on('buttonDown', button => find(this._gridButtons, {xy: button.xy}) && this.onActionButton(ButtonEvent.DOWN, button))
        this._lp.on('buttonDown', button => {
            const gridButton = find(this._gridButtons, {xy: button.xy})
            if (gridButton)
                this.onActionButton(ButtonEvent.DOWN, button, gridButton)
        })


        // this._lp.on('buttonUp', button => find(this._gridButtons, {xy: button.xy}) !== -1 && this.onActionButton(ButtonEvent.UP, button))

        this._gridButtons.forEach(({xy, color}: any) => this._lp.setButtonColor(xy, colorFromRGB(color )))
    }
    
    get name() { return this._name }
    get channelMode() { return this._channelMode }

    get dmx() {
        const data: UniverseData = {}
        for (const { universeChannel, value } of Object.values(this._channels)) {
            data[universeChannel] = value
        }

        return data
    }

    set lp(lp: ILaunchpad) {
        this._lp = lp
        this.setupEvents()
    }

    abstract onActionButton(event: ButtonEvent, button: Button, gridButton: GBT): void
    abstract gridButtonSetup(): Array<GBT>
}

export default FixtureBase
