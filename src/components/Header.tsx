import { useState } from "react";

export function Header() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');
    const [isToggle, setIsToggle] = useState(false);
    const [users, useUsers] = useState(userData);

    function increment() {
        setCount(prev => prev + 1);
    }

    function toggleDisplay() {
        setIsToggle(prev => !prev);
    }

    const textBtn = isToggle ? 'скрыть' : 'показать';

    return (
        <header>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={toggleDisplay}>{textBtn}</button>
            {isToggle && (
                <div>
                    <ul>
                        {users.map((u, i) => (
                            <li key={u.id}>{u.name}</li>
                        ))}
                    </ul>
                    <Info text={"Всего на потоке людей"} count={allUsers}/>
                    <Info text={"Всего на потоке учителей"}count={admins}/>
                    <Info text={"Всего на потоке учеников"}count={students}/>
                </div>
            )}
    <div>
    <input
        value={username}
        onChange={event => setUsername(event.target.value)}
        type="text"
        placeholder="Введите имя"
    />
    <select>
        onChange={event => setCity(event.target.value)}
        value={city}
        <option value="spb">Санкт-Петербург</option>
        <option value="msc">Москва</option>
        <option value="ekb">Екатеринбург</option>
    </select>
    <h3>{username}</h3>
    <h3>Я живу в городе {showInfo()}</h3>
    </div>
        </header>
    );
}

