// @ts-nocheck
// function callback(arg1,arg2,arg3) {
//     console.log(arguments)
// }

// const run = callback.bind(null, "ABC")

// console.log(run("1","D","DS"))




















// ;(async() => {
//     const getSerialPort = () => {
//         return 'COM3'
//     }

//     let dmx = new DMX()
//     const SERIAL_PORT = getSerialPort()

//     const DRIVER = new EnttecUSBDMXProDriver(SERIAL_PORT, { dmxSpeed: 40 })
//     const universe = await dmx.addUniverse('demo', DRIVER)

//     const server = new HttpServer({ dmx })
    
// })()


// Windows
// const DRIVER = new EnttecUSBDMXProDriver('COM3', { dmxSpeed: 40 })

// MAC
// const SERIAL_PORT = '/dev/cu.usbserial-A5065QFW'
// const SERIAL_PORT = 'COM3'
// const DRIVER = new EnttecUSBDMXProDriver(SERIAL_PORT, { dmxSpeed: 40 })
// let universe = await dmx.addUniverse('demo', DRIVER)

// universe.updateAll(0)

// new Animation()
// 	.add({
// 		4: 127
// 	}, 2000)
// 	.add({
// 		4: 180
// 	}, 2000)
// 	.runLoop(universe)

// universe.update({
// 	22: 77
// })

// new Animation()
// .add({
// 	22: 77
// }).run(universe)

// new Animation()
// .add({
// 	22: 77,
// 	24: 1
// }, 2000)
// .add({
// 	24: 255
// }, 2000)
// .runLoop(universe)

// new Animation()
// .add({
// 	4: 127
// }, 2000)
// .add({
// 	4: 180
// }, 2000)
// .runLoop(universe)

// export default async function handler(
// 	req: NextApiRequest,
// 	res: NextApiResponse
// ) {
// 	const json = JSON.parse(req.body)

// 	console.log("JSON => ", json)
// 	universe.update(json)

// 	res.status(200).json(true)
// }