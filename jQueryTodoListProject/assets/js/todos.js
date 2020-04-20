// check off specific Todos by clicking
$("li").click(function(){
  $(this).toggleClass("completed");
});

// click on X to delete toDo
$("span").click(function(event){
  // $(this).parent refers to the li
  $(this).parent().fadeOut(500, function(){
    // $(this) refers to the li. It's only removed after fade out happens
    $(this).remove();
  });
  // stop event bubbling
  event.stopPropagation();
});