function Bowling(){
  this.total = 0;

};













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
