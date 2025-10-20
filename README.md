# Built By Drew - Portfolio Website

A modern, single-page portfolio website showcasing fitness coaching services and client transformations.

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** TailwindCSS
- **UI Components:** Shadcn/UI
- **TypeScript:** Strict mode for type safety
- **Fonts:** Inter (via next/font)

## 📁 Project Structure

```
src/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Main homepage
│   └── globals.css              # Global styles and theme
├── components/
│   ├── sections/                # Page sections
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── services-section.tsx
│   │   ├── transformations-section.tsx
│   │   ├── testimonials-section.tsx
│   │   └── contact-section.tsx
│   ├── ui/                      # Reusable UI components
│   │   ├── transformation-card.tsx
│   │   ├── section-wrapper.tsx
│   │   └── [shadcn components]
│   └── layout/                  # Layout components
│       ├── navigation.tsx
│       └── footer.tsx
├── lib/
│   ├── types/                   # TypeScript interfaces
│   │   └── index.ts
│   └── data/                    # ⭐ DATA FILES (EDIT THESE)
│       ├── clients.ts           # Client transformations
│       ├── services.ts          # Services offered
│       └── site-config.ts       # Site info and social links
└── public/
    ├── clients/                 # Client before/after images
    └── andrew-coach.jpg         # Hero image
```

## 📝 How to Add New Client Transformations

### Step 1: Add Images

1. Add client images to `public/clients/`
2. Use naming convention: `[name]before.jpg` and `[name]after.jpg`
   - Example: `johnbefore.jpg`, `johnafter.jpg`

### Step 2: Update Client Data

Edit `src/lib/data/clients.ts` and add a new object to the array:

```typescript
{
  id: 'john',                           // Unique identifier
  name: 'John',                         // Client's first name
  beforeImage: '/clients/johnbefore.jpg',
  afterImage: '/clients/johnafter.jpg',
  timeframe: '12 weeks',                // How long it took
  stats: {
    weightChange: '-25 lbs',            // Optional
    muscleGain: '+8 lbs',               // Optional
    bodyFatLoss: '-8%',                 // Optional
  },
  goal: 'Weight Loss & Muscle Gain',    // Primary goal
  testimonial: 'Andrew helped me transform my life!',
  program: 'Custom Training + Nutrition Plan',
},
```

### Step 3: Save and Test

The website will automatically update with the new transformation!

## 🎨 Customization

### Update Site Information

Edit `src/lib/data/site-config.ts`:

```typescript
export const siteConfig: SiteConfig = {
  name: "Andrew Vinz Ganon",
  title: "Page title for SEO",
  description: "Description for SEO",
  tagline: "Hero section headline",
  social: {
    instagram: "https://instagram.com/yourusername",
    facebook: "https://facebook.com/yourusername",
    email: "your@email.com",
    phone: "+1 (555) 123-4567",
  },
};
```

### Update Services

Edit `src/lib/data/services.ts` to modify service offerings.

### Update Colors

The color scheme (black/red/white) is defined in `src/app/globals.css`:

- Primary color: `--primary` (orange-red)
- Background: `--background` (white/black based on theme)
- All colors use OKLCH format for better color accuracy

## 🚀 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Features

- **Responsive Design:** Looks great on all devices
- **Interactive Transformations:** Slide to reveal before/after images
- **Smooth Scrolling:** Navigate between sections seamlessly
- **Optimized Images:** Automatic image optimization with Next.js
- **SEO Ready:** Proper metadata and semantic HTML
- **Accessible:** WCAG compliant with keyboard navigation
- **Dark Mode:** Automatic dark mode support

## 🎯 Sections

1. **Hero:** Full-screen landing with CTA buttons
2. **About:** Your story, credentials, and stats
3. **Services:** 6 service cards with large emojis and descriptions
4. **Transformations:** Side-by-side before/after showcase
5. **Testimonials:** Client feedback and results
6. **Contact:** Contact form and social links

## 📊 Client Transformation Card Features

Each transformation card includes:

- **Side-by-side before/after images** with clear visual comparison
- **Arrow indicator** between images for visual flow
- **Colored accent bar** at the bottom of images
- **Client name** with large, bold typography
- **Goal indicator** with lightning bolt icon
- **Timeframe badge** with primary color styling
- **Stats badges** showing weight change, muscle gain, and body fat loss
- **Program information** with checkmark icon

## 🔧 Technical Details

- **Type Safety:** Full TypeScript coverage
- **Performance:** Optimized images and code splitting
- **Accessibility:** Semantic HTML and ARIA labels
- **SEO:** Open Graph tags and metadata
- **Animations:** Smooth transitions and hover effects

## 📄 License

This is a custom portfolio website for Built By Drew.

## 🤝 Support

For questions or issues, contact the developer or refer to the [Next.js documentation](https://nextjs.org/docs).
