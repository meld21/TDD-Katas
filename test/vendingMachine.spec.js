describe("accepts only valid coins", function(){

    it("accepts quarters returns true", function(){
            var coin = "quarter";
            var vendingMachine = new VendingMachine();
            expect(vendingMachine.acceptCoin(coin)).toBe(true);
    });
});