# AI-Powered Legislative Data Visualization Tool

## Overview
The AI-Powered Legislative Data Visualization Tool is an interactive platform designed to aggregate, categorize, and visualize legislative data across various topics. It provides **real-time updates** on legislative activity, tracks the progress of bills (from introduction to passing), and offers AI-powered categorization for easy navigation of topics such as healthcare, education, environment, and more. 

This tool empowers users to stay informed and engaged with the legislative process while delivering dynamic visualizations for an enhanced understanding of trends and outcomes.

---

## Core Features

### Real-time Legislative Updates
- The application monitors legislative activity, providing live updates on new bills introduced, amendments made, and their passing status through integration with live legislative feeds.

### Bill Status Tracking
- Monitor the progress of each bill through various stages:
  - Introduced
  - In Committee
  - Passed by Legislative Bodies
  - Signed into Law or Vetoed

### AI-Powered Bill Categorization
- Using Natural Language Processing (NLP) models such as spaCy and Hugging Face Transformers, the tool automatically categorizes bills into relevant topics based on their title and summary.

### Comprehensive Categorization
- AI-powered categorization automatically sorts bills into predefined topics such as:
  - **Healthcare**: Access to healthcare services, affordability, and policy improvements.
  - **Education**: Funding, curriculum standards, and educational equity.
  - **Environment**: Climate change, renewable energy, and conservation efforts.
  - **Social Justice**: Addressing racial equity, anti-discrimination, and civil rights.
  - **Economic Policy**: Taxation, labor laws, and economic reforms.
  - **Technology**: AI, cybersecurity, and emerging technologies.
  - **Public Safety**: Crime prevention and law enforcement reforms.
  - **Infrastructure**: Public transit, urban planning, and infrastructure development.

### Interactive Data Visualizations
- Dynamic charts and graphs built with **D3.js** to explore trends such as:
  - Number of bills introduced by topic.
  - Proportion of bills passed within a given timeframe.

### Custom Alerts
- Users can set personalized notifications for updates on bills related to topics or keywords of their chosing, including updates when a bill passes.
---

## Tech Stack

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Next.js**: Framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **Redux**: State management for dynamic and predictable data handling.

- **D3.js**: Library for creating dynamic data visualizations.

### Backend
- **Node.js**: JavaScript runtime for backend development.
- **Express.js**: Framework for building RESTful APIs.
- **PostgreSQL**: Relational database for storing legislative data.
- **AWS Free Tier**: Provides scalable infrastructure, including:
  - **AWS Lambda**: Serverless computing for processing API requests and AI models.
  - **Amazon RDS (Relational Database Service)**: For hosting PostgreSQL databases.
  - **Amazon S3**: For static file storage, such as datasets or visualization assets.
  - **AWS API Gateway**: For securely exposing APIs.

### AI Tools
- **spaCy**: NLP library for text processing and entity recognition.
- **Hugging Face Transformers**: For advanced NLP tasks, including categorizing bill summaries.

### APIs Used
- **Congress.gov API**: For fetching legislative data on bills, including their titles, summaries, and statuses.
- **ProPublica Congress API**: https://projects.propublica.org/api-docs/congress-api/
- **GovTrack API**: https://www.govtrack.us/about-our-data
- **Open States API**: To access state-level legislative data.
- **AWS SDK for JavaScript**: For integrating AWS services within the application.

---

## Key Features

### Real-Time Legislative Updates
- Leveraging **AWS Lambda** and **AWS API Gateway**, the tool fetches real-time legislative data from Congress.gov and Open States APIs.
- Live updates are streamed using **Socket.IO**, ensuring users are always informed.

### AI-Powered Categorization
- **NLP Models**: Bills are analyzed using spaCy and Hugging Face Transformers.
  - Example categorization logic:
    ```javascript
    import spacy from 'spacy';
    const nlp = spacy.load('en_core_web_sm');

    const categories = {
      Healthcare: ['health', 'medicine', 'hospital'],
      'Racial Justice': ['discrimination', 'equality'],
      'Economic Inequality': ['poverty', 'wealth'],
      'Environmental Justice': ['sustainability', 'climate'],
    };

    function categorizeBill(title, summary) {
      const text = `${title} ${summary}`;
      const doc = nlp(text);
      const scores = {};

      for (const [category, keywords] of Object.entries(categories)) {
        scores[category] = keywords.reduce((count, keyword) => count + (text.includes(keyword) ? 1 : 0), 0);
      }

      return Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b));
    }
    ```

### Data Visualizations
- Trends in legislative activity are visualized using **D3.js**, highlighting active categories and the progression of bills over time.

### Custom Alerts
- Notifications are managed using **Redux** for state management and **AWS SNS** (Simple Notification Service) for scalable alert delivery.

---

## Motivation
This project aims to:
- Provide transparency and accessibility to legislative data.
- Empower users to engage with legislative processes effectively.
- Leverage modern technologies and AI to categorize and visualize complex datasets.
- Practice full-stack development with a focus on scalability using AWS Free Tier.

---

## How It Works

1. **Data Collection**: Legislative data is fetched in real-time from Congress.gov and Open States APIs using AWS Lambda and API Gateway.
2. **Categorization**: Bills are analyzed with spaCy and Hugging Face models to identify relevant categories.
3. **Visualization**: Data is processed and visualized with D3.js, ensuring users can explore trends dynamically.
4. **State Management**: Redux ensures seamless synchronization of UI components with real-time data.
5. **Alerts**: Custom alerts are sent via AWS SNS based on user preferences.

---

## Road Map
![Roadmap](RoadMap.png)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/legislative-visualization-tool.git
   cd legislative-visualization-tool
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables for APIs and AWS credentials in a `.env` file:
   ```env
   CONGRESS_API_KEY=your_congress_api_key
   OPEN_STATES_API_KEY=your_open_states_api_key
   AWS_ACCESS_KEY_ID=your_aws_access_key_id
   AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Deploy to AWS using your preferred CI/CD pipeline.

---

## Future Enhancements
- Add multilingual support for broader accessibility.
- Expand categorization models to include more nuanced legislative topics.
- Integrate user authentication for personalized dashboards.

---

## Contributions
Contributions are welcome! Please open an issue or submit a pull request to suggest improvements.

---


