describe("#NumberToString", function () {

  beforeEach(function () {
    var number = 432;
    numberToString = new NumberToString(number);
  });

  it("returns an array", function () {
    var result = numberToString.toArray();
    expect(result).toEqual(['4','3','2'])
  });

  it("returns the ones place", function () {
    numberToString.number = 4;
    numberToString.toArray();
    var result = numberToString.translate();
    expect(result).toEqual(" four")
  });

  it("returns the hundreds place", function () {
    numberToString.number = 400;
    numberToString.toArray();
    var result = numberToString.translate();
    expect(result).toEqual(" four hundred")
  });

  it("returns the hundreds place and thousand", function () {
    numberToString.number = 4400;
    numberToString.toArray();
    var result = numberToString.translate();
    expect(result).toEqual(" four thousand four hundred")
  });

  it("returns the hundreds place and thousand and ones place", function () {
    numberToString.number = 4404;
    numberToString.toArray();
    var result = numberToString.translate();
    expect(result).toEqual(" four thousand four hundred four")
  });

  it("returns the teens place", function () {
    numberToString.number = 4414;
    numberToString.toArray();
    var result = numberToString.translate();
    expect(result).toEqual(" four thousand four hundred fourteen")
  });

  it("returns the tens place", function () {
    numberToString.number = 4424;
    numberToString.toArray();
    var result = numberToString.translate();
    expect(result).toEqual(" four thousand four hundred twenty four")
  });

  it("returns the ones, hundreds, thousands, and ten thousands", function () {
    numberToString.number = 400444444;
    numberToString.toArray();
    var result = numberToString.translate();
    expect(result).toEqual(" four hundred million four hundred forty four thousand four hundred forty four")
  });

});