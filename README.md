# AI Team Project Planning Game

An interactive game that helps people understand how AI teams work together by putting them in the role of a project manager. Players learn about team dependencies, timelines, and coordination by planning and organizing deliverables from different AI roles.

## Overview

This game serves as an educational tool for:
- Technical and non-technical professionals learning to manage AI projects
- Organizations wanting to understand AI team dynamics
- People interested in understanding how different AI roles interact and depend on each other

## How to Play

1. You are presented with a team of AI professionals, each with their own deliverables
2. Drag deliverables from team members onto the timeline
3. Organize the deliverables to create a feasible project plan
4. Learn about dependencies between roles and their work
5. Understand the typical timelines and sequence of AI project components

## Features

### Interactive Gantt Chart
- Drag and drop deliverables onto the timeline
- Adjust timing by dragging items left or right
- Reorder items using up/down arrows
- Remove items to try different arrangements

### Team Roles
Each role comes with specific deliverables:
- Data Engineer: Data pipelines and infrastructure
- ML Engineer: Model development and training
- MLOps Engineer: Deployment and monitoring
- AI Engineer: System integration
- Prompt Engineer: Interaction design
- AI Ethics Specialist: Ethical guidelines and testing
- AI Product Manager: Requirements and coordination

### Learning Outcomes
- Understanding of AI project components
- Recognition of dependencies between roles
- Appreciation of project timing and sequencing
- Knowledge of team coordination requirements

## Technical Implementation

Built with:
- React (Next.js)
- Tailwind CSS for styling
- Lucide React for icons
- Drag and drop functionality

## Project Structure

```
├── app/
│   └── page.tsx           # Main page component
├── components/
│   ├── ProjectPlanner.jsx # Main game component
│   └── ui/               # UI components
└── data/
    └── index.js          # Role and deliverable definitions
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## License

MIT License - feel free to use this project for your own learning or organizational needs.