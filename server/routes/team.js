import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('===== team!!======');
  res.json({ teams: null });
});

module.exports = router;
