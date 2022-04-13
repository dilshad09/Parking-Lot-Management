class Spot{
    constructor(data){
        this.data = data;
    }
    fill(vehicle){
        this.vehicle = vehicle;
    }

    isSpotFree(){
        return !this.vehicle
    }
    getVehicle(){
        return this.vehicle;
    }
    release(){
        this.vehicle = undefined;
    }
}