const API_KEY = "your-key-here"




async function loadBikeStations() {
    console.log('I am loading bike stations')

    const CONTRACT = "Dublin"

    const url = `https://api.jcdecaux.com/vls/v1/stations?contract=${CONTRACT}&apiKey=${API_KEY}`

    // call the url using the fetch api in the previous lesson
    // output the json to the console for now : it is a LIST (array) of stationss
    // examine the properties

    try {

        const response = await fetch(url); // retrieve from the url
        const data = await response.json(); // extract the data part of the response which is json
        console.log(data) // log it out so you can see it


        // Generate a loop (for-of) to render the items (address only) inside the unordered list (ul) #stationList

        // start by getting a reference to the UL element identified by the id 'stationList'

        const listingElement = document.getElementById("stationList")

        // Then write a loop which processes all the addresses 


        var htmlString = "";


        for (const station of data) {

            console.log(station)  
            // inside this loop use concatentation to build up the list (+=)
            htmlString += `<li>${station.address} : ${station.number}</li>`

        }
        // outside of the loop render the concatentated string

        listingElement.innerHTML = htmlString; 



    } catch (error) {


    }


}


async function loadBikeStation() {
    console.log('I am loading bike station')

    const CONTRACT = "Dublin"

    const stationNumber = 42; //you will get this from the input box

    const url = `https://api.jcdecaux.com/vls/v1/stations/${stationNumber}?contract=${CONTRACT}&apiKey=${API_KEY}`


    try {

        const response = await fetch(url); // retrieve from the url
        const data = await response.json(); // extract the data part of the response which is json
        console.log(data) // log it out so you can see it

        const stationDataElement = document.getElementById("stationData") // create a div with this id

        stationDataElement.innerHTML += data.address;
        stationDataElement.innerHTML += data.number;
    } catch (error) {


    }


}