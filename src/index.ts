import Emitter from './Emitter'
import Launchpad from './launchpad'
import ButtonComponent from './launchpad/components/ButtonComponent'

const lp = new Launchpad()

Emitter.once('lpReady', (device: string) => {
    console.log(`Connecting to ${device}`)

    const btn = new ButtonComponent([0,8])
    const btn2 = new ButtonComponent([1,8])
    const btn3 = new ButtonComponent([2,8])
    const btn4 = new ButtonComponent([3,8])
})
