const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/sample:
 *   get:
 *     summary: Retrieve a sample item
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 dob:
 *                   type: string
 *                   format: date
 *                 bankacctnumber:
 *                   type: string
 *                 bankrouting:
 *                   type: string
 *                 country:
 *                   type: string
 */
router.get('/sample', (req, res) => {
  res.status(200).json({
    id: 1,
    name: 'John Doe',
    dob: '1990-01-01',
    bankacctnumber: '123456789',
    bankrouting: '987654321',
    country: 'USA'
  });
});

/**
 * @swagger
 * /api/sample:
 *   post:
 *     summary: Create a new sample item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *               dob:
 *                 type: string
 *                 format: date
 *               bankacctnumber:
 *                 type: string
 *               bankrouting:
 *                 type: string
 *               country:
 *                 type: string
 *             required:
 *               - id
 *               - name
 *               - dob
 *               - bankacctnumber
 *               - bankrouting
 *               - country
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/sample', (req, res) => {
  res.status(201).send('Sample POST request');
});

/**
 * @swagger
 * /api/sample:
 *   put:
 *     summary: Update a sample item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *               dob:
 *                 type: string
 *                 format: date
 *               bankacctnumber:
 *                 type: string
 *               bankrouting:
 *                 type: string
 *               country:
 *                 type: string
 *             required:
 *               - id
 *               - name
 *               - dob
 *               - bankacctnumber
 *               - bankrouting
 *               - country
 *     responses:
 *       200:
 *         description: Updated
 */
router.put('/sample', (req, res) => {
  res.status(200).send('Sample PUT request');
});

/**
 * @swagger
 * /api/sample:
 *   delete:
 *     summary: Delete a sample item
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: No Content
 */
router.delete('/sample', (req, res) => {
  res.status(204).send('Sample DELETE request');
});

module.exports = router;