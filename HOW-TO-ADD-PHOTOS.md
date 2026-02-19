# How to Add Photos to the NotATree Story

## Quick Start

1. **Add your photos to** `public/images/` **folder**
   - I've already created this folder for you
   - Just drop your images in there

2. **Name your images:**
   - `sketch.jpg` - First concept/drawing
   - `blueprint.jpg` - Technical drawings/refinement
   - `installation.jpg` - The built 7-meter structure
   - `data.jpg` - Data visualization/sensors in action

3. **Restart the dev server** to see the images
   ```powershell
   npm run dev
   ```

## Recommended Image Specs

- **Format:** JPG or PNG
- **Width:** 1200-1600px (will auto-optimize)
- **Aspect Ratio:** 
  - Panels 1-3: 4:3 works best
  - Panel 6 (data): 16:9 works best
- **File Size:** Under 500KB each (Next.js will optimize)

## Current Setup

The horizontal story has 6 panels:
1. **THE FIRST SKETCH** → `sketch.jpg`
2. **REFINEMENT** → `blueprint.jpg`
3. **NOT A TREE** → `installation.jpg`
4. **WHAT WE WANT** → No image (vision text)
5. **WHAT WE EXPECT** → No image (metrics)
6. **SEE IT IN ACTION** → `data.jpg` + link to https://notatree.site/

## What if I don't have all the images yet?

No problem! The placeholders will show instead:
- Animated sketch lines for Panel 1
- Blueprint grid for Panel 2  
- Sensor visualization for Panel 3
- Animated data streams for Panel 6

Just add the images when you have them and they'll automatically appear.

## Using Different Names or Formats?

If you want to use different filenames (e.g., `my-sketch.png`), edit:
**components/NotATree.js** - Search for `/images/sketch.jpg` and replace with your filename.

## Troubleshooting

**Image not showing?**
1. Make sure it's in `public/images/` folder
2. Check the filename matches exactly (case-sensitive)
3. Restart the dev server
4. Check browser console for errors

**Image looks stretched/cropped?**
- Try different photos with the recommended aspect ratios
- Or adjust `objectFit` in NotATree.js from 'cover' to 'contain'
