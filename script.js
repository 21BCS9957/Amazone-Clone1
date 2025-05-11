// Cart functionality
let cart = [];
let cartCount = 0;

// Search functionality
const searchInput = document.querySelector('.search-input');
const searchSelect = document.querySelector('.search-select');

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value;
        const category = searchSelect.value;
        alert(`Searching for ${searchTerm} in ${category} category`);
        // Here you would typically make an API call to search for products
    }
});

// Add to cart functionality
document.querySelectorAll('.box').forEach(box => {
    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.className = 'add-to-cart-btn';
    addToCartBtn.style.cssText = `
        background-color: #f0c14b;
        border: 1px solid #a88734;
        border-radius: 3px;
        padding: 8px 12px;
        cursor: pointer;
        margin-top: 10px;
        width: 100%;
    `;
    
    addToCartBtn.addEventListener('click', function() {
        const productName = box.querySelector('h2').textContent;
        cart.push(productName);
        cartCount++;
        updateCartCount();
        alert(`${productName} added to cart!`);
    });
    
    box.querySelector('.box-content').appendChild(addToCartBtn);
});

// Update cart count
function updateCartCount() {
    const cartElement = document.querySelector('.nav-cart p');
    cartElement.textContent = `Cart (${cartCount})`;
}

// Sign in functionality
document.querySelector('.nav-signin').addEventListener('click', function() {
    const email = prompt('Please enter your email:');
    if (email) {
        const password = prompt('Please enter your password:');
        if (password) {
            alert('Sign in successful!');
        }
    }
});

// Panel hover effects
document.querySelectorAll('.panel-ops p').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.color = '#febd68';
    });
    
    item.addEventListener('mouseout', function() {
        this.style.color = 'white';
    });
});

// Back to top functionality
document.querySelector('.foot-panel1').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effects to boxes
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    box.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add click event to "See more" links
document.querySelectorAll('.box-content p').forEach(link => {
    link.addEventListener('click', function() {
        const category = this.parentElement.querySelector('h2').textContent;
        alert(`Loading more items from ${category} category`);
    });
});

// Product slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.box');

function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

// Initialize slider
showSlide(0);

// Add navigation buttons
const sliderContainer = document.querySelector('.shop-section');
const prevButton = document.createElement('button');
const nextButton = document.createElement('button');

prevButton.textContent = '←';
nextButton.textContent = '→';

[prevButton, nextButton].forEach(button => {
    button.style.cssText = `
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
        font-size: 18px;
        z-index: 100;
    `;
});

prevButton.style.left = '10px';
nextButton.style.right = '10px';

sliderContainer.style.position = 'relative';
sliderContainer.appendChild(prevButton);
sliderContainer.appendChild(nextButton);

prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
nextButton.addEventListener('click', () => showSlide(currentSlide + 1));

// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 