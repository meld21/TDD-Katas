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
