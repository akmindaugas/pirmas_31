// DOC:
// https://rickandmortyapi.com/documentation
// API call:
// https://rickandmortyapi.com/api/character
// 1. Parsifechint duomenis iš Rick & Morty API, veikėjų masyvą atvaizduoti consolėj;
// 2. Veikėjus išrikiuoti pagal veikėjo vardą A-Z;
// 3. Veikėjų vardus atvaizduoti ekrane;
// 4. Kiekvienam veikėjui sukurti kortelę kurioje būtu: vardas, nuotrauka, species, origin;
// 5. Jeigu origin yra unknown toje vietoje turi atsirast "-";
// 6. Paspaudus ant kortelės consolėj turi atsirast veikėjo vardas ant kurio buvo paspausta;
// 7. Paspaudus ant kortelės į localstorage turi būt įdedamas veikėjo objektas;
// 8. Padaryt, kad butu atvaizduota tik pirmu 10 veikėjų;
// /------------------------------------------------------------/
// characterName = document.getElementById('nameOfCharacter');
// characterSpecies = document.getElementById('speciesOfCharacter');
// characterOrigin = document.getElementById('originOfCharacter'); 

// const sortedArray = [];

// characterCard = document.getElementById('wrapper');

// fetch ('https://rickandmortyapi.com/api/character')
//     .then((response) => {
//         return response.json(); 
//     })
//     .then((data) => {
//         console.log(data)
//         const results = data.results;
//         console.log(results);

//         // results.forEach(element => {
//         // console.log(element.name);
//        for (let i=0; i<10; i++) {
//         const element = results[i];
//         console.log(element.name);
// // ------------kodel reikia reversinti sort?-----------------
//         const sortedArray = [...results].sort((a,b)=>{
//                     return b.name > a.name ? 1 : -1});
// console.log(sortedArray);
// // ---------------------------------------------
//         const characterName = document.createElement('div');
//         characterName.innerText = element.name;

//         const characterImage = document.createElement('img');
//         characterImage.src = element.image;

//         const characterSpecies = document.createElement('div');
//         characterSpecies.innerText = element.species;

//         const characterOrigin = document.createElement('div');
//         characterOrigin.innerText = element.origin.name === 'unknown' ? '-' : element.origin.name ;

//         const characterCard = document.createElement('div');
//         characterCard.classList.add('characterCard');
//         characterCard.addEventListener('click', () => {
//             console.log(element.name);
//             localStorage.setItem('character', JSON.stringify(element));
//         });

//         characterCard.appendChild(characterName);
//         characterCard.appendChild(characterImage);
//         characterCard.appendChild(characterSpecies);
//         characterCard.appendChild(characterOrigin);

//         wrapper.appendChild(characterCard);

// //         characterCard.sort((a,b)=>{
// //             return b.name > a.name ? 1 : -1});
// // console.log(sortedArray);
//     })

    // //////////////////////////////////////////////////////////////////
const characterName = document.getElementById('nameOfCharacter');
const characterSpecies = document.getElementById('speciesOfCharacter');
const characterOrigin = document.getElementById('originOfCharacter');

const sortedArray = [];

const characterCard = document.getElementById('wrapper');

fetch('https://rickandmortyapi.com/api/character')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const results = data.results;
        console.log(results);

        // Sorting the array
        const sortedArray = [...results].sort((a, b) => {
            return b.name < a.name ? 1 : -1;
        });
        console.log(sortedArray);

        for (let i = 0; i < 10; i++) {
            const element = sortedArray[i];

            console.log(element.name);

            const characterName = document.createElement('div');
            characterName.innerText = element.name;

            const characterImage = document.createElement('img');
            characterImage.src = element.image;

            const characterSpecies = document.createElement('div');
            characterSpecies.innerText = element.species;

            const characterOrigin = document.createElement('div');
            characterOrigin.innerText =
                element.origin.name === 'unknown' ? '-' : element.origin.name;

            const characterCard = document.createElement('div');
            characterCard.classList.add('characterCard');
            characterCard.addEventListener('click', () => {
                console.log(element.name);
                localStorage.setItem('character', JSON.stringify(element));
            });

            characterCard.appendChild(characterName);
            characterCard.appendChild(characterImage);
            characterCard.appendChild(characterSpecies);
            characterCard.appendChild(characterOrigin);

            wrapper.appendChild(characterCard);
        }
    });
