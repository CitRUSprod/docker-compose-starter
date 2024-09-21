export function getInt(min: number, max: number) {
    const minInt = Math.ceil(min)
    const maxInt = Math.floor(max)

    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt
}
