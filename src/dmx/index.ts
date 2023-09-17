import { DMX, EnttecUSBDMXProDriver } from 'dmx-ts'
import express from 'express'
import type { AppDMXProps } from '../types'

let dmx: any

const setupDMX = async (serialPort: string) => {
    const dmx = new DMX()
    const driver = new EnttecUSBDMXProDriver(serialPort, { dmxSpeed: 40 })
    const universe = await dmx.addUniverse('universe1', driver)

    console.log(`Attached DMX from Serial-Port => ${serialPort}`)

    const reset = () => universe.updateAll(0)

    return {
        driver, universe, reset
    }
}

const Application = async ({ serialPort, serverPort }: AppDMXProps) => {
    const server = express().use(express.json())
    dmx = await setupDMX(serialPort)

    server.listen(serverPort, () => console.log(`Listening on port => ${serverPort}`))

    server.get('/', (req, res) => {
        res.send("Running!")
    })

    server.post('/dmx/update', (req, res) => {
        const data = req.body
        console.log(data)
        dmx.universe.update(data)
        res.sendStatus(200)
    })

    server.get('/dmx/clear', (req, res) => {
        dmx.reset()
        res.sendStatus(200)
    })

    server.get('/dmx/animation', (req, res) => {
        res.sendStatus(500)
    })

    server.get('/dmx/strobe', (req, res) => {
        res.sendStatus(200)
    })
}

Application({
    serialPort: process.env.SERIAL_PORT || 'COM3',
    serverPort: (process.env.SERVER_PORT || 3000) as number
})




// const startAnimation = () => {
//     new Animation()
//         .add({
//             1: MATH.randomNumber(0, 255),
//             2: MATH.randomNumber(0, 255),
//             3: MATH.randomNumber(0, 255)
//         }, 500)
//         .add({
//             1: MATH.randomNumber(50, 90),
//             2: MATH.randomNumber(30, 40),
//             3: MATH.randomNumber(150,230)
//         }, 1000)
//         .add({
//             1: MATH.randomNumber(175),
//             2: MATH.randomNumber(100),
//             3: MATH.randomNumber(200)
//         }, 1000)
//         .runLoop(dmx.universe)

// }