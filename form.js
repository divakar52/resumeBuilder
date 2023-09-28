function weField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);

    let we = document.getElementById('we');
    let weButton = document.getElementById('weAddButton');

    we.insertBefore(newNode, weButton);

}

function aqField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqfield');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);

    let aq = document.getElementById('aq');
    let aqButton = document.getElementById('aqAddButton');

    aq.insertBefore(newNode, aqButton);

}

//generate cv
function generateCV() {
    //NAME 
    let nameField = document.getElementById('namefield').value;
    // console.log(nameField)
    let nameT = document.getElementById('nameT')
    let namet2 = document.getElementById('nameT2')

    nameT.innerHTML = nameField;
    // console.log(nameT)
    namet2.innerHTML = nameField;
    // console.log(nameT2)

    //Phone Numnber
    document.getElementById('phoneT').innerHTML = document.getElementById('phonefield').value;

    //email
    document.getElementById('emailT').innerHTML = document.getElementById('emailfield').value;

    //address
    document.getElementById('addressT').innerHTML = document.getElementById('addressfield').value;

    //links
    document.getElementById('facebookT').innerHTML = document.getElementById('fbfield').value;
    document.getElementById('linkT').innerHTML = document.getElementById('lifield').value;
    document.getElementById('gitT').innerHTML = document.getElementById('ghfield').value;

    //objective
    document.getElementById('objectiveT').innerHTML = document.getElementById('obfield').value;


    //work experience
    let we = document.getElementsByClassName('wefield');
    let str = ''
    for (let e of we) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById('workT').innerHTML = str;


    //academic qualification
    let aq = document.getElementsByClassName('aqfield');
    let str1 = ''
    for (let e of aq) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById('aqT').innerHTML = str1;

    let file = document.getElementById('profileImage').files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend = function () {
        document.getElementById('imageT').src = reader.result
    };



    //cv
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';


}

//print cv
function printcv() {
   window.print();
}