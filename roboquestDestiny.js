function clickMap(elementId) {
    let rqMap = document.getElementById(elementId)

    if (rqMap.classList.contains("border")) {
        rqMap.classList.remove("border");
    }
    else
    {
        rqMap.classList.add("border");
    }
}

function onePathToHavenCity() {
    // Yes or no
}

function isMapAvailable(mapInQuestion) {
    // Check if the map in question is available

    let itIsAvailable = false;
    let mapElement = document.getElementById(mapInQuestion);

    if (mapElement.classList.contains("border")) {
        itIsAvailable = true;
    }
    
    return itIsAvailable;

}