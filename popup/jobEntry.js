const storage = window.localStorage;

function saveInputs() {

  const inputs = {
    'company': document.getElementById('company').value,
    'title': document.getElementById('title').value,
    'status': document.getElementById('status').value,
    'comments': document.getElementById('comments').value,
  }

  storage.setItem(storage.length, JSON.stringify(inputs));
}

const saveJob = document.getElementById('saveJob');
saveJob.addEventListener('click', saveInputs);

document.getElementById('comments').addEventListener('keypress', 
  function(e) {if (e.key === 'Enter') {saveJob.click()}})
