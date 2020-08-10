abstract class Shape{

    protected _x : number;
    protected _y : number;
    protected _x2 : number;
    protected _y2 : number;

    constructor(x : number, y : number, x2 : number, y2 : number){
        this._x = x;
        this._x2 = x2;
        this._y = y;
        this._y2 = y2;
    }

    abstract CalculateAreal();

    abstract CalculateOmkreds();
}

export class Square extends Shape{
   constructor(x : number, y : number){
       super(x, y, x, y);
   }

   CalculateAreal(){
        return this._x * this._y;
   }
   CalculateOmkreds(){
        return this._x * 4;
   }
}

export class RektAngle extends Shape{
    constructor(x : number, y : number){
        super(x, y, x, y);
    }

    CalculateAreal(){
        return this._x * this._y;
    }

    CalculateOmkreds(){
        return (this._x * 2) + (this._y * 2)
    }
}
