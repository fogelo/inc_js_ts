import {CityType} from '../02/02';
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from './04';

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


//01. дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
//02. создайте в том же файле еще одну функцию, чтобы тесты прошли
test.skip('Houses should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Happy street')

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

//01. создайте в том же файле еще одну функцию, чтобы тесты прошли
test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)
    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('FIRE-STATION')
})











































