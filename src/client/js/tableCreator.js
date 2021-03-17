function createTable(formatedResults) {
    let section = document.getElementById('table');

    if (section.firstChild != null) {
        section.firstChild.remove();
    }

    console.log("::: Creating Elements :::");

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tr1 = document.createElement('tr');
    let titles = [
        'Text',
        'Score tage',
        'Agreement',
        'Confidence'
    ];
    for (let title of titles) {
        let th = document.createElement('th');
        th.innerHTML = title;
        tr1.appendChild(th)
    }
    thead.appendChild(tr1);
    table.appendChild(thead);

    let tb = document.createElement('tbody');
    let tr2 = document.createElement('tr');
    for (let i in formatedResults) {
        let td = document.createElement('td');
        td.innerHTML = formatedResults[i];
        tr2.appendChild(td);
    }
    tb.appendChild(tr2);
    table.appendChild(tb);
    section.appendChild(table);

    console.log("::: Elements Created :::");
    console.log('Created Elements:', section);
}

export { createTable }