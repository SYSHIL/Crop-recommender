console.log("Code Working");
var op = document.querySelector('.op');
var calculate = document.querySelector('.calculate');
var generatetest = document.querySelector('.generatetest');
var generate = document.querySelector('.generate');

var crop_name = {
    1 : ['Rice' , 'Mango', 'Papaya' ],
    2 : ['Cotton', 'Jute', 'Watermelon', 'Muskmelon', 'Banana', 'Orange'],
    3 : ['Jute', 'Watermelon', 'Muskmelon'],
    4 : ['Rice', 'Jute', 'Watermelon', 'Muskmelon', 'Cotton', 'Jute',  'Banana', 'Orange' ],
    5 : ['Pomegranate'],
    6 : ['Apple', 'Grape', 'Pomegranate'],
    7 : ['Lentil'],
    8 : ['Lentil' , 'Jute', 'Watermelon', 'Muskmelon']
}

var districts = { 0 : ["Almora"], 1 : ["Tehri"], 2 : ["Chamoli"]}

const mean = [6.60250577e+00, 6.12500868e-01, 1.50107611e+01, 3.42947799e+02,
    2.84839713e+01, 1.74444707e+02, 6.17416543e+02, 5.41868834e+02,
    2.09902799e+02, 2.42916620e+00, 1.59120245e+01, 1.58058917e+01,
    1.04744862e+01, 1.23270004e+01]

const std = [4.26792056e-01, 4.36149236e-01, 5.63513289e+00, 1.36435470e+02,
    1.75487866e+01, 1.20338327e+02, 5.98361442e+02, 8.79174453e+02,
    4.37254846e+02, 3.16537889e+00, 1.66047269e+01, 1.26325334e+01,
    8.12984819e+00, 4.25667410e+00]
    
// Setting up tfjs with the model we downloaded
tf.loadLayersModel('./model/model.json')
    .then(function (model) {
        window.model = model;
    });

tf.loadLayersModel('./model/model2.json')
.then(function (model2) {
    window.model2 = model2;
});


// Predict function
// input  [1,2,3,4,...,14] ---->

generatetest.addEventListener('click', function (){
    let d = {
        1:[6.22,2.63,0.149,238.34,29.57,509.6,2.6,1324,336,2.41,0.19,23.89,22.84,8],
        2:[5.6,2.78,0.081,150.53,25.7,53.8,7.81,1644,504,2.84,0.44,21.08,24.11,5],
        3:[7.35,21.63,0.233,313.6,28.8,291.2,16.13,4444,1200,8.33,1,11.89,11.16,5],
        4:[6.96,4.02,1.63,289.87,11.58,135.1,640,36,14.25,1.73,1.78,9.87,17.08,19]
    }

    let ans = {
        1:['Apple', 'Grape', 'Pomegranate'],
        2:['Lentil'],
        3:['Pomegranate'],
        4:['Rice' , 'Mango', 'Papaya' ]
    }

    var x = Math.floor(Math.random() * (5 - 1) ) + 1;
    document.querySelector('#exampleFormControlInput1').value=d[x][0];
    document.querySelector('#exampleFormControlInput2').value=d[x][1];
    document.querySelector('#exampleFormControlInput3').value=d[x][2];
    document.querySelector('#exampleFormControlInput4').value=d[x][3];
    document.querySelector('#exampleFormControlInput5').value=d[x][4];
    document.querySelector('#exampleFormControlInput6').value=d[x][5];
    document.querySelector('#exampleFormControlInput7').value=d[x][6];
 
    
});


