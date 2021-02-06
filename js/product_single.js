'use strict';

// Arrows from product_single.html
product_single_plus.addEventListener('click', () => {
   product_single_i++;
   product_single_count.value = product_single_i;
});

product_single_minus.addEventListener('click', () => {
   if (product_single_i === 1) {
      product_single_i = 1;
      return;
   }
   product_single_i--;
   product_single_count.value = product_single_i;
});
// *** Arrows from product_single.html END