const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        "areas" : "Major Purchase",
        "popularTopics" : [
            "Home or Major Renovation",
            "Taking a Gap Year",
            "Rental or Vacation Property",
            "Other Major Purchase",
            "High School Activities",
            "Preparing for Standardized Tests",
            "The College Search",
            "The Application Process",
            "Financial Aid",
            "Graduate and Professional Funding"
        ],
        "topicsId" : 5,
        "status" : "success"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        "areas" : "Major Purchase",
        "popularTopics" : [
            "Home or Major Renovation",
            "Taking a Gap Year",
            "Rental or Vacation Property",
            "Other Major Purchase",
            "High School Activities",
            "Preparing for Standardized Tests",
            "The College Search",
            "The Application Process",
            "Financial Aid",
            "Graduate and Professional Funding"
        ],
        "topicsId" : 5,
        "status" : "success"
    });
});

module.exports = router;