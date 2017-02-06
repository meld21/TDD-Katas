function VendingMachine(){

    this.acceptCoin = function(coin){

        if(coin == "quarter")
        {
            return true;
        }
        return false;
    };
}