const addToDom = async () => {
    const request = await fetch('/all');
    let latestData = await request.json();

    try {
        let section = document.getElementById('table');

        if (section.firstChild != null) {
            section.firstChild.remove();
        }

        console.log("::: Creating Elements :::");

        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        th.innerHTML = 'Sentiment Analysis';
        th.setAttribute('colspan', '4');
        tr.appendChild(th);
        thead.appendChild(tr);
        table.appendChild(thead);


        let tb = document.createElement('tbody');

        let tr1 = document.createElement('tr');
        tr1.setAttribute('class', 'titles');
        let titles = [
            'Text',
            'Score tage',
            'Agreement',
            'Confidence'
        ];
        for (let title of titles) {
            let td = document.createElement('td');
            td.innerHTML = title;
            tr1.appendChild(td)
        }
        tb.appendChild(tr1);


        let tr2 = document.createElement('tr');
        for (let i in latestData) {
            let td = document.createElement('td');
            td.innerHTML = latestData[i];
            tr2.appendChild(td);
        }
        tb.appendChild(tr2);
        table.appendChild(tb);
        section.appendChild(table);

        console.log("::: Elements Created :::");
        console.log('Created Elements:', section);

    } catch (error) {
        console.log('error', error);
    }
}

export { addToDom }



