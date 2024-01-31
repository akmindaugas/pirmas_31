console.log('Hello World')

fetch ('https://rickandmortyapi.com/api/character')
    .then((response) => {
        return response.json(); 
    })
    .then((data) => {
        console.log(data)
        const results = data.results;
    results.forEach(element => {
        console.log(element.name);
    });
    
    });