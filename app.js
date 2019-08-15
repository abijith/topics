const express = require('express');
const app = express();


// Routing requests

const everydayInvestmentRoutes = require('./api/public/v1/getPopularTopics/everydayInvestment');
const moneySmartsRoutes = require('./api/public/v1/getPopularTopics/moneySmarts');
const retirementRoutes = require('./api/public/v1/getPopularTopics/retirement');
const familyFinanceRoutes = require('./api/public/v1/getPopularTopics/familyFinance');
const majorPurchaseRoutes = require('./api/public/v1/getPopularTopics/majorPurchase');
const insuranceRoutes = require('./api/public/v1/getPopularTopics/insurance');


app.use("/api/public/v1/getPopularTopics/everydayInvestment", everydayInvestmentRoutes);
app.use("/api/public/v1/getPopularTopics/moneySmarts", moneySmartsRoutes);
app.use("/api/public/v1/getPopularTopics/retirement", retirementRoutes);
app.use("/api/public/v1/getPopularTopics/familyFinance", familyFinanceRoutes);
app.use("/api/public/v1/getPopularTopics/majorPurchase", majorPurchaseRoutes);
app.use("/api/public/v1/getPopularTopics/insurance", insuranceRoutes);


//Error Handling
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error : {
            message : error.message
        }
    });
});


module.exports = app;