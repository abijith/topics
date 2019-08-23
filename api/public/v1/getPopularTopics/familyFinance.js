const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        "areas" : "Family Finance",
        "popularTopics" : {
            "Leveraging Open Enrollment" : [{
                "topicsId" : "1",
                "topicsArea" : "Family Finance"
            }],
            "Understanding the Types of Health Insurance Plans" : [{
                "topicsId" : "2",
                "topicsArea" : "Family Finance"
            }],
            "Health Savings Accounts" : [{
                "topicsId" : "3",
                "topicsArea" : "Family Finance"
            }],
            "Coping with Medical Bills" : [{
                "topicsId" : "4",
                "topicsArea" : "Family Finance"
            }],
            "The Wedding Budget" : [{
                "topicsId" : "5",
                "topicsArea" : "Family Finance"
            }],
            "Planning Your Financial Life Together" : [{
                "topicsId" : "6",
                "topicsArea" : "Family Finance"
            }],
            "Marriage and Taxes" : [{
                "topicsId" : "7",
                "topicsArea" : "Family Finance"
            }],
            "The Financial Impact of Divorce" : [{
                "topicsId" : "8",
                "topicsArea" : "Family Finance"
            }],
            "Divorce Asset and Debt Considerations" : [{
                "topicsId" : "9",
                "topicsArea" : "Family Finance"
            }],
            "Divorce and Taxes" : [{
                "topicsId" : "10",
                "topicsArea" : "Family Finance"
            }],
            "How Divorce Affects Social Security" : [{
                "topicsId" : "11",
                "topicsArea" : "Family Finance"
            }],
            "How Divorce AffectsPensions and Retirement Plans" : [{
                "topicsId" : "12",
                "topicsArea" : "Family Finance"
            }],
            "Basic Estate Planning" : [{
                "topicsId" : "13",
                "topicsArea" : "Family Finance"
            }],
            "Introduction to Wills" : [{
                "topicsId" : "14",
                "topicsArea" : "Family Finance"
            }],
            "Power of Attorney" : [{
                "topicsId" : "15",
                "topicsArea" : "Family Finance"
            }],
            "Living Wills, Health Care Proxies and Advanved Directives" : [{
                "topicsId" : "16",
                "topicsArea" : "Family Finance"
            }],
            "Asset Ownership" : [{
                "topicsId" : "17",
                "topicsArea" : "Family Finance"
            }],
            "Probate" : [{
                "topicsId" : "18",
                "topicsArea" : "Family Finance"
            }],
            "Estate, Gifts and Generation Skipping Taxes" : [{
                "topicsId" : "19",
                "topicsArea" : "Family Finance"
            }],
            "State Estate Planning" : [{
                "topicsId" : "20",
                "topicsArea" : "Family Finance"
            }],
            "Trusts" : [{
                "topicsId" : "21",
                "topicsArea" : "Family Finance"
            }],
            "Guidelines for Executors and Trustees" : [{
                "topicsId" : "22",
                "topicsArea" : "Family Finance"
            }],
            "Loss of a Spouse" : [{
                "topicsId" : "23",
                "topicsArea" : "Family Finance"
            }],
            "New Household" : [{
                "topicsId" : "24",
                "topicsArea" : "Family Finance"
            }],
            "Preparing to Enter Retirement" : [{
                "topicsId" : "25",
                "topicsArea" : "Family Finance"
            }],
            "Re-Entering the Workforce" : [{
                "topicsId" : "26",
                "topicsArea" : "Family Finance"
            }],
            "Selling a Home" : [{
               "topicsId" : "27",
               "topicsArea" : "Family Finance" 
            }]
        },
        "status" : "200"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        "areas" : "Family Finance",
        "popularTopics" : {
            "Leveraging Open Enrollment" : [{
                "topicsId" : "1",
                "topicsArea" : "Family Finance"
            }],
            "Understanding the Types of Health Insurance Plans" : [{
                "topicsId" : "2",
                "topicsArea" : "Family Finance"
            }],
            "Health Savings Accounts" : [{
                "topicsId" : "3",
                "topicsArea" : "Family Finance"
            }],
            "Coping with Medical Bills" : [{
                "topicsId" : "4",
                "topicsArea" : "Family Finance"
            }],
            "The Wedding Budget" : [{
                "topicsId" : "5",
                "topicsArea" : "Family Finance"
            }],
            "Planning Your Financial Life Together" : [{
                "topicsId" : "6",
                "topicsArea" : "Family Finance"
            }],
            "Marriage and Taxes" : [{
                "topicsId" : "7",
                "topicsArea" : "Family Finance"
            }],
            "The Financial Impact of Divorce" : [{
                "topicsId" : "8",
                "topicsArea" : "Family Finance"
            }],
            "Divorce Asset and Debt Considerations" : [{
                "topicsId" : "9",
                "topicsArea" : "Family Finance"
            }],
            "Divorce and Taxes" : [{
                "topicsId" : "10",
                "topicsArea" : "Family Finance"
            }],
            "How Divorce Affects Social Security" : [{
                "topicsId" : "11",
                "topicsArea" : "Family Finance"
            }],
            "How Divorce AffectsPensions and Retirement Plans" : [{
                "topicsId" : "12",
                "topicsArea" : "Family Finance"
            }],
            "Basic Estate Planning" : [{
                "topicsId" : "13",
                "topicsArea" : "Family Finance"
            }],
            "Introduction to Wills" : [{
                "topicsId" : "14",
                "topicsArea" : "Family Finance"
            }],
            "Power of Attorney" : [{
                "topicsId" : "15",
                "topicsArea" : "Family Finance"
            }],
            "Living Wills, Health Care Proxies and Advanved Directives" : [{
                "topicsId" : "16",
                "topicsArea" : "Family Finance"
            }],
            "Asset Ownership" : [{
                "topicsId" : "17",
                "topicsArea" : "Family Finance"
            }],
            "Probate" : [{
                "topicsId" : "18",
                "topicsArea" : "Family Finance"
            }],
            "Estate, Gifts and Generation Skipping Taxes" : [{
                "topicsId" : "19",
                "topicsArea" : "Family Finance"
            }],
            "State Estate Planning" : [{
                "topicsId" : "20",
                "topicsArea" : "Family Finance"
            }],
            "Trusts" : [{
                "topicsId" : "21",
                "topicsArea" : "Family Finance"
            }],
            "Guidelines for Executors and Trustees" : [{
                "topicsId" : "22",
                "topicsArea" : "Family Finance"
            }],
            "Loss of a Spouse" : [{
                "topicsId" : "23",
                "topicsArea" : "Family Finance"
            }],
            "New Household" : [{
                "topicsId" : "24",
                "topicsArea" : "Family Finance"
            }],
            "Preparing to Enter Retirement" : [{
                "topicsId" : "25",
                "topicsArea" : "Family Finance"
            }],
            "Re-Entering the Workforce" : [{
                "topicsId" : "26",
                "topicsArea" : "Family Finance"
            }],
            "Selling a Home" : [{
               "topicsId" : "27",
               "topicsArea" : "Family Finance" 
            }]
        },
        "status" : "200"
    });
});


module.exports = router;