# Threaded Dreams by Femmora

A modern, elegant e-commerce website showcasing handcrafted silk thread bangles and accessories. Built with React, TypeScript, and Tailwind CSS, featuring a luxurious user experience with smooth animations and responsive design.

🔗 **Live Site**: [https://threadeddreams.netlify.app/](https://threadeddreams.netlify.app/)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)
![React](https://img.shields.io/badge/React-18.3.1-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178c6.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.18-38bdf8.svg)

## ✨ Features

### 🎨 Premium Design

- **Luxury Aesthetic**: Sophisticated color palette with gold accents and elegant typography
- **Smooth Animations**: Glassmorphism effects, fade-ins, and micro-interactions
- **Responsive Layout**: Optimized for mobile, tablet, and desktop viewing
- **Dark Mode Ready**: Premium dark color scheme with high contrast

### 🛍️ Product Showcase

- **Category Pages**: Dedicated sections for Bangles, Clips & Accessories, and All Accessories
- **New Arrivals**: Interactive modal highlighting latest products
- **Product Cards**: High-quality images with hover effects and "NEW" badges
- **Image Optimization**: Lazy loading and responsive images for fast performance

### 🔧 User Experience

- **Fast Navigation**: Client-side routing with React Router
- **Lazy Loading**: Code-splitting for optimal initial load time
- **Loading States**: Custom logo loader with smooth transitions
- **Back to Top**: Smooth scroll-to-top button for easy navigation
- **Contact Form**: WhatsApp integration for instant customer communication

### 📱 Responsive Features

- **Mobile-First**: Designed for mobile with progressive enhancement
- **Touch-Friendly**: Large tap targets and intuitive gestures
- **Adaptive Footer**: Context-aware footer layout (desktop vs mobile)

## 🚀 Tech Stack

### Core

- **React 18.3.1** - Modern UI library with hooks and concurrent features
- **TypeScript 5.5.3** - Type-safe development
- **Vite 7.2.6** - Lightning-fast build tool and dev server

### Styling

- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **Tailwind Typography** - Beautiful typographic defaults
- **Tailwind Animate** - Pre-built animation utilities
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes

### UI Components

- **Radix UI** - Accessible, unstyled component primitives
  - Tooltip component for enhanced UX
- **Lucide React** - Beautiful, consistent icon set
- **React Icons** - Additional icon library (social media icons)

### State & Data

- **TanStack Query (React Query)** - Server state management and caching
- **React Router DOM 6.26.2** - Client-side routing

### Developer Experience

- **ESLint** - Code linting with React hooks and TypeScript rules
- **SWC** - Fast TypeScript/JSX compilation
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📦 Project Structure

```
website_threaded_dreams/
├── public/                      # Static assets
│   ├── images/                  # Product images and logo
│   ├── videos/                  # Background videos
│   ├── bangles/                 # Bangle product images
│   ├── clips/                   # Clips & accessories images
│   ├── sets/                    # Jewelry sets images
│   └── favicon/                 # Favicon files
├── src/
│   ├── assets/                  # Source assets
│   │   ├── categories/          # Category images
│   │   └── instagram/           # Instagram feed images
│   ├── components/              # React components
│   │   ├── ui/                  # Reusable UI components
│   │   ├── Header.tsx           # Site header with navigation
│   │   ├── Footer.tsx           # Site footer with links
│   │   ├── Hero.tsx             # Homepage hero section
│   │   ├── About.tsx            # About section
│   │   ├── Craftsmanship.tsx    # Craftsmanship showcase
│   │   ├── NewArrivalModal.tsx  # New arrivals popup
│   │   ├── SuccessModal.tsx     # Success feedback modal
│   │   ├── LogoLoader.tsx       # Loading screen
│   │   ├── ScrollToTop.tsx      # Auto scroll on route change
│   │   └── BackToTop.tsx        # Scroll to top button
│   ├── pages/                   # Route pages
│   │   ├── Home.tsx             # Homepage
│   │   ├── Bangles.tsx          # Bangles catalog
│   │   ├── Clips.tsx            # Clips & accessories
│   │   ├── Accessories.tsx      # All accessories
│   │   ├── Contact.tsx          # Contact form
│   │   └── Legal.tsx            # Privacy, terms, cookies
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility functions
│   ├── App.tsx                  # Root component
│   ├── main.tsx                 # App entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── tailwind.config.ts           # Tailwind configuration
├── vite.config.ts               # Vite configuration
└── eslint.config.js             # ESLint rules
```

## 🎨 Customization

### Colour Scheme

The website uses a custom color palette defined in `tailwind.config.ts`:

- **Primary**: Deep purple (`#2D1B4E`) - Main brand color
- **Accent**: Rich gold (`#C9A56A`) - Highlights and CTAs
- **Background**: Off-white (`#FAF8F5`) - Page background
- **Card**: Pure white with subtle shadows

### Typography

- **Headings**: Playfair Display (serif) - Elegant and classic
- **Body**: Inter (sans-serif) - Clean and modern

### Adding Products

Products are defined in their respective page files:

- **Bangles**: `src/pages/Bangles.tsx`
- **Clips**: `src/pages/Clips.tsx`
- **Accessories**: `src/pages/Accessories.tsx`

## 📸 Screenshots

### Homepage

![Homepage Hero](public/images/logo-new.jpg)

### Product Categories

- Handcrafted Bangles
- Clips & Accessories
- Designer Sets

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Logesh Kanagaraj**

- Hub: [Techwithloki Hub](https://logeshkanagarajcard.netlify.app/)
- Instagram: [@threaded_dreamsby_femmora](https://www.instagram.com/threaded_dreamsby_femmora/)
- LinkedIn: [Logesh Kanagaraj](https://www.linkedin.com/in/logeshkanagaraj/)

## 🙏 Acknowledgments

- Product photography by Femmora
- Icons by [Lucide](https://lucide.dev/)
- UI components inspired by [Radix UI](https://www.radix-ui.com/)
- Design inspiration from modern luxury jewellery brands

---

<div align="center">
  Made with ❤️ at Techwithloki Hub by Logesh Kanagaraj
</div>
