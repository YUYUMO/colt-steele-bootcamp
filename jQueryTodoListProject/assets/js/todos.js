// check off specific Todos by clicking
// on is used for future and existing elements. not all li exists when page loads, thats why we use ul and add li as a second argument
$("ul").on('click','li',function(){
  $(this).toggleClass("completed");
});

// click on X to delete toDo
// not all span exists when page loads, thats why we use ul and add span as a second argument
$("ul").on('click','span',function(event){
  // $(this).parent refers to the li
  $(this).parent().fadeOut(500, function(){
    // $(this) refers to the li. It's only removed after fade out happens
    $(this).remove();
  });
  // stop event bubbling
  event.stopPropagation();
});

// add a new todo
$("input[type='text']").keypress(function(event){
  // if we hit enter
  if(event.which === 13){
    // grabbing new todo text from input
    var todoText = ($(this).val());
    // clear the input field 
    $(this).val("");
    // add a new li to the end of ul
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
  }
});

// toggle input field when + is pressed
$(".fa-plus").click(function(event){
  $("input[type='text']").fadeToggle();
  event.stopPropagation();
});