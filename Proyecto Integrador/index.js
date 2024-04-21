const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const items = document.querySelectorAll(".item");

    searchInput.addEventListener("input", function () {
        const query = this.value.trim().toLowerCase();

        items.forEach(function (item) {
            const title = item.querySelector("h2").textContent.toLowerCase();
            const isVisible = title.includes(query);

            if (isVisible) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const products = [

    ];

    function renderProducts() {
        const container = document.querySelector(".container-items");

        products.forEach(function (product) {
            const item = document.createElement("div");
            item.classList.add("item");

            item.innerHTML = `
                <figure>
                    <img src="${product.image}" alt="${product.name}" />
                </figure>
                <div class="info-product">
                    <h2>${product.name}</h2>
                    <p class="price">$${product.price}</p>
                    <button>Añadir al carrito</button>
                </div>
            `;

            container.appendChild(item);
        });
    }
    
    const addProductForm = document.getElementById("add-product-form");

    addProductForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const productName = document.getElementById("product-name").value;
        const productPrice = parseFloat(document.getElementById("product-price").value);
        const productImage = document.getElementById("product-image").value;

        if (productName && !isNaN(productPrice) && productImage) {
            const newProduct = {
                name: productName,
                price: productPrice,
                image: productImage
            };

            products.push(newProduct);

            // Limpiar el formulario
            addProductForm.reset();

            // Volver a renderizar los productos
            renderProducts();
        } else {
            alert("Por favor, completa todos los campos del formulario.");
        }
    });
});