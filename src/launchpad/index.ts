import {  ILaunchpad, RgbColor, autoDetect, waitForReady } from 'launchpad.js'
import Emitter from '../emitter'
import { colorFromRGB } from 'launchpad.js/dist/colorHelpers'
import BaseComponent from './components/BaseComponent'
import { DMX } from '../utils'
import { ButtonEvent } from './components/ButtonComponent'

const Launchpad = () => {
    const lp: ILaunchpad = autoDetect()

    const clear = () => lp.allOff()

    lp.once('ready', (device: string) => {
        console.log(`Connected to ${device}`)
        DMX.clear()
    })
    lp.on('buttonDown', (button: any) => Emitter.emit('buttonPressed', button, ButtonEvent.DOWN))
    .on('buttonUp', (button: any) => Emitter.emit('buttonPressed', button, ButtonEvent.UP))

    const setButtonColor = (component: BaseComponent, color: RgbColor) => {
        lp.setButtonColor(component.position, colorFromRGB(color))
    }

   
    Emitter.on('setButtonColor', setButtonColor)

    return {
        clear
    }
}

export default Launchpad
