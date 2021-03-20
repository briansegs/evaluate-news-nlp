import { formatAnalysis } from '../src/client/js/formatHandler';

let before = {
    "status": {
        "code": "0",
        "msg": "OK",
        "credits": "1",
        "remaining_credits": "19859"
    },
    "model": "general_en",
    "score_tag": "P+",
    "agreement": "AGREEMENT",
    "subjectivity": "OBJECTIVE",
    "confidence": "100",
    "irony": "NONIRONIC",
    "sentence_list": [
        {
            "text": "Im feeling great!"
        }
    ]
}

let after = {
    "Text": "Im feeling great!",
    "Score tag": "Strong Positive",
    "Agreement": "AGREEMENT",
    "Confidence": "100"
}

describe('Test formatAnalysis', () => {

    test('Check if formatAnalysis function is defined', () => {
        expect(formatAnalysis).toBeDefined();
    });

    test('output', () => {
        expect(formatAnalysis(before)).toStrictEqual(after);
    });
})