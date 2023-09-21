import Launchpad from './launchpad'
import ButtonComponent from './launchpad/components/ButtonComponent'
import StopButtonComponent from './launchpad/components/StopButtonComponent'

const lp = Launchpad()
lp.clear()
const btn = new ButtonComponent([0,8])
new ButtonComponent([1,8])
new ButtonComponent([2,8])
new ButtonComponent([3,8])
new ButtonComponent([4,8])
new ButtonComponent([5,8])
new ButtonComponent([6,8])
new ButtonComponent([7,8])

const stopBtn = new StopButtonComponent([8,8])