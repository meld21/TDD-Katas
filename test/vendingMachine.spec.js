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

describe("adds an inserted coins value to the current amount", function(){

    it("adds .25 when quarter inserted currentAmount .25", function(){
       var coin = "quarter";
       var vendingMachine = new VendingMachine();
       vendingMachine.insertCoin(coin);
       expect(vendingMachine.currentAmount).toBe(.25);
    });

    it("adds .25 when quarter inserted currentAmount 1.25", function(){
        var coin = "quarter";
        var vendingMachine = new VendingMachine();
        vendingMachine.currentAmount = 1;
        vendingMachine.insertCoin(coin);
        expect(vendingMachine.currentAmount).toBe(1.25);

    });
    it("add .1 when dime inserted currentAmount 1.10", function(){
       var coin = "dime";
       var vendingMachine = new VendingMachine();
       vendingMachine.currentAmount = 1;
       vendingMachine.insertCoin("dime");
       expect(vendingMachine.currentAmount).toBe(1.10);
    });
    it("adds .1 when dime inserted currentAmount .1", function(){
        var coin = "dime";
        var vendingMachine = new VendingMachine();
        vendingMachine.insertCoin(coin);
        expect(vendingMachine.currentAmount).toBe(.1);
    });
    it("adds .05 when nickel inserted currentAmount .05", function(){
        var coin = "nickel";
        var vendingMachine = new VendingMachine();
        vendingMachine.insertCoin(coin);
        expect(vendingMachine.currentAmount).toBe(.05);
    });
    it("adds .05 when nickel inserted currentAmount 1.05", function () {
        var coin = "nickel";
        var vendingMachine = new VendingMachine();
        vendingMachine.currentAmount = 1;
        vendingMachine.insertCoin(coin);
        expect(vendingMachine.currentAmount).toBe(1.05);
    });

});
