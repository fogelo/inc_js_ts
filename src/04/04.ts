import {CityType, governmentBuildingsType} from '../02/02';

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (governmentBuildings: Array<governmentBuildingsType>, count: number) => {
    return governmentBuildings.filter(b => b.staffCount > count)
}
