function addResult(sentimentText) {

    let res = {
        status: {
            'code': "0",
            'msg': "OK",
            'credits': "1",
            'remaining_credits': "19991"
            },
        'model': "general_en",
        'score_tag': "P",
        'agreement': "AGREEMENT",
        'subjectivity': "SUBJECTIVE",
        'confidence': "100",
        'irony': "NONIRONIC",
        'sentence_list': [{'text': sentimentText}]
    };

    let formatedResults = Client.formatAnalysis(res);
    console.log('Formated Results:', formatedResults);

    Client.createTable(formatedResults);

    document.getElementById('sentiment-results').innerHTML = JSON.stringify(res);


}

export { addResult }

