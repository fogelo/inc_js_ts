import {governmentBuildingsType, HouseType} from '../02/02';

type CityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: CityType
}

type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

const student = {
    id: 1,
    name: 'Anton',
    age: 32,
    isActive: false,
    address: {
        streetTitle: 'Butlerova 2',
        city: {
            title: 'Moscow',
            countryTitle: 'Russia'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 1,
            title: 'JS'
        },
    ]
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill,
    })
}

export const addMoneyToBudget = (building: governmentBuildingsType, budget: number) => {
    building.budget += budget
}


export const repairHouse = (house: HouseType) => {
    house.repaired = true
}


export const toFireStaff = (building: governmentBuildingsType, number: number) => {
    building.staffCount -= number
}