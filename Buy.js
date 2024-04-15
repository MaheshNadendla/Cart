// document.addEventListener("DOMContentLoaded", function() {
    // Sample data for demonstration
    const products = [
        { id: 1, name: "Product 1", price: 10, image: "product1.jpg" },
        { id: 2, name: "Product 2", price: 15, image: "product2.jpg" },
        { id: 3, name: "Product 3", price: 20, image: "product3.jpg" }
    ];

    // Function to render product catalog
    function renderCatalog() {
        const productListDiv = document.getElementById("cart-items");

        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("cart-item");
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="cart-item-info">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productListDiv.appendChild(productDiv);
        });
    }

    // Function to add item to cart

    // Initial rendering of product catalog
    renderCatalog();
// });
// function addToCart(productId) {
//     // Implement your addToCart logic here
//     console.log("Product added to cart with ID:", productId);
// }




// Sample data for demonstration
const products1 = [
    { id: 1, name: "Product 1", price: 10, image: "product1.jpg" },
    { id: 2, name: "Product 2", price: 15, image: "product2.jpg" },
    { id: 3, name: "Product 3", price: 20, image: "product3.jpg" }
];

let cartItems = [];

// Function to render cart items
// Function to render cart items

function renderCart() {
    const cartItemsDiv = document.getElementById("cart-items1");
    cartItemsDiv.innerHTML = ""; // Clear previous content
    let totalPrice = 0;

    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];

        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item1");

        const cartItemInfoDiv = document.createElement("div");
        cartItemInfoDiv.classList.add("cart-item-info");
        const itemName = document.createElement("h3");
        itemName.textContent = item.name;
        const itemPrice = document.createElement("p");
        itemPrice.textContent = `$${item.price.toFixed(2)}`;
        const itemQuantity = document.createElement("p");
        itemQuantity.textContent = `Quantity: ${item.quantity}`;
        cartItemInfoDiv.appendChild(itemName);
        cartItemInfoDiv.appendChild(itemPrice);
        cartItemInfoDiv.appendChild(itemQuantity);

        const cartItemActionsDiv = document.createElement("div");
        cartItemActionsDiv.classList.add("cart-item-actions");
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            removeFromCart(item.id);
        });
        cartItemActionsDiv.appendChild(removeButton);

        cartItemDiv.appendChild(cartItemInfoDiv);
        cartItemDiv.appendChild(cartItemActionsDiv);

        cartItemsDiv.appendChild(cartItemDiv);

        totalPrice += item.price * item.quantity;
    }

    document.getElementById("total-price1").textContent = `$${totalPrice.toFixed(2)}`;
}



// Function to add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cartItems.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ id: productId, name: product.name, price: product.price, quantity: 1 });
    }

    renderCart();
}

// Function to remove item from cart
function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    renderCart();
}

// Function to proceed to checkout (dummy function)
function checkout() {
    alert("Order Placed");
}

// Initial rendering of cart
renderCart();


// function ShopingCart()
// {
//     document.querySelector('.container').innerHTML=`
    
    

//     `;
// }



// Example: Adding initial items to the cart





function ShowCart()
{
    document.querySelector('.Main').style=`
    
    display:block;
    `;

    document.querySelector('.container').style=`
    
    display:none;

    `;

}


function ShowMenu()
{
    document.querySelector('.Main').style=`
    
    display:none;
    `;

    document.querySelector('.container').style=`
    
    display:block;

    `;

}













