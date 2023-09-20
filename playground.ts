import MyComponent from './MyComponent'
import Emitter from './src/Emitter'

Emitter.on('play', () => {
    console.log("PLAYED CALLED!")
})

const comp = new MyComponent()


// const fixture = LedBarRGB({
//     channelMode: 3,
//     channelSetup
// })





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

// const LedBarRGB = ({ channelMode, channelSetup }: Props): IFixture => ({
//     name: 'BAR 240-10 RGB',
//     channelMode,
//     channels: channelSetup ? setupChannels(channelSetup) : channelDefault(3)
// })