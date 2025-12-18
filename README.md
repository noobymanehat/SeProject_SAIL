# SAIL Rake Formation Optimizer

An AI/ML-based Decision Support System for optimizing rake formation operations at SAIL steel plants. This prototype demonstrates intelligent logistics management through advanced optimization algorithms and cutting-edge visualization technologies.

## Features

- **Optimization Engine**: Advanced algorithms for rake formation optimization using constraint satisfaction, genetic algorithms, and simulated annealing
- **Real-time Analytics**: Interactive dashboards with performance metrics and KPI tracking
- **3D Visualization**: Immersive rake and logistics visualization using Three.js
- **Interactive Maps**: Geographical visualization of operations using Mapbox GL JS
- **Machine Learning**: Predictive analytics and pattern recognition using TensorFlow.js
- **Scenario Planning**: What-if analysis and scenario comparison capabilities

## Technology Stack

### Frontend Framework
- **Next.js 14** with App Router
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations

### Visualization Libraries
- **D3.js** for custom data visualizations
- **Three.js** for 3D visualizations
- **Mapbox GL JS** for interactive maps
- **Recharts** for business charts
- **React Flow** for network diagrams

### State Management
- **Zustand** for lightweight state management
- **React Query** for data fetching and caching
- **Immer** for immutable state updates

### Analytics & Optimization
- **TensorFlow.js** for machine learning
- **Web Workers** for optimization algorithms
- **Simple Statistics** for statistical calculations

## Project Structure

```
src/
├── app/                    # Next.js app directory
├── components/             # React components
│   ├── ui/                # Basic UI components
│   ├── dashboard/         # Dashboard-specific components
│   ├── visualization/     # Chart and visualization components
│   ├── forms/             # Form components
│   └── layout/            # Layout components
├── stores/                # Zustand stores
├── services/              # API and data services
├── types/                 # TypeScript type definitions
├── utils/                 # Utility functions
├── hooks/                 # Custom React hooks
└── lib/                   # Configuration and constants
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Core Business Entities

### Location
Represents steel plants, stockyards, customer locations, and loading points with capacity constraints and operational parameters.

### Rake
Train compositions with wagons, capacity specifications, and current operational status.

### Order
Customer orders with material requirements, delivery constraints, and priority levels.

### Material
Different types of materials (iron ore, coal, limestone, finished steel) with properties and handling requirements.

## Key Features

### Optimization Engine
- Multiple optimization algorithms (genetic, simulated annealing, constraint satisfaction)
- Real-time constraint validation
- Cost minimization across multiple objectives
- Scenario comparison and what-if analysis

### Interactive Visualizations
- 3D rake composition viewer
- Interactive geographical maps
- Real-time performance dashboards
- Flow diagrams and network visualizations
- Gantt charts for scheduling

### Analytics & Reporting
- KPI tracking and trend analysis
- Performance benchmarking
- Environmental impact tracking
- Predictive analytics using machine learning

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

The project uses:
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting (configured in ESLint)
- Tailwind CSS for consistent styling

## Contributing

1. Follow the established project structure
2. Use TypeScript for all new code
3. Implement proper error handling
4. Add appropriate type definitions
5. Follow the component naming conventions
6. Write meaningful commit messages

## License

This project is proprietary to SAIL (Steel Authority of India Limited).