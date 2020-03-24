//set up a variable to store to-dos
var todos = ["Buy a new laptop"];
var input = prompt("What would you like to do?");
window.setTimeout(function() {
  // ask user for input until user types quit
  while(input!== "quit" ){
    //if input is "list", list all todos
    if (input=== "list"){
      console.log(todos);
    //if input is new, ask for a new todo
    } else if(input==="new"){
        var newTodo = prompt("Enter a new todo");
      // add the new todo to the list
        todos.push(newTodo);
    }
    // ask user for input again;
    input = prompt("What would you like to do?");
  }
  // if input is "quit", show the message "You have quit the app" and stop asking for input
  console.log("You have quit the app");
}, 500);



