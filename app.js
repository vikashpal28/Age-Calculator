let inputDate = document.getElementById("date");
inputDate.max = new Date().toISOString().split("T")[0];
let old = document.getElementById("old");

function getdate(){
        if(inputDate.value === ""){
            alert("please entered some input");
        }
        let birthdate = new Date(inputDate.value);
        let d1 = birthdate.getDate();
        let m1 = birthdate.getMonth()+1;
        let y1 = birthdate.getFullYear();
        let todayData = new Date();
        let d2 = todayData.getDate();
        let m2 = todayData.getMonth()+1;
        let y2 = todayData.getFullYear();
        let d3, m3, y3;
        y3 = y2-y1;
        if(m2>=m1){
            m3 = m2-m1;
        }
        else{
            y3--;
            m3 = 12 + m2-m1;
        }
        if(d2>=d1){
            d3 = d2-d1;
        }
        else{
            m3--;
            d3 = getDaysInMonth(y1,m1)+ d2-d1;
        }
        if(m2<0){
            m3 = 11;
            y3--;
        }

        old.innerHTML = `you are <span>${y3}</span>  years ,<span>${m3}</span> months 
        and <span>${d3}</span> days old`;
        inputDate.value = "";
       
    }


function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}

