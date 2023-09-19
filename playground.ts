import LedBarRGB from "./src/fixtures/LedBarRGB"
import { IntRange } from "./src/types"

// const fixture = LedBarRGB({
//     channelMode: 3
// })
// console.log(fixture)

interface IFixture {
    [key: string]: number
}

class FixtureBase implements IFixture {
    

}

const obj = new FixtureBase()
console.log(obj)