
const stud1 = ['Jonas', 5, 8, 3, 9, 5];
const stud2 = ['Lina', 10, 6, 3, 3, 8];
const stud3 = ['Gytis', 10, 10, 9, 7, 7];
const stud4 = ['Ona', 5, 1, 7, 6, 8];
const stud5 = ['Tomas', 2, 3, 2, 6, 4];


function StudentoVidurkis (stud)
{
    console.log('Studento Vardas '+ stud);
    let vidurkis = (stud[1]+stud[2]+stud[3]+stud[4]+stud[5])/5;
    if(vidurkis >= 3.5) 
        {
           console.log(stud[0]+' islaike. Vidrkkis: '+vidurkis);
} else {
    let naujasVidurkis = ((vidurkis*5)+10)/6;
    console.log(stud[0]+' neislaike. Naujas vidurkis: '+vidurkis);
    if(vidurkis >= 3.5) 
        {
            console.log(stud[0]+' islaikitu kursa jai gautu desimtuka');
        }
    }

}
StudentoVidurkis(stud1)
StudentoVidurkis(stud2)
StudentoVidurkis(stud3)
StudentoVidurkis(stud4)
StudentoVidurkis(stud5)

