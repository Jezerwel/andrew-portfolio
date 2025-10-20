# How to Add Client Transformations

This guide will walk you through adding new client transformations to your portfolio website.

## Quick Steps

### 1. Prepare Your Images

- Take or collect before and after photos
- Save them as JPG or JPEG files
- Name them following this pattern:
  - Before: `[clientname]before.jpg`
  - After: `[clientname]after.jpg`
  - Examples: `mikebefore.jpg`, `mikeafter.jpg`

### 2. Add Images to the Project

- Navigate to the `public/clients/` folder
- Copy your images into this folder
- ✅ Your images are now ready to use!

### 3. Update the Client Data File

- Open `src/lib/data/clients.ts`
- Scroll to the bottom of the `clientTransformations` array
- Copy one of the existing client objects
- Paste it at the end (before the closing `];`)
- Update the information:

```typescript
{
  id: 'mike',                              // Short unique name (no spaces)
  name: 'Mike',                            // Display name
  beforeImage: '/clients/mikebefore.jpg',  // Path to before image
  afterImage: '/clients/mikeafter.jpg',    // Path to after image
  timeframe: '12 weeks',                   // Duration of transformation
  stats: {
    weightChange: '-30 lbs',               // Optional: weight lost or gained
    muscleGain: '+10 lbs',                 // Optional: muscle gained
    bodyFatLoss: '-12%',                   // Optional: body fat percentage lost
  },
  goal: 'Weight Loss',                     // Primary goal
  testimonial: 'Andrew changed my life!',  // Client quote
  program: 'Custom Training Plan',         // Program they used
},
```

### 4. Save and View

- Save the file (`Ctrl+S` or `Cmd+S`)
- The website will automatically refresh (if running locally)
- Your new transformation will appear in the Transformations section!

## Tips

### Stats Field

You can include any combination of these stats:

- `weightChange`: Show weight lost or gained (e.g., "-25 lbs" or "+15 lbs")
- `muscleGain`: Show muscle gained (e.g., "+8 lbs")
- `bodyFatLoss`: Show body fat percentage lost (e.g., "-10%")

If you don't want to show a particular stat, just delete that line.

### Example with Only Weight Change

```typescript
stats: {
  weightChange: '-20 lbs',
},
```

### Example with All Stats

```typescript
stats: {
  weightChange: '-35 lbs',
  muscleGain: '+12 lbs',
  bodyFatLoss: '-15%',
},
```

## Common Questions

**Q: What image size should I use?**
A: Any size works! Next.js will automatically optimize them. A 3:4 ratio (portrait) works best.

**Q: Can I use PNG images?**
A: Yes! Use `.jpg`, `.jpeg`, or `.png` formats.

**Q: How many clients can I add?**
A: As many as you want! The website will display them all in a grid.

**Q: What if I make a mistake?**
A: Just edit the file again and save. The website updates automatically.

**Q: Can I change the order of clients?**
A: Yes! The clients appear in the order they're listed in the file. Just move the entire client object up or down in the array.

## Full Example

Here's a complete example of adding a new client named "Sarah":

**1. Images in `public/clients/`:**

- `sarahbefore.jpg`
- `sarahafter.jpg`

**2. Code in `src/lib/data/clients.ts`:**

```typescript
export const clientTransformations: ClientTransformation[] = [
  // ... existing clients ...

  {
    id: "sarah",
    name: "Sarah",
    beforeImage: "/clients/sarahbefore.jpg",
    afterImage: "/clients/sarahafter.jpg",
    timeframe: "16 weeks",
    stats: {
      weightChange: "-28 lbs",
      bodyFatLoss: "-11%",
    },
    goal: "Weight Loss & Fitness",
    testimonial: "Best investment I ever made in myself!",
    program: "Fat Loss Intensive",
  },
];
```

**3. Save the file** → Done! ✅

## Need Help?

If you run into issues:

1. Check that the image paths match exactly (including file extensions)
2. Make sure there's a comma after each client object
3. Verify the file names don't have spaces
4. Ensure you're editing the right file: `src/lib/data/clients.ts`

Happy updating! 🎉