calculate.addEventListener('click', function(){

    let v1 = document.querySelector('#exampleFormControlInput1').value;
    let v2 = document.querySelector('#exampleFormControlInput2').value;
    let v3 = document.querySelector('#exampleFormControlInput3').value;
    let v4 = document.querySelector('#exampleFormControlInput4').value;
    let v5 = document.querySelector('#exampleFormControlInput5').value;
    let v6 = document.querySelector('#exampleFormControlInput6').value;
    let v7 = document.querySelector('#exampleFormControlInput7').value;
    let v8=0;
    let v9=0;
    let v10=0;
    let v11=0;
    let v12=0;
    let v13=0;
    let v14=0;
  
   

    console.log("Button Clicked")
    var inp = new Array(14);
    inp[0]=v1;
    inp[1]=v2;
    inp[2]=v3;
    inp[3]=v4;
    inp[4]=v5;
    inp[5]=v6;
    inp[6]=v7;
    inp[7]=v8;
    inp[8]=v9;
    inp[9]=v10;
    inp[10]=v11;
    inp[11]=v12;
    inp[12]=v13;
    inp[13]=v14;
 

    var w1,w2,w3,w4,w5,w6;

    if(v4<=280)w1=1;
    else if(v4>280 && v4<=560)w1=2;
    else w1=3;

    if(v5<=10)w2=1;
    else if(v5>10 && v5<=24.6)w2=2;
    else w2=3;

    if(v6<=117.6)w3=1;
    else if(v6>117.6 && v6<=280)w3=2;
    else w3=3;

    if(v7<=10)w4=1;
    else if(v7>20 && v7<=20)w4=2;
    else w4=3;

    if(v2<=0.5)w5=3;
    else if(v2>0.5 && v2<=0.75)w5=6;
    else w5=9;

    if(v8<=2500)w6=1;
    else if(v8>2500 && v8<=4000)w6=2;
    else w6=3;

    var score = (w1+w2+w3+w4+w5+w6)*10/24;
    //uhfiqwfihfqwuhfqhfo
    let crop="Rice";
    if(v1>=60 && v1<=90 && v2>=35 && v2<= 58 && v3>=40 && v3<=44)crop="Rice"
    else if(v1>=99 && v1<=118 && v2>=15 && v2<= 34 && v3>=27 && v3<=34)crop="Coffe"
    else if(v1>=7 && v1<=40 && v2>=120 && v2<= 144 && v3>=196 && v3<=205)crop="Apple"
    else if(v1>=82 && v1<=117 && v2>=71 && v2<= 95 && v3>=46 && v3<=55)crop="Banana"
    else if(v1>=25 && v1<=58 && v2>=58 && v2<= 79 && v3>=15 && v3<=25)crop="Blackgram"
    else if(v1>=22 && v1<=57 && v2>=56 && v2<= 72 && v3>=75 && v3<=85)crop="Chickpea"
    else if(v1>=2 && v1<=37 && v2>=5 && v2<= 30 && v3>=26 && v3<=35)crop="Coconut"
    else if(v1>=102 && v1<=136 && v2>=38 && v2<= 60 && v3>=15 && v3<=23)crop="Cotton"
    else if(v1>=6 && v1<=40 && v2>=123 && v2<= 144 && v3>=195 && v3<=205)crop="Grapes"
    else if(v1>=60 && v1<=96 && v2>=38 && v2<= 52 && v3>=37 && v3<=45)crop="Jute"
    else if(v1>=2 && v1<=40 && v2>=55 && v2<=70  && v3>=16 && v3<=25)crop="Kidney Beans"
    else if(v1>=0 && v1<=39 && v2>=18 && v2<=40  && v3>=25 && v3<=33)crop="Mango"
    else if(v1>=82 && v1<=115 && v2>=13 && v2<=27  && v3>=45 && v3<=55)crop="Musk Melon"
    else if(v1>=6 && v1<=40 && v2>=6 && v2<=30  && v3>=5 && v3<=15)crop="Orange"
    else if(v1>=31 && v1<=61 && v2>=46 && v2<=68  && v3>=45 && v3<=55)crop="Papaya"
    else if(v1>=83 && v1<=120 && v2>=7 && v2<=30  && v3>=45 && v3<=55)crop="Watermelon"
    else crop= "No crop for you vhai"

       

    document.getElementById('op').innerHTML=crop;
    document.getElementById('op2').innerHTML=score.toFixed(2)+"/10";
    document.getElementById('op3').innerHTML=score;

    predict(inp);
    predict_district(inp);
});

const predict = async function (inp) {

    var op = new Array(14);
    for(var i=0;i<7;i++){
        op[i]=(inp[i]-mean[i])/std[i];
    }
    console.log(op);
    if (window.model) {
        var op1 = await window.model.predict(tf.tensor([op])).array();
        console.log("Predicted OP Crop :\n"+op1[0]);
        var op2 = op1[0];
        var max = op2[0];

        for(var j=0;j<10;j++){
            if(max<op2[j])
            max=op2[j];
        }

        console.log("Max :\n"+max);
        var arg = op2.indexOf(max);
        document.getElementById('op').innerHTML=crop_name[arg];
    } else {
        setTimeout(function () { predict(inp) }, 50);
    }
}

const predict_district = async(inp) =>{
    var oup = new Array(14);
    for(var i=0;i<7;i++){
        oup[i]=(inp[i]-mean[i])/std[i];
    }
    console.log(oup);
    if (window.model2) {
        var opn = await window.model2.predict(tf.tensor([oup])).array();
        console.log("Predicted OP District :\n"+opn[0]);
        var opn2 = opn[0];
        var max1 = opn2[0];

        for(var j=0;j<10;j++){
            if(max1<opn2[j])
            max1=opn2[j];
        }
        console.log(max1);
        
        console.log("Max :\n"+max1);
        var arg = opn2.indexOf(max1);
        document.getElementById('op4').innerHTML=districts[arg];
    } else {
        setTimeout(function () { predict_district(inp) }, 50);
    }
}

