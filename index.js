const max = 100;
const min = 16;

function changeView(){
   let size =  document.getElementById("input__size").value;
   if(size<16 || size>100){
    alert("nhập số lượng ô từ 16 - 100");
   } else{
    var elem = document.getElementsByClassName("row");
    var lenght = elem.length;
    var s = 100/size;
    s+="%";
    for( i=0; i<lenght; i++){
     elem[0].parentNode.removeChild(elem[0]);
    }
    for( i=0; i<size; i++){
         const div = document.createElement("div");
         div.setAttribute("class","row");
         const textnode = document.createTextNode(" ");
         div.appendChild(textnode);
         document.getElementById("screen__view").appendChild(div);
         document.getElementsByClassName("row")[i].style.height= s;
         for( j=0; j<size ;j++){
             const child = document.createElement("div");
             child.setAttribute("class","square");
             const textnode = document.createTextNode(" ");
             child.appendChild(textnode);
             document.getElementsByClassName("row")[i].appendChild(child);
             document.getElementsByClassName("square")[j + i*size].style.width= s;
             document.getElementsByClassName("square")[j + i*size].addEventListener("mouseover", (event) => {
                event.target.style.background = "black";},false);
         }
    }
   }
}