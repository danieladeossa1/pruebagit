// Definir el arreglo de objetos para guardar la información de cada empleado
let datosemp = [];
// Referenciar todos los elementos que tienen id, con su respectiva variable
let ident = document.getElementById('ident');
let identmess = document.getElementById('identmess');
let fullname = document.querySelector('#fullname');
let fullnamemess = document.getElementById('fullnamemess');
let position = document.querySelector('#position');
let salary = document.getElementById('salary');
let salarymess = document.querySelector('#salarymess');
let ret = document.getElementById("ret");
let btnsave = document.getElementById('btnsave');
let btnsearch = document.getElementById('btnsearch');
let btndelete = document.getElementById('btndelete');
let btnlist = document.getElementById('btnlist');
let messsave = document.getElementById('messsave');
let btnclean = document.getElementById('btnclean');
const listado = document.querySelector('#listado')

function cleanData() {
    ident.value = "";
    fullname.value = "";
    salary.value = "";
    ret.value = "";
    position.value = "";
    ident.focus();
}

// Generar los eventos de los elementos referenciados
ident.addEventListener('focus', () => {
    // Enviar un texto al elemento referenciado identmess
    identmess.textContent = "Ingrese la identificación"
})
ident.addEventListener('blur', () => {
    identmess.textContent = ""
})
fullname.addEventListener('focus', () => {
    // Enviar un texto al elemento referenciado identmess
    fullnamemess.textContent = "Ingrese el nombre completo"
})
fullname.addEventListener('blur', () => {
    fullnamemess.textContent = ""
})
salary.addEventListener('focus', () => {
    // Enviar un texto al elemento referenciado identmess
    salarymess.textContent = "Ingrese el salario"
})
salary.addEventListener('blur', () => {
    salarymess.textContent = " "
})
// Eventos de lo botones
btnsave.addEventListener('click', () => {
    // Chequear cada input que no estén vacíos
    if (ident.value != "") {
        if (fullname.value != "") {
            if (salary.value != "") {
                // Calcular la retención en la fuente
                ret.value = parseFloat(salary.value) > 5700000 ? new Intl.NumberFormat('es-CO').format(parseFloat(salary.value) * 10 / 100) : '';
                // Guardar la información del usuario en pantalla en el arreglo datosemp
                //Antes de guardar buscar la identificación en el arreglo datosemp
                let empFind = datosemp.find(emp => emp.ident == ident.value);
                if (empFind == undefined) {//No encontró la identificación

                    datosemp.push({ ident: ident.value, fullname: fullname.value, position: position.value, salary: salary.value })
                    console.log(datosemp)
                    messsave.textContent = "Empleado guardado correctamente..."
                    if (listado.hasChildNodes()) {
                        listado.removeChild(listado.firstElementChild)
                    }

                    setTimeout(() => {
                        messsave.textContent = ""
                    }, 3000)
                }
                else {
                    messsave.textContent = "La identificación ya se encuentra registrada.Inténtelo con otra.."
                }
            }
            else {
                salary.focus();
                salarymess.textContent = "El salario es obligatorio **";
            }
        }
        else {
            fullname.focus()
            fullnamemess.textContent = "El nombre completo es obligatorio **"
        }
    }
    else {
        ident.focus();
        identmess.textContent = "La identificación es obligatoria **"
    }
})
btnsearch.addEventListener('click', () => {
    //Verificar que se haya digitado una identificación
    if (ident.value != "") {
        let serachIdent = datosemp.find(employee => employee.ident == ident.value);
        if (serachIdent != undefined) {// la identificación la encontró (ident)
            //Asignar los datos del empleado a cada input 
            fullname.value = serachIdent.fullname;
            salary.value = serachIdent.salary;
            position.value = serachIdent.position
            ret.value = parseFloat(salary.value) > 5700000 ? new Intl.NumberFormat('es-CO').format(parseFloat(salary.value) * 10 / 100) : '';

        }
        else {
            messsave.textContent = "La identificación NO existe. Inténtelo con otra..."
        }
    }
})
btnclean.addEventListener('click', () => {
    cleanData()
    if (listado.hasChildNodes()) {
        listado.removeChild(listado.firstElementChild)
    }

})

