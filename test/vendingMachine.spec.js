describe("accepts only valid coins", function(){

    var vendingMachine;
    beforeEach(function(){
        vendingMachine = new VendingMachine();
    });
    it("accepts quarters returns true", function(){
        var coin = "quarter";
        expect(vendingMachine.acceptCoin(coin)).toBe(true);
    });
    it("does not accept pennies returns false", function()
    {
        var coin = "penny";
        expect(vendingMachine.acceptCoin(coin)).toBe(false);
    });
    it("accepts nickels return true", function()
    {
        var coin = "nickel";
        expect(vendingMachine.acceptCoin(coin)).toBe(true);
    });
    it("accepts dimes returns true", function(){

        var coin = "dime";
        expect(vendingMachine.acceptCoin(coin)).toBe(true);
    });

});

describe("adds an inserted coin's value to the current amount", function(){

    var vendingMachine;
    beforeEach(function(){
        vendingMachine = new VendingMachine();
    });
    it("adds .25 when quarter inserted currentAmount .25", function(){
       var coin = "quarter";
       vendingMachine.insertCoin(coin);
       expect(vendingMachine.currentAmount).toBe(.25);
    });

    it("adds .25 when quarter inserted currentAmount 1.25", function(){
        var coin = "quarter";
        vendingMachine.currentAmount = 1;
        vendingMachine.insertCoin(coin);
        expect(vendingMachine.currentAmount).toBe(1.25);

    });
    it("add .1 when dime inserted currentAmount 1.10", function(){
       var coin = "dime";
       vendingMachine.currentAmount = 1;
       vendingMachine.insertCoin("dime");
       expect(vendingMachine.currentAmount).toBe(1.10);
    });
    it("adds .1 when dime inserted currentAmount .1", function(){
        var coin = "dime";
        vendingMachine.insertCoin(coin);
        expect(vendingMachine.currentAmount).toBe(.1);
    });
    it("adds .05 when nickel inserted currentAmount .05", function(){
        var coin = "nickel";
        vendingMachine.insertCoin(coin);
        expect(vendingMachine.currentAmount).toBe(.05);
    });
    it("adds .05 when nickel inserted currentAmount 1.05", function () {
        var coin = "nickel";
        vendingMachine.currentAmount = 1;
        vendingMachine.insertCoin(coin);
        expect(vendingMachine.currentAmount).toBe(1.05);
    });
    it("adds nothing when invalid penny is inserted currentAmount 0", function(){
       var coin = "penny";
       vendingMachine.insertCoin(coin);
       expect(vendingMachine.currentAmount).toBe(0);
    });
describe("messaged displays current amount or 'Insert Coin' when current amount = 0 displayMessage 'Insert Coin'", function(){

    var vendingMachine;
    beforeEach(function(){
        vendingMachine = new VendingMachine();
    });
    it("displays 'Insert Coin' when current amount is 0 displayMessage 'Insert Coin'", function(){
        expect(vendingMachine.displayMessage()).toBe("Insert Coin");
    });
    it("displays current amount when current amount != 0 displayMessage '1.35'", function(){
        vendingMachine.currentAmount = 1.35;
        expect(vendingMachine.displayMessage()).toBe("1.35");
    });
});
describe("invalid coins are placed in the return slot", function(){
    var vendingMachine;
    beforeEach(function(){
       vendingMachine = new VendingMachine();
    });
   it("inserted penny is placed in return slot returnSlot ['penny']", function(){
       var coin = "penny";
       vendingMachine.insertCoin(coin);
       expect(vendingMachine.returnSlot).toEqual(["penny"]);
   });
   it("inserted nickel will not be placed in return slot returnSlot ['']", function(){
       var coin = "nickel";
       vendingMachine.insertCoin(coin);
       expect(vendingMachine.returnSlot).toEqual([]);
   });
   it("multiple inserted pennies will be placed in return slot returnSlot ['penny', 'penny', 'penny]", function(){
      var penny = "penny";
       vendingMachine.insertCoin(penny);
       vendingMachine.insertCoin(penny);
       vendingMachine.insertCoin(penny);
       expect(vendingMachine.returnSlot).toEqual(["penny", "penny", "penny"]);
   });
});

});
