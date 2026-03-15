# Styles Trial: Enhanced Glow Effects

To solve the issue of cards blending into the dark background, I've implemented a "Rim Light" and soft glow system inspired by high-end glassmorphism designs.

## Implementation Details:

1.  **Glow Classes**: Created `.glow-orange` and `.glow-purple` in `index.css`.
2.  **Shadow Layering**: Used multi-layered `box-shadow` to create a soft, non-distracting outer glow.
3.  **Active Pop**:
    *   **Skills Section**: Uses `glow-orange` to match the data-science aesthetic.
    *   **Certificates Section**: Uses `glow-purple` to match the premium academic look.
4.  **Hover State**: Enhanced the glow on hover to create a tactile, interactive feel.

## Code Applied:

```css
.glow-purple {
  border-color: rgba(192, 132, 252, 0.15);
  box-shadow: 0 10px 40px -15px rgba(192, 132, 252, 0.1);
}

.glow-purple:hover {
  border-color: rgba(192, 132, 252, 0.5);
  box-shadow: 0 20px 60px -10px rgba(192, 132, 252, 0.2);
}
```

This ensures the content is clearly separated from the background while maintaining a professional, minimal aesthetic.
