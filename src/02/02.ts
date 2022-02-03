/*
* Философия такая, что мы используем всегда const и когда ругается, что не может переопределить тогда меняйте на let
* */
export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}


export type governmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION' /*можно использовать само значение строки, это называется примитивный тип*/
    budget: number
    staffCount: number
    address: AddressType
}


export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<governmentBuildingsType>
    citizensNumber: number
}