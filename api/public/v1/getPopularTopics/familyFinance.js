const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        "areas" : "Family Finance",
        "popularTopics" : [
            "Leveraging Open Enrollment",
            "Understanding the Types of Health Insurance Plans",
            "Health Savings Accounts",
            "Coping with Medical Bills",
            "The Wedding Budget",
            "Planning Your Financial Life Together",
            "Marriage and Taxes",
            "The Financial Impact of Divorce",
            "Divorce Asset and Debt Considerations",
            "Divorce and Taxes",
            "How Divorce Affects Social Security",
            "How Divorce AffectsPensions and Retirement Plans",
            "Basic Estate Planning",
            "Introduction to Wills",
            "Power of Attorney",
            "Living Wills, Health Care Proxies and Advanved Directives",
            "Asset Ownership",
            "Probate",
            "Estate, Gifts and Generation Skipping Taxes",
            "State Estate Planning",
            "Trusts",
            "Guidelines for Executors and Trustees",
            "Loss of a Spouse",
            "New Household",
            "Preparing to Enter Retirement",
            "Re-Entering the Workforce",
            "Selling a Home"
        ],
        "topicsId" : 4,
        "status" : "success"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        "areas" : "Family Finance",
        "popularTopics" : [
            "Leveraging Open Enrollment",
            "Understanding the Types of Health Insurance Plans",
            "Health Savings Accounts",
            "Coping with Medical Bills",
            "The Wedding Budget",
            "Planning Your Financial Life Together",
            "Marriage and Taxes",
            "The Financial Impact of Divorce",
            "Divorce Asset and Debt Considerations",
            "Divorce and Taxes",
            "How Divorce Affects Social Security",
            "How Divorce AffectsPensions and Retirement Plans",
            "Basic Estate Planning",
            "Introduction to Wills",
            "Power of Attorney",
            "Living Wills, Health Care Proxies and Advanved Directives",
            "Asset Ownership",
            "Probate",
            "Estate, Gifts and Generation Skipping Taxes",
            "State Estate Planning",
            "Trusts",
            "Guidelines for Executors and Trustees",
            "Loss of a Spouse",
            "New Household",
            "Preparing to Enter Retirement",
            "Re-Entering the Workforce",
            "Selling a Home"
        ],
        "topicsId" : 4,
        "status" : "success"
    });
});


module.exports = router;