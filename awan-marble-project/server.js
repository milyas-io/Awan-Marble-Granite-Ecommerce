require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const Product = require("./models/Product.js");

const app = express();

/* =====================
   MIDDLEWARE
===================== */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend
app.use(express.static(path.join(__dirname, "public")));

/* =====================
   DATABASE CONNECTION
===================== */
const connectDatabase = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.warn("⚠️  MONGODB_URI not set. Using local development mode.");
      // For development without MongoDB
      return false;
    }
    
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✓ MongoDB Connected Successfully");
    return true;
  } catch (err) {
    console.error("✗ MongoDB Connection Error:", err.message);
    return false;
  }
};

const dbConnected = connectDatabase();

/* =====================
   REST APIS - PRODUCTS
===================== */

// CREATE product
app.post("/api/products", async (req, res) => {
  try {
    if (!dbConnected) {
      return res.status(503).json({ message: "Database not connected" });
    }
    
    const { name, category, description, price, image, features } = req.body;
    
    if (!name || !price) {
      return res.status(400).json({ message: "Name and price are required" });
    }

    const product = new Product({
      name,
      category,
      description,
      price,
      image,
      features: features || [],
    });
    
    await product.save();
    res.status(201).json({ 
      success: true,
      message: "Product created successfully",
      product 
    });
  } catch (err) {
    console.error("POST /api/products Error:", err);
    res.status(400).json({ 
      success: false,
      message: err.message 
    });
  }
});

// READ all products
app.get("/api/products", async (req, res) => {
  try {
    if (!dbConnected) {
      return res.status(503).json({ message: "Database not connected" });
    }
    
    const products = await Product.find();
    res.json({ 
      success: true,
      count: products.length,
      products 
    });
  } catch (err) {
    console.error("GET /api/products Error:", err);
    res.status(500).json({ 
      success: false,
      message: err.message 
    });
  }
});

// READ product by id
app.get("/api/products/:id", async (req, res) => {
  try {
    if (!dbConnected) {
      return res.status(503).json({ message: "Database not connected" });
    }
    
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ 
        success: false,
        message: "Product not found" 
      });
    }
    
    res.json({ 
      success: true,
      product 
    });
  } catch (err) {
    console.error("GET /api/products/:id Error:", err);
    res.status(500).json({ 
      success: false,
      message: err.message 
    });
  }
});

// UPDATE product by id
app.put("/api/products/:id", async (req, res) => {
  try {
    if (!dbConnected) {
      return res.status(503).json({ message: "Database not connected" });
    }
    
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!product) {
      return res.status(404).json({ 
        success: false,
        message: "Product not found" 
      });
    }
    
    res.json({ 
      success: true,
      message: "Product updated successfully",
      product 
    });
  } catch (err) {
    console.error("PUT /api/products/:id Error:", err);
    res.status(400).json({ 
      success: false,
      message: err.message 
    });
  }
});

// DELETE product by id
app.delete("/api/products/:id", async (req, res) => {
  try {
    if (!dbConnected) {
      return res.status(503).json({ message: "Database not connected" });
    }
    
    const result = await Product.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ 
        success: false,
        message: "Product not found" 
      });
    }
    
    res.json({ 
      success: true,
      message: "Product deleted successfully" 
    });
  } catch (err) {
    console.error("DELETE /api/products/:id Error:", err);
    res.status(500).json({ 
      success: false,
      message: "Server error" 
    });
  }
});

/* =====================
   ROUTES
===================== */

// Default page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ 
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    message: "Route not found" 
  });
});

/* =====================
   START SERVER
===================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`✓ Awan Marble Server Running`);
  console.log(`✓ Server: http://localhost:${PORT}`);
  console.log(`✓ API: http://localhost:${PORT}/api`);
  console.log(`✓ Health: http://localhost:${PORT}/api/health`);
  console.log(`${'='.repeat(50)}\n`);
});
