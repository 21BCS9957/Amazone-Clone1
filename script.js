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