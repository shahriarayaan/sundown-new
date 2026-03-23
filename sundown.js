var elemC = document.querySelector("#elems");
var fixed = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", function(){
    fixed.style.display="block"
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display="none"
})

var elem1 = document.querySelector("#elem1")
elem1.addEventListener("mouseenter", function(){
    var image = elem1.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})
var elem11 = document.querySelector("#elem1")
elem11.addEventListener("mouseleave", function(){
    fixed.style.backgroundImage = "none"
})
var elem2 = document.querySelector("#elem2")
elem2.addEventListener("mouseenter", function(){
    var image = elem2.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})
var elem22 = document.querySelector("#elem2")
elem22.addEventListener("mouseleave", function(){
    fixed.style.backgroundImage = "none"
})

var elem3 = document.querySelector("#elem3")
elem3.addEventListener("mouseenter", function(){
    var image = elem3.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})
var elem33 = document.querySelector("#elem3")
elem33.addEventListener("mouseleave", function(){
    fixed.style.backgroundImage = "none"
})

var elem4 = document.querySelector("#elem4")
elem4.addEventListener("mouseenter", function(){
    var image = elem4.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})
var elem44 = document.querySelector("#elem4")
elem44.addEventListener("mouseleave", function(){
    fixed.style.backgroundImage = "none"
})

var elem5 = document.querySelector("#elem5")
elem5.addEventListener("mouseenter", function(){
    var image = elem5.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})
var elem55 = document.querySelector("#elem5")
elem55.addEventListener("mouseleave", function(){
    fixed.style.backgroundImage = "none"
})

var elem6 = document.querySelector("#elem6")
elem6.addEventListener("mouseenter", function(){
    var image = elem6.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})
var elem66 = document.querySelector("#elem6")
elem66.addEventListener("mouseleave", function(){
    fixed.style.backgroundImage = "none"
})

var elem7 = document.querySelector("#elem7")
elem7.addEventListener("mouseenter", function(){
    var image = elem7.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})
var elem77 = document.querySelector("#elem7")
elem77.addEventListener("mouseleave", function(){
    fixed.style.backgroundImage = "none"
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var loader = document.querySelector("#loader");
setTimeout(function(){
    loader.style.top = "-100%"
},4500)