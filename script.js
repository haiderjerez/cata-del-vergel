let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart');
    const totalPriceElement = document.getElementById('.cart');
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <span>${product.name} - $${product.price}</span>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;

        cartItemsContainer.appendChild(cartItem);
        totalPrice += product.price;
    });

    totalPriceElement.textContent = totalPrice.toLocaleString('es-CO');
}

function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    alert(`${productName} ha sido añadido al carrito!`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío.');
    } else {
        alert(`Total a pagar: $${cart.reduce((total, product) => total + product.price, 0).toLocaleString('es-CO')}`);
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }
}

document.addEventListener('DOMContentLoaded', updateCartDisplay);
