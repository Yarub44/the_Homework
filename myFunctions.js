fetch('my.JSON')
.then(res=>res.json())
.then(data=>{

 handeldata(data);
    
})


function handeldata(flat)
{

const flat=document.getElementById("flats")

flat.forEach(myflat => {
    let flat1=creatrow(myflat);
    let flatdetail=addDetail(myflat);
    flat.appendchild(flat1);
    flat.appendchild(flatdetail);
    
});


function creatrow(myflat){

const row = document.createElement("tr")

for (let a = 0; a < 5 ; a++) {
    const element = array[index];

    const cell = document.createElement("td")
    row.appendChild(cell)
    
}

children[0]
row.children[0].textContent=`${myflat.city}`;

children[1]
row.children[1].textContent=`${myflat.details}`;

children[2]
row.children[2].textContent=`${myflat.price}`;


const check=document.createElement("input");
check.setAttribute("type" , "checkbox");
row.children[3].appendChild(check);


const radio=document.createElement("input");
radio.setAttribute("type" , "radio");
check.onclick=function(){
   check.parentElement.parentElement.nextElementSibling.toggle("hid");
}
row.children[3].appendChild(check);


 
return row;
}}

function addDetail(myflat);{

    const row = document.createElement("tr");
    row.classList.add("hid");

    row.innerHTML=`
    <td colspan="5" ; >
    <div class="info">
        <ul class="text">

         <li> المنطقة : ${myflat.area} </li>
         <li> متوفر كراج :  ${myflat.gar} </li>
         <li> الطابق :  ${myflat.floor} </li>
         <li> الملكية :  ${myflat.Property} </li>
         <li> البلكونة : ${myflat.Space} </li>
         <li> مفروشة : ${myflat.furnished} </li>

        </ul>


        </div>

    </div>
</td>`

console.log(row);



}