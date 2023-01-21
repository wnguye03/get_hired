const storage = window.localStorage;
const table = document.getElementsByTagName('table')[0];

if (storage[0]) {
  
  for (let i = 0; i < storage.length; i++) {

    const data = JSON.parse(storage[i]);
    const row = Object.assign(document.createElement('tr'), {className: 'jobRow'});

    for (const input of Object.values(data)) {
      row.appendChild(Object.assign(document.createElement('td'), {innerText: input}));
    }

    table.appendChild(row);
  }
}