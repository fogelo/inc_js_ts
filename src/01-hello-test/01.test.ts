import {multi, splitIntoWords, sum} from './01';

// объявили переменные с типом number
let a: number
let b: number
let c: number

//эта функция будет запускаться перед каждым тестом на случай если тест изменит наши глобальные переменные
beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})


test('sum should be correct', () => {

//данные для тестирования (их можно вынести за пределы test)
//     const a = 1
//     const b = 2
//     const c = 3

//получения результата выполнения функции
    const result1 = sum(a, b)
    const result2 = sum(b, c)

//сравнение результата выполнения функции с тем что должно быть

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test('multi should be correct', () => {

//данные для тестирования
    const a = 1
    const b = 2
    const c = 3

//получения результата выполнения функции
    const result1 = multi(a, b)
    const result2 = multi(b, c)

//сравнение результата выполнения функции с тем что должно быть

    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test('splitting into words should be correct', () => {

//данные для тестирования
    const sent1 = 'Hello my friend'
    const sent2 = 'JS - is the best language  '

//получения результата выполнения функции
    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)


//сравнение результата выполнения функции с тем что должно быть
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')

    expect(result2.length).toBe(6)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('-')
    expect(result2[2]).toBe('is')
    expect(result2[3]).toBe('the')
    expect(result2[4]).toBe('best')
    expect(result2[5]).toBe('language')
})