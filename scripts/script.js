var numBox = prompt("Enter a value between 16 to 32")

$(document).ready(function(){

  for (var i = 0; i < numBox*numBox; i++) {
    $(".container").append('<div class="grid"></div>')
  }
  $(".grid").css({
    'width':$('.container').width()/numBox,
    'height':$(".container").height()/numBox,
  })
  $(".grid").mouseenter(function(){
    $(this).css("background-color" , "rgb(131, 86, 32)")
  })
  $(".mybutton").click(function(){
      $(".grid").css("background-color" , "white")
  })
})
