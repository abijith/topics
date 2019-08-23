const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        "popularTopics" : {
            "Participate in Your Retirement Plan" : [{
                "topicsId" : "1",
                "topicsArea" : "Money Smarts"
            }],
            "Eliminate Credit Card Debt" : [{
                "topicsId" : "2",
                "topicsArea" : "Money Smarts"
            }],
            "Build Your Cash Reserves" : [{
                "topicsId" : "3",
                "topicsArea" : "Money Smarts"
            }],
            "Invest in a Deductible IRA or Spousal IRA" : [{
                "topicsId" : "4",
                "topicsArea" : "Money Smarts"
            }],
            "Fund a Taxable Account" : [{
                "topicsId" : "5",
                "topicsArea" : "Money Smarts"
            }],
            "Why You Need a Budget" : [{
                "topicsId" : "6",
                "topicsArea" : "Money Smarts"
            }],
            "How to Start a Budget" : [{
                "topicsId" : "7",
                "topicsArea" : "Money Smarts"
            }],
            "How to Get Out of Debt" : [{
                "topicsId" : "8",
                "topicsArea" : "Money Smarts"
            }],
            "Starting an Emergency Fund" : [{
                "topicsId" : "9",
                "topicsArea" : "Money Smarts"
            }],
            "Interpreting Credit Reports" : [{
                "topicsId" : "10",
                "topicsArea" : "Money Smarts"
            }],
            "Reducing Student Loan Debt" : [{
                "topicsId" : "11",
                "topicsArea" : "Money Smarts"
            }]
        },
        "status" : "200"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        "popularTopics" : {
            "Participate in Your Retirement Plan" : [{
                "topicsId" : "1",
                "topicsArea" : "Money Smarts"
            }],
            "Eliminate Credit Card Debt" : [{
                "topicsId" : "2",
                "topicsArea" : "Money Smarts"
            }],
            "Build Your Cash Reserves" : [{
                "topicsId" : "3",
                "topicsArea" : "Money Smarts"
            }],
            "Invest in a Deductible IRA or Spousal IRA" : [{
                "topicsId" : "4",
                "topicsArea" : "Money Smarts"
            }],
            "Fund a Taxable Account" : [{
                "topicsId" : "5",
                "topicsArea" : "Money Smarts"
            }],
            "Why You Need a Budget" : [{
                "topicsId" : "6",
                "topicsArea" : "Money Smarts"
            }],
            "How to Start a Budget" : [{
                "topicsId" : "7",
                "topicsArea" : "Money Smarts"
            }],
            "How to Get Out of Debt" : [{
                "topicsId" : "8",
                "topicsArea" : "Money Smarts"
            }],
            "Starting an Emergency Fund" : [{
                "topicsId" : "9",
                "topicsArea" : "Money Smarts"
            }],
            "Interpreting Credit Reports" : [{
                "topicsId" : "10",
                "topicsArea" : "Money Smarts"
            }],
            "Reducing Student Loan Debt" : [{
                "topicsId" : "11",
                "topicsArea" : "Money Smarts"
            }]
        },
        "status" : "200"
    });
});


module.exports = router;