btndelete.addEventListener('click', () => {
    //Buscar el índice del dato (ident)
    let indexIdent = datosemp.findIndex(emp => emp.ident == ident.value);
    if (indexIdent != -1) {//lo encontró
        //Eliminar el elemento del arreglo, con base en el índice
        if (confirm('Esta seguro de eliminar el empleado?')) {//Se hace click en aceptar
            datosemp.splice(indexIdent, 1);
            messsave.textContent = "Empleado Eliminado correctamente..."
            if (listado.hasChildNodes()) {
                listado.removeChild(listado.firstElementChild)
            }
            console.log(datosemp)
            cleanData()
            setTimeout(() => {
                messsave.textContent = ""
            }, 3000)
        }

    }
})
btnlist.addEventListener('click', () => {
    //Verificar si el elemento listado tiene hijos (subnodos)
    if (!listado.hasChildNodes()) {// sino tiene hijos el elemento

        //Generar elementos de html (nodos)a través del DOM con JavaScript
        let newTable = document.createElement('table');
        //Agregar un atributo al elemento creado con newTable -border con html
        newTable.setAttribute('border', '2');
        newTable.setAttribute('cellpadding', '0');
        newTable.setAttribute('cellspacing', '0')

        let newThIdent = document.createElement('th');
        let newThTextIdent = document.createTextNode('Identificación');
        let newThFullname = document.createElement('th');
        let newThTextFullname = document.createTextNode('Nombre Completo');
        let newThPosition = document.createElement('th');
        let newThTextPosition = document.createTextNode('Cargo');
        let newThSalary = document.createElement('th');
        let newThTextSalary = document.createTextNode('Salario');
        let newThRet = document.createElement('th');
        let newThTextRet = document.createTextNode('Retención en la Fuente');

        //Agregar los textos a cada th
        newThIdent.appendChild(newThTextIdent);
        newThFullname.appendChild(newThTextFullname);
        newThPosition.appendChild(newThTextPosition);
        newThSalary.appendChild(newThTextSalary);
        newThRet.appendChild(newThTextRet);

        //Agregar los th a la tabla
        newTable.appendChild(newThIdent);
        newTable.appendChild(newThFullname);
        newTable.appendChild(newThPosition);
        newTable.appendChild(newThSalary);
        newTable.appendChild(newThRet);
        //Recorrer el array datosemp y por cad objeto, se hará una fila y sus td respectivos 
        datosemp.map(emp => {
            let newTr = document.createElement('tr');
            let newTdIdent = document.createElement('td');
            let newTdTextIdent = document.createTextNode(emp.ident);
            let newTdFullname = document.createElement('td');
            let newTdTextFullname = document.createTextNode(emp.fullname);
            let newTdPosition = document.createElement('td');
            let xposition=""
            switch(emp.position){
                case "manager":
                    xposition ="Gerente"
                    break;
                case "analyst":
                    xposition="Analista de Programación"
                    break;
                case "softarq":
                    xposition="Arquitecto de Software"
                    break;
            }
            let newTdTextPosition = document.createTextNode(xposition);
            let newTdSalary = document.createElement('td');
            let newTdTextSalary = document.createTextNode(new Intl.NumberFormat ('es-CO').format(emp.salary));
            let newTdRet = document.createElement('td');
            let newTdTextRet = document.createTextNode(emp.salary > 5700000 ? new Intl.NumberFormat ('es-CO').format (emp.salary * 10 / 100) : '');

            //Agregar los textos a sus respectivos td
            newTdIdent.appendChild(newTdTextIdent);
            newTdFullname.appendChild(newTdTextFullname);
            newTdPosition.appendChild(newTdTextPosition);
            newTdSalary.appendChild(newTdTextSalary);
            newTdRet.appendChild(newTdTextRet);

            //Agregar los Td a la fila con id listado
            newTr.appendChild(newTdIdent);
            newTr.appendChild(newTdFullname);
            newTr.appendChild(newTdPosition);
            newTr.appendChild(newTdSalary);
            newTr.appendChild(newTdRet);

            //Agregar la fila a la tabla
            newTable.appendChild(newTr)
        })

        //Agregar la tabla al elemento con id listado
        listado.appendChild(newTable)
    }


})