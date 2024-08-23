document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('productList');

    let products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach(product => {
        const productContainer = document.createElement('div');
        productContainer.className = 'compras';

        const img = document.createElement('img');
        img.src = product.imageUrl;
        img.className = 'img-sell';

        const description = document.createElement('div');
        description.className = 'description';
        description.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Precio:</strong> $${product.price}</p>
            <button class="buy-button" onclick="addToCart(${product.id})">Comprar</button>
        `;

        productContainer.appendChild(img);
        productContainer.appendChild(description);

        productList.appendChild(productContainer);
    });
});

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let products = JSON.parse(localStorage.getItem('products')) || [];

    let product = products.find(p => p.id === productId);

    if (product) {
        let cartProduct = cart.find(p => p.id === productId);

        if (cartProduct) {
            cartProduct.quantity += 1;
        } else {
            cart.push({...product, quantity: 1});
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${product.name} se ha añadido al carrito.`);
    } else {
        alert("El producto no se encontró.");
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.getElementById('add-to-cart');

    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            const productData = JSON.parse(addToCartButton.getAttribute('data-product'));

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            cart.push(productData);

            localStorage.setItem('cart', JSON.stringify(cart));

            alert('Producto añadido al carrito!');
        });
    }
});

