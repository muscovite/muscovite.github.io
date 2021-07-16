$(window).on('load', function() {
    img_gallery_init();
});

// Initialize duck image gallery
function img_gallery_init() {
    $(".thumbnail").click(function(event) {
        $("#modal-img").attr("src", this.dataset.largeUrl);
        $(".modal").addClass("is-active");
        // prevent navigation
        return false;
    });
    
    $(".modal-close").click(function() {
       $(".modal").removeClass("is-active");
    });

    $(".modal-background").click(function() {
        $(".modal").removeClass("is-active");
     });
}