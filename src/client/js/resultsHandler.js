function addResult(sentimentText) {
    console.log("::: Creating Elements :::");

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
    }

    let formatedResults = Client.formatResult(res);
    console.log(formatedResults);

    let tb = document.getElementById('tbody');
    let tr = document.createElement('tr');
    for (let i in formatedResults) {
        let td = document.createElement('td');
        td.innerHTML = formatedResults[i];
        tr.appendChild(td)
    }
    tb.appendChild(tr);

    console.log("::: Elements Created :::");

    document.getElementById('sentiment-results').innerHTML = JSON.stringify(res);

}

export { addResult }