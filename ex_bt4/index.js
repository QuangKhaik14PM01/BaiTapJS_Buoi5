function hienThiSoKetNoi() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var soKetNoiDiv = document.getElementById("soKetNoiDiv");

    if (loaiKhachHang === "doanhNghiep") {
        soKetNoiDiv.style.display = "block";
    } else {
        soKetNoiDiv.style.display = "none";
    }
}

function tinhHoaDon() {
    var maKhachHang = document.getElementById("maKhachHang").value;
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var soKetNoi = parseInt(document.getElementById("soKetNoi").value);
    var soKenhCaoCap = parseInt(document.getElementById("soKenhCaoCap").value);

    var phiXuLyHoaDon = 0;
    var phiDichVuCoBan = 0;
    var phiKenhCaoCap = 0;

    if (loaiKhachHang === "nhaDan") {
        phiXuLyHoaDon = 4.5;
        phiDichVuCoBan = 20.5;
        phiKenhCaoCap = 7.5 * soKenhCaoCap;
    } else {
        phiXuLyHoaDon = 15;
        phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
        phiKenhCaoCap = 50 * soKenhCaoCap;
    }

    var tongHoaDon = phiXuLyHoaDon + phiDichVuCoBan + phiKenhCaoCap;

    
    var ketQua = `Mã khách hàng: ${maKhachHang}<br>Loại khách hàng: ${loaiKhachHang}<br>Phí xử lý hóa đơn: $${phiXuLyHoaDon.toFixed(2)}<br>Phí dịch vụ cơ bản: $${phiDichVuCoBan.toFixed(2)}<br>Phí thuê kênh cao cấp: $${phiKenhCaoCap.toFixed(2)}<br>Tổng hóa đơn: $${tongHoaDon.toFixed(2)}`;
    document.getElementById("ketQua").innerHTML = ketQua;
}


hienThiSoKetNoi();