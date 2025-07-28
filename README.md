# Refokus Clone – React + Tailwind + Framer Motion
This project features a beautifully animated, interactive button built with React, Tailwind CSS, and Framer Motion. It showcases smooth hover effects where text slides in from the bottom and an arrow icon glides subtly to the right, creating a sleek UI experience inspired by modern design agencies like Obys.

## 🎥 Preview -
[Live Preview]()

## Features -
- Dual text animation — Text slides up smoothly on hover, replacing itself with the same content.
- Arrow hover animation — Subtle directional movement of an icon for enhanced UX.
- Responsive & reusable — Easily fits into any modern frontend project.
- Customizable via props & Tailwind — Modify title, size, padding, color, and more.

## 🛠 Tech Stack - 
| Tool                                                      | Purpose                              |
| --------------------------------------------------------- | ------------------------------------ |
| [React](https://reactjs.org/)                             | JavaScript library for building UIs  |
| [Tailwind CSS](https://tailwindcss.com/)                  | Utility-first CSS framework          |
| [Framer Motion](https://www.framer.com/motion/)           | Declarative animation library        |
| [React Icons](https://react-icons.github.io/react-icons/) | Popular icon pack used for the arrow |

## Output Behavior
  - When you hover over the button:
    - The text slides up (bottom copy replaces the top).
    - The arrow icon slides right.
  - After hover out:
    - Everything resets back to initial state smoothly.

## Customization Tips
| Prop                | Description                   | Example               |
| ------------------- | ----------------------------- | --------------------- |
| `title`             | Button label text             | `"Learn More"`        |
| `whileHover` values | Change direction or distance  | `x: 10`, `y: "-50%"`  |
| `transition`        | Speed and easing of animation | `ease: "linear"`      |
| Tailwind classes    | Colors, sizes, spacing        | `bg-black text-white` |

### You can also:
  - Replace the arrow icon with any other react-icons component.
  - Modify animations using Framer Motion’s variants for reusable and scalable configs.
