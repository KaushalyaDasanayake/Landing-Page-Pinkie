// Select The Elements
var toggle_btn;
var big_wrapper;
var hanburger_menu;

function declare(){
    toggle_btn = document.querySelector(".toggle-btn");
    big_wrapper = document.querySelector(".big-wrapper");
    hanburger_menu = document.querySelector(".hanburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation(){
    // alert("Hello");
    // Clone the wrapper 
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    if(dark){
        clone.classList.remove("light");
        clone.classList.add("dark");
    }
    else{
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);

    document.body.classList.add("stop-scrolling");

    clone.addEventListener("animationend",() => {
    //    console.log("hello");
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    //Reset variables 
    declare();
    events();
    });
}

function events(){
    toggle_btn.addEventListener("click", toggleAnimation);
    hanburger_menu.addEventListener("click", () => {
        big_wrapper.classList.toggle("active");
    });
}

events();


