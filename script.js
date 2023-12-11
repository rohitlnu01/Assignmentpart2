// Load XML file using Fetch API
fetch('data.xml')
    .then(response => response.text())
    .then(data => {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(data, 'application/xml');
        var xmlData = xmlDoc.getElementsByTagName('data')[0].textContent;
        document.getElementById('xmlData').innerHTML = 'Data from XML: ' + xmlData;
    })
    .catch(error => console.error('Error fetching XML:', error));

// Load JSON file using Fetch API
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        var jsonData = data.data;
        document.getElementById('jsonData').innerHTML = 'Data from JSON: ' + jsonData;
    })
    .catch(error => console.error('Error fetching JSON:', error));
