import { MongoClient, ObjectId } from "mongodb";
import type { MenuItem } from "@shared/schema";

const connectionString = "mongodb+srv://airavatatechnologiesprojects:9mpIRwBPw8BPJHkk@maharajafeast.bry0rcq.mongodb.net/?retryWrites=true&w=majority&appName=MaharajaFeast";

const restaurantId = new ObjectId("6874cff2a880250859286de6");

const menuItems: Omit<MenuItem, '_id'>[] = [
  // Starters
  {
    name: "Royal Tandoori Platter",
    description: "Assorted tandoori vegetables with mint chutney and fresh naan",
    price: 420,
    category: "Starters",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    restaurantId,
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  {
    name: "Maharaja Seekh Kebab",
    description: "Succulent lamb seekh kebabs with royal spices and yogurt sauce",
    price: 580,
    category: "Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    restaurantId,
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  {
    name: "Royal Samosa Platter",
    description: "Crispy samosas with spiced potato filling and tamarind chutney",
    price: 240,
    category: "Starters",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    restaurantId,
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  // Soups
  {
    name: "Royal Tomato Soup",
    description: "Creamy tomato soup with fresh herbs and royal spices",
    price: 180,
    category: "Soups",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    restaurantId,
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  {
    name: "Maharaja Chicken Soup",
    description: "Rich chicken soup with aromatic spices and tender chicken pieces",
    price: 220,
    category: "Soups",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    restaurantId,
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  // Main Course
  {
    name: "Royal Paneer Makhani",
    description: "Creamy paneer curry with royal spices and fresh cream",
    price: 480,
    category: "Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    restaurantId,
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  {
    name: "Royal Butter Chicken",
    description: "Creamy tomato-based chicken curry with rich butter flavor",
    price: 520,
    category: "Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    restaurantId,
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  // Rice & Biryani
  {
    name: "Maharaja Biryani",
    description: "Aromatic basmati rice with tender mutton and royal spices",
    price: 680,
    category: "Rice & Biryani",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1563379091369-5b8fb7e3c7c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    restaurantId,
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  {
    name: "Royal Vegetable Biryani",
    description: "Fragrant basmati rice with mixed vegetables and saffron",
    price: 420,
    category: "Rice & Biryani",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1563379091369-5b8fb7e3c7c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    restaurantId,
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  // Bread
  {
    name: "Royal Naan",
    description: "Fresh baked naan bread with garlic and herbs",
    price: 120,
    category: "Bread",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    restaurantId,
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  {
    name: "Maharaja Kulcha",
    description: "Stuffed bread with spiced potatoes and onions",
    price: 150,
    category: "Bread",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    restaurantId,
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  // Desserts
  {
    name: "Royal Gulab Jamun",
    description: "Soft milk dumplings soaked in rose-cardamom syrup",
    price: 180,
    category: "Desserts",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    restaurantId,
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  {
    name: "Maharaja Kulfi",
    description: "Traditional frozen dessert with pistachios and cardamom",
    price: 160,
    category: "Desserts",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    restaurantId,
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  // Drinks
  {
    name: "Royal Mango Lassi",
    description: "Creamy yogurt drink with fresh mango and cardamom",
    price: 120,
    category: "Drinks",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    restaurantId,
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  {
    name: "Royal Masala Chai",
    description: "Aromatic spiced tea with cardamom, cinnamon, and ginger",
    price: 80,
    category: "Drinks",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    restaurantId,
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  // Combos
  {
    name: "Royal Veg Thali",
    description: "Complete vegetarian meal with dal, sabzi, rice, roti, and dessert",
    price: 380,
    category: "Combos",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    restaurantId,
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  {
    name: "Maharaja Non-Veg Thali",
    description: "Complete non-vegetarian feast with chicken, mutton, rice, naan, and dessert",
    price: 650,
    category: "Combos",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    restaurantId,
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  }
];

async function seedDatabase() {
  const client = new MongoClient(connectionString);
  
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    
    const db = client.db("maharajafeast");
    
    // Define category collection mappings
    const categoryCollections = {
      "Starters": "starters",
      "Soups": "soups",
      "Main Course": "maincourse",
      "Rice & Biryani": "ricebiryani",
      "Bread": "bread",
      "Desserts": "desserts",
      "Drinks": "drinks",
      "Combos": "combos"
    };
    
    // Clear existing data from all category collections
    for (const [category, collectionName] of Object.entries(categoryCollections)) {
      const collection = db.collection(collectionName);
      await collection.deleteMany({});
      console.log(`Cleared existing items from ${category} collection`);
    }
    
    // Group menu items by category and insert into respective collections
    const itemsByCategory: { [key: string]: typeof menuItems } = {};
    
    menuItems.forEach(item => {
      if (!itemsByCategory[item.category]) {
        itemsByCategory[item.category] = [];
      }
      itemsByCategory[item.category].push(item);
    });
    
    // Insert items into category-specific collections
    for (const [category, items] of Object.entries(itemsByCategory)) {
      const collectionName = categoryCollections[category as keyof typeof categoryCollections];
      if (collectionName) {
        const collection = db.collection(collectionName);
        const result = await collection.insertMany(items);
        console.log(`Inserted ${result.insertedCount} items into ${category} collection`);
      }
    }
    
    // Verify insertion
    let totalCount = 0;
    for (const [category, collectionName] of Object.entries(categoryCollections)) {
      const collection = db.collection(collectionName);
      const count = await collection.countDocuments();
      console.log(`${category}: ${count} items`);
      totalCount += count;
    }
    
    console.log(`Total menu items across all categories: ${totalCount}`);
    
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.close();
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  seedDatabase();
}

export { seedDatabase };