export function sum(a: number, b: number) {
    return a + b
}

export function multi(a: number, b: number) {
    return a * b
}

export function splitIntoWords(sentence: string) {
    const result = sentence.toLowerCase().trim().split(' ')
    return result
}
