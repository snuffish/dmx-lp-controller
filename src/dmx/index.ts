/**
 * Spawn an Express.JS Server and attach a DMX-Controller adapter through the SerialPort Interface.
 * 
 * Environment variables:
 *   - serialPort: The port the DMX-Controller is connected to.
 *   - serverPort:  The HTTP/TCP Port the server with Listen for incoming requests & connections.
 */

import express from 'express'
import { DMX, EnttecUSBDMXProDriver } from 'dmx-ts'
import type { AppDMXProps } from '../types'

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
    const dmx = await setupDMX(serialPort)

    server.listen(serverPort, () => console.log(`Listening on port => ${serverPort}`))

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
}

Application({
    serialPort: process.env.SERIAL_PORT || 'COM3',
    serverPort: (process.env.SERVER_PORT || 3000) as number
})

