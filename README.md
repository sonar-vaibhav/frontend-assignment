# Todo List Landing Page

A modern, responsive landing page for a todo list application built with React, TypeScript, and Tailwind CSS. This project features a clean design with interactive components, form validation, and a mobile-first approach.

## 🚀 Features

- **Responsive Design** - Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Interactive Hero Section** - Eye-catching hero with gradient backgrounds and call-to-action buttons
- **User Registration Modal** - Multi-step form with validation for collecting user information
- **Feature Showcase** - Highlight key features with icons and descriptions
- **Testimonials Carousel** - Interactive testimonial slider with navigation controls
- **Brand Logos** - Animated logo carousel showcasing trusted brands
- **Modern UI Components** - Custom-built UI components with consistent styling
- **Form Validation** - Client-side validation for user inputs with error messages
- **Accessibility** - Semantic HTML and ARIA labels for better accessibility

## 🛠️ Tech Stack

- **React 18.3** - Modern React with hooks and functional components
- **TypeScript 5.8** - Type-safe development
- **Vite 5.4** - Fast build tool and development server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **React Router DOM 6.30** - Client-side routing
- **Lucide React** - Beautiful, consistent icon library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-list-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`


## 📁 Project Structure

```
src/
├── assets/              # Images and static assets
│   ├── logo/           # Brand logos
│   └── *.jpg           # Hero and testimonial images
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Label.tsx
│   │   ├── Checkbox.tsx
│   │   ├── RadioGroup.tsx
│   │   └── Modal.tsx
│   ├── Hero.tsx        # Hero section component
│   ├── Navbar.tsx      # Navigation bar
│   ├── Features.tsx    # Features section
│   ├── Testimonials.tsx # Testimonials carousel
│   ├── CTA.tsx         # Call-to-action section
│   ├── Footer.tsx      # Footer component
│   ├── GetStartedModal.tsx  # User registration modal
│   └── UserDataDisplay.tsx  # Display submitted user data
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   └── NotFound.tsx    # 404 page
├── lib/                # Utility functions
│   └── utils.ts        # Helper functions
├── App.tsx             # Root component with routing
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports

```

## 🎨 Key Components

### Hero Section
- Gradient background with primary brand colors
- Dual-column layout with feature highlights
- Call-to-action buttons
- Testimonial card with overlay effects

### Get Started Modal
- Multi-field form with validation
- Input fields: First Name, Last Name, Email
- Radio buttons for gender selection
- Checkboxes for language preferences
- Terms and conditions agreement
- Success state with confirmation message

### Features Section
- Grid layout showcasing app features
- Icon-based visual representation
- Responsive design adapting to screen sizes

### Testimonials
- Carousel with navigation controls
- User testimonials with images
- Smooth transitions between slides

### Footer
- Newsletter subscription form
- Social media links
- Company information and links

## 🎨 Design System

### Colors
- **Primary**: Pink/Red (#FF5A5F)
- **Secondary**: Dark Blue (#1E293B)
- **Background**: Light Gray (#F9FAFB)
- **Accent**: Rose tints for form elements