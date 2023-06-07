let Auction = artifacts.require("./Auction.sol");


contract('AuctionContract', function (accounts) {
  //accounts[0] is the default account
  //Test case 1
  it("contract deployment", function() {
    return Auction.deployed().then(function (instance) {
      AuctionInstance = instance;
      assert(AuctionInstance !== undefined, 'Auction contract should be defined');
    });
  });

  it("check owner", function(){
    return AuctionInstance.getOwner().then(function(result){
      assert.equal(result ,accounts[0], "bad owner");
    })
  });

  it("check counter", function(){
    return AuctionInstance.addCounter({from: accounts[0]}).then(function(){
      return AuctionInstance.getCounter().then(function(result){
        assert.equal(result ,1, "bad counter value");
      })
    })
  });

  it("check counter modifier", function( ){
    return AuctionInstance.addCounter({from: accounts[1]}).then(function(){
        throw ("modifier not working");

    }).catch(function (e) {
      if(e === "modifier not working") {
        assert(false);
      } else {
        assert(true);
      }
    })
  });

	/*it("should create money", function() {
    return coinInstance.mint(accounts[1], coins[0]).then(function (result) {
      assert.equal('0x01', result.receipt.status, 'valid coin creation');
			return coinInstance.mint(accounts[2], coins[1])
    }).then(function(result) {
			assert.equal('0x01', result.receipt.status, 'valid coin creation');
			return coinInstance.mint(accounts[3], coins[2])
		}).then(function(result) {
			assert.equal('0x01', result.receipt.status, 'valid coin creation');
		});
  });

	it("should transfer money", function() {
		return coinInstance.transfer(accounts[3], coin_to_send[0], {from: accounts[1]}).then(function (result) {
			assert.equal('0x01', result.receipt.status, 'transfer is done');
			return coinInstance.balances(accounts[1]);
		}).then(function(result) {
			assert.equal(coins[0] - coin_to_send[0], result.toNumber(), 'money tally is correct');
			return coinInstance.balances(accounts[3]);
		}).then(function(result) {
			assert.equal(coins[2] + coin_to_send[0], result.toNumber(), 'money tally is correct');
		});
	});

	it("should NOT create money", function() {
    return coinInstance.mint(accounts[1], coin_to_send[0], {from: accounts[1]}).then(function (result) {
      throw("modifer not working");
    }).catch(function (e) {
      if(e === "modifer not working") {
        assert(false);
      } else {
        assert(true);
      }
    })
  });

	it("should NOT transfer money", function() {
		return coinInstance.transfer(accounts[3], coins[0], {from: accounts[1]}).then(function (result) {
      throw("modifer not working");
    }).catch(function (e) {
      if(e === "modifer not working") {
        assert(false);
      } else {
        assert(true);
      }
    })
  });*/
});
