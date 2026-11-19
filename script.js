let dog = 1
function title(text) {
    document.getElementById("title").innerHTML = text;
}
function newwin() {
    let dog = 1
    window.open("scam.html",dog,"width=1, height=1")
    dog++
    console.log("hi")
}
function history() {
    let state = {name:"example", page: -1};
    let url = "page2.html";
    history.pushState(state, "", url);
}