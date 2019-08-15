const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        "areas" : "Everyday Investment",
        "popularTopics" : [
            "Understanding the Stock Market",
            "Understanding Diversification",
            "Benefits of Asset Allocation",
            "Fees Matter",
            "The Link Between Risk and Return",
            "The Importance of Staying in the Market",
            "Active and Passive Investing",
            "Portfolio Monitoring and Rebalancing",
            "Focus on the Long-Term",
            "Why You Shouldn't Trust History",
            "How to Choose an Advisor"
        ],
        "topicsId" : 1,
        "status" : "success"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        "areas" : "Everyday Investment",
        "popularTopics" : [
            "Understanding the Stock Market",
            "Understanding Diversification",
            "Benefits of Asset Allocation",
            "Fees Matter",
            "The Link Between Risk and Return",
            "The Importance of Staying in the Market",
            "Active and Passive Investing",
            "Portfolio Monitoring and Rebalancing",
            "Focus on the Long-Term",
            "Why You Shouldn't Trust History",
            "How to Choose an Advisor"
        ],
        "topicsId" : 1,
        "status" : "success"
    });
});

module.exports = router;