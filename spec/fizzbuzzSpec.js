describe ("fizzbuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });
  describe('multiples of 3', function() {
    it('fizzes for 3', function() {
      expect(fizzBuzz.play(3)).toEqual('fizz');
    });

    it('fizzes for 6', function() {
      expect(fizzBuzz.play(6)).toEqual('fizz')
    });
  });

  describe('multiples of 5', function() {
    it('buzzes for 5', function() {
      expect(fizzBuzz.play(5)).toEqual('buzz');
    });

    it('buzzes for 10', function() {
      expect(fizzBuzz.play(10)).toEqual('buzz')
    });
  });

  describe('mutliples of both 3 & 5', function() {
    it('returns fizzbuzz for 15', function() {
      expect(fizzBuzz.play(15)).toEqual('fizzbuzz')
    });

    it('returns fizzbuzz for 30', function() {
      expect(fizzBuzz.play(30)).toEqual('fizzbuzz')
    });
  });

  describe('other numbers', function() {
    it('returns 2 for 2', function() {
      expect(fizzBuzz.play(2)).toEqual(2)
    });

    it('returns 19 for 19', function() {
      expect(fizzBuzz.play(19)).toEqual(19)
    });
  });

});
