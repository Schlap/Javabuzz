describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function(){
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toEqual(true); 
    });

  });

  describe('knows when a number is Not', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toEqual(false);
    });

  });

  describe('knows when a number is', function() {

    it('divisible by 5', function() {
        expect(javabuzz.isDivisibleByFive(5)).toEqual(true);
      });
    });

  describe('it knows when a number is Not', function(){

    it ('divisible by 5', function(){
        expect(javabuzz.isDivisibleByFive(1)).toEqual(false);
      });
    });

  describe('it knows when a number is', function () {

    it('divisible by 15', function() {
          expect(javabuzz.isDivisibleByFifteen(15)).toEqual(true);
    });
  });

  describe('knows when a number in Not', function(){

      it ('divisible by 15', function () {
          expect(javabuzz.isDivisibleByFifteen(1)).toEqual(false);
      
          }); 
      });
});