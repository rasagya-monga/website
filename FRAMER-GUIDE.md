# How to Use These Files in Framer

## Step 1: Set Up Your Framer Project

1. Go to [framer.com](https://framer.com) and create a new project (or open your existing amventconsulting.com project)
2. Set the site font to **Inter** (available in Framer's font picker)

## Step 2: Create Pages

Create these pages in the Framer page panel (left sidebar):

```
Home (/)
About Us (/about-us)
Services (/services)
  └── Pigment Implementation (/services/pigment-implementation)
  └── Connected Planning (/services/connected-planning)
  └── Platform Migration (/services/platform-migration)
Blog (/blog)  ← keep existing
Case Studies (/case-studies)
Contact Us (/contact-us)
Book a Call (/book-a-call)
```

## Step 3: Add Content

Open each file in the `content/` folder and copy the text into your Framer pages:
- `content/home-page.md` → Home page
- `content/about-page.md` → About Us page
- `content/services-page.md` → Services pages
- `content/contact-page.md` → Contact page

## Step 4: Add Code Components

In Framer, go to **Assets Panel → Code → New Code File** and paste each file from `code-components/`:

| Component | File | Where to Use |
|-----------|------|--------------|
| AnimatedCounter | `AnimatedCounter.tsx` | Stats section (home page, about page) |
| ScrollFadeIn | `ScrollFadeIn.tsx` | Wrap any section for scroll animation |
| CalendlyEmbed | `CalendlyEmbed.tsx` | Book a Call page |
| GradientCTA | `GradientCTA.tsx` | Bottom of every page |
| ServiceCard | `ServiceCard.tsx` | Home page services section, services landing |

### Using Code Components:
1. In Framer, click **Assets** (left panel) → **Code** tab
2. Click **+** → **New File**
3. Paste the component code
4. Drag the component onto your canvas
5. Use the property controls (right panel) to customize text, colors, and links

## Step 5: Set Up Design Tokens

In your Framer project settings, set these colors:
- Primary: `#0A1628` (Deep Navy)
- Accent: `#2563EB` (Electric Blue)
- Accent 2: `#0D9488` (Teal)
- Surface: `#F8FAFC` (Off-White)
- Text: `#1E293B` (Charcoal)
- Muted: `#64748B` (Slate)

## Step 6: SEO Setup

Open `content/seo-metadata.md` and for each page in Framer:
1. Click the page in the pages panel
2. Open **Page Settings** (gear icon)
3. Fill in Title, Description, and OG tags from the metadata file
4. Add the JSON-LD structured data to the home page via **Custom Code → End of `<head>`**

## Step 7: Set Up Blog with Framer CMS

1. Go to **CMS** in Framer
2. Create a "Blog Posts" collection with fields: Title, Slug, Excerpt, Body, Date, Category, Cover Image
3. Import your existing blog posts
4. Create a CMS-connected list on the `/blog` page and on the home page "Blog Highlights" section

## Step 8: Connect Your Domain

1. In Framer, go to **Site Settings → Domains**
2. Add `amventconsulting.com`
3. Update your DNS records as Framer instructs
