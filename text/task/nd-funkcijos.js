//// ----------------1 uzduotis

let num1 = [1, 2, 3, 4]

///1 variantas///

let arYra3 = false

if (num1[0]===3)
    {
        let arYra3 = true
    }
if (num1[1]===3)
    {
        let arYra3 = true
    }
if (num1[2]===3)
    {
        let arYra3 = true
    }
if (num1[3]===3)
    {
        let arYra3 = true
    }
if (arYra3 = num1)
{
    console.log("yra trejetas");
}

///2 variantas///

let arYra3Cikle = false;

for (i=0; i<num1.length; i++)
{
    if (num1[i]===3)
    {
        let arYra3Cikle = true;
    }
}
    if (arYra3Cikle = true)
    {
        console.log("yra trejetas. rastas cikle");
    }


///////-------------------2 uzduotis

let masyvas = []

let arTuscias = masyvas.length===0
console.log(arTuscias);

let arTuscias1 = false
for (i=0; i<=masyvas.length; i++)
{
    if (masyvas===0)
    {
        arTuscias1 = true
    }
        if (arTuscias1 = true)
        {
            console.log('Tuscias');        
        }
}

///////------------------3 uzduotis


let sarasas =  [1, -2, 3, -4];

if (sarasas.some(num => num < 0)) {
    console.log("Yra neigiamas skaičius!");
} else {
    console.log("Neigiamų skaičių nėra.");
}


////////-----------------4 uzduotis

const sarasas1 = [2, 4, 6]
let yraLyginiu = false

for (i<0; i<sarasas1.length; i+=2)   
    {
        if (sarasas1>0);
    {
        let yraLyginiu = true
    }
        if (yraLyginiu = true)
    {
    console.log('Yra lyginiu skaiciu');
    }
    }
////////----------------5 uzauotis

let sarasas2 = [3, 5, -2]

if (sarasas2.some(num => num < 0)) {
       console.log('Yra neigiamu skaiciu.');
} else {
    console.log('Nera neigiamu skaiciu.');
}


///////-----------------6 uzduotis

let sarasas3 = [1, 3, 5]

if (sarasas3[0]>5)
{
    console.log('Didesnis uz trece skaiciu.');
} else {
    console.log('Mazesnin uz trecia skaiciu');
}

////// ----------------7 uzduotis

let sarasas4 = [1, 2, 3, 4, 5, 6]

if (sarasas4.length>5) {
    console.log('Saraso ilgis ilgesnins uz penkis.');
} else {
    console.log('Saraso ilgis trumpesnins uz penkis.');   
}

//////-----------------8 uzduotis


let text = ["obuolys", "bananas", "vyšnia"]