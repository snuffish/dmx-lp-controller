import { Animation, DMX, EnttecUSBDMXProDriver } from 'dmx-ts'
import express from 'express'
import type { AppDMXProps } from '../types'


const setupDMX = async (serialPort: string) => {
    const dmx = new DMX()
    const driver = new EnttecUSBDMXProDriver(serialPort, { dmxSpeed: 40 })
    const universe = await dmx.addUniverse('universe1', driver)

    console.log(`Attached DMX from Serial-Port => ${serialPort}`)

    const reset = () => universe.updateAll(0)

    // new Animation()
    // .add({
    //     1: 255,
    //     2: 255,
    //     3: 255
    // }, 500)
    // .add({
    //     1: 0,
    //     2: 0,
    //     3: 0
    // }, 500).runLoop(universe, reset)

    return {
        driver, universe, reset
    }
}

const Application = async ({ serialPort, serverPort }: AppDMXProps) => {
    const server = express().use(express.json())
    const dmx = await setupDMX(serialPort)

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

    server.get('/dmx/brightness/down', (req, res) => {
        let r = dmx.universe.get(1) * .5
        let g = dmx.universe.get(2) * .5
        let b = dmx.universe.get(3) * .5

        dmx.universe.update({
            1: r,
            2: g,
            3: b
        })

        res.sendStatus(200)
    })

    server.get('/dmx/brightness/up', (req, res) => {
        let r = dmx.universe.get(1) * 2
        let g = dmx.universe.get(2) * 2
        let b = dmx.universe.get(3) * 2

        dmx.universe.update({
            1: r,
            2: g,
            3: b
        })

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

// class DMX {

// }

// export default DMX