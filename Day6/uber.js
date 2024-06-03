class ride {
    constructor(kilometer = 15, price_per_kilometer = 10) {
        this.kilometer = kilometer
        this.price_per_kilometer = price_per_kilometer
    }

    getprice() {
        
        const totalfare = this.kilometer * this.price_per_kilometer;
        return totalfare;
    }
}
const Total = new ride()
console.log(Total)