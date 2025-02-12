const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Sample API',
      version: '1.0.0',
      description: 'A sample API to demonstrate Swagger with Node.js',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    paths: {
      '/api/sample': {
        get: {
          summary: 'Retrieve a sample item',
          responses: {
            200: {
              description: 'A successful response',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      id: { type: 'integer' },
                      name: { type: 'string' },
                      dob: { type: 'string', format: 'date' },
                      bankacctnumber: { type: 'string' },
                      bankrouting: { type: 'string' },
                      country: { type: 'string' },
                    },
                  },
                },
              },
            },
          },
        },
        post: {
          summary: 'Create a new sample item',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    id: { type: 'integer' },
                    name: { type: 'string' },
                    dob: { type: 'string', format: 'date' },
                    bankacctnumber: { type: 'string' },
                    bankrouting: { type: 'string' },
                    country: { type: 'string' },
                  },
                  required: ['id', 'name', 'dob', 'bankacctnumber', 'bankrouting', 'country'],
                },
              },
            },
          },
          responses: {
            201: {
              description: 'Created',
            },
          },
        },
        put: {
          summary: 'Update a sample item',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    id: { type: 'integer' },
                    name: { type: 'string' },
                    dob: { type: 'string', format: 'date' },
                    bankacctnumber: { type: 'string' },
                    bankrouting: { type: 'string' },
                    country: { type: 'string' },
                  },
                  required: ['id', 'name', 'dob', 'bankacctnumber', 'bankrouting', 'country'],
                },
              },
            },
          },
          responses: {
            200: {
              description: 'Updated',
            },
          },
        },
        delete: {
          summary: 'Delete a sample item',
          parameters: [
            {
              name: 'id',
              in: 'query',
              required: true,
              schema: {
                type: 'integer',
              },
            },
          ],
          responses: {
            204: {
              description: 'No Content',
            },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'], // Path to the API docs
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;