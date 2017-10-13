require('chai/register-expect');

const database = require('../dashboard/database.js');

describe('districtObject', function(){
  it("turns a string into a district object", function(){
    expect(database._districtObject('101')).to.deep.equal({cd: '101'});
  });

  it("turns an integer into a district object", function(){
    expect(database._districtObject(101)).to.deep.equal({cd: '101'});
  });

  it("returns the district if object contains the property .cd", function(){
    expect(database._districtObject({cd: '101'})).to.deep.equal({cd: '101'});
    expect(database._districtObject({cd: 101})).to.deep.equal({cd: '101'});
    expect(database._districtObject({cd: '101', something: 'else'})).to.deep.equal({cd: '101'});
  });
});

describe('queryForDistrict', function() {

  it('returns stats query', function(){
    let statsQuery = database._queryForDistrict('stats', '101');
    expect(statsQuery).to.be.a('string');
    expect(statsQuery).to.have.string("cd = '101'");
  });

});