const app = require('../app');
const PORT = 8181;
const carsRoutes = require('../routes/routes')

app.use('/', carsRoutes);
app.listen(PORT, () => {
    console.log(`App Running on Port ${PORT}`);
});
