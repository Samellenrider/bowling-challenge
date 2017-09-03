function Bowling(){
  this.total = 0

};

Bowling.prototype.points = function(value){
  if (this.points === 10) {
    this.total += value;
  } else {
    this.total += value;
  };
};












