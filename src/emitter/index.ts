import { UniverseData } from "dmx-ts"
import { ButtonIn, RgbColor } from "launchpad.js"
import { DefaultEventMap, EventEmitter } from "tseep"
import BaseComponent from "../launchpad/components/BaseComponent"
import ButtonComponent, { ButtonEvent } from "../launchpad/components/ButtonComponent"

const createEmitter = <T extends DefaultEventMap>() => new EventEmitter<T>()

export type Button = (ButtonIn & { event: ButtonEvent })

const lpEmitter = createEmitter<{
    buttonPressed: (button: Button, event: ButtonEvent) => void
    addComponentToGrid: (component: BaseComponent) => void
    setButtonColor: (component: ButtonComponent, color: RgbColor) => void
}>()

const dmxEmitter = createEmitter<{
    sendDMX: (data: UniverseData) => void
}>()

export {
    lpEmitter,
    dmxEmitter
}
