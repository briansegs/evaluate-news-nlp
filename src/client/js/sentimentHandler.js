let baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
let apiKey = `?key=${process.env.API_KEY}`;
let json = '&of=json&txt='
let lang = '&lang=en'

function getSentiment(event) {
    event.preventDefault()

    let sentimentText = document.getElementById('sentiment').value

    if (sentimentText === '') {
        alert ('Please input text.')
    } else {
        console.log("::: Sentiment Submitted :::")

        let text = sentimentText.replace(/\s/g, '%20');
        console.log(baseURL+apiKey+json+text+lang)

        fetch(baseURL+apiKey+json+text+lang)
            .then(res => res.json())
            .then(res => Client.addToDom(res));
    }

}

export { getSentiment }