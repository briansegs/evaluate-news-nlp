function addToDom(data) {
    let formatedResults = Client.formatAnalysis(data);

    console.log('Formated Results:', formatedResults);

    Client.createTable(formatedResults);
}

export { addToDom }

