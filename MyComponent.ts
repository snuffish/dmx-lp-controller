import Emitter from "./src/Emitter"

class MyComponent {
    constructor() {
        Emitter.on('MyComponent', () => {})
        setTimeout(() => {
            Emitter.emit('play', {})
        }, 2000)
    }

    private sendEvent() {

    }
}

export default MyComponent