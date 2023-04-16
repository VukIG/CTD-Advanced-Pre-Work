function layOutData1(data) {
  console.log(data); 
  const parentElement = document.querySelector("#response");
  const newTable = document.createElement('div');
  newTable.classList.add('data-table');
  const headerRow = document.createElement('div');
  headerRow.classList.add('data-header');
  headerRow.innerHTML = '<div>Name</div><div>Birth Year</div><div>Height</div><div>Mass</div><div>Gender</div>';
  newTable.appendChild(headerRow);
  const newRow = document.createElement('div');
  newRow.classList.add('data-cell');
  newRow.innerHTML = `<div>${data.name}</div><div>${data.birth_year}</div><div>${data.height}</div><div>${data.mass}</div><div>${data.gender}</div>`;
  newTable.appendChild(newRow);
  parentElement.appendChild(newTable);
}

function layOutData2(data) {
  const parentElement = document.querySelector("#response");
  const newTable = document.createElement('div');
  newTable.classList.add('data-table');
  const headerRow = document.createElement('div');
  headerRow.classList.add('data-header');
  headerRow.innerHTML = '<div>Name</div><div>Rotation Period</div><div>Diameter</div><div>Climate</div><div>Population</div>';
  newTable.appendChild(headerRow);
  const newRow = document.createElement('div');
  newRow.classList.add('data-cell');
  newRow.innerHTML = `<div>${data.name}</div><div>${data.rotation_period}</div><div>${data.diameter}</div><div>${data.population}</div><div>${data.gender}</div>`;
  newTable.appendChild(newRow);
  parentElement.appendChild(newTable);
}

function layOutData3(data) {
  const parentElement = document.querySelector("#response");
  const newTable = document.createElement('div');
  newTable.classList.add('data-table');
  const headerRow = document.createElement('div');
  headerRow.classList.add('data-header');
  headerRow.innerHTML = '<div>Title</div><div>Episode ID</div><div>Producer</div><div>Release date</div><div>Director</div>';
  newTable.appendChild(headerRow);
  const newRow = document.createElement('div');
  newRow.classList.add('data-cell');
  newRow.innerHTML = `<div>${data.title}</div><div>${data.repisode_id}</div><div>${data.producer}</div><div>${data.release_date}</div><div>${data.director}</div>`;
  newTable.appendChild(newRow);
  parentElement.appendChild(newTable);
}


function layOutData4(data) {
  const parentElement = document.querySelector("#response");
  const newTable = document.createElement('div');
  newTable.classList.add('data-table');
  const headerRow = document.createElement('div');
  headerRow.classList.add('data-header');
  headerRow.innerHTML = '<div>Name</div><div>Classification</div><div>Language</div><div>Average Lifespan</div><div>Designation</div>';
  newTable.appendChild(headerRow);
  const newRow = document.createElement('div');
  newRow.classList.add('data-cell');
  newRow.innerHTML = `<div>${data.name}</div><div>${data.classification}</div><div>${data.language}</div><div>${data.average_lifespan}</div><div>${data.designation}</div>`;
  newTable.appendChild(newRow);
  parentElement.appendChild(newTable);
}


function layOutData5(data) {
  const parentElement = document.querySelector("#response");
  const newTable = document.createElement('div');
  newTable.classList.add('data-table');
  const headerRow = document.createElement('div');
  headerRow.classList.add('data-header');
  headerRow.innerHTML = '<div>Name</div><div>Model</div><div>Crew</div><div>Passengers</div><div>Cost in credits</div>';
  newTable.appendChild(headerRow);
  const newRow = document.createElement('div');
  newRow.classList.add('data-cell');
  newRow.innerHTML = `<div>${data.name}</div><div>${data.model}</div><div>${data.crew}</div><div>${data.passengers}</div><div>${data.cost_in_credits}</div>`;
  newTable.appendChild(newRow);
  parentElement.appendChild(newTable);
}

function layOutData6(data) {
  const parentElement = document.querySelector("#response");
  const newTable = document.createElement('div');
  newTable.classList.add('data-table');
  const headerRow = document.createElement('div');
  headerRow.classList.add('data-header');
  headerRow.innerHTML = '<div>Name</div><div>Model</div><div>Consumables</div><div>Starship class</div><div>Cargo capacity</div>';
  newTable.appendChild(headerRow);
  const newRow = document.createElement('div');
  newRow.classList.add('data-cell');
  newRow.innerHTML = `<div>${data.name}</div><div>${data.model}</div><div>${data.consumables}</div><div>${data.starship_class}</div><div>${data.cargo_capacity}</div>`;
  newTable.appendChild(newRow);
  parentElement.appendChild(newTable);
}

export function setupAPI(element) {
  element.addEventListener('click', () => {
    let key = element.innerHTML;
    let rand = Math.floor(Math.random()*10)
    fetch('https://swapi.dev/api/' + key + '/' + rand )
      .then(response => response.json())
      .then(data => {
        if (element.innerHTML === 'people') {
          layOutData1(data);
        }
        else if(element.innerHTML === 'planets'){
          layOutData2(data);
        }
        else if(element.innerHTML === 'films'){
          layOutData3(data);
        }
        else if(element.innerHTML === 'species'){
          layOutData4(data);
        } 
        else if(element.innerHTML === 'vehicles'){
          layOutData5(data);
        }
        else{
          layOutData6(data);
        }
        console.log(data)
        
      })
      .catch(error => console.error(error));
  });
}
