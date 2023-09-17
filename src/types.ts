import { RgbColor } from "launchpad.js"

export enum ButtonEvent {
    DOWN = 'DOWN',
    UP = 'UP'
}

export type AppLaunchpadProps = {
    debug: boolean
}

export type AppDMXProps = {
    serialPort: string
    serverPort: number
}

export type GridButton = { xy: [number, number], rgb: RgbColor }

export type IGrid = Set<GridButton>