let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]

function getParkingLotState(multiArray) {
    let availableSlots = 0;
    let occupiedSlots = 0;

    for (let i=0; i<multiArray.length; i++) {
        for (let j=0; j< multiArray[i].length; j++) {
            if (multiArray[i][j]==1) occupiedSlots++;
            else if (multiArray[i][j]==2) availableSlots++;
        }
    }
    let totalSlots = occupiedSlots + availableSlots;
    const state = {totalSlots, availableSlots, occupiedSlots};
    return state;
}


console.log(getParkingLotState(parking_state))
