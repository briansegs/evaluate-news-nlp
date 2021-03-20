// Variables to build API call
let baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
let apiKey = `?key=${process.env.API_KEY}`;
let json = '&of=json&txt='
let lang = '&lang=en'

/**
 * Stores text from form
 * Alerts if text field is empty
 * Calls the API
 * Formats data recieved from API
 * Posts data to the server
 * Creates a table with data from the server and adds it to the DOM
 */
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

