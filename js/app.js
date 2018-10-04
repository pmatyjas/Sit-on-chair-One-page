document.addEventListener("DOMContentLoaded", function () {

    // Dropdown | Nav

    var navMenuList = document.querySelectorAll("nav .menu li");
    var dropdown = document.querySelectorAll("nav>.menu>li>ul");

    navMenuList.forEach(function (li) {
        li.addEventListener("mouseover", function () {
            if (li.children.length > 0) {
                dropdown.forEach(function (ul) {
                    if (li.contains(ul)) {
                        ul.style.display = "block";
                    }
                });
            }
        });

        li.addEventListener("mouseout", function () {
            if (li.children.length > 0) {
                dropdown.forEach(function (ul) {
                    if (li.contains(ul)) {
                        ul.style.display = "none";
                    }
                });
            }
        });
    });

    // Slider

    var next = document.querySelector("#next");
    var prev = document.querySelector("#prev");
    var slider = document.querySelectorAll(".image li");
    var index = 0;
    var array = [];

    for (var i = 0; i < slider.length; i++) {
        array.push(slider[i]);
    }

    array[0].classList.add("visible");

    next.addEventListener("click", function () {
        array[index].classList.remove("visible");
        index++;
        if (index > slider.length - 1) {
            index = 0;
        }
        array[index].classList.add("visible");
    });

    prev.addEventListener("click", function () {
        array[index].classList.remove("visible");
        index--;
        if (index < 0) {
            index = slider.length - 1;
        }
        array[index].classList.add("visible");
    });

    // Product title div disappear

    var productClair = document.querySelector(".product_clair");
    var productMargarita = document.querySelector(".product_margarita");
    var clairBox = document.querySelector(".product_clair>.product_title");
    var margaritaBox = document.querySelector(".product_margarita>.product_title");

    productClair.addEventListener("mouseover", function(){
        clairBox.classList.add('hide');
    });
    productClair.addEventListener("mouseout", function(){
        clairBox.classList.remove('hide');
    });
    productMargarita.addEventListener("mouseover", function(){
        margaritaBox.classList.add('hide');
    });
    productMargarita.addEventListener("mouseout", function(){
        margaritaBox.classList.remove('hide');
    });









});