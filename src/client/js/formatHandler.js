function formatAnalysis(data) {
    console.log('data', data);
    let formatedData = {
        'Text': data['sentence_list'][0].text,
        'Score tag': data['score_tag'],
        'Agreement': data['agreement'],
        'Confidence': data['confidence']
    };

    switch (formatedData['Score tag']) {
        case 'P':
            formatedData['Score tag'] = 'Positive';
            break;
        case 'P+':
            formatedData['Score tag'] = 'Strong Positive';
            break;
        case 'NEU':
            formatedData['Score tag'] = 'Neutral';
            break;
        case 'N':
            formatedData['Score tag'] = 'Negative';
            break;
        case 'N+':
            formatedData['Score tag'] = 'Strong Negative';
            break;
        case 'NONE':
            formatedData['Score tag'] = 'Without Sentiment';
            break;
    }

    console.log('formated Data', formatedData);
    return formatedData
}

export { formatAnalysis }