/* const { PORT } = require('./common/config');
const app = require('./app');

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
*/

const app = require('./app');

app.listen(4000, () => {
  console.log('Server is started on 4000');
});