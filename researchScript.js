immunoengineeringRadio =document.getElementById("immunoengineering");
icn2Radio =document.getElementById("icn2");

immunoengineeringWords=document.getElementById("immunoengineeringwords");
icn2Words=document.getElementById("icn2words");

function showtext(x) {
    if (x==0) {
        immunoengineeringWords.style.display="block";
        icn2Words.style.display="none";
        }
    else if (x==1) {
        immunoengineeringWords.style.display="none";
        icn2Words.style.display="block";
    }
}
immunoengineeringRadio.click();
