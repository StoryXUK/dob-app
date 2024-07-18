function openGallery(evt, galleryName) {
    var i, gallery, tablinks;

    // Hide all galleries
    gallery = document.getElementsByClassName("gallery");
    for (i = 0; i < gallery.length; i++) {
        gallery[i].style.display = "none";
    }

    // Remove the active class from all tab links
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current gallery, and add an "active" class to the button that opened the gallery
    document.getElementById(galleryName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Open the first gallery by default
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-link").click();
});