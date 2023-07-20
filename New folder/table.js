var arr = [];

function addEmp(){
    event.preventDefault();
    let x=validate();
    console.log(x);
    // if(validate()==false) return false;
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let designation = document.getElementById("role").value;
    let image = document.getElementById("img").value;
    let table = document.getElementById("table");
    let add = {};

    add['id'] = id;
    add['name'] = name;
    add['age'] = age;
    add['gender'] = gender;
    add['role'] = designation;
    add['img'] = image;
    add['table'] = table;
    if(x){
        arr.push(add);
    }
        
    console.log(arr)
        let str = " ";
        for(let i = 0; i< arr.length; i++) {
    str += `<tr>
                <td>${arr[i].id}</td>
                <td>${arr[i].name}</td>
                <td>${arr[i].age}</td>
                <td>${arr[i].gender}</td>    
                <td>${arr[i].designation}</td>
                <td>
                <button onclick = "viewEmp(${i})" class = "btn btn-view btn-info btn-sm">View</button>
                <button onclick = "updateEmp(${i})" class="btn btn-edit btn-success btn-sm">Edit</button>
                <button onclick = "deleteEmp(${i})" class = "btn btn-delete btn-danger btn-sm">Delete</button>
            </td>
            </tr>`;
}
// console.log(str);
document.getElementById("table-body").innerHTML=str;
}

function viewEmp(id) {
    // console.log("sasd",arr,id);
    let pop = document.getElementById("view-popup");
    pop.style.display = 'flex';

    document.getElementById("idv").innerHTML =arr[id].id;
    document.getElementById("namev").innerHTML=arr[id].name;
    document.getElementById("agev").innerHTML=arr[id].age;
    document.getElementById("genderv").innerHTML=arr[id].gender;
    document.getElementById("rolev").innerHTML=arr[id].designation;
    document.getElementById("imgv").innerHTML=arr[id].image;
    console.log(document.getElementById("idv").innerHTML);
}

function updateEmp(id) {
    let pop = document.getElementById("popup");
    pop.style.display = 'flex';

    document.getElementById("e").value=id;
    document.getElementById("ide").value=arr[id].id;
    document.getElementById("namee").value=arr[id].name;
    document.getElementById("agee").value=arr[id].age;
    document.getElementById("gendere").value=arr[id].gender;
    document.getElementById("rolee").value=arr[id].designation;
    document.getElementById("imagee").value=arr[id].image;

// let str = " ";
//         for(let i = 0; i< arr.length; i++) {
//     str += `<tr>
//                 <td>${arr[i].id}</td>
//                 <td>${arr[i].name}</td>
//                 <td>${arr[i].age}</td>
//                 <td>${arr[i].gender}</td>    
//                 <td>${arr[i].designation}</td>
//                 <td>${arr[i].image}</td>
//                 <td>
//                 <button onclick = "viewEmp(${i})" class = "btn btn-view btn-info btn-sm">View</button>
//                 <button onclick = "updateEmp(${i})" class="btn btn-edit btn-success btn-sm">Edit</button>
//                 <button onclick = "deleteEmp(${i})" class = "btn btn-delete btn-danger btn-sm">Delete</button>
//             </td>
//             </tr>`;
// }

// document.getElementById("table-body").innerHTML=str;

}

function addupdateEmp(){
        event.preventDefault();
    if (validationEdit()) {
        // let id = document.getElementById("emp-id-update").value;
        let id = document.getElementById("id").value;
        let name = document.getElementById("namee").value;
        let age = document.getElementById("agee").value;
        let gender = document.getElementById("gendere").value;
        let designation = document.getElementById("rolee").value;
        let photo = document.getElementById("imagee").value;
        // let tbl = document.getElementById("tbl-body");
        // let add = {};
        // console.log(id, name, age, gender, designation, photo);
        // arr[idx]['id'] = id;
        arr[idx]['name'] = name;
        arr[idx]['age'] = age;
        arr[idx]['gender'] = gender;
        arr[idx]['designation'] = designation;
        arr[idx]['photo'] = photo;
        // arr.push(add);

        addTable();

        let pop = document.getElementById("pop-up-update");
        pop.style.display = 'none';
    }
}
        
function deleteEmp(id) {
    console.log(id);
    let index = arr.findIndex((e)=>parseInt(id)===id);
    arr.splice(index, 1);
    
    let str = " ";
    for(let i = 0; i< arr.length; i++) {
    str += `<tr>
                <td>${arr[i].id}</td>
                <td>${arr[i].name}</td>
                <td>${arr[i].age}</td>
                <td>${arr[i].gender}</td>    
                <td>${arr[i].designation}</td>
                <td>
                <button onclick = "updateEmp(${arr[i].id})" class="btn btn-edit btn-success btn-sm">EDIT</button>
                <button onclick = "deleteEmp(${arr[i].id})" class = "btn btn-delete btn-danger btn-sm">Delete</button>
                <button class = "btn btn-view btn-info btn-sm">View</button>
            </td>
            </tr>`;
}

document.getElementById("table-body").innerHTML=str;
}

function shut() {
    let pop_edit=document.getElementById("popup");
    let pop_view=document.getElementById("view-popup");
    pop_edit.style.display = 'none';
    pop_view.style.display = 'none';

}