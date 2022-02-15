import {UsersType} from './08';

let users: UsersType
beforeEach(() => {
    users = {
        '101': {id: 101, name: 'anton'},
        '1212': {id: 1212, name: 'dimych'},
        '2112323': {id: 2112323, name: 'valera'},
        '1': {id: 1, name: 'Katya'},
    }
})

test('should update corresponding user', () => {
    users['1'].name = 'Ekaterina'
    expect(users['1'].name).toBe('Ekaterina')
    //toEqual сравнивает по значениям
    expect(users['1']).toEqual({id: 1, name: 'Ekaterina'})
})
test('should delete corresponding user', () => {
    delete users['1']
    expect(users['1']).toBe(undefined)
})