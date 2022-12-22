let menu = {
    width: 200,
    height: 300,
    title: "My Menu"
};

for(let key in menu){
    // alert(menu[key]);
    console.log(menu[key]);
}

multiplyNumeric(menu);

//after the call
// menu = {
//     width: 400,
//     height: 600,
//     title: "My Menu";
// }


function multiplyNumeric(obj){
    for (let key in obj){
        if(typeof obj[key] == 'number'){
            let temp = obj[key];
            obj[key] = temp * 2;
        }
    }
}

for(let key in menu){
    // alert(menu[key]);
    console.log(menu[key]);

}