function storeData() {
    var formdata = JSON.parse(localStorage.getItem('formdata')) || [];
    formdata.push({
        tid: document.getElementById("taskid").value,
        name: document.getElementById("taskname").value,
        status: document.getElementById("status").value,
        stime: document.getElementById("starttime").value,
        etime: document.getElementById("endtime").value
    });
    localStorage.setItem('formdata', JSON.stringify(formdata));
    showData();
}
function showData() {
    console.log(localStorage.getItem('formdata'));
    if (localStorage.getItem('formdata')) {
        var output = document.querySelector('tbody');
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('formdata')).forEach(function (data, index) {
            output.innerHTML += "<tr>\n                               \n                               <td><button type=\"button\" onclick=\"edit(this,".concat(index, ")\"><i class=\"fa-solid fa-pen-to-square\"></i></button>\n                               <button type=\"button\" onclick=\"remove(this,").concat(index, ")\"><i class=\"fa-solid fa-trash\"></i></button></td>\n                           </tr>\n         ");
        });
    }
}
