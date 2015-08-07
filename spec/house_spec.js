var House = require('../house');

describe ('House', function() {
  describe ('constructor', function() {
    it ('uses the numberOfDoors argument as a property', function() {
      var house = new House (100); 
      expect(house.numberOfDoors).toEqual(100);
    });

    it('uses the numberOfWindows argument as a property', function () {
        var house = new House(0,200);

        expect(house.numberOfWindows).toEqual(200);
      });
    });


});
