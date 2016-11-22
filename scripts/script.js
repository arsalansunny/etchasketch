var numBox = prompt("Enter an even number from 16 till 64")

$(document).ready(function() {

    for (var i = 0; i < numBox * numBox; i++) {
        $(".container").append('<div class="grid"></div>')
    }

    $(".grid").css({
        'width': $('.container').width() / numBox,
        'height': $(".container").height() / numBox,
    })

    $(".grid").mouseenter(function() {
        $(this).css("background-color", "rgb(131, 86, 32)")
    })

    $("#resetbutton").click(function() {
        $(".grid").css("background-color", "white")
    })

    $(".tophead").hover(function() {
        $(this).css({
            'background-color': 'rgba(28, 175, 57, 1)',
            'color': '#fff'})
          }
        ,function() {
            $(this).css({
                'background-color': 'rgba(61, 172, 28, 0.77)',
                'color': '#000'  })
          })

    $("#eraser").click(function(){
      $(".grid").mouseenter(function(){
        $(this).css("background-color" , "#fff")
      })
    })

    $("#changeHex").click(function(){
      var newColor = prompt("Enter the name of color or its HEX value" , "Name of color or its HEX value including # goes here")
      $(".grid").mouseenter(function(){
        $(this).css("background-color" , newColor)
      })
    })
})
