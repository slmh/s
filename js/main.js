//'use strict';

const search_modal = document.getElementById('search_modal'),
      menu_item_search_btn = document.getElementById('menu_item_search_btn'),
      search_input = document.getElementById('search_input'),
      menu_mobile_btn = document.getElementById('menu_mobile_btn'),
      menu_mobile = document.getElementById('menu_mobile'),
      header_top = document.querySelector('#header_top .wrapper'),
      html = document.getElementById('html'),
      scroll_top = document.getElementById('scroll_top'),
      teas_shop_benefits_img = document.querySelectorAll('.teas-shop__benefits-img'),
      product_single_minus = document.getElementById('product_single_minus'),
      product_single_plus = document.getElementById('product_single_plus'),
      product_single_count = document.getElementById('product_single_count'),
      product_single_quantity = document.getElementById('product_single_quantity');
let product_single_i = 1;

search_modal.addEventListener('click', (event) => {
   let target = event.target;

   if (target.matches('#search_btn_close')) {
      search_modal.classList.toggle('show');
   }
});

menu_item_search_btn.addEventListener('click', () => {
   search_modal.classList.toggle('show');
});

search_input.addEventListener('keydown', (event) => {
   if (event.keyCode === 13) {
      search_modal.classList.toggle('show');
   }
});

// Scroll top
window.addEventListener('scroll', () => {
   if (this.scrollY > header_top.offsetTop) {
      scroll_top.classList.add('show');
      header_top.classList.add('min-height');
   } else if (this.scrollY < menu_mobile.offsetTop) {
      scroll_top.classList.remove('show');
      header_top.classList.remove('min-height');
   }

   // tea-shop check rotated
   if (this.scrollY > 50) {
      teas_shop_benefits_img.forEach(elem => {
         elem.classList.add('rotate');
      });
   }
});

scroll_top.addEventListener('click', () => {
   html.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
   });
});
// *** Scroll top END

menu_mobile_btn.addEventListener('click', () => {
   menu_mobile_btn.classList.toggle('cross');
   menu_mobile.classList.toggle('show');
});

const footer_email = document.getElementById('footer_email'),
      footer_button = document.getElementById('footer_button'),
      footer_notice = document.getElementById('footer_notice'),
      footer_error_notice = document.getElementById('footer_error_notice');

footer_button.addEventListener('click', () => {
   footer_label.classList.remove('error');

   if (validateEmail(footer_email.value)) {
      setTimeout(() => {
         footer_email.style.display = 'none';
         footer_notice.style.display = 'block';
      }, 1000);
   } else {
      footer_label.classList.add('error');
      setTimeout(() => {
         footer_error_notice.style.display = 'block';
         setTimeout(() => {
            footer_error_notice.style.display = 'none';
         }, 3000);
      }, 0);
   }
});

const tea_blog_email = document.getElementById('tea_blog_email'),
      tea_blog_inbox_btn = document.getElementById('tea_blog_inbox_btn'),
      tea_blog_notice = document.getElementById('tea_blog_notice'),
      tea_blog_label = document.getElementById('tea_blog_label'),
      tea_blog_error_notice = document.getElementById('tea_blog_error_notice');

if (tea_blog_email) {
   tea_blog_inbox_btn.addEventListener('click', () => {
      tea_blog_label.classList.remove('error');

      if (validateEmail(tea_blog_email.value)) {
         setTimeout(() => {
            tea_blog_email.style.display = 'none';
            tea_blog_notice.style.display = 'block';
         }, 1000);
      } else {
         tea_blog_label.classList.add('error');
         setTimeout(() => {
            tea_blog_error_notice.style.display = 'block';
            setTimeout(() => {
               tea_blog_error_notice.style.display = 'none';
            }, 3000);
         }, 0);
      }
   });
}

const validateEmail = (email) => {
   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email);
}

if (product_single_quantity) {
   product_single_quantity.addEventListener('click', () => {
      product_single_quantity.classList.toggle('active');
   });
}

