# Awan Marble & Granite - Full Stack Project

A professional e-commerce platform for premium marble and granite materials, built with modern web technologies.

## 📋 Project Overview

Awan Marble & Granite is a full-stack web application featuring:
- **Frontend**: Responsive HTML5, CSS3, and vanilla JavaScript
- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **REST API**: Complete product management endpoints

## 📁 Project Structure

```
awan-marble-project/
├── public/                    # Frontend static files
│   ├── index.html            # Home page
│   ├── product.html          # Products catalog
│   ├── contact.html          # Contact form
│   ├── About-Us.html         # About page
│   ├── addProduct.html       # Admin product form
│   ├── style.css             # Main stylesheet
│   ├── index.css             # Home page styles
│   ├── about.css             # About page styles
│   ├── script.js             # Main JavaScript file
│   ├── Assets/               # Product images
│   └── indexPictures/        # UI and icon images
├── models/
│   └── Product.js            # MongoDB Product schema
├── server.js                 # Express server setup
├── package.json              # Dependencies and scripts
├── .env                      # Environment variables
├── .env.example              # Environment template
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (local or cloud instance)

### Installation

1. **Clone or extract the project**
   ```bash
   cd awan-marble-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Copy `.env.example` to `.env` and update:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env`:
   ```
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/awan-marble
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   Server runs at: `http://localhost:5000`

## 🔌 API Endpoints

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Fetch all products |
| GET | `/api/products/:id` | Fetch single product |
| POST | `/api/products` | Create new product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Server health status |

### Pages

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Home page |

### API Response Format

**Success Response:**
```json
{
  "success": true,
  "message": "Success message",
  "data": {}
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error description"
}
```

## 📝 Product Schema

```javascript
{
  name: String (required, max 100 chars),
  category: String (required, enum: Marble/Granite/Quartz/Porcelain/Other),
  description: String (max 500 chars),
  price: Number (required, min 0),
  image: String,
  features: [String],
  inStock: Boolean (default: true),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

## 🎨 Frontend Features

- **Responsive Design**: Mobile-first approach
- **Lazy Image Loading**: Performance optimization
- **Form Validation**: Client-side validation for contact forms
- **Dynamic Product Loading**: Fetches products from API
- **Accessibility**: ARIA labels and semantic HTML

## 🛠️ Code Quality

### JavaScript Best Practices
- ESLint-ready code structure
- Proper error handling
- XSS protection with HTML escaping
- Async/await for API calls
- Document fragments for DOM operations

### Naming Conventions
- camelCase for JavaScript variables
- snake_case for database fields
- kebab-case for CSS classes
- Descriptive variable names

### Code Organization
- Modular functions with JSDoc comments
- Clear separation of concerns
- Comments for complex logic
- Consistent indentation (2 spaces)

## 🔒 Security

- CORS enabled for cross-origin requests
- Input validation on backend
- MongoDB injection protection via Mongoose
- HTML escaping in frontend
- Error handling without sensitive data exposure

## 📦 Dependencies

- **express** (5.2.1): Web framework
- **mongoose** (9.0.2): MongoDB ODM
- **cors** (2.8.5): Cross-Origin Resource Sharing
- **dotenv** (17.2.3): Environment variable management

## 🔄 Development Workflow

1. **Start server**
   ```bash
   npm start
   ```

2. **Access application**
   - Home: http://localhost:5000
   - API: http://localhost:5000/api/products
   - Health: http://localhost:5000/api/health

3. **Test endpoints using curl or Postman**
   ```bash
   # Get all products
   curl http://localhost:5000/api/products

   # Create product
   curl -X POST http://localhost:5000/api/products \
     -H "Content-Type: application/json" \
     -d '{
       "name": "White Marble",
       "category": "Marble",
       "description": "Premium white marble",
       "price": 500,
       "features": ["Elegant", "Durable"]
     }'
   ```

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🌐 Deployment

### For Production:
1. Set `NODE_ENV=production` in `.env`
2. Use MongoDB Atlas (cloud) instead of local
3. Enable proper CORS origins
4. Use environment-specific configurations
5. Deploy to platforms like:
   - Heroku
   - Railway
   - Render
   - AWS
   - DigitalOcean

## 📝 File Descriptions

### Frontend Files
- **index.html**: Landing page with hero section and featured products
- **product.html**: Product catalog page
- **contact.html**: Contact form with quote request
- **About-Us.html**: Company information page
- **addProduct.html**: Admin interface for adding products
- **style.css**: Global styles and responsive design
- **script.js**: Core JavaScript with form validation and API integration

### Backend Files
- **server.js**: Express server configuration and API routes
- **models/Product.js**: MongoDB schema with validation

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :5000
kill -9 <PID>
```

### MongoDB Connection Error
- Verify MongoDB is running
- Check MONGODB_URI in `.env`
- For local: ensure connection string is correct
- For Atlas: whitelist your IP address

### API Returns 503 Error
- Database not connected
- Check MongoDB connection
- Verify `.env` configuration

## 📚 Resources

- [Express.js Documentation](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Mongoose Documentation](https://mongoosejs.com)
- [MDN Web Docs](https://developer.mozilla.org)

## 📄 License

This project is licensed under the ISC License.

## 👥 Team

**Awan Marble Team**

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review API response messages
3. Check browser console for errors
4. Verify environment configuration

---

**Last Updated**: June 2024
**Version**: 1.0.0
