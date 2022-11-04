let mouse = {
    brand : "Rakk",
    Variant : "Pink",
    model : "Talan",
    Games : {
        Valorant : "Diamond",
        League: "Bronze",
    },

    displayBrand() {
        alert(this.brand);
    }
}

class myMouse {
    constructor (brand, variant, model) {
        this.brand = brand;
        this.variant = variant;
        this.model = model;
    }
}