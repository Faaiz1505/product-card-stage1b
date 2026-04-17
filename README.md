Testable Profile Card — Stage 1B
📌 Overview

This project implements a testable, accessible, and responsive Profile Card using semantic HTML, modern CSS, and vanilla JavaScript.

The goal of Stage 1B is to demonstrate:

Proper HTML semantics
Accessibility best practices
Stable automated testing via data-testid
Responsive layout behavior
Accurate time rendering in milliseconds
🧱 Component Structure & Semantics

The profile card is built using semantic HTML elements to improve accessibility and document structure:

<article> wraps the entire profile card
<header> contains the user’s name
<figure> holds the avatar image
<nav> contains social links
<section> elements separate hobbies and dislikes
Lists (<ul><li>) are used for grouped data

All visible elements include required data-testid attributes to ensure test stability.

📦 Implemented Features

1. Profile Information
Displays user name as plain text
Short biography rendered as a paragraph
Avatar image with meaningful alt text
Social links grouped in a single container

2. Current Time in Milliseconds
Displays the current epoch time using Date.now()
Time is rendered in milliseconds
Optionally updates on an interval
Uses aria-live="polite" when updated dynamically

3. Social Links
Social links open in a new tab
Uses target="_blank" with rel="noopener noreferrer"
Keyboard-focusable and accessible
Optionally individually testable (e.g., Twitter, GitHub)

4. Hobbies & Dislikes
Rendered as two distinct lists
Clearly separated for readability and testing
Flexible layout that adapts to long content


♿ Accessibility Considerations

Accessibility was intentionally included from the start:

Avatar image includes descriptive alt text
Semantic HTML improves screen reader navigation
All interactive elements are keyboard accessible
Visible focus styles are preserved
Color contrast meets WCAG AA standards
Dynamic time updates use aria-live="polite"


📱 Responsiveness

The layout adapts cleanly across screen sizes:

Mobile (320px)
Content stacks vertically
Tablet (768px)
Improved spacing and alignment
Desktop (1024px+)
Avatar aligns beside profile content

The design handles:

Long names
Long biographies
Multiple social links
Variable list lengths without layout breaking


🧪 Testing & Data Attributes

All required elements include exact data-testid values to ensure automated tests pass reliably.

Implemented test IDs include:

test-profile-card
test-user-name
test-user-bio
test-user-time
test-user-avatar
test-user-social-links
test-user-hobbies
test-user-dislikes

Optional per-network IDs:

test-user-social-twitter
test-user-social-github
etc.


⚠️ Known Limitations
This is a static profile card, not a user management system
No backend or persistent storage
Avatar upload handling is optional and client-side only


✅ Summary

This Stage 1B implementation focuses on:

Semantic HTML correctness
Accessibility compliance
Test reliability using data-testid
Accurate time rendering
Responsive UI behavior
