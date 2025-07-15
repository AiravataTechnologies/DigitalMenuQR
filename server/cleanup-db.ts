import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://airavatatechnologiesprojects:9mpIRwBPw8BPJHkk@maharajafeast.bry0rcq.mongodb.net/?retryWrites=true&w=majority&appName=MaharajaFeast";

async function cleanupDatabase() {
  const client = new MongoClient(connectionString);
  
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    
    const db = client.db("maharajafeast");
    
    // List of category collections to remove
    const categoryCollections = [
      "starters",
      "soups", 
      "maincourse",
      "ricebiryani",
      "bread",
      "desserts",
      "drinks",
      "combos"
    ];
    
    // Drop each category collection
    for (const collectionName of categoryCollections) {
      try {
        await db.collection(collectionName).drop();
        console.log(`Dropped collection: ${collectionName}`);
      } catch (error) {
        console.log(`Collection ${collectionName} does not exist or already dropped`);
      }
    }
    
    // List remaining collections
    const collections = await db.listCollections().toArray();
    console.log("Remaining collections:");
    collections.forEach(collection => {
      console.log(`  - ${collection.name}`);
    });
    
    console.log("Database cleanup completed");
    
  } catch (error) {
    console.error("Error cleaning database:", error);
  } finally {
    await client.close();
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  cleanupDatabase();
}

export { cleanupDatabase };