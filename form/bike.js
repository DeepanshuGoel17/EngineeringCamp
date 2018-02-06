
export class Bike {

    constructor(make, model, color, number) {
        this._make = make;
        this._model = model;
        this._color = color;
        this._number = number;
    }

    getInfo() {

        return `This Bike Maker is : ${this._make}, its model is : ${this._model},its color is : ${this._color} and its number is : ${this._number}`;

    }


}

