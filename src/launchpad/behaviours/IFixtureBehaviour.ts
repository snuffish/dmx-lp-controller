import { UniverseData } from "dmx-ts"

interface IFixtureBehaviour {
    readonly fixtureName: string
    channels: []
    dmx: () => UniverseData
}

export default IFixtureBehaviour
