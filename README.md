# AI Team Roles Explorer

An interactive web application that helps teams understand the different roles in modern AI organizations, their responsibilities, and how they interact with each other.

## Overview

This application serves as an educational tool for:
- Technical and non-technical professionals looking to understand AI team structures
- Organizations building or scaling their AI teams
- People interested in transitioning into AI-related roles

## Features

### Role Exploration
- Detailed descriptions of key AI team roles:
  - Data Engineer
  - ML Engineer
  - MLOps Engineer
  - AI Engineer
  - Prompt Engineer
  - AI Ethics Specialist
  - AI Product Manager

### Interactive Elements
- Role-specific information showing what each role needs and provides
- Practical examples and technical details for each responsibility
- Interactive comparisons showing how each role differs from others
- Cross-linking between related roles for easy navigation

### Technical Glossary
- Hover-enabled definitions for technical terms
- Real-world examples for each concept
- Context-specific terminology explanations

## Technical Implementation

Built with:
- React (Next.js)
- Tailwind CSS for styling
- Lucide React for icons
- Client-side state management for interactions

## Project Structure

```
├── app/
│ └── page.tsx # Main page component
├── components/
│ ├── Role.jsx # Individual role card component
│ ├── Roles.jsx # Role list container
│ ├── GlossaryTerm.js # Technical term tooltip component
│ ├── RoleDifferencesTable.jsx # Role comparison component
│ └── index.js # Component exports
└── data/
└── index.js # Role and glossary definitions
```


## Getting Started

`yarn install`. Then `yarn dev`.

## License

MIT License - feel free to use this project for your own learning or organizational needs.