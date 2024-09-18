$(document).ready(function () {
    const productList = $('#productList');

    products.forEach(product => {
        productList.append(`
          <div class="col-md-4 mb-4">
              <div class="card product-card">
                  <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                  <div class="card-body">
                      <h5 class="card-title">${product.name}</h5>
                      <p class="card-text">${product.description}</p>
                      <p class="card-text"><strong>$${product.price.toFixed(2)}</strong></p>
                      <a href="product.html?id=${product.id}" class="btn btn-primary">View Details</a>
                  </div>
              </div>
          </div>
      `);
    });
});