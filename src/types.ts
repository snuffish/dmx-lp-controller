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