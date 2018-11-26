$(document).ready(function() {

    /*  When a colored panel is clicked, all panels vanish.*/
    /*
    $(".theButton").click(function() {
        $("#panel .container").siblings().hide();
    });*/


    /* When a colored panel is clicked, just that panel disappears.
    $(".theButton").click(function(){
        $(this).hide();
    }); */

    /*When a panel is clicked, all siblings fade to 40% opacity.*/
    $(".theButton").click(function() {
        $("#panel .container").siblings().fadeTo("slow", 0.4)
    });
    /*When reset is clicked, all panels revert to full opacity. */
    $(".superButton").click(function() {
        $("#panel .container").fadeTo("slow", 1);
    });

    /*When the mouse hovers over a panel, that panel turns black.*/
    $(".theButton").mouseenter(function() {
        $(this).addClass("makeBlack");
        $(".makeBlack").css("background-color", "black");
    });


    /*When the mouse moves away, the panel reverts back to its previous colour.*/
    $(".theButton").mouseout(function() {
        $(this).removeClass("makeBlack");
    });
    
    
    /*--------------------challenge VIII----------*/

    $(".theButton").click(function() {
        var colortext = $(this).css("background-color");
        $(".superButton").text(colortext);
    });
   

});
