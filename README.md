# 🌿 Flora - Real Estate & Rooms Showcase

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

A modern, highly structured front-end web application built to showcase properties, rooms, and interior design works. Developed with a strong focus on clean architecture, component reusability, and static data separation.

## ✨ Key Features

* **Component-Driven Architecture:** The UI is broken down into highly modular pieces (e.g., `Header`, `Hero`, `RoomsSection`, `FilterGallery`) for maximum maintainability.
* **Separation of Concerns:** Strict architectural boundaries between UI structure (`src/Components`), styling (`src/Css`), and content/state data (`src/Data`).
* **Strongly Typed:** Built entirely with TypeScript, ensuring code predictability and minimizing runtime errors.
* **Lightning Fast Build:** Powered by Vite for instant server start and highly optimized production builds.
* **Dynamic Filtering System:** Includes a custom `FilterGallery` and `FilterCard` system to browse properties effortlessly.

## 🛠️ Tech Stack

* **Framework:** React 18
* **Build Tool:** Vite
* **Language:** TypeScript
* **Styling:** Modular standard CSS

## 📂 Project Structure

The project follows a highly scalable directory structure:

```text
src/
├── Components/
│   ├── BodyComponents/      # Core sections (Rooms, Works, Filter, Home)
│   ├── FooterComponents/    # Footer layouts (Top, Bottom)
│   └── HeaderComponents/    # Navigation and Hero sections
├── Css/
│   ├── BodyCss/             # Specific styles for body components
│   ├── FooterCss/           # Specific styles for footer components
│   └── HeaderCss/           # Specific styles for header components
├── Data/
│   ├── BodyData/            # Static mock data for Rooms, Filters, and Works
│   ├── FooterData/          # Static data for footer links/locations
│   └── HeaderData/          # Hero info box data
├── assets/                  # Global static assets (images, icons)
├── App.tsx                  # Main application component
└── main.tsx                 # Entry point
```
## 💻 Getting Started
To run this project locally, follow these simple steps:

**Prerequisites**
Make sure you have Node.js installed on your machine.
 1. **Clone the repository:**
  ```bash
git clone [https://github.com/Eng-Afraa-Saleh/flora.git](https://github.com/Eng-Afraa-Saleh/flora.git)
```

2. **Navigate to the project directory:**
  ```bash
  cd flora
  ```

3. **Install dependencies:**
  ```bash
  npm install
  ```

  

4. **Start the development server:**
  ```bash
  npm run dev
  ```
  

# 🌐 Deployment
This project is configured to be deployed on GitHub Pages.
> **[🚀 View Live Demo](#)** *(https://eng-afraa-saleh.github.io/Flora-website/)*
