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

  const { ID, Title, finished } = todo

  console.log(`
    The todo with ID : ${ID}
    Has a title of : ${Title}
    Is it finished? ${finished}
  `)
})

