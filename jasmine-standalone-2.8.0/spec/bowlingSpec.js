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


});

  
