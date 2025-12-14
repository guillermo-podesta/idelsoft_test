import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {

  test('TC11: api/book should return 500 @api @negative', async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/api/book`, {
      headers: {
        'content-type': 'application/json'
      }
    });
    
    expect(response.status()).toBe(500);
    expect(response.ok()).toBeFalsy();
  });

  test('TC12: Verify api/login returns 401 when invalid credentials are given @api @negative', async ({ request, baseURL }) => {
    const response = await request.post(`${baseURL}/api/login`, {
      headers: {
        'content-type': 'application/json'
      },
      data: {
        username: 'pepe',
        password: 'test'
      }
    });
    
    expect(response.status()).toBe(401);
    expect(response.ok()).toBeFalsy();
  });

  test('TC13: Verify that GetCategoriesList returns 200 OK and a list of categories @api @positive', async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/api/book//GetCategoriesList`, {
      headers: {
        'content-type': 'application/json'
      }
    });
    
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    
    const categories = await response.json();
    expect(Array.isArray(categories)).toBeTruthy();
    expect(categories.length).toBeGreaterThan(0);
    
    expect(categories[0]).toHaveProperty('categoryId');
    expect(categories[0]).toHaveProperty('categoryName');
  });

  test('TC14: Verify that creating a user via /api/user returns 200 OK with valid data @api @functional @positive', async ({ request, baseURL }) => {
    const response = await request.post(`${baseURL}/api/user/`, {
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        firstName: 'Jorge',
        lastName: 'Villalobos',
        userName: 'jorgetest',
        password: 'Testing1234',
        confirmPassword: 'Testing1234',
        gender: 'Male'
      }
    });
    
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
  });
});
