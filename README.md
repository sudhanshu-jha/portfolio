# 🌟 3D Portfolio - Sudhanshu Shekhar Jha

> A stunning, interactive 3D portfolio built with React 19 and modern web technologies, featuring comprehensive 3D animations, glass morphism effects, and particle systems.

[![React](https://img.shields.io/badge/React-19.1.1-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Latest-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

## 🚀 Live Demo

**[View Portfolio Live](https://sudhanshujha.vercel.app/)**

## ✨ Key Features

### 🎯 **Comprehensive 3D Design System**
- **3D Transformations**: Perspective transforms, rotations, and translateZ effects across all components
- **Glass Morphism**: Modern transparent design with backdrop filters and subtle borders
- **Interactive Animations**: Hover effects, floating elements, and smooth transitions
- **Particle System**: Dynamic background particles with interactive mouse effects

### 📱 **Multi-Page Experience**
- **🏠 Home**: 3D hero section with floating animations and parallax effects
- **👤 About**: Interactive skill cards and animated personal introduction
- **🚀 Projects**: 3D project showcases with sequential entrance animations
- **🛍️ Products**: Premium product catalog with advanced card interactions
- **📄 Resume**: PDF viewer with download functionality

### 🎨 **Modern UI/UX**
- **Purple Gradient Theme**: Consistent #c084f5 to #7c3aed color scheme
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Typography**: Custom gradient text effects with shadows and depth
- **Loading States**: Smooth preloader with 3D animations

## 🛠 Built With

### **Frontend Technologies**
- **React 19.1.1** - Latest React with createRoot API
- **React Router 7.9.3** - Advanced routing with data loading
- **React Bootstrap 2.10.6** - Responsive component library
- **React Parallax Tilt 1.7.251** - 3D tilt effects
- **@tsparticles/react 3.0.0** - Interactive particle system

### **Development Tools**
- **Node.js** - Runtime environment
- **npm** - Package management
- **VS Code** - Development IDE
- **Git** - Version control

### **Styling & Animation**
- **CSS3** - Modern styling with transforms and animations
- **Glass Morphism** - Backdrop filters and transparency effects
- **3D Transforms** - Perspective, rotateX/Y/Z, translateZ
- **Gradient Text** - WebKit background clip effects

## 🎭 3D Effects Showcase

### **Homepage**
- Floating hero section with perspective transforms
- 3D text with gradient effects and shadows
- Parallax tilt components with glare effects
- Animated social icons with hover rotations

### **About Page**
- Cascading entrance animations (slideInLeft, slideInUp, slideInRight)
- Interactive tech stack icons with 3D hover effects
- Glass morphism cards with backdrop blur
- Animated GitHub activity section

### **Projects Page**
- Sequential 3D card animations with staggered timing
- Glass morphism project cards with image scaling
- Interactive buttons with translateZ transforms
- Dynamic shadow effects on hover

### **Products Page**
- Premium product showcase with 6 featured items
- Advanced ProductCard components with multiple 3D layers
- Category badges with gradient backgrounds
- Feature tags with hover animations

### **Footer**
- Aligned 3D sections with consistent dimensions
- Shimmer effect animation on top border
- Interactive social icons with individual rotations
- Glass morphism containers with purple theming

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sudhanshu-jha/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── About/
│   │   ├── About.js           # Main about page with 3D effects
│   │   ├── AboutCard.js       # Interactive personal card
│   │   ├── Techstack.js       # 3D tech skill icons
│   │   ├── Toolstack.js       # 3D tool icons
│   │   └── Github.js          # GitHub activity section
│   ├── Home/
│   │   ├── Home.js            # 3D hero section
│   │   ├── Home2.js           # Secondary home content
│   │   └── Type.js            # Typing animation
│   ├── Projects/
│   │   ├── Projects.js        # Projects showcase page
│   │   └── ProjectCards.js    # 3D project cards
│   ├── Products/
│   │   ├── Products.js        # Products catalog page
│   │   └── ProductCard.js     # Advanced 3D product cards
│   ├── Resume/
│   │   └── ResumeNew.js       # PDF resume viewer
│   ├── Footer.js              # 3D footer with aligned sections
│   ├── Navbar.js              # Navigation with 3D effects
│   └── Particle.js            # Interactive particle system
├── Assets/                    # Images and static files
└── style.css                  # Global styles and animations
```

## 🎨 Customization Guide

### **Colors & Themes**
The portfolio uses a consistent purple gradient theme. To customize:

```css
/* Primary Colors */
--primary-purple: #c084f5;
--secondary-purple: #7c3aed;
--background-dark: rgba(20, 20, 20, 0.95);
--glass-background: rgba(255, 255, 255, 0.05);
```

### **3D Effects**
Customize 3D transforms in component styles:

```css
/* Example 3D Transform */
transform: perspective(1000px) translateZ(20px) rotateY(-5deg);
transition: transform 0.3s ease;
```

### **Content Updates**
1. **Personal Information**: Update `src/components/Home/Home.js` and `src/components/About/AboutCard.js`
2. **Projects**: Modify projects array in `src/components/Projects/Projects.js`
3. **Products**: Update products data in `src/components/Products/Products.js`
4. **Skills**: Edit tech stack in `src/components/About/Techstack.js`

## 📱 Responsive Design

- **Desktop**: Full 3D effects with advanced animations
- **Tablet**: Optimized 3D transforms for touch interfaces
- **Mobile**: Simplified animations with maintained functionality

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
3. Deploy automatically on push to main branch

### **Other Platforms**
- **Netlify**: Drag and drop `build` folder
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload `build` folder to S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vercel** for seamless deployment
- **TSParticles** for beautiful particle effects
- **React Bootstrap** for responsive components
- **Claude Code** for development assistance

## 📞 Contact

**Sudhanshu Shekhar Jha**
- 🌐 **Portfolio**: [sudhanshujha.vercel.app](https://sudhanshujha.vercel.app/)
- 💼 **LinkedIn**: [linkedin.com/in/sudhanshu-jha](https://www.linkedin.com/in/sudhanshu-jha/)
- 🐱 **GitHub**: [github.com/sudhanshu-jha](https://github.com/sudhanshu-jha)
- 🐦 **Twitter**: [@Sudhanshujha91](https://x.com/Sudhanshujha91)

---

⭐ **Star this repository if you found it helpful!**

> Built with ❤️ and lots of ☕ by Sudhanshu Shekhar Jha