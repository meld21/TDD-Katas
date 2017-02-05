function DiscountTracker() {
    this.isRedPencilDiscount = function(originalPrice, reducedPrice) {
        var greaterThanFivePercent = originalPrice*.95 >= reducedPrice;
        var lessThanThrityPercent = originalPrice*.7 <= reducedPrice;
        return greaterThanFivePercent && lessThanThrityPercent;
    };
};