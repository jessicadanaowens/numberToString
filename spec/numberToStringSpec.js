describe("#NumberToString", function () {

  beforeEach(function () {
    var number = 1432;
    numberToString = new NumberToString(number);
  });

  it("turns a number into an array", function () {
    var result = numberToString.toArray();
    expect(result).toEqual(["1", "4", "3", "2"])
  });

  it("translates a single digit from 1 to 9 into a word", function () {
    var digit = "1";
    var result = numberToString.translateDigit(digit);
    expect(result).toEqual(' one ')
  });

  it("find the teens", function () {
    var ones, tens;

    ones = 1;
    tens = 1;

    result = numberToString.findTeen(ones);
    expect(result).toEqual("eleven");
  });

  it("finds multiples of ten", function () {
    ones = 0;
    tens = 2;

    result = numberToString.findMultiplesOfTen(tens);

    expect(result).toEqual("twenty");
  });

  it("finds the hundreds place", function () {
    digit = "1";

    result = numberToString.translateHundredsPlace(digit);
    expect(result).toEqual(" one hundred");
  });

  it("finds the thousands place", function () {
    digit = "1";

    result = numberToString.translateThousandsPlace(digit);
    expect(result).toEqual(" one thousand");
  });

  //it("translates into a string", function () {
  //  numberToString.ones = "one";
  //  numberToString.tens = "twenty";
  //  numberToString.hundreds = "one hundred";
  //  numberToString.thousands = "one thousand";
  //
  //  var result = numberToString.string();
  //  expect(result).toEqual("one thousand one hundred twenty one")
  //})
});