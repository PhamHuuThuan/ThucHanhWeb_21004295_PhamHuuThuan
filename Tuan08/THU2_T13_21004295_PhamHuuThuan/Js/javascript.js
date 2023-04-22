var $ = document;
var stt = 1;
function checkMaBN(){
    var maBN = $.getElementById('mabn').value;
    const regexMaBN = /^BN-[0-9]{6}$/;
    if(maBN === ""){
        $.getElementById("mess-mabn").innerText = "(*)";
        return false;
    }else if(!regexMaBN.test(maBN)){
        $.getElementById("mess-mabn").innerText = "BN-YYYYYY";
        return false;
    }
    else{
        $.getElementById("mess-mabn").innerText = " ";
        return true;
    }
}
function checkPass(){
    var pass = $.getElementById("pass").value;
    if(pass===""){
        $.getElementById("mess-pwd").innerText = "(*)";
        return false;
    }else if(pass.length>=6){
        $.getElementById("mess-pwd").innerText = " ";
        return true;
    }else{
        $.getElementById("mess-pwd").innerText = "Mật khẩu phải từ 6 kí tự bất kì trở lên";
        return false;
    }
}
function checkDate(){
    var ngayKham = new Date($.getElementById("ngaykham").value);
    var currentDate = new Date();
    if($.getElementById("ngaykham").value===""){
        $.getElementById("mess-ngaykham").innerText = "(*)";
        return false;
    }
    else if(ngayKham.getTime()>currentDate.getTime()){
        $.getElementById("mess-ngaykham").innerText = " ";
        return true;
    }else{
        $.getElementById("mess-ngaykham").innerText = "Ngày khám phải lớn hơn ngày hiện tại";
        return false;
    }
}
function datLich(){
    var maBN = $.getElementById('mabn').value;
    var pass = $.getElementById("pass").value;
    var ngayKham = new Date($.getElementById("ngaykham").value);
    var soDV = $.getElementsByClassName("form-check")[0].querySelectorAll('input[type="checkbox"]:checked').length;
    var chuyenkhoa = $.getElementById("chuyenkhoa").value;
    if(checkMaBN()==false||checkPass()==false||checkDate()==false){
        return;
    }else{
        var table = $.getElementsByClassName("table")[0];
        var newRow = table.insertRow();
        var col1 = newRow.insertCell();

        col1.textContent = stt;
        stt++;

        var col2 = newRow.insertCell();
        col2.textContent = maBN;

        var col3 = newRow.insertCell();
        col3.textContent = pass;

        var col4 = newRow.insertCell();
        var ngay = ngayKham.getDate();
        var thang = ngayKham.getMonth();
        var nam = ngayKham.getFullYear();
        var formatDate = ngay + "/" + thang + "/" + nam;
        col4.textContent = formatDate;

        var col5 = newRow.insertCell();
        var phiDV = soDV*500000;  
        col5.textContent = phiDV;

        var col5 = newRow.insertCell();
        var phiDV = soDV*500000;  
        col5.textContent = phiDV;

        var col6 = newRow.insertCell();
        col5.textContent = chuyenkhoa;

        $.getElementById("btndat").setAttribute("data-dismiss","modal");
    }
}