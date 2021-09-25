$(window).on('load', function() {
    img_gallery_init();
    food_descriptors_init();
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



// Initialize description boxes/bubbles for food listings
function food_descriptors_init() {
    let food_listings = $(".food-entry > ul > li" ).has("ul");
    food_listings.addClass("food-listing");
    food_listings.append("▸")
    $(".food-entry > ul > li > ul" ).addClass("food-descriptor");
}