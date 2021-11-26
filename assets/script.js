function openTab (evt, tabType) {
    var i, content, tab;
    content = document.getElementsByClassName("content");
    for (i = 0 < content.length; i++) {
        content[i].style.display ="none";
    }
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tablink.length; i++) {
        tab[i].className = tab[i].className.replace("active","");
    }
    document.getElementsByClassName(tabType).style.display = "block";
    evt.currentTarget.className += "active";
}