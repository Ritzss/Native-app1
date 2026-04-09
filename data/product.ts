// !🔥 IMPORTANT: React Native needs static require
const img = require('../Assets/Images/image.png');


// *Product
export const product = {
  Productid: 'bb1',
  name: 'Pure Brass Bottle',
  description:
    'Experience the ancient wisdom of Ayurveda with our handcrafted brass water bottle.',

  category: 'bottles',
  subcategory: 'brass bottles',

  variants: [
    {
      images: [img, img, img],
      capacity: 250,
      weight: 210,
      price: 21.99,
      color: 'Antique Gold',
      mrp: 26.99,
    },
    {
      images: [img, img],
      capacity: 500,
      weight: 280,
      price: 31.99,
      color: 'Antique Gold',
      mrp: 36.99,
    },
    {
      images: [img],
      capacity: 750,
      weight: 380,
      price: 41.99,
      color: 'Antique Gold',
      mrp: 46.99,
    },
    {
      images: [img, img, img, img],
      capacity: 1000,
      weight: 480,
      price: 51.99,
      color: 'Antique Gold',
      mrp: 56.99,
    },
  ],

  details: {
    features: [
      'Solid Brass Construction',
      'Handcrafted Hammered Texture',
      'Leak-Proof Screw Cap',
      'Reusable & Eco-Friendly',
      'Traditional Ayurvedic Storage',
    ],
    material: 'Pure Brass',
    finish: 'Hammered Matte Metallic',
    design: 'Textured Grip Pattern',
    sustainability: 'Reusable',
    care: [
      'Clean with lemon and salt to maintain shine',
      'Do not use in dishwasher',
      'Avoid storing acidic liquids',
      'Dry thoroughly after washing',
    ],
  },
};

// *🔥 Similar Products

export const similarProducts = [
  {
    Productid: 'bt1',
    name: 'Pure Brass Tumbler',
    description: 'Traditional brass tumbler for daily hydration.',
    category: 'Drinkware',
    subcategory: 'Brass Tumblers',

    variants: [
      {
        images: [img],
        capacity: 300,
        weight: 220,
        price: 24.99,
      },
      {
        images: [img],
        capacity: 450,
        weight: 260,
        price: 29.99,
      },
    ],

    details: {
      material: 'Pure Brass',
      finish: 'Polished Metallic',
      design: 'Minimal',
      sustainability: 'Reusable',
      features: ['Traditional Drinkware', 'Durable Build', 'Eco Friendly'],
      care: ['Hand wash only', 'Dry after washing'],
    },
  },

  {
    Productid: 'bj1',
    name: 'Hammered Brass Jug',
    description: 'Serve water with this handcrafted brass jug.',
    category: 'Drinkware',
    subcategory: 'Brass Jugs',

    variants: [
      {
        images: [img],
        capacity: 1200,
        weight: 650,
        price: 59.99,
      },
      {
        images: [img],
        capacity: 1500,
        weight: 720,
        price: 69.99,
      },
    ],

    details: {
      material: 'Pure Brass',
      finish: 'Hammered Antique',
      design: 'Jug with Handle',
      sustainability: 'Reusable',
      features: ['Ergonomic Handle', 'Elegant Design'],
      care: ['Avoid dishwasher', 'Dry properly'],
    },
  },

  {
    Productid: 'fb1',
    name: 'Brass Copper Fusion Bottle',
    description: 'Fusion of brass & copper for premium hydration.',
    category: 'bottles',
    subcategory: 'fusion bottles',

    variants: [
      {
        images: [img],
        capacity: 750,
        weight: 420,
        price: 54.99,
      },
      {
        images: [img],
        capacity: 1000,
        weight: 480,
        price: 64.99,
      },
    ],

    details: {
      material: 'Brass + Copper',
      finish: 'Hammered',
      design: 'Fusion Bottle',
      sustainability: 'Reusable',
      features: ['Premium Build', 'Health Benefits'],
      care: ['Use lemon cleaning', 'Dry after wash'],
    },
  },
];