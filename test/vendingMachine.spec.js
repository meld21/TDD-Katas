describe("accepts only valid coins", function(){

    it("accepts quarters returns true", function(){
        var coin = "quarter";
        var vendingMachine = new VendingMachine();
        expect(vendingMachine.acceptCoin(coin)).toBe(true);
    });
    it("does not accept pennies returns false", function()
    {
        var coin = "penny";
        var vendingMachine = new VendingMachine();
        expect(vendingMachine.acceptCoin(coin)).toBe(false);
    });
    it("accepts nickels return true", function()
    {
        var coin = "nickel";
        var vendingMachine = new VendingMachine();
        expect(vendingMachine.acceptCoin(coin)).toBe(true);
    });
});