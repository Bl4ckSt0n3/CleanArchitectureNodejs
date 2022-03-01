'use strict';

module.exports = class {
    constructor(id = null, firstName, lastName, email, password, phone, country, city, state, zip) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.country = country;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
};