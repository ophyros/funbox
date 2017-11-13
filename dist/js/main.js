$('.product__card, .product__buy-link').on('mouseenter', function() {
  $(this).parents('.product').addClass('product_hover');
});

$('.product__card, .product__buy-link').on('mouseleave', function() {
  $(this).parents('.product').removeClass('product_hover');
});

$('.product__card, .product__buy-link').on('click', function(e) {
  e.preventDefault();
  var product = $(this).parents('.product');
  product.toggleClass('product_selected');
  product.removeClass('product_hover');
});
