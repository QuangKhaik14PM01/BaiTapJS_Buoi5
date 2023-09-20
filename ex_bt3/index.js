function tinhThueThuNhap() {
    var hoTen = document.getElementById("hoTen").value;
    var tongThuNhap = parseFloat(document.getElementById("tongThuNhap").value);
    var soNguoiPhuThuoc = parseFloat(document.getElementById("soNguoiPhuThuoc").value);
    
    var thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
    var thueThuNhap = 0;

    if (thuNhapChiuThue <= 0) {
        thueThuNhap = 0;
    } else if (thuNhapChiuThue <= 60000000) {
        thueThuNhap = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120000000) {
        thueThuNhap = 60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1;
    } else if (thuNhapChiuThue <= 210000000) {
        thueThuNhap = 60000000 * 0.05 + 60000000 * 0.1 + (thuNhapChiuThue - 120000000) * 0.15;
    } else if (thuNhapChiuThue <= 384000000) {
        thueThuNhap = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + (thuNhapChiuThue - 210000000) * 0.2;
    } else if (thuNhapChiuThue <= 624000000) {
        thueThuNhap = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + (thuNhapChiuThue - 384000000) * 0.25;
    } else if (thuNhapChiuThue <= 960000000) {
        thueThuNhap = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + (thuNhapChiuThue - 624000000) * 0.3;
    } else {
        thueThuNhap = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + 336000000 * 0.3 + (thuNhapChiuThue - 960000000) * 0.35;
    }

  
    var ketQua = `Họ và tên: ${hoTen}<br>Tổng thu nhập năm: ${tongThuNhap} VNĐ<br>Số người phụ thuộc: ${soNguoiPhuThuoc}<br>Thuế thu nhập cá nhân: ${thueThuNhap.toFixed(2)} VNĐ`;
    document.getElementById("ketQua").innerHTML = ketQua;
}