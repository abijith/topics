const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        "popularTopics": {
            "What is Life Insurance": [{
                "topicsId": "1",
                "topicsArea": "Insurance"
            }],
            "Why I Need Life Insurance": [{
                "topicsId": "2",
                "topicsArea": "Insurance"
            }],
            "How Much Life Insurance Do I Need": [{
                "topicsId": "3",
                "topicsArea": "Insurance"
            }],
            "How and When Should I Buy Insurance": [{
                "topicsId": "4",
                "topicsArea": "Insurance"
            }],
            "Difference Between Term and Permanent": [{
                "topicsId": "5",
                "topicsArea": "Insurance"
            }],
            "Choosing Between Term and Permanent": [{
                "topicsId": "6",
                "topicsArea": "Insurance"
            }],
            "Choosing and Updating Beneficiaries": [{
                "topicsId": "7",
                "topicsArea": "Insurance"
            }],
            "Finding a Lost Life Insurance Policy": [{
                "topicsId": "8",
                "topicsArea": "Insurance"
            }],
            "Filing a Life Insurance Claim": [{
                "topicsId": "9",
                "topicsArea": "Insurance"
            }],
            "Life Insurance Payouts and Denials": [{
                "topicsId": "10",
                "topicsArea": "Insurance"
            }],
            "Understandingf Long-Term Care": [{
                "topicsId": "11",
                "topicsArea": "Insurance"
            }],
            "Different Ways to Fund LTC Costs": [{
                "topicsId": "12",
                "topicsArea": "Insurance"
            }],
            "Disability Insurance": [{
                "topicsId": "13",
                "topicsArea": "Insurance"
            }],
            "Umbrella Insurance": [{
                "topicsId": "14",
                "topicsArea": "Insurance"
            }]
        },
        "status": "200"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        "popularTopics": {
            "What is Life Insurance": [{
                "topicsId": "1",
                "topicsArea": "Insurance"
            }],
            "Why I Need Life Insurance": [{
                "topicsId": "2",
                "topicsArea": "Insurance"
            }],
            "How Much Life Insurance Do I Need": [{
                "topicsId": "3",
                "topicsArea": "Insurance"
            }],
            "How and When Should I Buy Insurance": [{
                "topicsId": "4",
                "topicsArea": "Insurance"
            }],
            "Difference Between Term and Permanent": [{
                "topicsId": "5",
                "topicsArea": "Insurance"
            }],
            "Choosing Between Term and Permanent": [{
                "topicsId": "6",
                "topicsArea": "Insurance"
            }],
            "Choosing and Updating Beneficiaries": [{
                "topicsId": "7",
                "topicsArea": "Insurance"
            }],
            "Finding a Lost Life Insurance Policy": [{
                "topicsId": "8",
                "topicsArea": "Insurance"
            }],
            "Filing a Life Insurance Claim": [{
                "topicsId": "9",
                "topicsArea": "Insurance"
            }],
            "Life Insurance Payouts and Denials": [{
                "topicsId": "10",
                "topicsArea": "Insurance"
            }],
            "Understandingf Long-Term Care": [{
                "topicsId": "11",
                "topicsArea": "Insurance"
            }],
            "Different Ways to Fund LTC Costs": [{
                "topicsId": "12",
                "topicsArea": "Insurance"
            }],
            "Disability Insurance": [{
                "topicsId": "13",
                "topicsArea": "Insurance"
            }],
            "Umbrella Insurance": [{
                "topicsId": "14",
                "topicsArea": "Insurance"
            }]
        },
        "status": "200"
    });
});

module.exports = router;