'use strict';

describe("Thermostat", function() {
  describe("should be able to", function() {
    var thermostat ;
    beforeEach(function() {
      thermostat = new Thermostat();
    })

    it("have default temperature of 20", function() {
      expect(thermostat.currentTemp()).toEqual(20);
    });
    it("has an up function that increases the temperature", function(){
      expect(thermostat.up()).toEqual(21);
    });
    it("has an up function that increases the temperature", function(){
      expect(thermostat.down()).toEqual(19);
    });
    it(" has a mininmum temperature of 10 ", function() {
      thermostat.temp = 10;
      expect(thermostat.down()).toEqual(10);

    });
    it("has a powersaving mode that is true by default", function(){
      expect(thermostat.power_saving_mode).toEqual(true);
    });
    it("has a maximum temperature of 25 when power_saving_mode is on", function(){
      thermostat.temp = 25;
      expect(thermostat.up()).toEqual(25);
    });
    it("has a maximum temperature of 32 when power_saving_mode is off", function(){
      thermostat.temp = 32;
      thermostat.power_saving_mode = false;
      expect(thermostat.up()).toEqual(32);
    });
    it("has a reset function that changes teh temperature to 20", function(){
      thermostat.temp = 23;
      expect(thermostat.reset()).toEqual(20);
    });
    it("has a currentEnergyUsage function that returns low-usage when temp < 18", function(){
      thermostat.temp = 17;
      expect(thermostat.currentEnergyUsage()).toEqual("low-usage");
    });
    it("has a currentEnergyUsage function that returns low-usage when temp < 18", function(){
      thermostat.temp = 24;
      expect(thermostat.currentEnergyUsage()).toEqual("medium-usage");
    });
    it("has a currentEnergyUsage function that returns low-usage when temp < 18", function(){
      thermostat.temp = 25;
      expect(thermostat.currentEnergyUsage()).toEqual("high-usage");
    });
    it("has a turnOffPowerSaving function that sets power_saving_mode to false", function(){
      expect(thermostat.turnOffPowerSaving()).toEqual(false);
    });
    it("has a turnOnPowerSaving function that sets power_saving_mode to true", function(){
      thermostat.turnOffPowerSaving();
      expect(thermostat.turnOnPowerSaving()).toEqual(true);
    });
  });
});
