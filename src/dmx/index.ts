import { DMX, EnttecUSBDMXProDriver } from "dmx-ts";
import { dmxEmitter } from "../emitter";

const DMXController = async (serialPort: string = 'COM3', dmxSpeed: number = 40) => {
    const dmx = new DMX()
    const driver = new EnttecUSBDMXProDriver(serialPort, { dmxSpeed })
    
    const universe = await dmx.addUniverse('universe1', driver)

    universe.updateAll(0)

    dmxEmitter
    .on('update', data => universe.update(data))
    .on('clear', () =>  universe.updateAll(0))
}

export default DMXController