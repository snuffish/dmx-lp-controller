import IBehaviour from "./IBehaviour"

interface ButtonBehaviour extends IBehaviour {
    onPressed(): void
    onRelease(): void
}

export default ButtonBehaviour
