// @ts-nocheck
let btn1 = document.getElementsByTagName("button")[0];
let btn2 = document.getElementsByTagName("button")[1];
let image1 = document.getElementById("imgs1");
let image2 = document.getElementById("imgs2");
let image3 = document.getElementById("imgs3");
let image4 = document.getElementById("imgs4");
let arr = [image1, image2, image3, image4];
let index = 0
btn2.addEventListener("click", function () {

    arr.forEach(element => {
        element.classList.remove("active")
    });

    arr[index].classList.add("active");
    index = (index + 1) % arr.length;

});



