# 👨🏻‍💻 Code Forge - Code Editor on Web ⭐

[View the Live App](https://code-forge-ten.vercel.app/)

Highlights:

- 🚀 **Tech Stack**: Next.js 15, Convex, Clerk, TypeScript  
- 💻 **Multi-Language IDE**: Supports 10 programming languages  
- 🎨 **Custom Themes**: 5 VSCode-inspired themes  
- ✨ **Smart Output**: Handles Success & Error states dynamically  
- 💎 **Flexible Pricing**: Free & Pro subscription plans  
- 🤝 **Code Sharing**: Community-driven sharing system  
- 🔍 **Advanced Search**: Filter and find code efficiently  
- 👤 **Profiles**: Track execution history and activity  
- 📊 **Stats Dashboard**: Visualize usage and performance  
- ⚙️ **Font Controls**: Adjustable font size for better readability  
- 🔗 **Webhooks**: Integration-ready for external systems 

### Setup .env file

```js
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=CONVEX_DEPLOYMENT_URL_HERE
NEXT_PUBLIC_CONVEX_URL=CONVEX_URL_HERE


NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=CLERK_PUBLISHABLE_KEY_HERE
CLERK_SECRET_KEY=CLERK_SECRET_KEY_HERE
NEXT_PUBLIC_CLERK_ISSUER_URL=CLERK_ISSUER_URL_HERE #ends with '.dev'
CLERK_WEBHOOK_SECRET=CLERK_WEBHOOK_SECRET_HERE

LEMON_SQUEEZY_WEBHOOK_SECRET=YOUR_STRONG_CHOSEN_SECRET_VALUE_HERE
NEXT_PUBLIC_LEMON_SQUEEZY_CHECKOUT_URL=LEMON_SQUEEZY_CHECKOUT_PAGE_URL_HERE
```

### Add these .env to [Convex](https://www.convex.dev/) Dashboard

```js
CLERK_WEBHOOK_SECRET=
LEMON_SQUEEZY_WEBHOOK_SECRET=
```

### Run the app

```shell
npm run dev
```
