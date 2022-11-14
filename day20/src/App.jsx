import './App.css';
import React, { useState } from "react";

const Todo = ( { todo, todos, setTodos } ) => {
    return (
        <div className="head">
            <h1 className="todo">{todo.food}</h1>

            <button onClick={() => {
                const newTodos = todos.filter( ( ele ) => ele !== todo );
                setTodos( newTodos )
            }}
            >
                delete
            </button>
            <h2> you have consumed {todo.cal} cals today </h2>
        </div>
    )
}

function App( props ) {
    const [todos, setTodos] = useState( [
        { food: "Pizza", cal: 56 },
        { food: "Burger", cal: 69 },
        { food: "Coke", cal: 500 },
        { food: "Browne", cal: 180 },
        { food: "Friend Rice", cal: 90 },
        { food: "Lassania", cal: 200 },
        { food: "Pani Puri", cal: 10 }
    ] );

    return (
        <div>
            <h1 className="class">Calorie Read Only</h1>
            <div className="App">
                {todos.map( ( todo, index ) => (
                    <Todo key={index} todo={todo} todos={todos} setTodos={setTodos} />
                ) )}
            </div>
        </div>
    );
}

export default App;