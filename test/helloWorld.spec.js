
describe("Hello worlds", function(){
    it("should return Hello World", function() {
        var greeting = helloWorld();
        expect(greeting).toBe("Hello World");
    })
    it("basic addition",  function(){
        var summation = add(3, 4);
        expect(summation).toBe(7);

        summation = add(5, 5);
        expect(summation).toBe(10);
    })
})