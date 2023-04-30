import burger from "./modules/burger";
import popup from "./modules/popup";
import tabs from "./modules/tabs";
import dots from "./modules/dots";
import headerSearch from "./modules/search";
import searchForm from "./modules/clearform";
burger();
popup();
tabs();
dots();
headerSearch();
searchForm();

// SlickSlider
$(document).ready(function(){
  $('.slider').slick({
    adaptiveHeight: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});