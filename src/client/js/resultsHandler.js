function addResult(res) {
    let formatedResults = Client.formatAnalysis(res);

    console.log('Formated Results:', formatedResults);

    Client.createTable(formatedResults);
}

export { addResult }

