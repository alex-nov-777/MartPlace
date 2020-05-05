$(function(){

   $('input, select').styler();

   $('.slider-one__inner').slick({
      dots: false,
      arrows: true,
      prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/chevron-left.png" alt=""></button>',
      nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/chevron-right.png" alt=""></button>',
   });

   $('.slider-products__inner').slick({
      dots: false,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      centerMode: false,
      prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/chevron-left.png" alt=""></button>',
      nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/chevron-right.png" alt=""></button>',
   });

   $(".rate-star").rateYo({
      // rating: 4.5,
      starWidth: "15px",
      readOnly: true,
      normalFill: "#ffffff",
      ratedFill: "#ffc000",
      starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path stroke="#ffc000" d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>',
   });

   $(".rate-star--products").rateYo({
      // rating: 4.5,
      starWidth: "12px",
      readOnly: true,
      normalFill: "#ffffff",
      ratedFill: "#ffc000",
      starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path stroke="#ffc000" d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>',
   });

   var mixer = mixitup('.products__inner-box');

});

