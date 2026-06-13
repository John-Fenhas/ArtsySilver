# ArtsySilver

A fully functional e-commerce storefront for a silver jewelry brand — built with React, Supabase, TanStack Query, and Tailwind CSS.

🌐 **Live:** [artsy-silver.vercel.app](https://artsy-silver.vercel.app)

---

## Overview

ArtsySilver is a front-end e-commerce project built around a real silver jewelry catalog. Products are stored in Supabase with a relational image structure, fetched and cached through TanStack Query, and surfaced through a search, filter, sort, and pagination system that operates simultaneously across all dimensions.

The cart persists across sessions via localStorage and is managed through a reducer-driven context. The application is fully responsive across mobile, tablet, and desktop.

---

## Features

**Product Catalog**
- Product data fetched from Supabase with a relational image structure
- Dynamic routes per product using category and slug — `/product/:category/:slug`
- Product image galleries with WebP optimization and hero image preloading
- Sale and availability indicators
- Skeleton loading states during data fetching

**Search & Discovery**
- Instant search preview while typing
- Filter by category, stone type, size, and price range
- Multiple sorting options
- Search, filtering, sorting, and pagination all work in combination simultaneously

**Shopping Cart**
- Cart persists across page refreshes via localStorage
- Add, remove, and adjust item quantities
- Slide-out cart drawer accessible from anywhere in the app
- Cart state managed globally through Context

**UI & Experience**
- Fully responsive across mobile, tablet, and desktop
- Smooth animations with Framer Motion
- Image carousel with Swiper

---

## Tech Stack

- **React 19** (Vite) — frontend framework
- **Tailwind CSS** — styling
- **Supabase** — PostgreSQL database and storage
- **TanStack Query** — server state management, caching, and loading states
- **React Router** — client-side routing and dynamic product pages
- **Framer Motion** — animations
- **Swiper** — image carousel
- **Vercel** — deployment

---

## Architecture

The core architectural decision was separating server state from client state, as they have different lifecycles and requirements.

**Server State — TanStack Query**

Product data lives in Supabase and is fetched through TanStack Query, which handles caching, loading states, and background refetching automatically. This removes the need to manually manage loading flags or track data freshness throughout the component tree.

**Client State — React Context + useReducer**

Two dedicated contexts handle different concerns:

*Cart Context* manages cart visibility, items, quantities, and localStorage synchronization. Updates are handled through a reducer with actions — `ADD_ITEM`, `REMOVE_ITEM`, `DECREASE_ITEM`, and `CLEAR_CART`. A reducer is well-suited here because cart logic involves several conditions: checking whether an item already exists, incrementing its quantity, or removing it entirely when it reaches zero. Centralizing that logic in one place keeps it predictable and easy to maintain.

*Product Context* manages search, filtering, sorting, and pagination — all of which operate on the same product list. The final displayed list is derived using `useMemo`, running the full dataset through search → filters → sort → pagination in sequence. This ensures that any change to one dimension re-derives the result cleanly without producing conflicts.

---

## Data Model

Products and images are stored in separate tables and joined in a single Supabase query:

```
products
  └── images (linked by product id)
```

Each product contains a name, slug, category, stone type, size options, price, sale status, and availability. Storing images separately allows each product to have multiple photos without duplicating product-level data.

---

## Screenshots
<img width="1905" height="951" alt="ArtsySilver 1" src="https://github.com/user-attachments/assets/1cbd5084-e48e-42e0-ac2f-07a9e8483bd8" />
<img width="1900" height="947" alt="ArtsySilver 2" src="https://github.com/user-attachments/assets/c9113363-d663-4f7d-99f3-de9516b90ced" />
<img width="1903" height="948" alt="ArtsySilver 3" src="https://github.com/user-attachments/assets/ba8f66c0-e660-45a5-b931-b144c3599df7" />
<img width="1918" height="954" alt="ArtsySilver 4" src="https://github.com/user-attachments/assets/cd85f0be-6a54-428b-b5f1-45f3d017bd63" />





---

## Running Locally

```bash
git clone https://github.com/John-Fenhas/ArtsySilver.git
cd ArtsySilver
npm install
npm run dev
```

No environment variables required — the Supabase project is public read-only for the product catalog.

---

## What's Next

- User authentication and accounts
- Wishlist functionality
- A checkout flow
- An admin dashboard for product and inventory management

The long-term goal is to extend ArtsySilver into a complete end-to-end e-commerce platform.

---

## About

A portfolio project. Built by [John Fenhas](https://github.com/John-Fenhas).
