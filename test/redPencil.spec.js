describe("isRedPencilDiscount", function(){
    it("reduces price by greater than five percent", function(){
        //arrange
        var originalPrice = 100;
        var reducedPrice = 80;
        var discountTracker = new DiscountTracker();
        //act
        //assert
        expect(discountTracker.isRedPencilDiscount(originalPrice, reducedPrice)).toBe(true);
    });
});