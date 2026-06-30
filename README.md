# Dayalan D S - Professional Portfolio

## 📌 Project Overview

* A modern, responsive personal portfolio website designed to showcase my professional journey.

* Acts as a digital resume detailing professional experience, projects, technical skills, and educational background.


## 🏗️ Technical Architecture

* **Core Framework:** Built using React 18 and optimized with Vite.


* **Language:** Developed entirely in TypeScript for type safety and maintainability.


* **Styling & UI:** Utilizes Tailwind CSS for styling alongside accessible components from shadcn/ui and Radix UI.


* **Testing:** Configured with Vitest for component and logic testing.



## ✨ Key Features & Design

* **Responsive Layout:** Adapts seamlessly across mobile, tablet, and desktop devices.


* **Custom Aesthetic:** Integrates a unique "Gaming UI" design featuring specialized components like `GlowCard` and `NeonButton`.


* **Theming:** Includes a custom `ThemeProvider` to support seamless dark and light mode switching.


* **Rich Iconography:** Employs a wide array of SVG icons (AWS, Docker, Kubernetes, Spring Boot, React, etc.) to visually represent the technical stack.



## 📂 Data-Driven Content Management

* **Modular Data:** Portfolio content is strictly separated from UI components, stored in dedicated TypeScript files within the `src/data/` directory.


* **Easy Customization:**
* `profile.ts`: Manages basic info, bio, and resume links.


* `experience.ts` & `education.ts`: Handles professional work history and academic background.


* `projects.ts` & `skills.ts`: Organizes featured projects and categorizes technical proficiencies.


* `achievements.ts` & `social.ts`: Contains milestones, certifications, and social media links.