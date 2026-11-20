let dog = 1
let stored
function title(text) {
    document.getElementById("title").innerHTML = text;
}
function newwin() {
    let dog = 1
    window.open("scam.html",dog,"width=1, height=1",)
    dog++
    console.log("hi")
}
function history() {
    let state = {name:"example", page: -1};
    let url = "page2.html";
    history.pushState(state, "", url);
}

function store(txt) {
    localStorage.setItem(txt,"hi")
}
function getstored(name){
    var stored = localStorage.getItem(name)
}
function numstored() {
    return localStorage.length;
}
function mainscript() {
   let num = 1;
    setInterval(() => {
        title(numstored());
        num++;
        store(num)
    }, 1);
}
