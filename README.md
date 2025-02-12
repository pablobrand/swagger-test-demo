# Swagger Sample Project

This is a sample Node.js project demonstrating how to use Swagger for API documentation. The project includes a basic Express server with Swagger UI to visualize the API documentation.

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd swagger-sample
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Running the Project

1. **Start the server:**

   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000`.

2. **Access Swagger UI:**

   Open your browser and navigate to `http://localhost:3000/api-docs` to view the Swagger documentation.

## Generating Swagger JSON

To generate a static Swagger JSON file, run:

```bash
npm run build-swagger
```

This will create a `swagger.json` file in the project root.

