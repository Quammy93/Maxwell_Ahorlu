# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js and Tailwind CSS.

## Features

- **Hero Section** - Professional introduction with animated background
- **About Me** - Detailed biography and personal highlights
- **Skills** - Interactive skill showcase with progress indicators
- **Portfolio** - Project gallery with hover effects and technology tags
- **Resume** - CV download functionality with preview option
- **Certificates** - Professional certifications and achievements display
- **Contact** - Functional contact form with validation
- **Footer** - Social links and quick navigation

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information
- Update personal details in all components
- Replace placeholder images with your own photos
- Add your actual resume PDF to the `public` folder

### Content
- Modify the hero section text in `app/components/Hero.tsx`
- Update your biography in `app/components/About.tsx`
- Add your actual skills and proficiency levels in `app/components/Skills.tsx`
- Replace project examples with your own work in `app/components/Portfolio.tsx`
- Update certificates and achievements in `app/components/Certificates.tsx`

### Styling
- Customize colors in Tailwind classes
- Modify gradients and animations
- Adjust responsive breakpoints as needed

## Deployment

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d out"`
3. Build and deploy: `npm run build && npm run deploy`

### Vercel
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify

## Project Structure

```
├── app/
│   ├── components/          # React components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Resume.tsx
│   │   ├── Certificates.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── public/                  # Static assets
├── next.config.js           # Next.js configuration
└── tailwind.config.js       # Tailwind configuration
```

## License

This project is open source and available under the [MIT License](LICENSE).