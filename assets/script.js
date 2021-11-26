function openTab(evt, tabType) {
    let content = document.getElementsByClassName("content");
        for (let i = 0 ; i < content.length; i++) {
        content[i].style.display = "none";
    }

    let tab = document.getElementById(tabType);

/*   for (let i = 0; i < tab.length; i++) {
    tab[i].className = tab[i].className.replace("active","");
}   */

    tab.style.display = "block";
/*     evt.currentTarget.className += "active";     */
}
