const mockProducts = [
    {
        id: '1',
        name: 'Blue & White Striped Crochet Halter Top',
        description: 'A stylish hand-crocheted halter top featuring bold blue and white stripes, perfect for warm weather and casual outings.',
        price: 0,
        category: 'Women',
        images: ['images/1.jpg'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Blue & White'],
        inStock: true,
        featured: false,
        createdAt: '2024-01-01'
    },
    {
        id: '2',
        name: 'Black Crochet Openwork Sweater',
        description: 'A stylish black crochet sweater featuring an openwork pattern, perfect for layering and adding texture to any outfit.',
        price: 0,
        category: 'Women',
        images: ['images/2.jpg'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Black'],
        inStock: true,
        featured: false,
        createdAt: '2024-01-02'
    },
    {
        id: '3',
        name: 'Beige Crochet Ruffled Hat',
        description: 'A charming beige crochet hat with elegant ruffled edges, combining both style and comfort for a unique handmade accessory.',
        price: 0,
        category: 'Accessories',
        images: ['images/3.jpg'],
        sizes: ['One Size'],
        colors: ['Beige'],
        inStock: true,
        featured: false,
        createdAt: '2024-01-03'
    },
    {
        id: '4',
        name: 'Black Crochet Crop Top with Yellow Accent',
        description: 'Stylish black crochet long-sleeve crop top featuring a bright yellow tie and neckline accent, perfect for adding a pop of color to your outfit.',
        price: 0,
        category: 'Women',
        images: ['images/4.jpg'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Black & Yellow'],
        inStock: true,
        featured: false,
        createdAt: '2024-01-04'
    },
    {
        id: '5',
        name: 'Black and Burgundy Crochet Cardigan',
        description: 'A stylish handmade crochet cardigan featuring a striking black and burgundy color combination, perfect for layering with a cozy, artisanal touch.',
        price: 0,
        category: 'Women',
        images: ['images/5.jpg'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Black & Burgundy'],
        inStock: true,
        featured: false,
        createdAt: '2024-01-05'
    },
    {
        id: '6',
        name: '',
        description: '',
        price: 0,
        category: '',
        images: ['images/'],
        sizes: [],
        colors: [],
        inStock: false,
        featured: false,
        createdAt: ''
    },
    {
        id: '7',
        name: 'Violet Breeze Crochet Top',
        description: 'A stunning handmade long-sleeve crochet crop top in vibrant violet. Designed with an airy, open-stitch pattern for comfort and breathability, this top is perfect for casual wear or layering. Made from soft acrylic yarn with a snug fit that flatters the body.',
        price: 0,
        category: 'Women',
        images: ['images/7.jpg'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Violet'],
        inStock: true,
        featured: false,
        createdAt: '2024-01-07'
    },
    {
        id: '8',
        name: 'Green & White Striped Crochet Two-Piece Set',
        description: 'A stylish, handmade crochet outfit featuring a strapless bandeau top and a matching high-waisted mini skirt. Designed with alternating green and white horizontal stripes, this set offers a chic and breathable look, perfect for summer outings or beachwear.',
        price: 0,
        category: 'Women',
        images: ['images/8.jpg'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Green & White'],
        inStock: true,
        featured: false,
        createdAt: '2024-01-08'
    },
    {
        id: '9',
        name: 'Hot Pink Crochet Tube & Skirt Set',
        description: 'A bold and stylish two-piece crochet outfit featuring a strapless tube top with a front bow tie and a matching high-waisted mini skirt. Perfect for summer outings or beach parties.',
        price: 0,
        category: 'Women',
        images: ['images/9.jpg'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Hot Pink'],
        inStock: true,
        featured: false,
        createdAt: '2024-01-09'
    },
    {
        id: '10',
        name: 'Beige Crochet Ruffled Hat',
        description: 'A charming crochet hat with delicate ruffled edges, perfect for sun protection with a stylish twist.',
        price: 0,
        category: 'Accessories',
        images: ['images/10.jpg'],
        sizes: ['One Size'],
        colors: ['Beige'],
        inStock: true,
        featured: false,
        createdAt: '2024-01-10'
    },
    {
        id: '11',
        name: 'Purple Crochet Crop Top',
        description: 'A vibrant purple crochet long-s sleeve crop top that blends comfort with fashion, ideal for casual wear.',
        price: 0,
        category: 'Women',
        images: ['images/11.jpg'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Purple'],
        inStock: true,
        featured: false,
        createdAt: '2024-01-11'
    },
    {
        id: '12',
        name: 'Multicolor Crochet Basket Bag',
        description: 'A handcrafted basket-style crochet bag featuring a mix of earthy tones, perfect for a boho chic look.',
        price: 0,
        category: 'Accessories',
        images: ['images/12.jpg'],
        sizes: ['One Size'],
        colors: ['Multicolor'],
        inStock: true,
        featured: false,
        createdAt: '2024-01-12'
    },
    {
        id: '13',
        name: 'Yellow Crochet Shorts',
        description: 'Bright and playful yellow crochet shorts, comfortable and perfect for warm weather.',
        price: 0,
        category: 'Women',
        images: ['images/13.jpg'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Yellow'],
        inStock: true,
        featured: false,
        createdAt: '2024-01-13'
    },
    {
        id: '14',
        name: 'Blue Crochet Crop Top and Skirt Set',
        description: 'A cozy and trendy blue crochet crop top paired with a matching high-waisted skirt, great for casual and beach vibes.',
        price: 0,
        category: 'Women',
        images: ['images/14.jpg'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Blue'],
        inStock: true,
        featured: false,
        createdAt: '2024-01-14'
    },
    {
        id: '15',
        name: 'White Crochet Dress',
        description: 'An elegant and delicate white crochet dress with intricate detailing, perfect for summer events.',
        price: 0,
        category: 'Women',
        images: ['images/15.jpg'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['White'],
        inStock: true,
        featured: false,
        createdAt: '2024-01-15'
    },
    {
        id: '16',
        name: 'Brown Crochet Vest',
        description: 'A stylish and versatile brown crochet vest that can be layered over various outfits for added texture.',
        price: 0,
        category: 'Women',
        images: ['images/16.jpg'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Brown'],
        inStock: true,
        featured: false,
        createdAt: '2024-01-16'
    },
    {
        id: '17',
        name: 'Orange Crochet Halter Top',
        description: 'A vibrant orange crochet halter top with a bohemian flair, perfect for festival or beach wear.',
        price: 0,
        category: 'Women',
        images: ['images/17.jpg'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Orange'],
        inStock: true,
        featured: false,
        createdAt: '2024-01-17'
    }
];

const categories = [
    'All',
    'Women',
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
