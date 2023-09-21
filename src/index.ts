import Emitter from './emitter'
import Launchpad from './launchpad'
import ButtonComponent from './launchpad/components/ButtonComponent'
import StopButtonComponent from './launchpad/components/StopButtonComponent'

const lp = Launchpad()
lp.clear()

const fixture = new ButtonComponent({
    xy: [0,8]
})

// const stopBtn = new StopButtonComponent()