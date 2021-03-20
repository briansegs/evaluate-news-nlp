/**
 * Fetches data from the server
 * Creates a table with data inserted
 * Adds table to the DOM
 */

const addToDom = async () => {
    const request = await fetch('/all');
    let latestData = await request.json();

    try {
        let section = document.getElementById('table');

        // Removes current table before creating a new table
        if (section.firstChild != null) {
            section.firstChild.remove();
        }
        console.log("::: Creating Elements :::");

        let table = document.createElement('table');

        // Creates table head and heading
        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        th.innerHTML = 'Sentiment Analysis';
        th.setAttribute('colspan', '4');
        tr.appendChild(th);
        thead.appendChild(tr);
        table.appendChild(thead);

        let tb = document.createElement('tbody');

        // Creates titles for each row
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

        // Adds data to the table
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

    } catch (error) {
        console.log('error', error);
    }
}

export { addToDom }



