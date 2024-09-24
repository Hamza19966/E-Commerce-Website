document.addEventListener('DOMContentLoaded', function () {
    const shopItems = document.querySelectorAll('.shop-item');
    const modal = document.getElementById('productModal');
    const closeModal = document.querySelector('.close');
    const modalProductImage = document.getElementById('modalProductImage');
    const modalProductName = document.getElementById('modalProductName');
    const modalProductPrice = document.getElementById('modalProductPrice');
    const addToCartButton = document.getElementById('addToCartButton');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Open modal when clicking on a product
    shopItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            const productName = item.textContent;
            const productImage = item.style.backgroundImage.replace('url("', '').replace('")', '');
            const productPrice = 1500 + (index * 500); // Assign a mock price for each item

            modalProductImage.src = productImage;
            modalProductName.textContent = productName;
            modalProductPrice.textContent = productPrice;

            modal.style.display = 'block';
        });
    });

    // Close the modal
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Add to cart functionality
    addToCartButton.addEventListener('click', function () {
        const selectedSize = document.getElementById('size').value;
        const selectedQuantity = document.getElementById('quantity').value;
        const product = {
            name: modalProductName.textContent,
            image: modalProductImage.src,
            price: modalProductPrice.textContent,
            size: selectedSize,
            quantity: selectedQuantity
        };
        cart.push(product);
        alert(`${product.name} has been added to the cart.`);
        modal.style.display = 'none';

        // Save the cart to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
    });

    // Close modal if clicking outside the content
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
// script.js

// script.js

const items = document.querySelectorAll('.image-carousel .item');
let currentIndex = 0;
const displayInterval = 1000; // Time interval between images (in milliseconds)

function showNextImage() {
    // Show the current image by adding the 'active' class
    if (currentIndex < items.length) {
        items[currentIndex].classList.add('active');
        currentIndex++; // Move to the next image
    }
}

// Call showNextImage every 2 seconds for each image
const interval = setInterval(() => {
    showNextImage();
    
    // Stop the interval after the last image
    if (currentIndex === items.length) {
        clearInterval(interval); // Stop after all images have been displayed
    }
}, displayInterval);
