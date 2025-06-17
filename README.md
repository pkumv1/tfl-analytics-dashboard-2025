# TfL Advanced Reliability Analytics Dashboard

## Overview

This is an AI-Powered Predictive Maintenance & Reliability Engineering Dashboard for Transport for London (TfL). The dashboard provides comprehensive analytics for monitoring and predicting equipment failures across TfL's network.

## Features

- **System Overview**: Real-time monitoring of 302 devices across 11 stations
- **Real-time Monitor**: Live tracking of operational metrics and critical devices
- **ML Analytics**: Machine learning model performance and feature importance analysis
- **Survival Analysis**: Weibull analysis and survival curves for different fault codes
- **Hazard Models**: Cox regression hazard ratios and baseline hazard functions
- **RUL Prediction**: Remaining Useful Life predictions with confidence intervals
- **Fault Patterns**: Hourly fault pattern analysis and trend identification
- **Device Clustering**: Station cluster analysis based on performance metrics
- **Association Rules**: Fault code association patterns and insights
- **Reliability Metrics**: MTBF, MTTR, availability trends and KPIs
- **Recommendations**: Actionable insights and maintenance recommendations

## Tech Stack

- React 18
- Recharts for data visualization
- Lucide React for icons
- Tailwind CSS for styling
- Error boundaries for robust error handling
- React memoization for performance optimization

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pkumv1/tfl-analytics-dashboard-2025.git
cd tfl-analytics-dashboard-2025
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

### Deploy to Vercel

1. Fork this repository
2. Sign up for [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect the React app and deploy it

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Key Metrics Tracked

- **MTBF (Mean Time Between Failures)**: Average operational time between failures
- **MTTR (Mean Time To Repair)**: Average time to repair failed equipment
- **Availability**: Percentage of time equipment is operational
- **Risk Scores**: Calculated risk levels for each station
- **RUL (Remaining Useful Life)**: Predicted time until equipment failure

## Data Sources

The dashboard uses mock data for demonstration purposes, including:
- Station performance metrics
- Real-time operational data
- ML model results
- Survival analysis data
- Fault patterns and associations

## Dashboard Components

### 1. System Overview
- Total device monitoring
- Station health status
- Risk vs MTBF analysis
- Network distribution visualization

### 2. Real-time Monitor
- Live operational status
- Critical device alerts
- Real-time metrics tracking
- Fault detection monitoring

### 3. ML Analytics
- Model performance comparison
- Feature importance analysis (XGBoost & CatBoost)
- Accuracy, precision, and recall metrics
- ROC AUC scores

### 4. Survival Analysis
- Survival probability curves
- Weibull analysis results
- Failure type distribution
- Median lifetime predictions

### 5. Hazard Models
- Cox regression results
- Hazard ratios visualization
- Baseline hazard function
- Model statistics and concordance

### 6. RUL Prediction
- Device-specific predictions
- Confidence intervals
- Priority classification
- Failure timeframe estimation

### 7. Fault Patterns
- Hourly fault distribution
- Peak failure times
- Fault code analysis
- Trend identification

### 8. Device Clustering
- Station cluster analysis
- Performance metrics by cluster
- Risk assessment
- Station distribution

### 9. Association Rules
- Fault code associations
- Support and confidence metrics
- Lift analysis
- Rule strength evaluation

### 10. Reliability Metrics
- MTBF/MTTR trends
- Availability tracking
- Reliability KPIs
- Device distribution

### 11. Recommendations
- Critical action items
- Preventive maintenance
- Optimization opportunities
- Process improvements

## License

This project is created for demonstration purposes.

## Contact

For questions or support, please open an issue in the GitHub repository.