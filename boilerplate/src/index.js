
import {add, name} from './utilities'


console.log ("Hello")
console.log('index.js')
console.log(add(32,  20,1))
console.log(name)


const getDatat = (URL)=>{

  fetch(URL)
  .then(response => response.json())
  .then(json => console.log(json))
}


getDatat("https://jsonplaceholder.typicode.com/todos/1")