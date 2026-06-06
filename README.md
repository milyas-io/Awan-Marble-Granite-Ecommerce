# 🏛️ Awan Marble & Granite E-Commerce Platform

A full-stack web application developed to digitally showcase and manage premium marble and granite products. The platform provides an intuitive interface for customers to browse products while offering backend functionality for product management through a RESTful API.

This project was built to strengthen my understanding of full-stack web development, database integration, API design, and modern software engineering practices.

---

## 🚀 Project Overview

The Awan Marble & Granite E-Commerce Platform is designed to bridge the gap between traditional business operations and digital customer engagement. The application allows users to explore available marble and granite products while enabling efficient product management through a centralized backend system.

The project follows a client-server architecture using Node.js, Express.js, MongoDB, and vanilla JavaScript.

---

## ✨ Key Features

### Customer Features

* Browse marble and granite products
* Responsive user interface
* Product details and descriptions
* Contact and inquiry functionality
* Mobile-friendly design

### Administrative Features

* Add new products
* Update existing products
* Delete products
* Manage inventory availability
* Database-driven product management

### Technical Features

* RESTful API architecture
* MongoDB database integration
* Form validation
* Error handling
* Modular code organization
* Responsive design principles

---

## 🛠️ Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose ODM

### Development Tools

* Git
* GitHub
* Postman
* VS Code

---

## 🏗️ System Architecture

```text
Client Browser
      │
      ▼
Frontend (HTML, CSS, JavaScript)
      │
      ▼
Express.js REST API
      │
      ▼
MongoDB Database
```

The frontend communicates with the backend through REST API endpoints, while MongoDB provides persistent storage for product information.

---

## 📂 Project Structure

```text
Awan-Marble-Granite-Ecommerce/
│
├── public/
│   ├── index.html
│   ├── product.html
│   ├── contact.html
│   ├── About-Us.html
│   ├── addProduct.html
│   ├── style.css
│   ├── index.css
│   ├── about.css
│   ├── script.js
│   ├── Assets/
│   └── indexPictures/
│
├── models/
│   └── Product.js
│
├── docs/
│   └── screenshots/
│
├── server.js
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

---

## 📸 Screenshots

Add screenshots inside:

```text
docs/screenshots/
```

Recommended screenshots:

* Home Page
* Product Catalog
* Contact Page
* Product Management Interface

---

## 🔌 API Endpoints

| Method | Endpoint          | Description                |
| ------ | ----------------- | -------------------------- |
| GET    | /api/products     | Retrieve all products      |
| GET    | /api/products/:id | Retrieve a single product  |
| POST   | /api/products     | Create a new product       |
| PUT    | /api/products/:id | Update an existing product |
| DELETE | /api/products/:id | Delete a product           |
| GET    | /api/health       | Server health check        |

---

## 🗄️ Product Schema

```javascript
{
  name: String,
  category: String,
  description: String,
  price: Number,
  image: String,
  features: [String],
  inStock: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

---

## ⚙️ Installation & Setup

### Prerequisites

* Node.js
* npm
* MongoDB

### Clone Repository

```bash
git clone https://github.com/yourusername/Awan-Marble-Granite-Ecommerce.git
cd Awan-Marble-Granite-Ecommerce
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/awan-marble
```

### Start Application

```bash
npm start
```

The application will run at:

```text
http://localhost:5000
```

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

* Full-Stack Web Development
* REST API Design
* Backend Development with Express.js
* MongoDB Database Integration
* Client-Server Architecture
* CRUD Operations
* Responsive Web Design
* Version Control with Git & GitHub
* Software Project Organization

---

## 🔒 Security Considerations

* Input validation on API endpoints
* Error handling and response management
* MongoDB schema validation
* Environment variable configuration
* Separation of frontend and backend concerns

---

## 🚀 Future Improvements

Potential enhancements include:

* User Authentication & Authorization
* Admin Dashboard
* Product Search & Filtering
* Shopping Cart Functionality
* Order Management System
* Payment Gateway Integration
* Product Analytics Dashboard
* Cloud Deployment
* Role-Based Access Control

---

## 🌐 Deployment

The application can be deployed using:

* Render
* Railway
* AWS
* DigitalOcean
* Vercel (with serverless adaptation)

MongoDB Atlas can be used for cloud database hosting.

---

## 👨‍💻 Author

**Muhammad Ilyas**

BS Computer Science Student

Areas of Interest:

* Artificial Intelligence
* Machine Learning
* Computer Vision
* Full-Stack Development
* Software Engineering

I enjoy building practical software solutions and continuously exploring new technologies through projects, research, and hands-on learning.

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project interesting, consider giving it a star and sharing your feedback.
