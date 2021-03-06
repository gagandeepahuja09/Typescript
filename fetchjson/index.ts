import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// Interfaces are used in typescript to define the structure of the object.
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  // telling typescript that response.data is going to be one of the todos.
  // as soon as we write this, TS will show an error on the 3 variables ID, Title and finished indicating that it
  // does not exist on type Todo
  const todo = response.data as Todo

  const { id, title, completed } = todo
  
  // here while calling the function, we messed up the order.
  // so, in order to solve that, we will add type annotations to the function
  // it will tell, what variable types are we expecting 
  // argument to type boolean is not assignable to argument of type string
  logTodo(id, completed, title)
})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The todo with id : ${id}
    Has a title of : ${title}
    Is it completed? ${completed}
  `)
}

