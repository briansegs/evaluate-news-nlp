function addToDom(data) {
    let formatedData = Client.formatAnalysis(data);

    console.log('Formated Data:', formatedData);

    Client.createTable(formatedData);
}

export { addToDom }

