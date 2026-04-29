# Hero Animation Manual Test Checklist

## General Checks
- [ ] On page load, the hero text animates smoothly from bottom to top.
- [ ] The text settles into a stable state after the animation completes.
- [ ] The blink cursor animation runs post-animation.

## Accessibility Checks
- [ ] When `prefers-reduced-motion` is enabled, the animation is disabled for the hero text.
- [ ] Text remains fully readable and visible throughout the animation.

## Mobile Checks
- [ ] Animation performs smoothly on mobile devices.
- [ ] Layout remains responsive with hero text centered.

## Performance Checks
- [ ] No significant delay in page load time due to the animation.
- [ ] No performance issues observed during and after the animation.