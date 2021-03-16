function formatResult(res) {
    let formated = {
        'Text': res['sentence_list'][0].text,
        'Score tag': res['score_tag'],
        'Agreement': res['agreement'],
        'Confidence': res['confidence']
    };
    return formated
}

export { formatResult }