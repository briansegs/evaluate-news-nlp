let baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
let apiKey = `?key=${process.env.API_KEY}`;
let json = '&of=json&txt='
let lang = '&lang=en'

function analyzeSentiment(event) {
    event.preventDefault()

    let sentimentText = document.getElementById('sentiment').value

    if (sentimentText === '') {
        alert ('Please input text.')
    } else {
        console.log("::: Sentiment Submitted :::");

        let text = sentimentText.replace(/\s/g, '%20');

        Client.getAnalysis(baseURL, apiKey, json, text, lang)
        .then(function (data) {
            let formatedData = Client.formatAnalysis(data);
            Client.postData('/add', formatedData);
            Client.addToDom();
        })

    }
}


export { analyzeSentiment }

