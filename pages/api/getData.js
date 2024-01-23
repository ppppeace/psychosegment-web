// pages/api/getData.js
import db from '../../src/app/db';

export default async function handler(req, res) {
  db.query('SELECT * FROM attractions', (error, results, fields) => {
    if (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(results);
    }
  });
}
