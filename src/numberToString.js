function NumberToString (number) {
  this.number = number;
  this.array = [];
  this.string = "";
  this.ones = ["", " one", " two", " three", " four", " five", " six", " seven", " eight", " nine"];
  this.bigNumbers = ["", " thousand", " million", " billion", " trillion"];
  this.teens = [" ten", " eleven", " twelve", " thirteen", " fourteen", " fifteen", " sixteen", " seventeen", " eighteen", " nineteen"]
  this.tens = ["", "", " twenty", " thirty", " forty", " fifty", " sixty", " seventy", " eighty", " ninety"]
};

NumberToString.prototype.toArray = function toArray () {
  this.array = this.number.toString().split("");
  return this.array
};

NumberToString.prototype.translate = function translate() {
  var position = this.array.length;

  for (var i = 0; i < this.array.length; i ++) {
    if(position % 3 == 0) {
      this.string = this.string + this.ones[parseInt(this.array[i])] + ' hundred'
    }

    if(position % 3 == 1 && position != 1 && this.array[i - 1] != 1) {
      this.string = this.string + this.ones[parseInt(this.array[i])] + this.bigNumbers[parseInt(position / 3)]
    }

    if(position % 3 == 2 && this.array[i] == 1) {
      this.string = this.string + this.teens[parseInt(this.array[i + 1])]
    }

    if(position % 3 == 2 && this.array[i] != 1 && this.array[i] != 0) {
      this.string = this.string + this.tens[parseInt(this.array[i])]
    }

    if(position == 1 && (this.array.length == 1 || this.array[i-1] != 1)) {
      this.string = this.string + this.ones[parseInt(this.array[i])]
    }

    position = position - 1
  }
  return this.string;
};

