my-portfolio/
├── app/
│   ├── layout.tsx         # Global layout, fonts, SEO metadata
│   ├── page.tsx           # Main assembly of all sections
│   └── globals.css        # Tailwind directives and dark theme variables
├── components/
│   ├── sections/
│   │   ├── hero.tsx       # Value proposition & primary CTAs
│   │   ├── experience.tsx # Internship highlighted as professional tenure
│   │   ├── projects.tsx   # Case study formatted project cards
│   │   ├── skills.tsx     # Categorized tech stack grid
│   │   └── contact.tsx    # Minimalist connection CTA
│   └── ui/                # shadcn/ui generated components (Button, Card, Badge)
├── public/
├── tailwind.config.ts
└── package.json

# 1. Create the Next.js app
npx create-next-app@latest my-portfolio --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"

# 2. Navigate into the project
cd my-portfolio

# 3. Install Framer Motion & Lucide Icons
npm install framer-motion lucide-react

# 4. Initialize shadcn/ui (Select "Default" style and "Slate" base color)
npx shadcn-ui@latest init

# 5. Add required shadcn components
npx shadcn-ui@latest add button card badge
