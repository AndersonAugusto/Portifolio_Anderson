function mudaBackground(){
    var getColor = document.getElementById('background').value;
    const cor = document.getElementById('background').innerHTML; // COR-PAREDE
    document.getElementById('parede').style.backgroundColor = getColor;
}
    document.getElementById('background').addEventListener('change', mudaBackground);
 mudaBackground();