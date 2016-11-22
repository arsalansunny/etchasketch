var numBox = prompt("Enter a value between 16 to 32")

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

    $(".mybutton").click(function() {
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
})
