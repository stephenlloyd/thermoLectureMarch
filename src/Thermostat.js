$( document ).ready(function() {
  var thermostat = new Thermostat()

  $('.psCheckbox').prop('checked', thermostat.isPowerSavingModeOn);
  $('#temperature').text(thermostat.temperature);


  $('input#up').click(function(){
    thermostat.increase()
    $('#temperature').text(thermostat.temperature);

  });

  $('input#down').click(function(){
      thermostat.decrease()
      $('#temperature').text(thermostat.temperature);
  });

  $('.psCheckbox').on('click', function(){
    thermostat.powerSavingToggle();
    $('.psCheckbox').prop('checked', thermostat.isPowerSavingModeOn);
  })

});


function Thermostat(){
  this.temperature = 20;
  this.isPowerSavingModeOn = true;
  this.maxTemperature = 22;
  this.minTemperature = 18;
};

Thermostat.prototype.increase = function() {
  if(!this.isPowerSavingModeOn){
    this.temperature ++;
  }
  else if(this.isPowerSavingModeOn && this.temperature < this.maxTemperature){
    this.temperature ++;
  }
};

Thermostat.prototype.decrease = function() {
  if(!this.isPowerSavingModeOn){
    this.temperature --;
  }
  else if(this.isPowerSavingModeOn && this.temperature > this.minTemperature){
    this.temperature --;
  }
};

Thermostat.prototype.powerSavingToggle = function() {
  this.isPowerSavingModeOn = !this.isPowerSavingModeOn;
};






