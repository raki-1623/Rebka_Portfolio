# AliExpress Clone

A full-stack e-commerce website clone of AliExpress with Node.js backend and vanilla JavaScript frontend.

## Features

✨ **Frontend**
- Responsive design (mobile, tablet, desktop)
- Interactive categories mega menu with hover effects
- Flash deals section with countdown timer
- Product grid with ratings and pricing
- Category showcase
- Fully styled footer

🚀 **Backend**
- Node.js + Express server
- RESTful API for categories and products
- CORS enabled for cross-origin requests
- Categories with subcategories and product counts
- Product data with pricing, ratings, and inventory

## Tech Stack

- **Frontend**: HTML5, CSS3 (CSS Grid, Flexbox), Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Styling**: Custom CSS with CSS variables
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Inter)

## Project Structure

```
aliexpress/
├── index.html          # Main HTML file
├── style.css           # All styles
├── server.js           # Express backend
├── package.json        # Dependencies
├── images/             # Image assets
└── README.md          # This file
```

## Installation & Setup

### 1. Install Node.js
Make sure you have Node.js installed (v14 or higher)

### 2. Install Dependencies
```bash
cd c:\Users\user\Desktop\aliexpress
npm install
```

### 3. Start the Server
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

### 4. Open in Browser
Navigate to: `http://localhost:3000`

## API Endpoints

### Categories
- `GET /api/categories` - Get all categories with subcategories
- `GET /api/categories/:id` - Get single category by ID

### Products
- `GET /api/products` - Get all products
- `GET /api/products?category=Electronics` - Filter by category
- `GET /api/products?limit=5` - Limit results
- `GET /api/products/:id` - Get single product by ID

## API Response Examples

### Get All Categories
```bash
curl http://localhost:3000/api/categories
```

Response:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Women's Fashion",
      "icon": "fa-shirt",
      "subcategories": [
        { "name": "Dresses", "count": 5420 },
        { "name": "Tops & Blouses", "count": 8930 }
      ]
    }
  ]
}
```

### Get Products
```bash
curl http://localhost:3000/api/products
```

## Features in Detail

### Interactive Categories Menu
- Click "All Categories" to reveal mega menu
- Hover over categories to see subcategories (desktop)
- Click categories to expand subcategories (mobile)
- Product counts shown for each subcategory
- Smooth animations and transitions

### Responsive Design
- **Desktop**: Full layout with sidebar and mega menu
- **Tablet**: Optimized grid layouts
- **Mobile**: Collapsed navigation, stacked layouts

### Dynamic Content
- Categories loaded from backend API
- Real-time countdown timer
- Hover effects and animations
- Mobile-friendly touch interactions

## Customization

### Add New Categories
Edit `server.js` and add to the `categories` array:

```javascript
{
  id: 11,
  name: "Your Category",
  icon: "fa-icon-name",
  subcategories: [
    { name: "Subcategory", count: 100 }
  ]
}
```

### Add New Products
Edit `server.js` and add to the `products` array:

```javascript
{
  id: 6,
  name: "Product Name",
  price: 1999,
  oldPrice: 3999,
  discount: 50,
  sold: 1000,
  rating: 4.5,
  image: "image-url",
  category: "Category Name",
  freeShipping: true
}
```

### Change Colors
Edit CSS variables in `style.css`:

```css
:root {
    --ali-orange: #FF4747;
    --ali-black: #222222;
    --choice-purple: #7b3fe4;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] User authentication
- [ ] Shopping cart functionality
- [ ] Product search
- [ ] Product detail pages
- [ ] Checkout process
- [ ] Order tracking
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Image upload
- [ ] Admin dashboard

## License

MIT License - Feel free to use for learning and personal projects

## Credits

- Images from [Unsplash](https://unsplash.com)
- Icons from [Font Awesome](https://fontawesome.com)
- Inspired by [AliExpress](https://www.aliexpress.com)
