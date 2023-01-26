const element = document.getElementById("btn");

const txtel = document.getElementById("txt");

const apikey ="9S1hsqfMsY5GG5Yop29Y0w==D3fimNf3MZornyjW";
const option = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    }, 
};
const apiurl = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function getjoke(){
    
    try {
    txtel.innerText = "Updating....";
    // disable the button
    element.disabled = true;
    element.innerText = "Loading...";
    // fetch the data from api
    const response = await fetch(apiurl,option);
    const data = await response.json(); 
    // eable the loading txt after the joke
    element.disabled = false;
    element.innerText = "Tell me a Joke";
    // call the api
    txtel.innerText = data[0].joke;
    } catch (error) {
        txtel.innerText = " your internet is down try again later";
        element.disabled = false;
        element.innerText = "Tell me a Joke";
        console.log(error);
    }
}
element.addEventListener("click",getjoke);