describe("Bowling", function() {

  var bowling;
    beforeEach(function(){
      bowling = new Bowling();
      //bowling2 = new Bowling();
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
      it('Throw2 equals 0', function() {
        bowling.throw1(10)
        bowling.throw2(0)
        expect(bowling.total).toEqual(10)
      });
    });

    describe("Score of one round can't be over 10", function() {
      it('Throws error', function() {
        bowling.throw1(7)
      expect(function() {bowling.throw2(4)}).toThrow("Total of one round can't be over 10 points");
      });
    });
    
    // describe("Throw2 is in range (10 - throw", function() {
    //   it('leaves only possible points', function(){
    //     bowling.throw1(7)
    //     expect(bowling.throw2).toBe(=<3)
    //   });
    // });
    




});

  