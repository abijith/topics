const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        "popularTopics" : {
            "Understanding the Stock Market" : [{
                "topicsId" : "1",
                "topicsArea" : "Everyday Investment"
            }],
            "Understanding Diversification" : [{
                "topicsId" : "2",
                "topicsArea" : "Everyday Investment"
            }],
            "Benefits of Asset Allocation" : [{
                "topicsId" : "3",
                "topicsArea" : "Everyday Investment"
            }],
            "Fees Matter" : [{
                "topicsId" : "4",
                "topicsArea" : "Everyday Investment"
            }],
            "The Link Between Risk and Return" : [{
                "topicsId" : "5",
                "topicsArea" : "Everyday Investment"
            }],
            "The Importance of Staying in the Market" : [{
                "topicsId" : "6",
                "topicsArea" : "Everyday Investment"
            }],
            "Active and Passive Investing" : [{
                "topicsId" : "7",
                "topicsArea" : "Everyday Investment"
            }],
            "Portfolio Monitoring and Rebalancing" : [{
                "topicsId" : "8",
                "topicsArea" : "Everyday Investment"
            }],
            "Focus on the Long-Term" : [{
                "topicsId" : "9",
                "topicsArea" : "Everyday Investment"
            }],
            "Why You Shouldn't Trust History" : [{
                "topicsId" : "10",
                "topicsArea" : "Everyday Investment"
            }]
        },
        "status" : "200"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        "popularTopics" : {
            "Understanding the Stock Market" : [{
                "topicsId" : "1",
                "topicsArea" : "Everyday Investment"
            }],
            "Understanding Diversification" : [{
                "topicsId" : "2",
                "topicsArea" : "Everyday Investment"
            }],
            "Benefits of Asset Allocation" : [{
                "topicsId" : "3",
                "topicsArea" : "Everyday Investment"
            }],
            "Fees Matter" : [{
                "topicsId" : "4",
                "topicsArea" : "Everyday Investment"
            }],
            "The Link Between Risk and Return" : [{
                "topicsId" : "5",
                "topicsArea" : "Everyday Investment"
            }],
            "The Importance of Staying in the Market" : [{
                "topicsId" : "6",
                "topicsArea" : "Everyday Investment"
            }],
            "Active and Passive Investing" : [{
                "topicsId" : "7",
                "topicsArea" : "Everyday Investment"
            }],
            "Portfolio Monitoring and Rebalancing" : [{
                "topicsId" : "8",
                "topicsArea" : "Everyday Investment"
            }],
            "Focus on the Long-Term" : [{
                "topicsId" : "9",
                "topicsArea" : "Everyday Investment"
            }],
            "Why You Shouldn't Trust History" : [{
                "topicsId" : "10",
                "topicsArea" : "Everyday Investment"
            }]
        },
        "status" : "200"
    });
});

module.exports = router;