 <h1 align="center">Artsy Silver</h1>
 
<p align="center">
  <img src="https://rjkfpympkaiwclrnhulw.supabase.co/storage/v1/object/public/general/main-logo-white.webp" alt="Artsy Silver Logo" width="200" />
</p>

<p align="center">
  A modern e-commerce storefront built with React, Supabase, and TanStack Query.
</p>

<p align="center">

  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white" alt="Supabase"/>
  <img src="https://img.shields.io/badge/TanStack_Query-FF4154?style=flat&logo=reactquery&logoColor=white" alt="TanStack Query"/>
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=reactrouter&logoColor=white" alt="React Router"/>
  <img src="https://img.shields.io/badge/Context_API-149ECA?style=flat&logo=react&logoColor=white" alt="Context API"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white" alt="Vercel"/>
  <img src="https://img.shields.io/badge/Responsive-Design-4CAF50?style=flat" alt="Responsive Design"/>

</p>

---

<h2>

Live Demo: [View Live Site](https://artsy-silver.vercel.app/)

</h2> 


---

## Overview

Artsy Silver is a portfolio e-commerce application built to explore modern frontend architecture and real-world e-commerce functionality.

The project focuses on product discovery, state management, backend integration, and responsive user experience. Product data is stored in Supabase and consumed through TanStack Query, while client-side state is managed through React Context and reducers.

The application allows users to browse products, search instantly, combine multiple filters, sort results, view product details, and manage a persistent shopping cart.

---

## Features

### Product Catalog

- Dynamic product data fetched from Supabase
- Relational product and image structure
- Dynamic product routes using category and slug
- Product image galleries
- Product availability and sale indicators

### Search & Discovery

- Instant search preview
- Shop-wide search functionality
- Category filtering
- Stone filtering
- Size filtering
- Price range filtering
- Multiple sorting options
- Combined search, filtering, sorting, and pagination

### Shopping Experience

- Persistent cart using localStorage
- Add products to cart
- Remove products from cart
- Increase and decrease product quantities
- Global cart state available throughout the application
- Slide-out cart drawer

### User Experience

- Responsive design
- Skeleton loading states
- Smooth pagination navigation
- Optimized WebP images
- Hero image preloading
- Product search drawer

---

## Tech Stack

### Frontend

- React 19
- React Router
- Tailwind CSS
- Framer Motion
- Swiper
- Lucide React

### State Management

- React Context API
- useReducer
- useMemo

### Backend & Data

- Supabase
- TanStack Query

---

## Architecture

The application separates server state from client state to keep data management predictable and scalable.

### Server State

Product data is stored in Supabase and fetched through TanStack Query.

TanStack Query handles:

- Data fetching
- Caching
- Loading states
- Query synchronization

### Client State

The application uses two dedicated contexts:

#### Cart Context

Responsible for:

- Cart visibility
- Cart state
- Quantity management
- Persistent localStorage synchronization

Cart updates are managed through a reducer-driven architecture using actions such as:

- ADD_ITEM
- REMOVE_ITEM
- DECREASE_ITEM
- CLEAR_CART

#### Product Context

Responsible for:

- Search
- Filtering
- Sorting
- Pagination
- Product discovery state

All catalog interactions operate from a centralized source of truth, ensuring predictable behavior across the application.

---

## Data Model

Products and images are stored separately and linked through relational data.

```text
products
   └── images
```

Products contain information such as:

- Name
- Slug
- Category
- Material
- Price
- Availability
- Ratings

Images are stored separately and linked to products through their product identifier.

Product and image data are retrieved through a single Supabase query.

---

## Routing

The application uses dynamic routes for product pages.

Example:

```text
/product/rings/golden-elegance-ring
```

Route structure:

```text
/product/:category/:slug
```

This approach creates cleaner URLs and improves scalability as the catalog grows.

---

## Technical Challenges

The most challenging part of the project was building a product pipeline where searching, filtering, sorting, and pagination all work together correctly.

Each operation modifies the same dataset while maintaining predictable results and accurate page counts. The final implementation derives product state through a sequence of transformations before rendering paginated results.

This required careful state management to ensure that changing filters, search terms, sorting methods, or page numbers never produced conflicting results.

---

## What I Learned

Working on Artsy Silver helped me strengthen my understanding of:

- Backend integration with Supabase
- Server-state management with TanStack Query
- Context-based application architecture
- Reducer-driven state management
- Derived state using useMemo
- Managing complex UI state
- Building scalable filtering and search systems
- Creating responsive e-commerce interfaces

---

## Future Improvements

Planned improvements include:

- User authentication
- Wishlist functionality
- Checkout flow
- Order management
- User accounts
- Inventory tracking
- Admin dashboard
- Product management tools
- Full e-commerce workflow

The long-term goal is to evolve Artsy Silver from a storefront experience into a complete e-commerce platform.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/John-Fenhas/Artsy-Silver.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Author

John Fenhas

GitHub: https://github.com/John-Fenhas
