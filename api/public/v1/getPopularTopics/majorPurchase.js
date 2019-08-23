const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        "popularTopics" : {
            "Home or Major Renovation" : [{
                "topicsId" : "1",
                "topicsArea" : "Major Purchase"
            }],
            "Taking a Gap Year" : [{
                "topicsId" : "2",
                "topicsArea" : "Major Purchase"
            }],
            "Rental or Vacation Property" : [{
                "topicsId" : "3",
                "topicsArea" : "Major Purchase"
            }],
            "Other Major Purchases" : [{
                "topicsId" : "4",
                "topicsArea" : "Major Purchase"
            }],
            "High School Activities" : [{
                "topicsId" : "5",
                "topicsArea" : "Major Purchase"
            }],
            "Preparing for Standardized Tests" : [{
                "topicsId" : "6",
                "topicsArea" : "Major Purchase"
            }],
            "The College Search" : [{
                "topicsId" : "7",
                "topicsArea" : "Major Purchase"
            }],
            "The Application Process" : [{
                "topicsId" : "8",
                "topicsArea" : "Major Purchase"
            }],
            "Financial Aid" : [{
                "topicsId" : "9",
                "topicsArea" : "Major Purchase"
            }],
            "Graduate and Professional Funding" : [{
                "topicsId" : "10",
                "topicsArea" : "Major Purchase"
            }]
        },
        "status" : "200"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        "popularTopics" : {
            "Home or Major Renovation" : [{
                "topicsId" : "1",
                "topicsArea" : "Major Purchase"
            }],
            "Taking a Gap Year" : [{
                "topicsId" : "2",
                "topicsArea" : "Major Purchase"
            }],
            "Rental or Vacation Property" : [{
                "topicsId" : "3",
                "topicsArea" : "Major Purchase"
            }],
            "Other Major Purchases" : [{
                "topicsId" : "4",
                "topicsArea" : "Major Purchase"
            }],
            "High School Activities" : [{
                "topicsId" : "5",
                "topicsArea" : "Major Purchase"
            }],
            "Preparing for Standardized Tests" : [{
                "topicsId" : "6",
                "topicsArea" : "Major Purchase"
            }],
            "The College Search" : [{
                "topicsId" : "7",
                "topicsArea" : "Major Purchase"
            }],
            "The Application Process" : [{
                "topicsId" : "8",
                "topicsArea" : "Major Purchase"
            }],
            "Financial Aid" : [{
                "topicsId" : "9",
                "topicsArea" : "Major Purchase"
            }],
            "Graduate and Professional Funding" : [{
                "topicsId" : "10",
                "topicsArea" : "Major Purchase"
            }]
        },
        "status" : "200"
    });
});

module.exports = router;