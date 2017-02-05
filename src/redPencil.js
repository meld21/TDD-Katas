function DiscountTracker() {
    this.isRedPencilDiscount = function(originalPrice, reducedPrice) {
        return originalPrice*.95 >= reducedPrice;
    };
};