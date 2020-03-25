//set up a variable to store to-dos
var todos = ["Buy Ring Fit Switch Game"];
var input = prompt("What would you like to do?");
window.setTimeout(function() {
  // ask user for input until user types quit
  while(input!== "quit" ){
    //if input is "list", list all todos
    if (input=== "list"){
      printList();
    //if input is new, ask for a new todo
    } else if(input==="new"){
        addTodo();
    } else if(input==="delete"){
        deleteTodo();
    }
    // ask user for input again;
    input = prompt("What would you like to do?");
  }
  // if input is "quit", show the message "You have quit the app" and stop asking for input
  console.log("You have quit the app");
}, 500);

function printList(){
  console.log ("**********");
  todos.forEach(function(todo,i){
    console.log (i + "." + todo);
  });
  console.log ("**********");
}

function addTodo(){
  var newTodo = prompt("Enter a new todo");
  // add the new todo to the list
  todos.push(newTodo);
  console.log(newTodo + " added to the list");
}

function deleteTodo(){
  var index = prompt("Enter the index of todo you would like to delete");
  todos.splice(index, 1);
  console.log("Todo removed");
}

