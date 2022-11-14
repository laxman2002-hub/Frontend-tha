const input = document.querySelector('input');
const btn = document.querySelector('button');
const todolist = document.querySelector('.todolist')

// localStorage.setItem('push',[]);
var newtodos = localStorage.getItem('push')
todos =[]
if (newtodos){
todoss = newtodos.split('$,');

for (item of todoss){
    
    todos.push(JSON. parse(item.split('$')[0]))
    };
}

function loadTodo(){
    todos.map(todo =>{
        const newtodo = document.createElement('div');
    newtodo.innerHTML = todo.title ;
    if (todo.title){   
    const done = document.createElement('button');
    const del = document.createElement('button');
    done.classList.add('do')
    del.classList.add('del')
    done.innerHTML = '✔ done';
    del.innerHTML = 'X';
    if (todo.done){
        done.classList.add('done')
        newtodo.classList.add('done');
    }
    newtodo.appendChild(done);
    newtodo.appendChild(del);
    if (! todo.delete) {
    todolist.appendChild(newtodo)
    }
    }
    })

}

loadTodo()

btn.addEventListener('click',()=>{
    const newtodo = document.createElement('div');
    const done = document.createElement('button');
    const del = document.createElement('button');
    done.innerHTML = '✔ done';
    del.innerHTML = 'X';
    done.classList.add('do')
    del.classList.add('del')
    newtodo.innerHTML = input.value;
    if (newtodo.innerHTML){
    newtodo.appendChild(done);
    newtodo.appendChild(del);
    todolist.appendChild(newtodo)
    todos.push({title:input.value , done:false , delete:false})
    myfun()
    
    input.value = ""
    
    
    }
    fun();
    fun1();
   
})  

function myfun(){
    push = []
    for (item of todos){
        push.push(JSON.stringify(item)+'$');
        
    }
    
    localStorage.setItem('push',push);
    
}

fun()

function fun(){
var flag = false;
for (let i=0; i<todolist.children.length ; i++){
    todolist.children[i].children[1].addEventListener('click',()=>{
        if(todolist.children[i] && (!flag)) {
            todos[i].delete = true;
            todolist.children[i].classList.add('hidden');
            myfun()
            flag = true;
        
        }
        
    })

}
if (flag){
todolist.children[i].remove()    
fun()
}
}

fun1()

function fun1(){
var flag = false;
for (let i=0; i<todolist.children.length ; i++){
    todolist.children[i].children[0].addEventListener('click',()=>{
        if(todolist.children[i] && (!flag)) {
            todos[i].done = true;
            todolist.children[i].classList.add('done');
            todolist.children[i].children[0].classList.add('done');

            myfun()
            flag = true;
        
        }
        
    })

}
if (flag){    
fun1()
}
}
    
