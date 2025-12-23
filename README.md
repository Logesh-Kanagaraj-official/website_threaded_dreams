# Threaded Dreams by Femmora

A modern, elegant e-commerce website showcasing handcrafted silk thread bangles and accessories. Built with React, TypeScript, and Tailwind CSS, featuring a luxurious user experience with smooth animations and responsive design.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
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

## 🛠️ Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **bun** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/website_threaded_dreams.git
   cd website_threaded_dreams
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:8080`

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server with hot module replacement (HMR).

### Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory.

```bash
npm run build:dev
```

Creates a development build (useful for debugging production issues).

### Preview

```bash
npm run preview
```

Preview the production build locally before deployment.

### Lint

```bash
npm run lint
```

Run ESLint to check code quality and enforce coding standards.

## 🎨 Customization

### Color Scheme

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

Product format:

```typescript
{
  title: "Product Name",
  image: "/path/to/image.jpg",
  description: "Product description",
  isNewArrival: true // Optional: marks as "NEW"
}
```

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Deploy!

The `public/_redirects` file handles client-side routing for SPAs.

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

## 🔧 Configuration

### Path Aliases

TypeScript path aliases are configured in `tsconfig.json`:

```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

Use `@/` to import from the `src` directory:

```typescript
import Header from "@/components/Header";
```

### Vite Configuration

- React plugin with SWC for fast compilation
- Path resolution for `@/` aliases
- Development server runs on port 8080

### Tailwind Configuration

- Custom color palette
- Extended animations
- Typography plugin for rich text
- Optimized for production with PurgeCSS

## 📸 Screenshots

### Homepage

![Homepage Hero](public/images/logo-new.jpg)

### Product Categories

- Handcrafted Bangles
- Clips & Accessories
- Designer Sets

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Logesh Kanagaraj**

- Website: [Techwithloki Hub](https://techwithloki.com)
- Instagram: [@threaded_dreamsby_femmora](https://www.instagram.com/threaded_dreamsby_femmora/)
- LinkedIn: [Santhiya Chandru](https://www.linkedin.com/in/santhiyachandru/)

## 🙏 Acknowledgments

- Product photography by Femmora
- Icons by [Lucide](https://lucide.dev/)
- UI components inspired by [Radix UI](https://www.radix-ui.com/)
- Design inspiration from modern luxury jewelry brands

---

<div align="center">
  Made with ❤️ at Techwithloki Hub by Logesh Kanagaraj
</div>
