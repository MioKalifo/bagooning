function getRandomInt() {
    x = Math.floor(Math.random() * 1001);
    if (x<=600) {
        var img = document.createElement("img");
        img.src = "./commun/Luxe_Vandal.webp";
        var src = document.getElementById("img");
        src.appendChild(img);
    } else if (x >= 601 && x <= 800) {
        var img = document.createElement("img");
        img.src = "./rare/Aristocrat_Vandal.webp";
        var src = document.getElementById("img");
        src.appendChild(img);
    } else if (x >= 801 && x <= 920) {
        var img = document.createElement("img");
        img.src = "./épique/Ion_Vandal.webp";
        var src = document.getElementById("img");
        src.appendChild(img);
    } else if (x >= 921 && x <= 980) {
        var img = document.createElement("img");
        img.src = "./légendaire/RGX_11z_Pro_Vandal.webp";
        var src = document.getElementById("img");
        src.appendChild(img);
    } else if (x >= 981 && x <= 998) {
        var img = document.createElement("img");
        img.src = "./mythique/Champions_2021_Karambit.webp";
        var src = document.getElementById("img");
        src.appendChild(img);
    } else if (x >= 999 && x <= 1000) {
        var img = document.createElement("img");
        img.src = "./dossier eastereg/dg.png";
        var src = document.getElementById("img");
        src.appendChild(img);
    }
}