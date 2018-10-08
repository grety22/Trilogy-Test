$( document ).ready(function() {
    new WOW().init();
    // toggle accordion icon
    $(".card-header a").click(function(){
        $(this).find('.right').toggleClass('hideImg');
        $(this).find('.down').toggle();
    });
    // button CONTINUE
    $("#get-info-btn").click(function(){
        event.preventDefault();
        swal("Thanks Trilogy!", "Your information will be processed", "success");
    })
});
