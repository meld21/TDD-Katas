describe("isRedPencilDiscount", function(){
    it("reduces price by greater than five percent returns true", function(){
        //arrange
        var originalPrice = 100;
        var reducedPrice = 80;
        var discountTracker = new DiscountTracker();
        //act
        //assert
        expect(discountTracker.isRedPencilDiscount(originalPrice, reducedPrice)).toBe(true);
    });

    it("reduces price by less than five precent returns false", function(){
        var originalPrice  = 100;
        var reducedPrice = 99;
        var discountTracker = new DiscountTracker();

        expect(discountTracker.isRedPencilDiscount(originalPrice, reducedPrice)).toBe(false);
    });

    it("reduces price by five precent return true", function(){
       var originalPrice = 100;
       var reducedPrice = 95;
       var discountTracker = new DiscountTracker();

       expect(discountTracker.isRedPencilDiscount(originalPrice, reducedPrice)).toBe(true);
    });
});