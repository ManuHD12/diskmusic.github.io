const data = {
    "text": "Licencia Disk Music \n Copyright (c) 2021 Disk Music. \n Por la presente se otorga permiso, sin cargo, a cualquier persona que obtenga una copia \n de este software y los archivos de documentación asociados (el 'Software'), para operar \n con el Software sin restricciones, incluidos, entre otros, los derechos \n para usar, copiar, modificar, fusionar, publicar, distribuir, otorgar sublicencias y/o vender \n copias del Software, y para permitir a las personas a quienes el Software es \n ... RESPONSABILIDAD, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O DE OTRO MODO , DERIVADOS DE, \n FUERA DE O EN RELACIÓN CON EL SOFTWARE O EL USO U OTROS TRATOS EN EL SOFTWARE."
}

document.getElementById("text").innerText += data.text;

function back(){
    history.back();
}