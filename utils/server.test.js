const axios = require('axios');
const { mocked } = require('ts-jest/utils');
const app = require('../server');
const FormData = require('form-data');
const fs = require('fs');

jest.mock('axios');

describe('RENT-Scout Server', () => {
  it('should return rental properties when searched', async () => {
    const mockedResponse = {
      data: {
        results: [
          {
            address: '123 Main St',
            price: 1500,
            bedrooms: 2,
            bathrooms: 1
          },
          {
            address: '456 Elm St',
            price: 2000,
            bedrooms: 3,
            bathrooms: 2
          }
        ]
      }
    };

    mocked(axios.get).mockResolvedValue(mockedResponse);

    const response = await app.get('/search?location=Seattle&maxPrice=2500&minBedrooms=2');

    expect(response.status).toBe(200);
    expect(response.data).toEqual([
      {
        address: '123 Main St',
        price: 1500,
        bedrooms: 2,
        bathrooms: 1
      },
      {
        address: '456 Elm St',
        price: 2000,
        bedrooms: 3,
        bathrooms: 2
      }
    ]);
  });

  it('should upload a file', async () => {
    const fileContent = fs.readFileSync('test-file.txt'); // Assuming 'test-file.txt' exists in the project directory
    const formData = new FormData();
    formData.append('file', fileContent, { filename: 'test-file.txt' });

    const response = await app.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        ...formData.getHeaders()
      }
    });

    expect(response.status).toBe(200);
    expect(response.data).toEqual({ message: 'File uploaded successfully' });
  });
// server.test.js
const request = require('supertest');
const app = require('./server'); // Import your server file or module

describe('RENT-Scout Server', () => {
  it('should return 200 OK when / endpoint is accessed', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    // Your test logic here 
  });

  it('should return 404 Not Found when accessing an invalid endpoint', async () => {
    const response = await request(app).get('/invalid');
    expect(response.status).toBe(404);
  });

 it('should handle POST requests to /api/data', async () => {
    const newData = { key: 'value' };
    const response = await request(app)
      .post('/api/data')
      .send(newData);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(newData);
  });


  it('should return 400 Bad Request when sending invalid data to POST /api/data', async () => {
    const invalidData = { invalid: 'data' };
    const response = await request(app)
      .post('/api/data')
      .send(invalidData);
    expect(response.status).toBe(400);
  });

  it('should handle PUT requests to /api/data/:id', async () => {
    const updatedData = { key: 'updatedValue' };
    const response = await request(app)
      .put('/api/data/1')
      .send(updatedData);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(updatedData);
  });

})
})
