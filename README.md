# Next.js E-Commerce App

A project of an e-commerce application built with Next.js

## Brief Description

E-Commerce App where users can create accounts, add products to their cart, place orders, and make payments using Stripe. Users also have access to their order history and add product review. Additionaly user can sort products based on price, name or rating

## Tech Stack

- Next.js
- GraphQL
- Stripe
- Atomic Design
- Tailwind CSS
- GraphQL Codegen
- Clerk

## Live Demo

Check out the live demo of the application: [Live Demo](https://next13-ecommerce-five.vercel.app/)

## Screenshots

### Homepage![homepage](https://www.tarabasz.dev/_next/image?url=/img/ecom1.png&w=1080&q=75)

### Products![homepage](https://www.tarabasz.dev/_next/image?url=/img/ecom2.png&w=1080&q=75)

### Single product![homepage](https://www.tarabasz.dev/_next/image?url=/img/ecom3.png&w=1080&q=75)

### Shopping Cart![homepage](https://www.tarabasz.dev/_next/image?url=/img/ecom4.png&w=1080&q=75)

## Environment Variables (`.env.local`)

Before running the application, make sure you have correctly configured the environment variables. Fill in the following variables in the `.env` file:

```env

GRAPHQL_URL= // GraphQL server URL

STRIPE_SECRET_KEY= // Stripe  private  key  for  integration

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= // Clerk  public  key  for  integration

CLERK_SECRET_KEY= // Clerk  private  key  for  integration

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in // Clerk  login  path

NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up // Clerk  registration  path

NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL= // Redirect  URL  after  Clerk  sign-in

NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL= // Redirect  URL  after  Clerk  sign-up

NEXT_PUBLIC_URL= // Public  URL  of  the  application

```

## Installation and running the app

```
pnpm i
pnpm dev
```

## [GraphQL Server](https://github.com/jjxmonster/graphql-server-ecommerce)
