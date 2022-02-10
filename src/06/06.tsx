/*?onClick={deleteUser} - как бы говорит привяжи эту штуку на клик
? Когда происходит событие, генерируется объект. Он называется event, обозначается обычно буквой 'e'. Этот объект содержит всю информацию о произошедшем событии. Нашим подписчикам этот объект нужен так мы хотим знать детали произошедшего события

?когда мы вешаем onclick на button например и передаем туда нашу функцию, когда по кнопке кликнут наша функция будет вызвана от имени этого элемента button (так this).

? Объекты это структура данных ключ - значение
*
* */

/*const callback = (): number => {
    alert('hey')
    return 12
}
window.setTimeout(callback, 1000)*/
import {MouseEvent} from 'react';

export const User = () => {

    function deleteUser(event: MouseEvent<HTMLButtonElement>) {

        alert(event.currentTarget.name)
        console.log(event.currentTarget)

    }

    function saveUser() {
        alert('user have been saved')
    }


    function changeInput() {
        console.log('input changed')
    }

    function focusLostHandler() {
        console.log('focus lost')
    }

    return (
        <div>
            Anton
            <button name={'delete'} onClick={deleteUser}>delete</button>
            <button name={'save'} onClick={saveUser}>save</button>

            <textarea onChange={changeInput}
                      onBlur={focusLostHandler}
            />
            <input type="text"/>
        </div>
    )
}