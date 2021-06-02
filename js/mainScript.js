/* ===== DOC PERSONAL =====
    CHRISTOPHER VEGA MENDEZ 🐊 
            4AVPR
          SUB. DAEC
        PROYECTO FINAL   
          31/05/2021
     ===== END DOC ===== */

// ===== MOUSE UP/DOWN FUNCTIONS ===== //
function mouseDown(item_id){
    document.getElementById(item_id).classList.add('zoom');
};

function mouseUp(item_id){
    document.getElementById(item_id).classList.remove('zoom'); 
};
// ===== END MOUSE FUNCTIONS ===== //

// ===== MOUSE HOVER FUNCTIONS ===== //
function mouseOver(item_id){
    document.getElementById(item_id).classList.add('borderColor0');
    document.getElementById(item_id).classList.remove('borderColor1'); 
};

function mouseOff(item_id){
    document.getElementById(item_id).classList.remove('borderColor0');
    document.getElementById(item_id).classList.add('borderColor1'); 
};
// ===== END MOUSE HOVER ===== //

// ===== POP UP APPEARANCE ===== //
function imgDblClick(item_id){
    var imageID = document.getElementById(item_id);
    document.getElementById("img_popUp").style.display = "block";

    popUpContentLoad(item_id);
}

function popUpContentLoad(item_id){
    if (item_id == "img1"){
        var img_info = "info for image 1";
    }else if(item_id == "img2"){
        var img_info = "info for image 2";
    }

    document.getElementById("img_info").innerHTML = img_info;

}

function btnClickClose(item_id){
    var parentID = document.getElementById(item_id).parentNode.id;
    var grandpaID = document.getElementById(parentID).parentNode.id;
    document.getElementById(grandpaID).style.display = "none";
}
// ===== END POP UP ===== //