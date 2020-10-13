const fetch = require('node-fetch');
// const getInfo = require('./getInfo');


let apiKey = "0d685371-fefc-42f9-9973-bd01b6a0bdf1"

// let value = "value_example"; //{String Domain name to check }


let url = `https://api.cloudmersive.com/nlp-v2/analytics/sentiment`

const nlpModule = async (textString) => {
    console.log(textString)
    let body = {TextToAnalyze : textString}
    let value = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Apikey': apiKey,
                'Content-Type': 'application/json'
                // 'contentType': 'application/x-www-form-urlencoded',
            }
        })
        return await value.json();

};



module.exports = nlpModule;


// POST /nlp-v2/analytics/sentiment