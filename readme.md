# Samma Travelers - Sri Lanka Tour Website

A responsive website for Samma Travelers, a fictional tour company specializing in Sri Lankan travel experiences.

## Project Overview

This project is a multi-page website for a Sri Lankan tour operator featuring tour packages, team information, and contact functionality. The site is built with HTML, Bootstrap 5, and vanilla JavaScript with a data-driven approach for easy content management.

## Features

### Home Page (index.html)
- Hero section with call-to-action
- Company highlights and unique selling points
- Featured destinations with images and descriptions
- Customer testimonial carousel
- Contact form with validation

### Trip Plans (trips.html)
- Interactive filtering by categories (cultural, adventure, beach, wildlife)
- Trip cards with details, pricing, and ratings
- Modal pop-up for trip details including itinerary
- Custom trip request section
- Contact form

### Our Team (team.html)
- Management team profiles with social media links
- Tour guides with specializations and languages
- Professional drivers with experience details
- Job openings section
- Contact form

## Technical Implementation

### Data-Driven Architecture
The site uses a structured data object in `app.js` containing:
- Trip packages with details and categorization
- Team member information and photos
- Popular destinations
- Customer testimonials

### JavaScript Functionality
- Dynamic content loading based on current page
- Form validation and submission handling
- Interactive filtering of trip categories
- Modal window population with selected trip details
- Smooth scrolling for anchor links
- Responsive navigation menu handling

### Responsive Design
- Bootstrap 5 grid system implementation
- Mobile-friendly navigation
- Responsive images and cards
- Appropriate spacing and typography at all screen sizes

## Project Structure
Project/

Project/
├── index.html
├── trips.html
├── team.html
├── favicon.ico
├── Assets/
│   ├── images/
│   │   ├── various image files (.webp)
│   │   └── ...
│   └── js/
│       └── app.js
## Dependencies
- Bootstrap 5.3.0
- Font Awesome 6.4.0

## Setup and Usage
1. Clone the repository to your local machine.
2. Open any of the HTML files in a modern web browser.
3. No build process is required as this is a static website.

## Future Enhancements
- Add search functionality for trips
- Implement actual form submission to a backend service
- Create individual trip detail pages
- Add a blog section for travel tips
- Implement an image gallery or lightbox feature
- Add a booking and payment system

## License
© 2025 Samma Travelers. All rights reserved.