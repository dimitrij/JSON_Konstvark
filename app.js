const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);


var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=konstverk-och-fontaner&q=', true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  //sorting out so you dont have to long info sheets.
  if (request.status >= 200 && request.status < 400) {
    //diving into each records section on the page.
    data.records.forEach(intoRecord => {

      console.log(intoRecord.fields.namn)
      //getting into and accessing data inside and outside
      //the field sections of the record sections.
      const pplats = document.createElement('div');
      pplats.setAttribute('class', 'record-container');

      const h3 = document.createElement('h3');
      h3.setAttribute('class', 'title');
      h3.textContent = intoRecord.fields.namn;
               //appending all of the extracted data visually.
               container.appendChild(pplats);
               pplats.appendChild(h3);
            });
        }
          // If there no such file or bad request. 
          else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = 'Could not find a file';
            app.appendChild(errorMessage);
          }
        }
        
        request.send();
