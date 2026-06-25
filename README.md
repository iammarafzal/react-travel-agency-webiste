# Traviora - Premium React Travel & Tour Website

Traviora is a modern, premium, and fully responsive React single-page application designed for travel agencies and tour operators. It features a complete listing of destinations, tour packages, travel journals, interactive search & filtering systems, and a fully validated contact form. 

This project was built to showcase clean folder structure, reusable component design, prop-driven layouts, and robust React state and effect architectures.

---

## 🌟 Key Features

- **Dynamic Navigation Bar**: Autodetects page scroll heights to transition from transparent to a sleek glassmorphic container on the homepage. Includes active route tracking.
- **Interactive Tour Filtering & Search**: Search packages by name/destination, filter by target activities (Hiking, Relaxation, Adventure, Sightseeing), or refine by trip types (Luxury, Budget, Family, Solo).
- **Dual Layout Layout Options**: Toggle instantly between **Grid View** and **List View** layouts on the tours page.
- **Client Testimonial Carousel**: Mapped reviews from real travelers showing custom star ratings and testimonials.
- **Interactive FAQ Accordion**: Toggleable items powered by React state to answer traveler questions dynamically.
- **Validated Contact Form**: Form state binding, real-time input fields validation, email format checking, and custom feedback overlays on success.
- **Smooth Navigation UX**: Custom `<ScrollToTop />` resets the viewport automatically on page updates.
- **Initial App Loader Overlay**: A premium spinner overlay displaying a welcoming loader animation on the first application mount.

---

## 🛠️ Technologies Used

- **Framework**: React 19 (Vite Bundler)
- **Styling**: Tailwind CSS v4 (Modern HSL variables & transitions)
- **Icons**: React Icons (Heroicons & FontAwesome packs)
- **Routing**: React Router v7

---

## 💡 React Concepts Demonstrated

1. **Reusable Component Architecture**: Separating layout systems into 8 clean, modular components (`Navbar`, `Hero`, `SectionHeader`, `DestinationCard`, `TourCard`, `TestimonialCard`, `Button`, `Footer`).
2. **Prop-Driven Views**: Passing structured objects through the React tree, separating content from layout code.
3. **Data Mapping**: Storing tours, destinations, articles, and reviews in a centralized data file (`travelData.js`) and rendering them dynamically using array `.map()`.
4. **Declarative Routing**: Utilizing `<BrowserRouter>`, `<Routes>`, and `<Route>` to power smooth, client-side routing, alongside wildcard route handling for custom 404 views.
5. **State Management (`useState`)**: Governing mobile menu drawers, grid/list layout selectors, search parameters, active accordion IDs, and contact submission states.
6. **Lifecycle & Side Effects (`useEffect`)**: Attaching and cleaning up window scroll event listeners, clearing page route history states, and delaying initial loading animations.

---

## 🚀 How to Run the Project

Follow these steps to set up and run the project locally:

### 1. Clone the Repository
```bash
git clone <repository-url>
cd react-travel-agency-webiste
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) or the terminal indicated port in your browser.

### 4. Build for Production
```bash
npm run build
```
This compiles the application and generates optimized static assets inside the `dist/` directory.

---

## 📸 Screenshots

| Desktop View | Mobile Menu Drawer |
| :---: | :---: |
| *[Add Screenshot]* | *[Add Screenshot]* |

---

## ✍️ Author

- **Name**: [Your Name]
- **Portfolio**: [Your Portfolio Link]
- **GitHub**: [@YourGitHub]
- **Branding**: Traviora - Unforgettable Travel Adventures.
