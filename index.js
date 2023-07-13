// Code your solution in this file!
function distanceFromHqInBlocks(num){
    if (num >= 42){
        return num - 42
    }else{
        return 42 - num 
    }
}

function distanceFromHqInFeet(num){
    return distanceFromHqInBlocks(num) * 264
}

function distanceTravelledInFeet(num1, num2){
    if (num1 > num2) {
        return (num1 - num2)*264
    }else{
        return (num2 - num1)*264
    }
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) > 2500){
        return "cannot travel that far"
    }
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0
    }
    if ((distanceTravelledInFeet(start, destination) > 400) && (distanceTravelledInFeet(start, destination) < 2001)){
        return ((distanceTravelledInFeet(start, destination) - 400) * .02)
    }
    if (distanceTravelledInFeet(start, destination) > 2000){
        return 25
    }
}