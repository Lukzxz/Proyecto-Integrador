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
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const productContainer = button.closest(".item");
            const productName = productContainer.querySelector("h2").textContent;
            const productPrice = parseFloat(productContainer.querySelector(".price").textContent.slice(1));
            const cartTotalElement = document.querySelector(".total-pagar");
            const currentTotal = parseFloat(cartTotalElement.textContent.slice(1));
            const newTotal = currentTotal + productPrice;

            cartTotalElement.textContent = `$${newTotal}`;

            const cartProduct = document.createElement("div");
            cartProduct.classList.add("cart-product");
            cartProduct.innerHTML = `
                <div class="info-cart-product">
                    <span class="cantidad-producto-carrito">1</span>
                    <p class="titulo-producto-carrito">${productName}</p>
                    <span class="precio-producto-carrito">$${productPrice}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="icon-close">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            `;

            const containerCartProducts = document.querySelector('.container-cart-products');
            containerCartProducts.appendChild(cartProduct);
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

            addProductForm.reset();

            renderProducts();
        } else {
            alert("Por favor, completa todos los campos del formulario.");
        }
    });
});
