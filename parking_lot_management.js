class Spot{
    constructor(data){
        Object.assign(this, data)
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

class ParkingLotManager{
    constructor(){
        this.spots = [];
        this.vehicles = new Map();
    }
    addSpot(vehicleType, ids){
        ids.forEach((id)=>{
            this.spots.push(new Spot({vehicleType, id}));
        })
    }

    hasVehicle(licenseId){
       return this.vehicles.has(licenseId)
    }

    placeVehicle(vehicle){
        if(this.hasVehicle(vehicle.licenseId)){
            console.log(`There is already a vehicle parked with id ${vehicle.licenseId}`)
            return;
         }
         const spot = this.spots.find((spot)=> ((vehicle instanceof spot.vehicleType) && (spot.isSpotFree())))
         if(spot){
             this.vehicles.set(vehicle.licenseId, spot);
             console.log(`Vehicle is parked at ${spot.id}`)
         }else{
             console.log(`There is no free spot for vehicle ${vehicle.licenseId}`)

         }
    }

    removeVehicle(vehicle){
        const spot = this.vehicles.get(vehicle.licenseId);
        if(spot){
            // this.release();
           return this.vehicles.delete(vehicle.licenseId);
        }else{
            console.log("There is no vehicle with this Id")
        }
    }
}

class Vehicle{
    constructor(id){
        this.licenseId = id;
    }
}

class Bike extends Vehicle{
    constructor(id){
        super(id)
            this.vehicleSize = 1;
    }
}

class Car extends Vehicle{
    constructor(id){
        super(id)
        this.vehicleSize = 2;
    }
}

class HeavyVehicle extends Vehicle{
    constructor(id){
        super(id);
        this.vehicleSize = 4;
    }
}

const parkingLogManager = new ParkingLotManager()
parkingLogManager.addSpot(Car, ["Maruti","Honda"])
parkingLogManager.addSpot(Bike, ["Yamaha","Pulsor"])

const car1 = new Car("Maruti")
const car2 = new Car("Ford")

parkingLogManager.placeVehicle(car1)
parkingLogManager.placeVehicle(car2)

const bike1 = new Bike("Platina")

parkingLogManager.placeVehicle(bike1) 

console.log(parkingLogManager.removeVehicle("Ford"))
console.log(parkingLogManager)