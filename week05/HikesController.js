import HikeModel from './HikeModel.js';
import HikesView from './HikesView.js';

// Hike controller
export default class HikesController {
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId); 
    // this is how our controller will know about the model and view...we add them right into the class as members.
    //console.log("constructor" + this.hikeModel.getAllHikes());
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
  }
  
  showHikeList() {
    //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
    this.hikesView.renderHikeList(this.hikeModel.getAllHikes(), 'hikes');
  }

  showOneHike(hikeName) {
    // use this when you need to show just one hike...with full details
    let desiredHike = this.hikeModel.getHikeByName(hikeName);
        console.log("controller: " + desiredHike);
        this.hikesView.renderOneHikeLight(desiredHike);
    
  }
  addHikeListener() {
    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
    document.getElementById('hikes');
   
  }
}