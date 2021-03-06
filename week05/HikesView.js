// Hike View handler
const imgBasePath = '//byui-cit.github.io/cit261/examples/';

export default class HikesView {
    constructor(listElementId) {
        // will need this
        this.imgBasePath = '//byui-cit.github.io/cit261/examples/';

    }
    renderHikeList(hikeList, listElement){
        let element = document.getElementById(listElement);
        
        let currentInnerHTML = element.innerHTML;

        hikeList.forEach(buildHikeHTML);

        function buildHikeHTML(hike, index){
            currentInnerHTML = element.innerHTML;
            let displayedHike = `<div class="hike">
            <h2>${hike.name}</h2>
            <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
            <ul class="details">
            <li>${hike.distance}</li>
            <li>${hike.difficulty}</li>
            </ul>
            </div>`;
            currentInnerHTML += displayedHike;
            element.innerHTML = currentInnerHTML;
        }
    }
    renderOneHikeLight(hike) {
        // this method will be used to create the list of hikes with less detail: name, image, distance, difficulty 
        console.log("View: " + hike);
                let displayedHike = `<div class="hike">
                <h2>${hike.name}</h2>
                <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
                <ul class="details">
                <li>${hike.distance}</li>
                <li>${hike.difficulty}</li>
                </ul>
                </div>`;
                console.log(displayedHike);
                document.getElementById('hikes').innerHTML = displayedHike;
    }
    renderOneHikeFull(hike, parentElement) {
        // this method will be used to one hike with full detail...you will need this for the stretch goal! 
        var node = document.createTextNode(parentElement);
        var childNode = document.createTextNode("fullHike");
        
        let displayedHike = `<div class="hike">
        <h2>${hike.name}</h2>
        <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
        <ul class="details">
        <li>${hike.distance}</li>
        <li>${hike.difficulty}</li>
        <li>${hike.description}</li>
        <li>${hike.directions}</li>
        </ul>
        </div>`;
        
        childNode.innerHTML = displayedHike;
        node.appendChild(childNode);

     }
 }