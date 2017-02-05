describe("isRedPencilDiscount", function(){

    var discountTracker;
    beforeEach(function(){
        discountTracker = new DiscountTracker();
    });
    it("reduces price by greater than five percent returns true", function(){
        //arrange
        var originalPrice = 100;
        var reducedPrice = 80;
        //act
        //assert
        expect(discountTracker.isRedPencilDiscount(originalPrice, reducedPrice)).toBe(true);
    });

    it("reduces price by less than five percent returns false", function(){
        var originalPrice  = 100;
        var reducedPrice = 99;

        expect(discountTracker.isRedPencilDiscount(originalPrice, reducedPrice)).toBe(false);
    });

    it("reduces price by five percent return true", function(){
       var originalPrice = 100;
       var reducedPrice = 95;

       expect(discountTracker.isRedPencilDiscount(originalPrice, reducedPrice)).toBe(true);
    });
    
    it("reduces price by less than thirty percent returns true", function(){
        var originalPrice = 100;
        var reducedPrice = 75;

        expect(discountTracker.isRedPencilDiscount(originalPrice,reducedPrice)).toBe(true);
    });

    it("reduces price by more than thrity precent returns false", function()
    {
        var originalPrice = 100;
        var reducedPrice = 40;

        expect(discountTracker.isRedPencilDiscount(originalPrice, reducedPrice)).toBe(false);
    });

    it("reduces price by thirty percent returns true", function () {
        var originalPrice = 100;
        var reducedPrice = 70;

        expect(discountTracker.isRedPencilDiscount(originalPrice, reducedPrice)).toBe(true);
    });
});