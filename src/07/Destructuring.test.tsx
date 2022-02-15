import React from 'react';

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }> // в скобках здесь не объект, а тип
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }
}

//?тип для компоненты React.FC<PropsType>
export const ManComponents1: React.FC<PropsType> = (props) => {

    //это по факту получается дестркутуризация внутри деструктуризации
    const {title, man: {name}} = props

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {name}
        </div>
    </div>
}

//?можно ловить только те аргументы из пропсов, которые нам нужны в компоненте, то есть деструктурировать их сразу в скобках, в которых передаем параметры
export const ManComponents2: React.FC<PropsType> = ({title, man: {name}}) => {

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {name}
        </div>
    </div>
}


// остаточное присваивание, rest
export const ManComponents3: React.FC<PropsType> = ({title, man: {name}, ...props}) => {

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {name}
        </div>
    </div>
}