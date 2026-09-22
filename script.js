$(window).on('load', function() {
    img_gallery_init();
    hover_descriptors_init();
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

// Initialize hover description boxes/bubbles
function hover_descriptors_init() {
    let listings = $(".listings-entry > ul > li" ).has("ul");
    console.log(listings);
    listings.addClass("hover-listing");
    listings.append("▸")
    $(".listings-entry > ul > li > ul" ).addClass("hover-descriptor");
}