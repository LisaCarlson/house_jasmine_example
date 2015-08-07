function House (numberOfDoors, numberOfWindows) {
  this.numberOfDoors = numberOfDoors;
  this.numberOfWindows = numberOfWindows;
  this.toString = function() {
    if (this.numberOfDoors > 1 && this.numberOfWindows === 1) {
      return 'The house has ' + numberOfDoors + ' doors and ' + numberOfWindows + ' window';
    }
    else if ((this.numberOfDoors > 1 || this.numberOfDoors === 0) && (this.numberOfWindows > 1 || this.numberOfWindows === 0)) {
      return 'The house has ' + numberOfDoors + ' doors and ' + numberOfWindows + ' windows';
    }
    else if (this.numberOfDoors === 1 && this.numberOfWindows > 1) {
      return 'The house has ' + numberOfDoors + ' door and ' + numberOfWindows + ' windows';
    }
    else if (this.numberOfDoors === 1 && this.numberOfWindows === 1) {
      return 'The house has ' + numberOfDoors + ' door and ' + numberOfWindows + ' window';
    }
  };

};






module.exports = House;