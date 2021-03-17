function formatAnalysis(res) {
    let formated = {
        'Text': res['sentence_list'][0].text,
        'Score tag': res['score_tag'],
        'Agreement': res['agreement'],
        'Confidence': res['confidence']
    };

    console.log(formated["Score tag"]);
    switch (formated['Score tag']) {
        case 'P':
            formated['Score tag'] = 'Positive';
            break;
        case 'P+':
            formated['Score tag'] = 'Strong Positive';
            break;
        case 'NEU':
            formated['Score tag'] = 'Neutral';
            break;
        case 'N':
            formated['Score tag'] = 'Negative';
            break;
        case 'N+':
            formated['Score tag'] = 'Strong Negative';
            break;
        case 'NONE':
            formated['Score tag'] = 'Without Sentiment';
            break;
    }

    return formated
}

export { formatAnalysis }