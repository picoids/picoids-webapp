# Picoids Technology and Consulting - Website

A modern, high-performance Next.js website for Picoids Technology and Consulting Pvt. Ltd., showcasing innovative technology solutions and services.

## 🚀 Features

- **Modern Design**: Clean, professional design with excellent UX/UI
- **Responsive**: Fully responsive across all devices and screen sizes
- **SEO Optimized**: Built with SEO best practices and metadata
- **Fast Performance**: Optimized for speed with Next.js 15 and modern techniques
- **Accessibility**: WCAG-compliant design and functionality
- **Lead Generation**: Contact forms and CTAs throughout the site
- **Content Management**: Blog/insights section for content marketing

## 📋 Pages & Sections

### Core Pages

- **Homepage** (`/`) - Hero section, services overview, testimonials, latest insights
- **Services** (`/services`) - All service offerings with detailed descriptions
- **About Us** (`/about`) - Company story, mission, values, team
- **Case Studies** (`/case-studies`) - Success stories and project showcases
- **Blog/Insights** (`/blog`) - Articles, trends, and industry insights
- **Contact** (`/contact`) - Contact form and company information

### Service Pages

- **Cloud Services** (`/services/cloud-services`)
- **Application Development** (`/services/application-development`)
- **AI Integration** (`/services/ai-integration`)
- And more individual service pages...

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Inter (Google Fonts)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd picoids-webapp
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
picoids-webapp/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   ├── services/           # Service pages
│   │   ├── page.tsx        # Main services page
│   │   └── [slug]/         # Individual service pages
│   ├── about/              # About page
│   ├── case-studies/       # Case studies page
│   ├── blog/               # Blog/insights page
│   ├── contact/            # Contact page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── public/                 # Static assets
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Design System

### Colors

- **Primary**: Blue (#2563eb)
- **Secondary**: Gray (#64748b)
- **Accent**: Orange (#f59e0b)
- **Background**: White (#ffffff)
- **Text**: Dark Gray (#0f172a)

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights for hierarchy
- **Body**: Regular weight for readability

### Components

- **Buttons**: Primary and secondary variants
- **Cards**: Consistent spacing and shadows
- **Forms**: Accessible form elements
- **Navigation**: Sticky header with dropdown menus

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:

- Responsive navigation with mobile menu
- Flexible grid layouts
- Optimized typography scaling
- Touch-friendly interactive elements

## 🔍 SEO Features

- Meta tags and descriptions for all pages
- Open Graph tags for social sharing
- Semantic HTML structure
- Optimized page titles and headings
- Fast loading times
- Mobile-friendly design

## 📊 Performance

- Next.js 15 with App Router for optimal performance
- Optimized images and assets
- Lazy loading for better user experience
- Minimal bundle size
- Fast page transitions

## 🛡️ Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Semantic HTML elements
- ARIA labels where needed

## 📧 Contact Forms

The contact page includes a comprehensive form with:

- Name, email, phone, company fields
- Service selection dropdown
- Message textarea
- Form validation
- Success/error states
- Email integration ready

## 🔧 Customization

### Adding New Services

1. Add service data to the services object in `/app/services/[slug]/page.tsx`
2. Update navigation links in `/app/components/Header.tsx`
3. Add service to the main services page

### Styling Changes

- Modify `app/globals.css` for global styles
- Update Tailwind classes in components
- Custom CSS variables in `:root` selector

### Content Updates

- Update text content directly in component files
- Modify metadata in page components
- Update contact information in footer and contact page

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with zero configuration

### Other Platforms

- Build the project: `npm run build`
- Deploy the `out` directory to your hosting provider

## 📈 Analytics & Monitoring

Ready for integration with:

- Google Analytics
- Google Search Console
- Hotjar for user behavior
- Error monitoring services

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Picoids Technology and Consulting Pvt. Ltd.

## 📞 Support

For technical support or questions about the website:

- Email: info@picoids.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ by the Picoids Technology team
