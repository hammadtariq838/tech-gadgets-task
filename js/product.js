$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  const product = products.find(p => p.id === productId);

  if (product) {
    $('#productDetails').html(`
          <div class="row">
              <div class="col-md-6">
                  <img src="${product.imageUrl}" class="img-fluid product-image" alt="${product.name}">
              </div>
              <div class="col-md-6">
                  <h1>${product.name}</h1>
                  <p class="lead">${product.description}</p>
                  <h2 class="mt-4">$${product.price.toFixed(2)}</h2>
                  <form id="addToCartForm" class="mt-4">
                      <div class="form-group">
                          <label for="quantity">Quantity:</label>
                          <input type="number" class="form-control" id="quantity" value="1" min="1" max="10">
                      </div>
                      <button type="submit" class="btn btn-primary btn-lg">Add to Cart</button>
                  </form>
              </div>
          </div>
      `);

    $('#addToCartForm').on('submit', function (e) {
      e.preventDefault();
      const quantity = parseInt($('#quantity').val());
      addToCart(productId, quantity);
      updateCartBadge();
      alert(`Added ${quantity} ${product.name}(s) to cart`);
    });
  } else {
    $('#productDetails').html('<h1>Product Not Found</h1><p>Sorry, the product you\'re looking for doesn\'t exist.</p>');
  }
});