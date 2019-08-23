const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        "popularTopics" : {
            "Retirement Planning Strategy" : [{
                "topicsId" :"1",
                "topicsArea" : "Retirement"
            }],
            "Understanding How Much You will Need" : [{
                "topicsId" :"2",
                "topicsArea" : "Retirement"
            }],
            "Identifying Your Retirement Assets" : [{
                "topicsId" :"3",
                "topicsArea" : "Retirement"
            }],
            "Are You on Track" : [{
                "topicsId" :"4",
                "topicsArea" : "Retirement"
            }],
            "Adjusting Your Budget to Increase Savings" : [{
                "topicsId" :"5",
                "topicsArea" : "Retirement"
            }],
            "Increasing Solicial Security Benefits" : [{
                "topicsId" :"6",
                "topicsArea" : "Retirement"
            }],
            "Considering Retirement Health Care" : [{
                "topicsId" :"7",
                "topicsArea" : "Retirement"
            }],
            "Considering Long-Term Care" : [{
                "topicsId" :"8",
                "topicsArea" : "Retirement"
            }],
            "Retirement Tax Planning" : [{
                "topicsId" :"9",
                "topicsArea" : "Retirement"
            }],
            "Social Security Basics" : [{
                "topicsId" :"10",
                "topicsArea" : "Retirement"
            }],
            "Access Your SS Account" : [{
                "topicsId" :"11",
                "topicsArea" : "Retirement"
            }],
            "Estimate Your SS Benefits" : [{
                "topicsId" :"12",
                "topicsArea" : "Retirement"
            }],
            "Evaluate When to Can Claim Your Benefits" : [{
                "topicsId" :"13",
                "topicsArea" : "Retirement"
            }],
            "Apply for SS Benefits" : [{
                "topicsId" :"14",
                "topicsArea" : "Retirement"
            }]
        },
        "status" : "200"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        "popularTopics" : {
            "Retirement Planning Strategy" : [{
                "topicsId" :"1",
                "topicsArea" : "Retirement"
            }],
            "Understanding How Much You will Need" : [{
                "topicsId" :"2",
                "topicsArea" : "Retirement"
            }],
            "Identifying Your Retirement Assets" : [{
                "topicsId" :"3",
                "topicsArea" : "Retirement"
            }],
            "Are You on Track" : [{
                "topicsId" :"4",
                "topicsArea" : "Retirement"
            }],
            "Adjusting Your Budget to Increase Savings" : [{
                "topicsId" :"5",
                "topicsArea" : "Retirement"
            }],
            "Increasing Solicial Security Benefits" : [{
                "topicsId" :"6",
                "topicsArea" : "Retirement"
            }],
            "Considering Retirement Health Care" : [{
                "topicsId" :"7",
                "topicsArea" : "Retirement"
            }],
            "Considering Long-Term Care" : [{
                "topicsId" :"8",
                "topicsArea" : "Retirement"
            }],
            "Retirement Tax Planning" : [{
                "topicsId" :"9",
                "topicsArea" : "Retirement"
            }],
            "Social Security Basics" : [{
                "topicsId" :"10",
                "topicsArea" : "Retirement"
            }],
            "Access Your SS Account" : [{
                "topicsId" :"11",
                "topicsArea" : "Retirement"
            }],
            "Estimate Your SS Benefits" : [{
                "topicsId" :"12",
                "topicsArea" : "Retirement"
            }],
            "Evaluate When to Can Claim Your Benefits" : [{
                "topicsId" :"13",
                "topicsArea" : "Retirement"
            }],
            "Apply for SS Benefits" : [{
                "topicsId" :"14",
                "topicsArea" : "Retirement"
            }]
        },
        "status" : "200"
    });
});


module.exports = router;