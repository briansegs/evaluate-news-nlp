const getAnalysis = async (baseURL, apiKey, json, text, lang) => {
    let res = await fetch(baseURL+apiKey+json+text+lang)
    try {
        let data = await res.json();
        return data
    } catch (error) {
        console.log('error', error);
    };
}

export { getAnalysis }