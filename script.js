// const jsonData = {
//     "employees": [
//         {
//             "id": 1,
//             "name": "John Doe",
//             "position": "Developer"
//         },
//         {
//             "id": 2,
//             "name": "Jane Smith",
//             "position": "Designer"
//         },
//         {
//             "id": 3,
//             "name": "Bob Johnson",
//             "position": "Manager"
//         }
//     ]
// };

// // Mere elementet edhe ruaj te TableBody
// const tableBody = document.querySelector("#employeeTable tbody");

// // Iterimi neper json edhe krijimi i tabeles
// for (let i = 0; i < jsonData.employees.length; i++) {

//     const employee = jsonData.employees[i];

//     // insertRow() e krijon nje <tr> ( table row ) element te ri
//     const row = tableBody.insertRow();

//     row.insertCell(0).innerHTML = employee.id;       // Vendose content ne te paren qeli te  employee.id
//     row.insertCell(1).innerHTML = employee.name;     // Vendose content ne te paren qeli te employee.name
//     row.insertCell(2).innerHTML = employee.position; // Vendose content ne te paren qeli te employee.position
// }


const jsonData = {
"vaktiaa": [
    {
        "Data": 24,
        "Muaji": "Prill",
        "Dita": "E hene",
        "syfyri": "3:50",
        "lindja_e_diellit": "5:33",
        "dreka": "12:36",
        "ikindia": "16:25",
        "akshami": "19:35",
        "jacia": "21:17",
        "gjatesia_e_dites": "14:02",
        "shenime": "Dita e parë e Ramazanit, e xhuma, Hëna e re"
    },
    {
        "Data": 25,
        "Muaji": "Prill",
        "Dita": "E marte",
        "syfyri": "3:47",
        "lindja_e_diellit": "5:31",
        "dreka": "12:36",
        "ikindia": "16:25",
        "akshami": "19:36",
        "jacia": "21:18",
        "gjatesia_e_dites": "14:05",
        "shenime": ""
    },
    {
        "Data": 26,
        "Muaji": "Prill",
        "Dita": "E merkure",
        "syfyri": "3:45",
        "lindja_e_diellit": "5:30",
        "dreka": "12:36",
        "ikindia": "16:26",
        "akshami": "19:37",
        "jacia": "21:20",
        "gjatesia_e_dites": "14:07",
        "shenime": ""
    },
    {
        "Data": 27,
        "Muaji": "Prill",
        "Dita": "E merkure",
        "syfyri": "3:43",
        "lindja_e_diellit": "5:29",
        "dreka": "12:36",
        "ikindia": "16:26",
        "akshami": "19:38",
        "jacia": "21:22",
        "gjatesia_e_dites": "14:09",
        "shenime": ""
    },
    {
        "Data": 28,
        "Muaji": "Prill",
        "Dita": "E merkure",
        "syfyri": "3:41",
        "lindja_e_diellit": "5:28",
        "dreka": "12:36",
        "ikindia": "16:27",
        "akshami": "19:40",
        "jacia": "21:24",
        "gjatesia_e_dites": "14:12",
        "shenime": ""
    },
    {
        "Data": 29,
        "Muaji": "Prill",
        "Dita": "E merkure",
        "syfyri": "3:45",
        "lindja_e_diellit": "5:30",
        "dreka": "12:36",
        "ikindia": "16:26",
        "akshami": "19:37",
        "jacia": "21:20",
        "gjatesia_e_dites": "14:07",
        "shenime": ""
    },
    {
        "Data": 30,
        "Muaji": "Prill",
        "Dita": "E merkure",
        "syfyri": "3:37",
        "lindja_e_diellit": "5:26",
        "dreka": "12:36",
        "ikindia": "16:29",
        "akshami": "19:42",
        "jacia": "21:27",
        "gjatesia_e_dites": "14:16",
        "shenime": ""
    },
    {
        "Data": 1,
        "Muaji": "Prill",
        "Dita": "E merkure",
        "syfyri": "3:35",
        "lindja_e_diellit": "5:25",
        "dreka": "12:36",
        "ikindia": "16:29",
        "akshami": "19:43",
        "jacia": "21:18",
        "gjatesia_e_dites": "14:18",
        "shenime": "E xhuma"
    },
    {
        "Data": 2,
        "Muaji": "Prill",
        "Dita": "E merkure",
        "syfyri": "3:33",
        "lindja_e_diellit": "5:24",
        "dreka": "12:36",
        "ikindia": "16:30",
        "akshami": "19:44",
        "jacia": "21:30",
        "gjatesia_e_dites": "14:20",
        "shenime": ""
    },
    {
        "Data": 3,
        "Muaji": "Prill",
        "Dita": "E merkure",
        "syfyri": "3:31",
        "lindja_e_diellit": "5:22",
        "dreka": "12:36",
        "ikindia": "16:30",
        "akshami": "19:45",
        "jacia": "21:31",
        "gjatesia_e_dites": "14:23",
        "shenime": ""
    },
    {
        "Data": 4,
        "Muaji": "Prill",
        "Dita": "E merkure",
        "syfyri": "3:29",
        "lindja_e_diellit": "5:20",
        "dreka": "12:35",
        "ikindia": "16:30",
        "akshami": "19:46",
        "jacia": "21:32",
        "gjatesia_e_dites": "14:26",
        "shenime": ""
    },
    {
        "Data": 5,
        "Muaji": "Prill",
        "Dita": "E merkure",
        "syfyri": "3:27",
        "lindja_e_diellit": "5:18",
        "dreka": "12:35",
        "ikindia": "16:30",
        "akshami": "19:46",
        "jacia": "21:32",
        "gjatesia_e_dites": "14:26",
        "shenime": ""
    },
    {
        "Data": 6,
        "Muaji": "Prill",
        "Dita": "E merkure",
        "syfyri": "3:25",
        "lindja_e_diellit": "5:17",
        "dreka": "12:35",
        "ikindia": "16:31",
        "akshami": "19:48",
        "jacia": "21:35",
        "gjatesia_e_dites": "14:31",
        "shenime": ""
    },
    {
        "Data": 7,
        "Muaji": "Prill",
        "Dita": "E merkure",
        "syfyri": "3:23",
        "lindja_e_diellit": "5:15",
        "dreka": "12:35",
        "ikindia": "16:31",
        "akshami": "19:49",
        "jacia": "21:36",
        "gjatesia_e_dites": "14:34",
        "shenime": "Hëna e plotë"
    }
]
}


const tableBody = document.querySelector("#vaktiaaTable tbody");


for (let i = 0; i < jsonData.vaktiaa.length; i++) {

    const vaktiaa = jsonData.vaktiaa[i];
    
    const row = tableBody.insertRow();


    row.insertCell(0).innerHTML = vaktiaa.Data;       
    row.insertCell(1).innerHTML = vaktiaa.Muaji;     
    row.insertCell(2).innerHTML = vaktiaa.Dita;
    row.insertCell(3).innerHTML = vaktiaa.syfyri;       
    row.insertCell(4).innerHTML = vaktiaa.lindja_e_diellit;     
    row.insertCell(5).innerHTML = vaktiaa.dreka; 
    row.insertCell(6).innerHTML = vaktiaa.ikindia;       
    row.insertCell(7).innerHTML = vaktiaa.akshami;     
    row.insertCell(8).innerHTML = vaktiaa.jacia; 
    row.insertCell(9).innerHTML = vaktiaa.gjatesia_e_dites;            
    row.insertCell(10).innerHTML = vaktiaa.shenime; 
}

