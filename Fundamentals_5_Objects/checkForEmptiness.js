let schedule = {};
function isEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true;
}
alert(isEmpty(schedule));

schedule.name = "Exists";

alert(isEmpty(schedule));


