// Your code goes here
const bod = document.querySelector("body");
const navbar = document.querySelector("nav");
const aLinks = document.querySelectorAll("a");
const images = document.querySelectorAll("img");
const header = document.querySelector("header");
const divy = document.querySelectorAll(".text-content");
const bodChild = bod.children;
let isChanged = false;
// let hidden = true;

//sclae up the images on mouse enter
images.forEach(ele => {
  ele.addEventListener("mouseenter", () => {
    ele.style.transform = "scale(3)";
    ele.style.transition = "transform 1s";
  });
});

//sclae down images on mouse leave
images.forEach(ele => {
  ele.addEventListener("mouseleave", () => {
    ele.style.transform = "scale(1)";
    ele.style.transition = "transform 2.5s";
  });
});

//hide everything on load
window.addEventListener("load", event => {
  console.log("page is fully loaded");
  bod.style.visibility = "hidden";
});

//print stuff to console on whel scrool
window.addEventListener("scroll", () => {
  console.log("your scrooling look at you!");
});

//show everything on double click
window.addEventListener("dblclick", event => {
  bod.style.visibility = "visible";
});
//make Anchors bigger in nav bar on mouse over
aLinks.forEach(ele => {
  ele.addEventListener("mouseover", () => [(ele.style.fontSize = "2rem")]);
});

//make Anchors smaller in nav bar on mouse out
aLinks.forEach(ele => {
  ele.addEventListener("mouseout", () => {
    ele.style.fontSize = "0rem";
  });
});

//resize the font on resizeing
bod.addEventListener("resize", () => {
  bod.style.fontSize = "10rem";
});

//change the body color
bod.addEventListener("click", () => {
  if (isChanged) {
    bod.style.color = "black";
    bod.style.backgroundColor = "white";
    navbar.style.backgroundColor = "white";
    navbar.style.color = "black";
    header.style.backgroundColor = "white";
    isChanged = false;
  } else {
    bod.style.color = "white";
    bod.style.backgroundColor = "black";
    navbar.style.backgroundColor = "black";
    navbar.style.color = "white";
    header.style.backgroundColor = "black";
    isChanged = true;
  }
});

//click on the divs turns them red
divy.forEach(ele => {
  ele.addEventListener("click", event => {
    ele.style.backgroundColor = "red";
    event.stopPropagation();
  });
});

bod.addEventListener("keydown", () => {
  console.log("yep you pressed a button mmhhmm");
});
