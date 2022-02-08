/*сигнатура функции - это формальное описание типов аргументов и возвращаемого значения функции*/

import {CityType} from '../02/02';
import {addMoneyToBudget, repairHouse, toFireStaff} from './03';


let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {builtAt: 2012, repaired: false, address: {number: 100, street: {title: 'White street'}}},
            {builtAt: 2008, repaired: false, address: {number: 100, street: {title: 'Happy street'}}},
            {builtAt: 2020, repaired: false, address: {number: 101, street: {title: 'Happy street'}}},
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            },
        ],
        citizensNumber: 1000000
    }
})


//01. создайте в отдельном файле функцию, чтобы тесты прошли
test('budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
})

//01. тесты должны пройти
test('budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[1].budget).toBe(400000)

})

//01. создайте в том же файле еще одну функцию, чтобы тесты прошли
test('House should be repaired', () => {
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy()
})

//01. создайте в том же файле еще одну функцию, чтобы тесты прошли
test('staff should be increased', () => {
    toFireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})


