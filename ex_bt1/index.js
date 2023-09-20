 function tinhKetQua() {
            var diemChuan = parseFloat(document.getElementById("diemChuan").value);
            var diemMon1 = parseFloat(document.getElementById("diemMon1").value);
            var diemMon2 = parseFloat(document.getElementById("diemMon2").value);
            var diemMon3 = parseFloat(document.getElementById("diemMon3").value);
            var khuVuc = document.getElementById("khuVuc").value;
            var doiTuong = document.getElementById("doiTuong").value;

          
            if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
                document.getElementById("ketQua").textContent = "Rớt (Có môn điểm 0)";
                document.getElementById("tongDiem").textContent = "";
            } else {
                let diemUuTienKhuVuc = 0;
                let diemUuTienDoiTuong = 0;

              
                switch (khuVuc) {
                    case "A":
                        diemUuTienKhuVuc = 2;
                        break;
                    case "B":
                        diemUuTienKhuVuc = 1;
                        break;
                    case "C":
                        diemUuTienKhuVuc = 0.5;
                        break;
                    default:
                        diemUuTienKhuVuc = 0;
                }

               
                switch (doiTuong) {
                    case "1":
                        diemUuTienDoiTuong = 2.5;
                        break;
                    case "2":
                        diemUuTienDoiTuong = 1.5;
                        break;
                    case "3":
                        diemUuTienDoiTuong = 1;
                        break;
                    default:
                        diemUuTienDoiTuong = 0;
                }

           
                var tongDiem = diemMon1 + diemMon2 + diemMon3 + diemUuTienKhuVuc + diemUuTienDoiTuong;
                

                if (tongDiem >= diemChuan && diemChuan<=30 &&tongDiem<=30) {
                    document.getElementById("ketQua").textContent = "Đậu";
                    document.getElementById("tongDiem").textContent = "Tổng điểm: " + tongDiem.toFixed(2);
                } else if(tongDiem < diemChuan && diemChuan<=30 &&tongDiem<=30) {
                    document.getElementById("ketQua").textContent = "Rớt";
                    document.getElementById("tongDiem").textContent = "Tổng điểm: " + tongDiem.toFixed(2);
                }else
                document.getElementById("ketQua").textContent="Sai chương trình lỗi";
            

                
            }
        }