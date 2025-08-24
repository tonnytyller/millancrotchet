// Shop page functionality

document.addEventListener('DOMContentLoaded', function() {
    initializeShopPage();
});

function initializeShopPage() {
    // Initialize filters
    loadCategories();
    loadProducts();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize view mode
    setViewMode('grid');
}

function loadCategories() {
    const categoryFilters = document.getElementById('categoryFilters');
    if (!categoryFilters) return;
    
    categoryFilters.innerHTML = categories.map(category => `
        <button class="category-btn ${category === 'All' ? 'active' : ''}" 
                data-category="${category}" 
                onclick="filterByCategory('${category}')">
            ${category}
        </button>
    `).join('');
}

function loadProducts() {
    const searchTerm = document.getElementById('searchInput')?.value || '';
    const selectedCategory = document.querySelector('.category-btn.active')?.dataset.category || 'All';
    const sortBy = document.getElementById('sortSelect')?.value || 'featured';
    
    let products = filterProducts(searchTerm, selectedCategory);
    products = sortProducts(products, sortBy);
    
    displayProducts(products);
    updateResultsCount(products.length, mockProducts.length);
}

function displayProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    
    if (!productsGrid) return;
    
    if (products.length === 0) {
        productsGrid.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
        return;
    }
    
    productsGrid.style.display = 'grid';
    if (noResults) noResults.style.display = 'none';
    
    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

function updateResultsCount(showing, total) {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = `Showing ${showing} of ${total} products`;
    }
}

function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                loadProducts();
            }, 300);
        });
    }
    
    // Sort select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', loadProducts);
    }
    
    // View toggle buttons
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');
    
    if (gridViewBtn) {
        gridViewBtn.addEventListener('click', () => setViewMode('grid'));
    }
    
    if (listViewBtn) {
        listViewBtn.addEventListener('click', () => setViewMode('list'));
    }
}

function filterByCategory(category) {
    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // Reload products
    loadProducts();
}

function setViewMode(mode) {
    const productsGrid = document.getElementById('productsGrid');
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');
    
    if (!productsGrid) return;
    
    // Update grid classes
    productsGrid.className = `products-grid ${mode}-view`;
    
    // Update button states
    if (gridViewBtn && listViewBtn) {
        gridViewBtn.classList.toggle('active', mode === 'grid');
        listViewBtn.classList.toggle('active', mode === 'list');
    }
    
    // Store preference
    localStorage.setItem('shop-view-mode', mode);
}

// Load saved view mode
function loadViewMode() {
    const savedMode = localStorage.getItem('shop-view-mode') || 'grid';
    setViewMode(savedMode);
}

// Initialize view mode on load
document.addEventListener('DOMContentLoaded', loadViewMode);