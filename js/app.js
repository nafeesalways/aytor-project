$(function () {
  let searchIcon = document.querySelector(".search_icon");
  let search = document.querySelector("#search");
  let cross = document.querySelector(".cross");
  let input = document.querySelector(".input");
  let mobileSearchIcon = document.querySelector(".mobile_search_icon");

  searchIcon.addEventListener("click", function () {
    search.classList.add("active");
    input.classList.add("increase_width");
  });

  mobileSearchIcon.addEventListener("click", function () {
    search.classList.add("active");
    input.classList.add("increase_width");
  });

  cross.addEventListener("click", function () {
    search.classList.remove("active");
    input.classList.remove("increase_width");
  });

  search.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) {
      search.classList.remove("active");
      input.classList.remove("increase_width");
    }
  });

  //   ADD POPUP
  let btnCross = document.querySelector(".btn_cross");
  let addPopup = document.querySelector("#add_popup");

  btnCross.addEventListener("click", function () {
    addPopup.classList.add("remove_popup");
  });

  window.addEventListener("load", function () {
    setTimeout(() => {
      addPopup.classList.add("new_popup");
    }, 5000);
  });

  // SLICK FOR BANNER

  $('.sliders').slick({
    autoplay:true,
    autoplaySpeed: 2000,
    arrows:false,
    dots:true,
    dotsClass: "container test"
  });


  //* Tooltip init
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );


  //* Product Slider
  $(".productSlider").slick({
    slidesToShow: 4,
    prevArrow: "#productLeftArrow",
    nextArrow: "#productRightArrow",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
      
      
    ],
  });


  //* Count Down Timer

   $(".timer").countdown("2023/12/29", function (event) {
    //  event.strftime("%w weeks %d days %H:%M:%S");
    $(".days").html(event.strftime("%d"));
    $(".hrs").html(event.strftime("%H"));
    $(".mins").html(event.strftime("%M"));
    $(".secs").html(event.strftime("%S"));

   });


});
