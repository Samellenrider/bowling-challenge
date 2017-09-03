function Bowling(){
  this.total = 0
};

Bowling.prototype.throw1 = function(value1){
  if (this.throw1 === 10) {
    this.total += 10;
  } else {
    this.total += value1;
  };
};

Bowling.prototype.throw2 = function(value2){
  if (this.total + value2 >= 11){
    throw("Total of one round can't be over 10 points");
  } 
  else if (this.throw1 === 10) {
    this.throw2 === 0
    this.total === 10
  } 
  else {
    this.total += value2;
  };
};

// if this.throw1 === 7
//   this.throw2 <= 3







