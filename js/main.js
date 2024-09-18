function updateCartBadge() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  $('#cartBadge').text(totalItems);
}

function updateCartModal() {
  const cartItems = $('#cartItems');
  cartItems.empty();

  if (cart.length === 0) {
    cartItems.append('<p>Your cart is empty.</p>');
    $('#checkoutBtn').prop('disabled', true);
  } else {
    cart.forEach(item => {
      cartItems.append(`
              <div class="card mb-3">
                  <div class="card-body">
                      <h5 class="card-title">${item.product.name}</h5>
                      <p class="card-text">
                          Price: $${item.product.price.toFixed(2)} x 
                          <input type="number" class="form-control d-inline-block w-25 quantity-input" 
                                 value="${item.quantity}" min="1" data-product-id="${item.product.id}">
                          = $${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      <button class="btn btn-danger btn-sm remove-item" data-product-id="${item.product.id}">Remove</button>
                  </div>
              </div>
          `);
    });
    $('#checkoutBtn').prop('disabled', false);
  }

  $('#cartTotal').text(getCartTotal().toFixed(2));
}

$(document).ready(function () {
  $('#cartLink').on('click', function (e) {
    e.preventDefault();
    updateCartModal();
    $('#cartModal').modal('show');
  });

  $(document).on('click', '.remove-item', function () {
    const productId = $(this).data('product-id');
    removeFromCart(productId);
    updateCartModal();
    updateCartBadge();
  });

  $(document).on('change', '.quantity-input', function () {
    const productId = $(this).data('product-id');
    const quantity = parseInt($(this).val());
    updateCartQuantity(productId, quantity);
    updateCartModal();
    updateCartBadge();
  });

  $('#checkoutBtn').on('click', function () {
    $('#cartModal').modal('hide');
    $('#checkoutModal').modal('show');
  });

  $('#checkoutForm').on('submit', function (e) {
    e.preventDefault();
    const name = $('#name').val();
    const email = $('#email').val();
    const address = $('#address').val();
    alert(`Thank you for your order, ${name}! Your items will be shipped to: ${address}\nWe'll send a confirmation email to: ${email}`);
    clearCart();
    updateCartBadge();
    $('#checkoutModal').modal('hide');
  });

  updateCartBadge();
});