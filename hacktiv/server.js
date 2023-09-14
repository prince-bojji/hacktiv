const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// ... other server code ...

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
