//assigning global variables 
const cocktailApi = 'https://www.thecocktaildb.com/api/json/v1/1/';
const locationApi = {
    key: 'f40fdbed4ce6f49a21c55972b85d4f67',
    uri: 'https://api.openweathermap.org/data/2.5/'
};

//where query is the search request and param is the parameters
async function searchRequest(query, param){
    let data;
    await fetch(`${cocktailApi}${param}${query}`)
        .then(response => response.json())
        .then(result => {
            data = result;
        })
        //TODO add error conditions
        .catch(err => console.log(err))
        return data;
}

//location is the desired location of weather
async function locationRequest(location){
    let data;
    await fetch(`${locationApi.uri}weather?q=${location}&units=metric&APPID=${locationApi.key}`)
        .then(response => response.json())
        .then(result => {
            data = result
        })
        //TODO add error conditions
        .catch(err => console.log(err))
        return data;
}

console.log(searchRequest('gin', 'search.php?s='));
console.log(locationRequest('melbourne'));

searchRequest('gin', 'search.php?s=').then(
    result => { 
        let array = result;
        console.log(array);
    }
)
