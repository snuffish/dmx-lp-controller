import { UniverseData } from "dmx-ts"

interface IFixtureBehaviour {
    fixtureName: string
    channels: []
    dmx: () => UniverseData
}

export default IFixtureBehaviour
