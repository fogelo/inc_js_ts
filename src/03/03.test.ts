import {addSkill, StudentType} from './03';

let student: StudentType
beforeEach(() => {
    student = {
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
})

test('skill should be added', () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, 'React')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].id).toBeDefined()
    expect(student.technologies[3].title).toBe('React')
})