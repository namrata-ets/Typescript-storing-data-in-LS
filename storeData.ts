function storeData():void{

    var formdata=JSON.parse(localStorage.getItem('formdata'))||[];
  
    formdata.push({
  
      tid:(<HTMLInputElement>document.getElementById("taskid")).value,
      name:(<HTMLInputElement>document.getElementById("taskname")).value,
      status:(<HTMLInputElement>document.getElementById("status")).value,
      stime:(<HTMLInputElement>document.getElementById("starttime")).value,
      etime:(<HTMLInputElement>document.getElementById("endtime")).value,
  
    });
  
    localStorage.setItem('formdata',JSON.stringify(formdata));
   
    showData();
}
function showData(){
  
    console.log(localStorage.getItem('formdata'));
     
        if(localStorage.getItem('formdata')){
        var output=<HTMLTableSectionElement>document.querySelector('tbody');
        output.innerHTML="";
       
        JSON.parse(localStorage.getItem('formdata')).forEach((data:string,index:number)=>{
     
        output.innerHTML+=`<tr>
                               
                               <td><button type="button" onclick="edit(this,${index})"><i class="fa-solid fa-pen-to-square"></i></button>
                               <button type="button" onclick="remove(this,${index})"><i class="fa-solid fa-trash"></i></button></td>
                           </tr>
         `;
     
       })
      }
}
   