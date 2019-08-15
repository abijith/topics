const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        "areas" : "Money Smarts",
        "popularTopics" : [
            "Participate in Your Retirement Plan",
            "Eliminate Credit Card Debt",
            "Build Your Cash Reserves",
            "Invest in a Deductible IRA or Spousal IRA",
            "Fund a Taxable Account",
            "Why You Need a Budget",
            "How to Start a Budget",
            "How to Get Out of Debt",
            "Starting an Emergency Fund",
            "Interpreting Credit Reports",
            "Reducing Student Loan Debt"
        ],
        "id" : 2,
        "status" : "success"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        "areas" : "Money Smarts",
        "popularTopics" : [
            "Participate in Your Retirement Plan",
            "Eliminate Credit Card Debt",
            "Build Your Cash Reserves",
            "Invest in a Deductible IRA or Spousal IRA",
            "Fund a Taxable Account",
            "Why You Need a Budget",
            "How to Start a Budget",
            "How to Get Out of Debt",
            "Starting an Emergency Fund",
            "Interpreting Credit Reports",
            "Reducing Student Loan Debt"
        ],
        "id" : 2,
        "status" : "success"
    });
});


module.exports = router;