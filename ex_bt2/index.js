function tinhTienDien() {
    var ten = document.getElementById("ten").value;
    var soKw = parseFloat(document.getElementById("soKw").value);
    var tienDien = 0;

    if (soKw <= 50) {
        tienDien = soKw * 500;
    } else if (soKw <= 100) {
        tienDien = 50 * 500 + (soKw - 50) * 650;
    } else if (soKw <= 150) {
        tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else {
        tienDien = 50 * 500 + 50 * 650 + 50 * 850 + (soKw - 150) * 1100;
    }

   
    var ketQua = `Tên khách hàng: ${ten}<br>Số Kw tiêu thụ: ${soKw}<br>Tiền điện: ${tienDien} VNĐ`;
    document.getElementById("ketQua").innerHTML = ketQua;
}