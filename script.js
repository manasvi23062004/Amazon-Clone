const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 }
  ];
  
  const cart = [];
  
  function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'col-md-4';
      productDiv.innerHTML = `
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">$${product.price}</p>
            <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        </div>
      `;
      productList.appendChild(productDiv);
    });
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} added to cart!`);
    displayCart();
  }
  
  function displayCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  window.onload = function() {
    displayProducts();
  };
  