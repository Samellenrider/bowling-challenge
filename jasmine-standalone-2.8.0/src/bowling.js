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







// function Thermostat(){
//   this.temperature = 20;
//   this.powersavingmode = true;
// };

// Thermostat.prototype.up = function(value){
//   this.temperature += value;
// };

// Thermostat.prototype.down = function(value){
//   if (this.temperature - value < 10) {
//     throw 'cannot decrease temperature lower than min';
//   } else {
//     this.temperature -= value;
//   };
// };


// Thermostat.prototype.up = function(value){
//   if (this.powersavingmode === true && this.temperature + value > 25) {
//     throw('You cannot go over 25 in PSM!');
//   }
//   else if (this.powersavingmode === false && this.temperature + value > 32) {
//     throw('You cannot go over 32!');
//   }
//   else {
//     this.temperature += value;
//   };
// };
//   Thermostat.prototype.reset = function(){
//     this.temperature = 20;
//   };

//   Thermostat.prototype.usage = function(){
//     if (this.temperature  < 18) {
//       return("low");
//     }
//     else if  (this.temperature < 25 && this.temperature > 18) {
//       return("mid");
//     }
//     else {
//       return("high");
//     };
//   };
