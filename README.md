# 🚀 Siddharth Bhople - Portfolio Website

A modern, responsive portfolio website showcasing my skills in Full-Stack Development and Machine Learning. Built with React, Vite, and Tailwind CSS.

## 🌐 Live Demo

**🔗 [View Live Portfolio](https://sid-array.github.io/portfolio/)**

The portfolio is currently deployed and live on GitHub Pages.

## ✨ Features

- **Modern Design**: Clean, professional UI with neon accents and glass morphism effects
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Animations**: Smooth transitions and hover effects using Framer Motion
- **Contact Form**: Functional contact form with EmailJS integration
- **Project Showcase**: Detailed project cards with live demos and GitHub links
- **Skills Section**: Interactive skill categories with progress indicators
- **Experience Timeline**: Professional experience with detailed descriptions
- **Dark Theme**: Sleek dark theme with neon color scheme

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Font Awesome)
- **Email Service**: EmailJS
- **Deployment**: Vercel/Netlify

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx          # About section
│   ├── Contact.jsx        # Contact form with EmailJS
│   ├── Experience.jsx     # Professional experience
│   ├── Footer.jsx         # Footer component
│   ├── Hero.jsx           # Landing section
│   ├── LoadingScreen.jsx  # Loading animation
│   ├── Navbar.jsx         # Navigation bar
│   ├── ParticleBackground.jsx # Animated background
│   ├── Projects.jsx       # Project showcase
│   └── Skills.jsx         # Skills section
├── config/
│   └── emailjs.js         # EmailJS configuration
├── App.jsx                # Main app component
├── main.jsx              # App entry point
└── index.css             # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SiD-array/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS (Optional)**
   - Follow the instructions in `EMAILJS_SETUP.md`
   - Update `src/config/emailjs.js` with your credentials

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`

## 📧 Contact Form Setup

The contact form uses EmailJS to send emails directly from the frontend. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Update the configuration in `src/config/emailjs.js`

Detailed setup instructions are available in `EMAILJS_SETUP.md`.

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Primary: Neon Cyan (`#00FFCC`)
- Secondary: Neon Purple (`#7B61FF`)
- Background: Dark theme with gradients

### Content
Update the following files to customize your content:
- `src/components/Hero.jsx` - Personal introduction
- `src/components/About.jsx` - About section
- `src/components/Projects.jsx` - Your projects
- `src/components/Experience.jsx` - Work experience
- `src/components/Skills.jsx` - Your skills
- `src/components/Contact.jsx` - Contact information

## 🚀 Deployment

### GitHub Pages (Current Deployment)
The portfolio is currently deployed on GitHub Pages and is live at:
**https://sid-array.github.io/portfolio/**

#### Manual Deployment to GitHub Pages:
```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

#### GitHub Actions Deployment:
The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys when you push to the main branch.

### Alternative Deployment Options

#### Vercel
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

#### Netlify
1. Push your code to GitHub
2. Connect your repository to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎯 Performance Features

- **Lazy Loading**: Components load as needed
- **Optimized Images**: Compressed and responsive images
- **Code Splitting**: Automatic code splitting with Vite
- **Fast Loading**: Optimized bundle size and loading times

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/SiD-array/portfolio/issues).

## 📞 Contact

**Siddharth Bhople**
- Email: sid.work0403@gmail.com
- LinkedIn: [siddharth-bhople](https://linkedin.com/in/siddharth-bhople)
- GitHub: [SiD-array](https://github.com/SiD-array)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [EmailJS](https://www.emailjs.com/) - Email service
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

---

⭐ **Star this repository if you found it helpful!**
