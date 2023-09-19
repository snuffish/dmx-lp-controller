import { ChannelSetup } from "./src/fixtures/Fixture"
import LedBarRGB from "./src/fixtures/LedBarRGB"


const channelSetup: ChannelSetup = {
    1: {
        universeChannel: 1,
        description: 'Red'
    },
    2: {
        universeChannel: 2,
        description: 'Green'
    },
    3: {
        universeChannel: 3,
        description: 'Blue'
    }
}


const fixture = LedBarRGB({
    channelSetup
})

console.log(fixture)


// const LedBarRGB: IFixture = {
//     name: 'BAR 240-10 RGB',
//     channels: channelDefault(3)
// }

// console.log(LedBarRGB)







// const map: Map<DmxChannel, Channel> = new Map([
//     [1, {
//         universeChannel: 1,
//         value: 0
//     }]
// ])
// // map.set(1, {
// //      universeChannel: 1,
// //      value: 0
// // })

// console.log(map)



// function setRGB() {
//     console.log("SET RGB!!!")
// }

// function clear() {
//     console.log("CLEAR!")
// }

// const settings = {
//     name: 'BAR 240-10 RGB'
// }


// const LedBarRGB = {
//     ...settings,
//     setRGB: setRGB.bind(settings)
// }

// function addFunc(base, funcToAdd) {
//     console.log(Object.getPrototypeOf(funcToAdd))
// }

// addFunc(LedBarRGB, clear)

// console.log(LedBarRGB)


// function greet() {
//     console.log(`Hello, ${this.name}!`);
// }

// const person = { name: 'John' };
// const greetPerson = greet.bind(person);
// greetPerson();




// const fixture = LedBarRGB({
//     channelMode: 3
// })
// console.log(fixture)

// interface IFixture {
//     [key: string]: number
// }

// class FixtureBase implements IFixture {
    

// }

// const obj = new FixtureBase()
// console.log(obj)

