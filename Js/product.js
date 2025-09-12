// Product page functionality

let currentProduct = null;
let selectedImage = 0;
let selectedSize = '';
let selectedColor = '';
let quantity = 1;

document.addEventListener('DOMContentLoaded', function() {
    initializeProductPage();
});

function initializeProductPage() {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId) {
        showProductNotFound();
        return;
    }
    
    // Load product
    currentProduct = getProductById(productId);
    
    if (!currentProduct) {
        showProductNotFound();
        return;
    }
    
    // Display product
    displayProduct(currentProduct);
    
    // Initialize defaults
    selectedSize = currentProduct.sizes.length > 0 ? currentProduct.sizes[0] : '';
    selectedColor = currentProduct.colors.length > 0 ? currentProduct.colors[0] : '';
}

function showProductNotFound() {
    const productDetails = document.getElementById('productDetails');
    if (productDetails) {
        productDetails.innerHTML = `
            <div style="text-align: center; padding: 3rem 0;">
                <h2 style="font-size: 2rem; font-weight: 700; color: #111827; margin-bottom: 1rem;">Product Not Found</h2>
                <p style="color: #6b7280; margin-bottom: 2rem;">The product you're looking for doesn't exist or has been removed.</p>
                <a href="shop.html" class="btn btn-primary">Return to Shop</a>
            </div>
        `;
    }
}

function displayProduct(product) {
    const productDetails = document.getElementById('productDetails');
    if (!productDetails) return;
    
    productDetails.innerHTML = `
        <div class="product-images">
            <div class="main-image">
                <img src="${product.images[selectedImage]}" alt="${product.name}" id="mainProductImage">
            </div>
            ${product.images.length > 1 ? `
                <div class="image-thumbnails">
                    ${product.images.map((image, index) => `
                        <div class="thumbnail ${index === selectedImage ? 'active' : ''}" 
                             onclick="selectImage(${index})">
                            <img src="${image}" alt="${product.name} ${index + 1}">
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
        
        <div class="product-info">
            <div class="product-header-actions">
                <div class="product-meta">
                    <span class="product-category-label">${product.category}</span>
                    <h1 class="product-name">${product.name}</h1>
                </div>
                <div class="product-actions">
                    <button class="icon-btn" onclick="toggleWishlist('${product.id}')">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    <button class="icon-btn" onclick="shareProduct()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>
                    </button>
                </div>
            </div>
            
            <div class="product-rating-section">
                <div class="rating-stars">
                    ${[...Array(5)].map(() => `
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                        </svg>
                    `).join('')}
                </div>
                <span class="rating-info">(4.8) • 24 reviews</span>
            </div>
            
            <div class="product-price-section">
                <span class="product-price-large">${formatPrice(product.price)}</span>
            </div>
            
            <div class="product-description-section">
                <p class="product-description-text">${product.description}</p>
            </div>
            
            ${product.sizes.length > 0 ? `
                <div class="product-options">
                    <h3 class="option-title">Size</h3>
                    <div class="option-buttons">
                        ${product.sizes.map(size => `
                            <button class="option-btn ${size === selectedSize ? 'active' : ''}" 
                                    onclick="selectSize('${size}')">
                                ${size}
                            </button>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${product.colors.length > 0 ? `
                <div class="product-options">
                    <h3 class="option-title">Color</h3>
                    <div class="option-buttons">
                        ${product.colors.map(color => `
                            <button class="option-btn ${color === selectedColor ? 'active' : ''}" 
                                    onclick="selectColor('${color}')">
                                ${color}
                            </button>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="quantity-section">
                <h3 class="option-title">Quantity</h3>
                <div class="quantity-selector">
                    <button onclick="updateQuantity(-1)">-</button>
                    <input type="number" value="${quantity}" min="1" id="quantityInput" 
                           onchange="setQuantity(this.value)">
                    <button onclick="updateQuantity(1)">+</button>
                </div>
            </div>
            
            <div class="product-actions-section">
                <button class="btn btn-primary" onclick="addToCart()" style="flex: 1;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"></path>
                        <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"></path>
                        <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"></path>
                    </svg>
                    Add to Cart
                </button>
                <a href="custom-orders.html" class="btn btn-secondary" style="padding: 0.75rem 1.5rem;">
                    Customize
                </a>
            </div>
            <!-- Comment Button (place this right after the Customize section) -->
<div class="comment-button-container">
  <button class="comment-btn">
    💬 View Comments and reviews
  </button>
</div>

<style>
.comment-button-container {
  margin: 20px 0;
  text-align: center;
}

.comment-btn {
  background-color: #f97316;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.comment-btn:hover {
  background-color: #654321;
}
</style>
            <div class="product-features">
                <div class="feature-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="1" y="3" width="15" height="13"></rect>
                        <polygon points="16,8 20,8 23,11 23,16 16,16 16,8"></polygon>
                        <circle cx="5.5" cy="18.5" r="2.5"></circle>
                        <circle cx="18.5" cy="18.5" r="2.5"></circle>
                    </svg>
                    <span>Free delivery in Ngong Town</span>
                </div>
                <div class="feature-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <span>Quality guarantee</span>
                </div>
                <div class="feature-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="1,4 1,10 7,10"></polyline>
                        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                    </svg>
                    <span>7-day return policy</span>
                </div>
            </div>
        </div>
    `;
}

function selectImage(index) {
    selectedImage = index;
    
    // Update main image
    const mainImage = document.getElementById('mainProductImage');
    if (mainImage) {
        mainImage.src = currentProduct.images[index];
    }
    
    // Update thumbnail states
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function selectSize(size) {
    selectedSize = size;
    
    // Update button states
    document.querySelectorAll('.product-options .option-btn').forEach(btn => {
        if (btn.textContent.trim() === size) {
            btn.classList.add('active');
        } else if (currentProduct.sizes.includes(btn.textContent.trim())) {
            btn.classList.remove('active');
        }
    });
}

function selectColor(color) {
    selectedColor = color;
    
    // Update button states
    document.querySelectorAll('.product-options .option-btn').forEach(btn => {
        if (btn.textContent.trim() === color) {
            btn.classList.add('active');
        } else if (currentProduct.colors.includes(btn.textContent.trim())) {
            btn.classList.remove('active');
        }
    });
}

function updateQuantity(change) {
    quantity = Math.max(1, quantity + change);
    const quantityInput = document.getElementById('quantityInput');
    if (quantityInput) {
        quantityInput.value = quantity;
    }
}

function setQuantity(value) {
    quantity = Math.max(1, parseInt(value) || 1);
    const quantityInput = document.getElementById('quantityInput');
    if (quantityInput) {
        quantityInput.value = quantity;
    }
}

function addToCart() {
    if (!currentProduct) return;
    
    cart.addItem(currentProduct, quantity, selectedSize, selectedColor);
}

function shareProduct() {
    if (navigator.share) {
        navigator.share({
            title: currentProduct.name,
            text: currentProduct.description,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            // Show feedback
            const toast = document.createElement('div');
            toast.innerHTML = `
                <div style="
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: #059669;
                    color: white;
                    padding: 1rem 1.5rem;
                    border-radius: 0.5rem;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                    z-index: 1000;
                    animation: slideIn 0.3s ease;
                ">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="20,6 9,17 4,12"></polyline>
                        </svg>
                        <span>Link copied to clipboard</span>
                    </div>
                </div>
            `;
            
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 300);
            }, 2000);
        });
    }
}