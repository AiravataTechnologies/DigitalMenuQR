import { MongoClient } from 'mongodb';

const connectionString = process.env.MONGODB_URI || process.env.DATABASE_URL;
let client;

async function connectToDatabase() {
  if (!connectionString) {
    throw new Error('MongoDB connection string not provided');
  }
  
  if (!client) {
    client = new MongoClient(connectionString);
    await client.connect();
  }
  return client.db("maharajafeast");
}

export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    console.log('Attempting to connect to MongoDB...');
    const database = await connectToDatabase();
    console.log('MongoDB connected successfully');
    
    if (req.method === 'GET') {
      console.log('Fetching menu items...');
      const menuItems = await database.collection('menuitems').find({}).toArray();
      console.log(`Found ${menuItems.length} menu items`);
      res.status(200).json(menuItems);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      stack: error.stack,
      connectionString: connectionString ? 'Present' : 'Missing'
    });
    res.status(500).json({ 
      error: 'Failed to fetch menu items',
      details: error.message 
    });
  }
}