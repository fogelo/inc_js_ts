import {CityType} from '../02/02';
import {getStreetsTitlesOfGovernmentsBuildings, getstreetsTitlesOfHouses} from './05';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                builtAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {title: 'White street'}
                }
            },
            {
                id: 2,
                builtAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {title: 'Happy street'}
                }
            },
            {
                id: 3,
                builtAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {title: 'Happy street'}
                }
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                address: {street: {title: 'Central Str'}, number: 12},
                budget: 500000, staffCount: 200
            },
            {
                type: 'FIRE-STATION',
                address: {street: {title: 'South Str'}, number: 12},
                budget: 500000, staffCount: 1000
            },
        ],
        citizensNumber: 100000
    }
})

//01. создайте в том же файле еще одну функцию, чтобы тесты прошли
test('list of streets titles of governments buildings', () => {
    let streets = getStreetsTitlesOfGovernmentsBuildings(city.governmentBuildings)
    expect(streets.length).toBe(2)
    expect(streets[0]).toBe('Central Str')
    expect(streets[1]).toBe('South Str')
})

//01. создайте в том же файле еще одну функцию, чтобы тесты прошли
test('list of streets titles', () => {
    let streets = getstreetsTitlesOfHouses(city.houses)
    expect(streets.length).toBe(3)
    expect(streets[0]).toBe('White street')
    expect(streets[1]).toBe('Happy street')
    expect(streets[2]).toBe('Happy street')
})
