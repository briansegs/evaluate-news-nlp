function getSentiment(event) {
    event.preventDefault()

    // check what text was put into the form field
    let sentimentText = document.getElementById('sentiment').value
    // Client.checkForName(formText)
    if (sentimentText === '') {
        alert ('Please input text.')
    } else {
        console.log("::: Sentiment Submitted :::")
    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
        Client.addResult(sentimentText)
    }

}

export { getSentiment }