export type UsersType = {
    [key: string]: { id: number, name: string }
}

export let users: UsersType = {
    '101': {id: 101, name: 'anton'},
    '1212': {id: 1212, name: 'dimych'},
    '2112323': {id: 2112323, name: 'valera'},
    '1': {id: 1, name: 'Katya'},
}


export let usersArray = [
    {id: 101, name: 'anton'},
    {id: 1212, name: 'dimych'},
    {id: 2112323, name: 'valera'},
    {id: 1, name: 'Katya'},
]

//? чтение свойст
//разница между users и usersArray в том как мы быстро сможем достать элемент из массива
//из users в данном случае мы берем как бы сразу из памяти по адресу
let anton = users['101']
let anton2 = usersArray.find(item => item.id === 101)

//? добавление свойств
//в ассоциативный массив (вот так он перезатрет если там уже такой был)
let user = {id: 100500, name: 'Igor'}
users[user.id] = user

//в обычный массив (а так добавит дубликат)
usersArray.push({id: 100500, name: 'Igor'})

//? удаление свойств
//из ассоциативного массива (моментально быстро)
delete users[user.id]

//из обычного массива (пробегаемся по массиву, а это долго)
usersArray.filter(u => u.id !== user.id)

//?перезатерание
users[user.id].name = 'viktor'