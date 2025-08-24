// Product data
const mockProducts = [
    {
        id: '1',
        name: 'Handmade Baby Blanket',
        description: 'Soft and cozy baby blanket crocheted with premium cotton yarn. Perfect for newborns and toddlers.',
        price: 2500,
        category: 'Baby Items',
        images: [
            'https://images.pexels.com/photos/8148534/pexels-photo-8148534.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        sizes: ['Small (60x80cm)', 'Medium (80x100cm)', 'Large (100x120cm)'],
        colors: ['Pink', 'Blue', 'Yellow', 'White', 'Mint Green'],
        inStock: true,
        featured: true,
        createdAt: '2024-01-15'
    },
    {
        id: '2',
        name: 'African Print Tote Bag',
        description: 'Stylish tote bag with traditional African patterns, perfect for shopping or daily use.',
        price: 1800,
        category: 'Bags',
        images: [
            'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        sizes: ['Medium', 'Large'],
        colors: ['Ankara Print', 'Kente Design', 'Mud Cloth Pattern'],
        inStock: true,
        featured: true,
        createdAt: '2024-01-12'
    },
    {
        id: '3',
        name: 'Cozy Winter Scarf',
        description: 'Warm and stylish scarf perfect for cool Nairobi evenings. Made with soft acrylic yarn.',
        price: 1200,
        category: 'Accessories',
        images: [
            'https://images.pexels.com/photos/7679658/pexels-photo-7679658.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        sizes: ['One Size'],
        colors: ['Burgundy', 'Navy Blue', 'Forest Green', 'Cream'],
        inStock: true,
        featured: false,
        createdAt: '2024-01-10'
    },
    {
        id: '4',
        name: 'Kitchen Dishcloths Set',
        description: 'Set of 4 eco-friendly cotton dishcloths in vibrant colors. Perfect for sustainable kitchen care.',
        price: 800,
        category: 'Home & Kitchen',
        images: [
            'https://images.pexels.com/photos/6267445/pexels-photo-6267445.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        sizes: ['Standard (20x20cm)'],
        colors: ['Multi-color Set', 'Pastel Set', 'Bold Colors Set'],
        inStock: true,
        featured: true,
        createdAt: '2024-01-08'
    },
    {
        id: '5',
        name: 'Decorative Wall Hanging',
        description: 'Beautiful macrame-style wall decoration to add warmth and texture to your home.',
        price: 3200,
        category: 'Home Decor',
        images: [
            'https://images.pexels.com/photos/6267447/pexels-photo-6267447.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        sizes: ['Small (30x40cm)', 'Medium (40x60cm)', 'Large (60x80cm)'],
        colors: ['Natural', 'White', 'Beige'],
        inStock: true,
        featured: false,
        createdAt: '2024-01-05'
    },
    {
        id: '6',
        name: 'Children\'s Hat Set',
        description: 'Adorable hat and mittens set for children. Keeps little ones warm and stylish.',
        price: 1500,
        category: 'Children',
        images: [
            'https://images.pexels.com/photos/7679811/pexels-photo-7679811.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        sizes: ['0-6 months', '6-12 months', '1-2 years', '2-4 years'],
        colors: ['Pink & White', 'Blue & Gray', 'Rainbow', 'Purple & Lavender'],
        inStock: true,
        featured: true,
        createdAt: '2024-01-03'
    }
];

const categories = [
    'All',
    'Baby Items',
    'Bags',
    'Accessories',
    'Home & Kitchen',
    'Home Decor',
    'Children'
];

const availableColors = [
    'Red', 'Pink', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Black', 'White', 'Gray', 'Beige'
];

// Utility functions
function formatPrice(price) {
    return `KSh ${price.toLocaleString()}`;
}

function getColorStyle(color) {
    const colorMap = {
        'pink': '#ec4899',
        'blue': '#3b82f6',
        'green': '#10b981',
        'yellow': '#f59e0b',
        'white': '#ffffff',
        'purple': '#8b5cf6',
        'red': '#ef4444',
        'orange': '#f97316',
        'brown': '#a3a3a3',
        'black': '#111827',
        'gray': '#6b7280',
        'beige': '#d4b896'
    };
    
    const colorKey = color.toLowerCase().split(' ')[0];
    return colorMap[colorKey] || '#6b7280';
}

function getProductById(id) {
    return mockProducts.find(product => product.id === id);
}

function getFeaturedProducts() {
    return mockProducts.filter(product => product.featured);
}

function filterProducts(searchTerm = '', category = 'All') {
    return mockProducts.filter(product => {
        const matchesCategory = category === 'All' || product.category === category;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             product.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}

function sortProducts(products, sortBy) {
    const sorted = [...products];
    
    switch (sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'featured':
        default:
            return sorted.sort((a, b) => b.featured ? 1 : -1);
    }
}