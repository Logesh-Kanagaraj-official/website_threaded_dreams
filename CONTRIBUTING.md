# Contributing to Threaded Dreams

Thank you for your interest in contributing to Threaded Dreams! This document provides guidelines and instructions for contributing to the project.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Git
- A code editor (VS Code recommended)

### Setup Development Environment

1. **Fork and clone the repository**

   ```bash
   git clone https://github.com/yourusername/website_threaded_dreams.git
   cd website_threaded_dreams
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Run linter**
   ```bash
   npm run lint
   ```

## 📝 Code Style

### TypeScript Guidelines

- Use TypeScript for all new files
- Define proper interfaces for props and data structures
- Avoid `any` types - use proper typing
- Use functional components with hooks

### React Best Practices

- Use functional components with React hooks
- Keep components small and focused (single responsibility)
- Use `memo()` for expensive components that don't change often
- Implement proper lazy loading for routes

### Styling

- Use Tailwind CSS utility classes
- Follow the existing color scheme and design system
- Ensure responsive design (mobile-first approach)
- Test on multiple screen sizes

### Code Formatting

- Use consistent indentation (2 spaces)
- Add JSDoc comments for complex functions
- Keep lines under 100 characters when possible
- Use meaningful variable and function names

## 🌿 Branch Naming

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `style/description` - UI/styling changes

## 📬 Commit Messages

Follow conventional commits format:

```
type(scope): subject

body (optional)
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Maintenance tasks

Examples:

```
feat(products): add new product filtering
fix(header): resolve mobile menu overflow
docs(readme): update installation instructions
```

## 🔄 Pull Request Process

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**

   - Write clean, documented code
   - Follow the code style guidelines
   - Test your changes thoroughly

3. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add amazing new feature"
   ```

4. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**
   - Provide a clear description of changes
   - Reference any related issues
   - Include screenshots for UI changes
   - Ensure all checks pass

### PR Requirements

- ✅ Code follows style guidelines
- ✅ No TypeScript errors
- ✅ ESLint passes with no warnings
- ✅ All functionality tested manually
- ✅ Responsive design verified
- ✅ No console errors in browser

## 🐛 Bug Reports

When reporting bugs, include:

- **Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps to reproduce
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Screenshots**: If applicable
- **Environment**: Browser, OS, screen size

## 💡 Feature Requests

For feature suggestions:

- Describe the feature clearly
- Explain the use case and benefits
- Provide examples or mockups if possible
- Discuss potential implementation approach

## 🧪 Testing

### Manual Testing Checklist

- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile devices (iOS and Android)
- [ ] Test on different screen sizes
- [ ] Verify all links work
- [ ] Check for console errors
- [ ] Test loading states
- [ ] Verify WhatsApp integration
- [ ] Test navigation between pages

### Areas to Test

- Product page layouts
- Contact form submission
- New arrival modal
- Responsive navigation
- Footer links
- Image loading and optimization
- Scroll animations

## 📁 Project Organization

### Adding New Products

1. Add product images to appropriate `public/` subdirectory
2. Update the product array in the relevant page (`Bangles.tsx`, `Clips.tsx`, or `Accessories.tsx`)
3. Follow the existing product object structure
4. Optimize images before adding (recommended: WebP format, max 1MB)

### Adding New Pages

1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`
4. Add lazy loading for performance

### Modifying Components

- Keep shared components in `src/components/`
- Keep reusable UI primitives in `src/components/ui/`
- Document complex props with JSDoc comments

## 🎨 Design System

### Colors

- Primary: `#2D1B4E` (Deep purple)
- Accent: `#C9A56A` (Gold)
- Background: `#FAF8F5` (Off-white)

### Typography

- Headings: Playfair Display
- Body: Inter

### Spacing

Follow Tailwind's spacing scale (4px base unit)

## ❓ Questions?

If you have questions:

- Check existing documentation
- Review closed issues and PRs
- Open a discussion on GitHub
- Contact the maintainers

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Threaded Dreams! 🎉
