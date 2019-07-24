
Thermostat = function() {
  this.temp = 20;
  this.minimumTemp = 10;
  this.power_saving_mode = true;
};

Thermostat.prototype.currentTemp = function() {
  return this.temp;
};
Thermostat.prototype.up = function() {
  if (this.power_saving_mode && this.temp <25) {
    this.temp++;
  } else if (!this.power_saving_mode && this.temp <32 ) {
    this.temp++;
  } else {
  }
  console.log("in up");
  return this.temp;
};
Thermostat.prototype.down = function() {
  if (this.temp > this.minimumTemp) {
   this.temp--;
  }
  return this.temp;
};
Thermostat.prototype.reset = function() {
  this.temp = 20;
  return this.temp;
};

Thermostat.prototype.currentEnergyUsage = function() {
  if (this.temp < 18) {
    return "low-usage";
  } else if (this.temp <25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
};
Thermostat.prototype.turnOffPowerSaving = function() {
  this.power_saving_mode = false;
  return this.power_saving_mode;
};
Thermostat.prototype.turnOnPowerSaving = function() {
  this.power_saving_mode = true;
  return this.power_saving_mode;
};
Thermostat.prototype.currenttempstr = function() {
 console.log("this has called")
  return ""+this.temp
};
