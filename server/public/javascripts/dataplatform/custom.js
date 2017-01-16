function getContent(evt, contentType) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(contentType).style.display = "block";
}
