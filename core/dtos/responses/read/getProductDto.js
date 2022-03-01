'use strict';

module.exports = class {
    constructor(cardTitle, cardText, price, category) {
        this.cardTitle = cardTitle;
        this.cardText = cardText;
        this.price = price;
        this.category = category;
    }
}