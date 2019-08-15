const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        "areas" : "Insurance",
        "popularTopics" : [
            "What is Life Insurance",
            "Why I Need Life Insurance",
            "How Much Life Insurance Do I Need",
            "How and When Should I Buy Insurance",
            "Difference Between Term and Permanent",
            "Choosing Between Term and Permanent",
            "Choosing and Updating Beneficiaries",
            "Finding a Lost Life Insurance Policy",
            "Filing a Life Insurance Claim",
            "Life Insurance Payouts and Denials",
            "Understandingf Long-Term Care",
            "Different Ways to Fund LTC Costs",
            "Disability Insurance",
            "Umbrella Insurance" 
        ],
        "topicsId" : 6,
        "status" : "success"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        "areas" : "Insurance",
        "popularTopics" : [
            "What is Life Insurance",
            "Why I Need Life Insurance",
            "How Much Life Insurance Do I Need",
            "How and When Should I Buy Insurance",
            "Difference Between Term and Permanent",
            "Choosing Between Term and Permanent",
            "Choosing and Updating Beneficiaries",
            "Finding a Lost Life Insurance Policy",
            "Filing a Life Insurance Claim",
            "Life Insurance Payouts and Denials",
            "Understandingf Long-Term Care",
            "Different Ways to Fund LTC Costs",
            "Disability Insurance",
            "Umbrella Insurance"
        ],
        "topicsId" : 6,
        "status" : "success"
    });
});

module.exports = router;