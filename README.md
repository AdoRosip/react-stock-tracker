# React Stock Tracker

## Overview

React Stock Tracker is a stock market tracking application built with React and Vite. It allows users to search for stocks and view detailed stock data, including price trends, key stock information, and historical performance across different time intervals.

## Live Demo

Check out the deployed application here: [React Stock Tracker](https://adorosip.github.io/react-stock-tracker/)

## Features

- **Stock Search:** A search bar on the homepage to look up stock symbols.
- **Detailed Stock View:** Displays real-time stock information, including:
  - Stock price
  - Key details (e.g., open price, close price, market cap, volume)
  - Graph with multiple time intervals (e.g., 1 day, 1 week, 1 month, and 1 year)
  - Other relevant financial data

## Tech Stack

- **React** – Front-end framework
- **Vite** – Fast build tool
- **React Router** – For handling navigation
- **Chart.js / Recharts (if applicable)** – For stock price visualization
- **REST API / WebSocket (if applicable)** – For fetching real-time stock data

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-stock-tracker.git
   cd react-stock-tracker
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. **Search for a Stock**: Enter a stock symbol in the search bar on the homepage.
2. **View Stock Details**: Click on a result to navigate to the detailed stock page.
3. **Analyze Trends**: View historical stock data through interactive graphs with different time intervals.

## Deployment

To build and deploy the application:
```bash
npm run build
```
Then, host the `dist/` folder on a static site hosting service (e.g., GitHub Pages, Vercel, Netlify).

## Limitations

- The app uses multiple free APIs, each with a limited number of requests per certain time periods.
- Due to these API limitations, stock prices are updated at predefined intervals rather than in real-time.
- The displayed stock data is the latest available from the free API endpoints at the time of retrieval.
- **Live stock updates via WebSockets** is planned as part of future development.

## Future Developments

- **Using WebSockets for real-time price updates**
- **Displaying more financial information, potentially including financial statements for the last quarters**
- **Enhancing data visualization with additional technical indicators**

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## Author

[Your Name] – [Your GitHub Profile]

