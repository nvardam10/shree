let idin=document.getElementById("id");
let namein=document.getElementById("name");
let agein=document.getElementById("age");
let genderin=document.getElementById("gender");
let designationin=document.getElementById("role");
let photoin=document.getElementById("img");

// console.log()

let invalid_id=document.querySelector("#disp_id");
let invalid_name=document.querySelector("#disp_name");
let invalid_age=document.querySelector("#disp_age");
let invalid_gender=document.querySelector("#disp_gender");
let invalid_designtion=document.querySelector("#disp_role");
let invalid_photo=document.querySelector("#disp_img");


function validate() {
      let value_id = idin.value;
      let value_name = namein.value;
      let value_age = agein.value;
      let value_gender = genderin.value;
      let value_designation = designationin.value;
      let value_photo = photoin.value;



      // Validation
      let a=true;
      if(value_id == "") {
        invalid_id.innerHTML = "*Please enter valid id";
        a=false;
      }else{
        invalid_id.innerHTML = "";
        a=true;
      }


      if(value_name == "") {
        invalid_name.innerHTML = "*Please enter valid name";
        a=false;
      }else{
        invalid_name.innerHTML = "";
        a=true;
      }

      if((value_age == "" ) || (value_age<45 && value_age>35)) {
        invalid_age.innerHTML = "*Please enter valid age";
        a=false;
      }else{
        invalid_age.innerHTML = "";
        a=true;
      }

      if(value_gender == "--select--"){
        invalid_gender.innerHTML = "*Please select valid gender";
        a=false;
      }else{
        invalid_gender.innerHTML = "";
        a=true;
      }

      if(value_designation == "--select--"){
        invalid_designtion.innerHTML = "*Please select valid designation";
        a=false;
      }else{
        invalid_designtion.innerHTML = "";
        a=true;
      }

      if(value_photo == ""){
        invalid_photo.innerHTML = "*Please enter self-photo url";
        a=false;
      }else{
        invalid_photo.innerHTML = "";
        a=true;
      }
    //   var errors = [];

    //   if (!idRegex.test(id)) {
    //     errors.push("Invalid ID. Only alphanumeric characters are allowed.");
    //   }

    //   if (!nameRegex.test(name)) {
    //     errors.push("Invalid name. Only letters and spaces are allowed.");
    //   }

    //   if (!ageRegex.test(age)) {
    //     errors.push("Invalid age. Please enter a valid age.");
    //   }

    //   // Display error messages or submit form
    //   var errorContainer = document.getElementById("error-container");
    //   if (errors.length > 0) {
    //     var errorList = "";
    //     for (var i = 0; i < errors.length; i++) {
    //       errorList += "<li>" + errors[i] + "</li>";
    //     }
    //     errorContainer.innerHTML = "<ul>" + errorList + "</ul>";
    //     return false; // Prevent form submission
    //   } else {
    //     errorContainer.innerHTML = "";
    //     return true; // Proceed with form submission
    //   }
      return a; 
    }

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table-body");
  tr = table.getElementsByTagName("tr");


  for (i = 0; i < tr.length; i++) {
    for (j = 0; j < tr.length; j++) {
      td = tr[i].getElementsByTagName("td")[j];
      console.log(td);
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}

function validationEdit() {
    let t = true;
    let name = document.getElementById("namee").value;
    let age = document.getElementById("agee").value;
    let gender = document.getElementById("gendere").value;
    let designation = document.getElementById("rolee").value;
    let photo = document.getElementById("imagee").value;



    if (name == "" || name == null) {
        document.getElementsByClassName("form-text")[6].innerText = "Fill this field.";
        t = false;
    } else if (!(/^[a-zA-Z]+$/.test(name))) {
        document.getElementsByClassName("form-text")[6].innerText = "Only Alphabet is allowed.";
        t = false;
    } else {
        document.getElementsByClassName("form-text")[6].innerText = "";
    }



    if (age == "" || age == null) {
        document.getElementsByClassName("form-text")[7].innerText = "Fill this field.";
        t = false;
    } else if (Number(age) < 18 || Number(age) > 60) {
        document.getElementsByClassName("form-text")[7].innerText = "range between 18-60";
        t = false;
    } else {
        document.getElementsByClassName("form-text")[7].innerText = "";
    }


    if (gender == "" || gender == null) {
        document.getElementsByClassName("form-text")[8].innerText = "Select option.";
        t = false;
    } else {
        document.getElementsByClassName("form-text")[8].innerText = "";

    }


    if (designation == "" || designation == null) {
        document.getElementsByClassName("form-text")[9].innerText = "Select option.";
        t = false;
    } else {
        document.getElementsByClassName("form-text")[9].innerText = "";

    }


    if (photo == "" || photo == null) {
        document.getElementsByClassName("form-text")[10].innerText = "Fill this field.";
        t = false;
    } else {
        document.getElementsByClassName("form-text")[10].innerText = "";

    }

    return t;
}