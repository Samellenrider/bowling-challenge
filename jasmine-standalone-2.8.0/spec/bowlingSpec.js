describe("Bowling", function() {

  var bowling;
    beforeEach(function(){
      bowling = new Bowling();
    });
   
   describe("Total points are zero by default", function() {
     it('Total: 0', function()  {
       expect(bowling.total).toEqual(0);
     });
    });
     
    describe("Adding knocked pins/points to total", function() {
      it('changes total', function() {
        bowling.points(5)
        bowling.points(2)
        expect(bowling.total).toEqual(7)
      });
    });




});

  