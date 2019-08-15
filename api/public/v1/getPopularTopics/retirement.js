const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        "areas" : "Retirement",
        "popularTopics" : [
            "Retirement Planning Strategy",
            "Understanding How Much You will Need",
            "Identifying Your Retirement Assets",
            "Are You on Track",
            "Adjusting Your Budget to Increase Savings",
            "Increasing Solicial Security Benefits",
            "Considering Retirement Health Care",
            "Considering Long-Term Care",
            "Retirement Tax Planning",
            "Social Security Basics",
            "Access Your SS Account",
            "Estimate Your SS Benefits",
            "Evaluate When to Can Claim Your Benefits",
            "Apply for SS Benefits"
        ],
        "topicsId" : 3,
        "status" : "success"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        "areas" : "Retirement",
        "popularTopics" : [
            "Retirement Planning Strategy",
            "Understanding How Much You will Need",
            "Identifying Your Retirement Assets",
            "Are You on Track",
            "Adjusting Your Budget to Increase Savings",
            "Increasing Solicial Security Benefits",
            "Considering Retirement Health Care",
            "Considering Long-Term Care",
            "Retirement Tax Planning",
            "Social Security Basics",
            "Access Your SS Account",
            "Estimate Your SS Benefits",
            "Evaluate When to Can Claim Your Benefits",
            "Apply for SS Benefits"
        ],
        "topicsId" : 3,
        "status" : "success"
    });
});


module.exports = router;