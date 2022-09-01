let navbar = $(".navbar");
let header_text = $(".header_text");

$(window).scroll(function () {
  //   console.log($(".text-center").offset().top);
  let oTop = $(".text-center").offset().top;

  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
    header_text.addClass("sticky_2");
  } else {
    navbar.removeClass("sticky");
    header_text.removeClass("sticky_2");
  }
});
