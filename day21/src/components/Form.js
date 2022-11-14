import { useState , useEffect} from "react";


var arr = [{name:'Pizza',cal:20}] ;


const Form =() =>{
    const [todos ,setTodos] = useState(arr);
    const [type,setType] = useState('');
    const [calory , setCalory] = useState('')
   
    const Add =(event) =>{
        if (type && calory != ""){
        arr.push({name:type,cal:calory});
        setType('');
        setCalory('')
        setTodos(arr)
        }
        else{
            if (!type){
                alert("please enter a food Name");
            }
            else {
                alert('please enter some calory of food');
            }
        }
        
      
        console.log(arr);


    }

    const Edit = (food, todos, setTodos , index) => {
        console.log("laxman sinmgh saini");
        
        return(
            <div>
            <h1>Laxman Singh Saini</h1>
            <input type="text" value={food.name} name="type" onChange={e=>setType(e.target.value)}/>
    
            <input type="number" value={food.cal} name="calory" onChange={e=>setCalory(e.target.value)}/>
            </div>
        )
    
    }

    const Todo = ( { food, todos, setTodos , index} ) => {
        return (
            <div className="head">
                <h1 >{food.name}</h1>
                <h2> you have consumed {food.cal} cals today </h2>
                <button onClick={() => {
                    const newTodos = todos.filter((ele,i) => i != index);
               setTodos(newTodos)
                }}
                >
                    delete
                </button>
                   
                <button onClick={e=>Edit(food , todos, setTodos , index)               
                    
                }
                >
                    Edit
                </button>
    
            </div>
        )
    }

    return (
        <div>
        
        <h1>Create Food List !! </h1>
   
        <input type="text" placeholder="Item name" value={type} name="type" onChange={e=>setType(e.target.value)}/>

        <input type="number" placeholder="Calorie amount" value={calory} name="calory" onChange={e=>setCalory(e.target.value)}/>

        

        <button onClick={e=>Add(e)}>Add</button> <br/>
        <div className="App">
                {todos.map( ( food, index ) => (
                    <Todo key={index} food={food}  index={index} todos={todos} setTodos={setTodos}/>
                ) )}
            </div>

        </div>
    )
}

export default Form ;