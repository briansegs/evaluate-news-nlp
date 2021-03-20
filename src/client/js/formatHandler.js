/**
 * formats data recieved from API
 * Changes Score tag to make it more readable by the end-user
 */

function formatAnalysis(data) {
    let formatedData = {
        'Text': data['sentence_list'][0].text,
        'Score tag': data['score_tag'],
        'Agreement': data['agreement'],
        'Confidence': data['confidence']
    };

    // switches score tag based on what's recieved by API
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

    return formatedData
}

export { formatAnalysis }