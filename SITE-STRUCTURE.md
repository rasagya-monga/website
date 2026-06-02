# Amvent Consulting — Website Revamp: Site Structure & Strategy

## Sitemap

```
/ (Home)
├── /about-us
├── /services
│   ├── /services/pigment-implementation
│   ├── /services/connected-planning
│   └── /services/platform-migration
├── /blog (existing content — keep all posts)
├── /case-studies (new)
├── /contact-us
└── /book-a-call (new — calendly/cal.com embed)
```

## Navigation

**Desktop:** Logo (left) | Services (dropdown) | About | Blog | Case Studies | **Book a Call** (CTA button, right)

**Mobile:** Logo (left) | Hamburger (right) → full-screen overlay menu

---

## Page-by-Page Blueprint

### 1. Home Page `/`

| Section | Purpose |
|---------|---------|
| **Hero** | Bold value prop + CTA. Full-width, dark background. |
| **Logos / Trust Bar** | "Trusted by teams at..." — client/partner logos (Pigment badge prominent) |
| **Problem → Solution** | 3-column: the planning problem, the Amvent approach, the outcome |
| **Services Overview** | 3 cards linking to service detail pages |
| **Why Amvent** | Differentiators: Pigment-native expertise, hands-on founder, white-glove service |
| **Testimonial** | Single strong quote, large format |
| **Blog Highlights** | 3 latest posts, auto-pulled via Framer CMS |
| **CTA Banner** | "Ready to fix your planning?" + Book a Call button |
| **Footer** | Links, contact info, social, Pigment partner badge |

### 2. About Us `/about-us`

| Section | Purpose |
|---------|---------|
| **Mission Statement** | Who we are and why we exist |
| **Founder Story** | Rasagya's journey: Gusto EPM transformation → founding Amvent |
| **Values** | 3-4 core values with icons |
| **Pigment Partnership** | Official partner badge, what it means for clients |

### 3. Services `/services`

Landing page with 3 service cards, each linking to a detail page:

#### 3a. Pigment Implementation `/services/pigment-implementation`
- End-to-end Pigment setup
- Access management, dimension design, sparsity optimization
- Typical engagement timeline

#### 3b. Connected Planning Advisory `/services/connected-planning`
- Strategic roadmap for unified planning
- Cross-functional alignment (FP&A, Sales, Ops)
- From fragmented spreadsheets to single source of truth

#### 3c. Platform Migration `/services/platform-migration`
- Migration from Anaplan, Adaptive, or spreadsheets to Pigment
- Data migration, user training, change management
- Proven playbook (200+ user migration at Gusto)

### 4. Blog `/blog`
- Keep existing 7 posts
- Grid layout with featured post hero
- Categories: Planning Strategy, Pigment Tips, Industry Insights

### 5. Case Studies `/case-studies` (new)
- Template for future case studies
- Format: Challenge → Approach → Results → Quote

### 6. Contact `/contact-us`
- Contact form (name, email, company, message)
- Direct email: info@amventconsulting.com
- Phone: +1 (647) 676-2039
- Location: Toronto, Canada

### 7. Book a Call `/book-a-call`
- Embedded scheduling widget (Calendly or Cal.com)
- Brief intro text above the embed

---

## Design Direction

### Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Primary | Deep Navy | `#0A1628` |
| Accent | Electric Blue | `#2563EB` |
| Accent 2 | Teal | `#0D9488` |
| Surface | Off-White | `#F8FAFC` |
| Text | Charcoal | `#1E293B` |
| Muted | Slate | `#64748B` |

### Typography (Google Fonts, Framer-compatible)
- **Headings:** Inter (Bold/Semibold)
- **Body:** Inter (Regular/Medium)
- **Accent/Quotes:** DM Serif Display (Italic) — for testimonial callouts

### Visual Style
- Clean, minimal, lots of whitespace
- Subtle gradients (navy → blue) for hero sections
- Geometric abstract shapes as background accents (not stock photos)
- Micro-animations on scroll (fade-up, counter animations)
- Dark hero sections alternating with light content sections
