# AI Genius Platform - Full Stack Application

![Genius Landing Page](https://github.com/helvizar/ai-genius/assets/109710927/356ea049-5f92-4907-9b30-06d33d33026a)
---

### Genius Code Generation
![Genius Code Generator](https://github.com/helvizar/ai-genius/assets/109710927/a94a4b27-d349-43a0-a580-2f811e111477)

This repository contains the code for the AI Genius Platform, a robust Full Stack AI Platform built using Next.js 13, React, Tailwind CSS, Prisma, and Stripe.

Features:

- Modern UI Design with Tailwind CSS
- Stunning Animations and Effects with Tailwind
- Enhanced User Interface using Shadcn UI
- Fully Responsive across devices
- Easy Authentication with Clerk (Email, Google, 9+ Social Logins)
- Client-side Form Validation using react-hook-form
- Server-side Error Handling with react-toast
- AI-Powered Image Generation Tool (Open AI)
- AI-Driven Video Generation Tool (Replicate AI)
- AI-Backed Conversation Generation Tool (Open AI)
- Music Composition using AI (Replicate AI)
- Smooth Page Loading State
- Stripe Monthly Subscription Integration
- Free Tier with API Rate Limiting
- Well-Organized Folder Structure using Next 13 App Router
- Utilizes Node version 18.x.x for optimal performance

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Integrate MySQL Database (Powered by PlanetScale)

```shell
npx prisma db push

```

### Getting Started

To start the app, use the following command:

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
