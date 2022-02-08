/*
?чтобы интерпретатор не запутался, что у нас объект или тело функции когда мы не пишем return
?нужно дополнительно обрамить круглыми скобками

?когда мы вставляем функцию сразу в метод ее можно не типизировать, а если выносим и объявляем отдельно ее нужно типизировать
*/


import {governmentBuildingsType, HouseType} from '../02/02';

export const getStreetsTitlesOfGovernmentsBuildings = (governmentBuildings: Array<governmentBuildingsType>) => {
    return governmentBuildings.map(b => b.address.street.title)
}

export const getstreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
}