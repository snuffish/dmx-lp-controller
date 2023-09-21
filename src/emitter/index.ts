import { UniverseData } from "dmx-ts"
import { ButtonIn, RgbColor } from "launchpad.js"
import { EventEmitter } from "tseep"
import BaseComponent from "../launchpad/components/BaseComponent"
import ButtonComponent, { ButtonEvent } from "../launchpad/components/ButtonComponent"
import { DMX } from "../utils"

export type Button = (ButtonIn & { event: ButtonEvent })

type KeyMap = {
    buttonPressed: (button: Button, event: ButtonEvent) => void
    addComponentToGrid: (component: BaseComponent) => void
    setButtonColor: (component: ButtonComponent, color: RgbColor) => void
    sendDMX: (data: UniverseData) => void
}

const Emitter = new EventEmitter<KeyMap>()

const addComponentToGrid = (component: BaseComponent) => {
    console.log("ADDDD!", component)
}

const sendDMX = (data: UniverseData) => {
    DMX.update(data)
}

Emitter.on('addComponentToGrid', addComponentToGrid)
    .on('sendDMX', sendDMX)


export default Emitter

