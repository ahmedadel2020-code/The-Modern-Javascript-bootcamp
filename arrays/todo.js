const todos = [{
    Text: 'Html',
    completed: true
}, {
    Text: 'css',
    completed: true
}, {
    Text: 'javascript',
    completed: false
}, {
    Text: 'react js',
    completed: false
}, {
    Text: 'node js',
    completed: false
}]

// 1- convert the array to array of objects -> text, completed
// 2- create function to remove a todo by text value

const sortTodos = function(array) {
    array.sort(function(a, b) {
        if(!a.completed && b.completed) {
            return -1
        } else if(!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}


const deleteTodo = function(array, searchText) {
    const index = array.findIndex(function(array) {
        return array.Text === searchText;
    })
    if(index > -1) {
        array.splice(index, 1);
    }
  
}

const getThingsToDo = function(array) {
    return array.filter(function(status) {
        return !status.completed
        
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))
// deleteTodo(todos, 'Htmffl')
// console.log(todos);
