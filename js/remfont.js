window.onload = function () {
    setHtmlFontSize();
    showBody();
};

window.addEventListener("resize", function () {
    setHtmlFontSize();
});

function setHtmlFontSize(){
    var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var htmlDOM = document.getElementsByTagName("html")[0];
    htmlDOM.style.fontSize = htmlWidth / 10 + "px";
}

function showBody() {
    document.getElementsByTagName("body")[0].style.visibility = "visible";
}
