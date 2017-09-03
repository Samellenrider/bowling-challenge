describe("Bowling", function() {

  var bowling;
    beforeEach(function(){
      bowling = new Bowling();
      bowling2 = new Bowling();
    });
   
   describe("Total points are zero by default", function() {
     it('Total: 0', function()  {
       expect(bowling.total).toEqual(0);
     });
    });
     
    describe("Adding knocked pins/points to total", function() {
      it('changes total', function() {
        bowling.throw1(10)
        expect(bowling.total).toEqual(10)
      });
    });
    
    describe("Throw 2 is 0 if throw 1 is strike", function() {
      it('Throw2 equals 0',function() {
        bowling.throw1(10)
        bowling.throw2(0)
        expect(bowling.total).toEqual(10)
      });
    });

    




});

  // describe("temperature is 20 by default", function() {
  //   it('20 degrees', function() {
  //     expect(thermostat.temperature).toEqual(20);
  //   });
  // });

  //   it('raises temperature by 5 degrees', function() {
  //     thermostat.up(5)
  //     expect(thermostat.temperature).toEqual(25);
  //   });

  //   it("lowers temperature by 5 degrees", function() {
  //     thermostat.down(5)
  //     expect(thermostat.temperature).toEqual(15);
  //   });

  //   it("temperature cant be decreased lower than 10", function() {
  //     expect(function() {thermostat.down(11)}).toThrow('cannot decrease temperature lower than min');
  //   });

  //   it("25 is max with powersavingmode", function() {
  //     expect(function() {thermostat.up(6)}).toThrow('You cannot go over 25 in PSM!');
  //   });

  //   it("32 is max without powersavingmode", function() {
  //     thermostat2.powersavingmode = false;
  //     expect(function() {thermostat2.up(13)}).toThrow('You cannot go over 32!');
  //   });

  //   it("resets to 20 with reset", function() {
  //     thermostat.reset();
  //     expect(thermostat.temperature).toEqual(20);
  //   });

  //   it("tells you energy usage low", function() {
  //     thermostat.down(3);
  //     expect(thermostat.usage()).toEqual('low');
  //   });

  //   it("tells energy usage mid", function() {
  //     expect(thermostat2.usage()).toEqual('mid');
  //   });

  //   it("tells energy usage high", function() {
  //     thermostat3.powersavingmode = false;
  //     thermostat3.up(6);
  //     expect(thermostat3.usage()).toEqual('high');
  //   });
  // });
