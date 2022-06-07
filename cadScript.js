//CAD Radio Button Cycling

//Getting the Radio Button elements
skystoneRadio=document.getElementById("skystone");
bme298Radio=document.getElementById("bme298");
ftccadRadio=document.getElementById("ftccad");
frccadRadio=document.getElementById("frccad");
//Getting what I want displayed by these elements
skystoneWords=document.getElementById("skystonewords");
bme298Words=document.getElementById("bme298words");
ftccadWords=document.getElementById("ftccadwords");
frccadWords=document.getElementById("frccadwords");

function showtext(x) {
    if (x==0) {
        skystoneWords.style.display="block";
        bme298Words.style.display="none";
        ftccadWords.style.display="none";
        frccadWords.style.display="none";
        }
    else if (x==1) {
        skystoneWords.style.display="none";
        bme298Words.style.display="block";
        ftccadWords.style.display="none";
        frccadWords.style.display="none";
    }
    else if (x==2) {
        skystoneWords.style.display="none";
        bme298Words.style.display="none";
        ftccadWords.style.display="block";
        frccadWords.style.display="none";
    }
    else if (x==3) {
        skystoneWords.style.display="none";
        bme298Words.style.display="none";
        ftccadWords.style.display="none";
        frccadWords.style.display="block";
    }
}
skystoneRadio.click();

