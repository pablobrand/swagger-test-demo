const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swaggerConfig');
const sampleRoutes = require('./routes/sampleRoutes'); // Import the routes

const app = express();
const PORT = process.env.PORT || 3000;

// Swagger UI setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Use the sample routes
app.use('/api', sampleRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});