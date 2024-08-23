document.getElementById('productForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener valores del formulario
    const name = document.getElementById('productName').value;
    const description = document.getElementById('productDescription').value;
    const price = document.getElementById('productPrice').value;
    const imageFile = document.getElementById('productImage').files[0];

    // Convertir la imagen a base64
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = function () {
        const imageUrl = reader.result;

        // Crear un objeto de producto
        const newProduct = {
            id: Date.now(),  // ID único basado en la fecha y hora actual
            name: name,
            description: description,
            price: price,
            imageUrl: imageUrl,
            quantity: 1 // Inicialmente, cada producto agregado al carrito tiene una cantidad de 1
        };

        // Guardar el producto en localStorage (para mostrar en index.html)
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));

        // Agregar el producto al carrito (simulación de cart.json)
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(newProduct);
        localStorage.setItem('cart', JSON.stringify(cart));

        // Redirigir al index.html
        window.location.href = 'index.html';
    };
});
