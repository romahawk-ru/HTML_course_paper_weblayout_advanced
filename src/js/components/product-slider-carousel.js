import $ from "jquery";
import "slick-carousel";

$(".product-slider__carousel").slick({
  dots: false,
  infinite: false,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
  ],
  prevArrow: `<button class="btn-reset slick-arrow slick-prev" tabindex="-1">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_663_1730)">
        <circle cx="16" cy="16" r="15" fill="#C998FB" stroke="#A65CF0" stroke-width="2"/>
        <path d="M14 11L19 16L14 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_663_1730">
          <rect width="32" height="32" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  </button>`,
  nextArrow: `<button class="btn-reset slick-arrow slick-next" tabindex="0">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_663_1729)">
        <circle cx="16" cy="16" r="15" fill="#C998FB" stroke="#A65CF0" stroke-width="2"/>
        <path d="M14 11L19 16L14 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_663_1729">
          <rect width="32" height="32" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  </button>`,
});


