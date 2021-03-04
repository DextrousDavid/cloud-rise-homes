let allRooms = () => {
    // dont use block
    document.getElementById("allRoomsId").style.display = "block"
}

let fiveRoomsFilter = () => {
    var x, i;
    x = document.querySelectorAll(".fourRooms, .threeRooms, .twoRooms, .oneRoom, .buttonFour, .buttonThree, .buttonTwo, .buttonOne");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }

}
let fourRoomsFilter = () => {
    var x, i;
    x = document.querySelectorAll(".fiveRooms, .threeRooms, .twoRooms, .oneRoom, .buttonFive, .buttonThree, .buttonTwo, .buttonOne");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }

}
let threeRoomsFilter = () => {
    var x, i;
    x = document.querySelectorAll(".fiveRooms, .fourRooms, .twoRooms, .oneRoom, .buttonFive, .buttonFour, .buttonTwo, .buttonOne");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }

}
let twoRoomsFilter = () => {
    var x, i;
    x = document.querySelectorAll(".fiveRooms, .fourRooms, .threeRooms, .oneRoom, .buttonFive, .buttonFour, .buttonThree, .buttonOne");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }

}
let oneRoomFilter = () => {
    var x, i;
    x = document.querySelectorAll(".fiveRooms, .fourRooms, .threeRooms, .twoRooms, .buttonFive, .buttonFour, .buttonThree, .buttonTwo");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }

}