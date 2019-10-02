var handleBar=require('handlebars');
var fs=require("fs");

var source=fs.readFileSync('handleBarTemplate','utf8');
// var data = fs.readFileSync('handleBarInputData','utf8');

var data=[{
    "baseId": "1",
    "feature": {
        "1": "parent",
        "2": "first entry"
    },
    "contentType": {
        "1": {
            "value": "pure"
        },
        "2": {
            "value": "mix"
        }
    },
    "isActive": true,
    "childProducts": [{
            "baseId": "1-1",
            "isActive": true
        },
        {
            "baseId": "1-2",
            "isActive": false
        },
        {
            "baseId": "1-3",
            "isActive": true
        },
        {
            "baseId": "1-4",
            "isActive": true,
            "feature": {
                "1": "parent",
                "2": "first entry"
            },
            "searchTerms": {
                "0": "glue",
                "1": "adhesive",
                "2": "stick"
            }
        }
    ]
},
{
    "baseId": "100",
    "feature": {
        "1": "parent",
        "2": "first entry"
    },
    "contentType": {
        "1": {
            "value": "pure"
        },
        "2": {
            "value": "mix"
        }
    },
    "isActive": true,
    "childProducts": [{
            "baseId": "1-1",
            "isActive": true
        },
        {
            "baseId": "1-2",
            "isActive": false
        },
        {
            "baseId": "1-3",
            "isActive": true
        },
        {
            "baseId": "1-4",
            "isActive": true,
            "feature": {
                "1": "parent",
                "2": "first entry"
            },
            "searchTerms": {
                "0": "glue",
                "1": "adhesive",
                "2": "stick"
            }
        }
    ]
}];
var template = handleBar.compile(source);
// console.log(data);
var result = template(data);

console.log(result);