describe("fizzBuzz", function() {

  it("should return fizz when passed 3", function() {
    expect(fizzBuzz(3)).toEqual('fizz');
  });

  it("should return 4 when passed 4", function() {
    expect(fizzBuzz(4)).toEqual(4);
  });

  it("should return buzz when passed 5", function() {
    expect(fizzBuzz(5)).toEqual('buzz');
  });

  it("should return fizzbuzz when passed 5", function() {
    expect(fizzBuzz(15)).toEqual('fizzbuzz');
  });

});
