const judul = document.getElementById("judul")
const myproject = document.getElementById("myproject")
const myskill = document.getElementById("myskill")
const mysertifikat = document.getElementById("mysertifikat")
const sec = document.querySelectorAll("section")

function animate (animasiin , animasiout ,pilJudul , tinggi1 ,tinggi2 ,param1 , param2) {
    window.addEventListener("scroll",() => {
        sec.forEach(() => {
            let scroll = window.scrollY;
            console.log(scroll)
                if(scroll >= tinggi1 || scroll < tinggi2){
                pilJudul.classList.add(animasiout);
                pilJudul.classList.remove(animasiin);
                }else if (scroll > param1 || scroll < param2){
                pilJudul.classList.remove(animasiout);
                pilJudul.classList.add(animasiin);
            }
        })
    })
}   
    
let x = window.innerWidth; 
// layar hp
if(x <= 450 ){
    animate("animate__fadeInDown","animate__fadeOutUp", judul ,253 , 0 , 0 , 196)
    animate("animate__fadeInDown","animate__fadeOutUp", myproject , 660 ,218 , 168 , 668)
    animate("animate__fadeInDown","animate__fadeOutUp", myskill , 2700 ,2100 , 1980 , 2497)
    animate("animate__fadeInDown","animate__fadeOutUp", mysertifikat , 2908 ,2379 , 2508 , 2902)
}
// layar laptop
if(x >= 1000){
    animate("animate__fadeInDown","animate__fadeOutUp", judul ,165 , 0 , 0 , 165)
    animate("animate__fadeInDown","animate__fadeOutUp", myproject , 660 ,218 , 168 , 668)
    animate("animate__fadeInDown","animate__fadeOutUp", myskill , 1287 ,690 , 1166 , 709)
    animate("animate__fadeInDown","animate__fadeOutUp", mysertifikat , 1673 ,1141 , 1324 , 1606)
}
