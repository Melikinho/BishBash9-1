

const buttonBishBosh = document.getElementById("buttonBishBosh");

buttonBishBosh.addEventListener('click', bishBosh)

function bishBosh() {
    let firstInput = document.getElementById("firstInputBish");
    let secondInput = document.getElementById("secondInputBish");
    let loopInput = document.getElementById("loopInput");

    let firstBishInput = firstInput.value;
    let secondBishInput = secondInput.value;
    let firstloopInput = loopInput.value;

    let myOutput = document.getElementById("myOutputLocation");
    myOutputLocation.innerHTML += `Loop running: ${firstloopInput}`; 


    for (let i = 1; i <= firstloopInput; i++){
        if (i % firstBishInput === 0 && i % secondBishInput === 0)
        myOutput.innerHTML += 'Bish-Bosh ';
        else if (i % firstBishInput === 0)
        myOutput.innerHTML += 'Bish ';
        else if (i % secondBishInput === 0)
        myOutput.innerHTML += 'Bosh ';
        else
        myOutput.innerHTML += i + " ";
    }
};



