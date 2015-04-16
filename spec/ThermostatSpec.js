describe('Thermostat',function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('displays default temperature', function(){
    expect('#temperature').toContainText('20');
  });

  it('increases temperature with up button', function(){
    $("input#up").click();
    expect('#temperature').toContainText('21');
  });

  it('decreases temperature with down button', function(){
    $("input#down").click();
    expect('#temperature').toContainText('19');
  });

  it('temperature can go up and down consistently', function(){
    $("input#down").click();
    expect('#temperature').toContainText('19');
    $("input#up").click();
    expect('#temperature').toContainText('20');
  });

  it('has power saving mode on by default', function(){
    expect('.psCheckbox').toBeChecked();
  });

  it("can turn off power saving mode", function(){
    $(".psCheckbox").click();
    expect('.psCheckbox').not.toBeChecked();
  });

  it("can't increase above 22 if power saving mode is on", function(){
    expect('.psCheckbox').toBeChecked();
    $("input#up").click();
    $("input#up").click();
    $("input#up").click();
    expect('#temperature').toContainText('22');
  });

  it("can't decrease below 18", function(){
    // $(".psCheckbox").click();
    $("input#down").click();
    $("input#down").click();
    $("input#down").click();
    expect('#temperature').toContainText('18');

  })

});