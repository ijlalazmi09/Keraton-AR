const teks1 = `Tim ini terdiri atas tiga anggota utama yang berperan aktif dalam pengembangan dan penyusunan proyek: 
Muh. Nur Akram - yang bertanggung jawab atas pembuatan website, perencanaan, serta memastikan seluruh fitur berjalan sesuai target.
Muh. Fauzan Dinar - yang berfokus pada riset, pengolahan data, dan mendukung implementasi teknis.
Ijlal Azmi Sahar - yang berperan dalam riset, penyusunan materi, serta memastikan kualitas hasil akhir proyek.`;
const teks2 = `Riset dalam pengembangan proyek ini dilakukan di Keraton Buton, yang terletak di Kota Baubau, Sulawesi Tenggara. Keraton Buton tidak hanya saksi sejarah bagi Kesultanan Buton sejak abad ke-14–16, tetapi juga bangunan heritage dengan arsitektur batu kapur megah.
Karena itu, riset lapangan melibatkan observasi langsung terhadap struktur benteng, pintu gerbang (lawa), hingga bastion (baluara), sekaligus pengambilan foto dan dokumentasi visual guna mendukung akurasi rekonstruksi digital dalam website. Lokasi ini dipilih untuk memastikan bahwa representasi AR maupun konten edukatif situs tetap otentik dan menggugah rasa kebanggaan lokal.`;
const saveData = [];
const li = document.querySelectorAll("#about > aside > nav > ul > li");
const p = document.querySelector("#about > p");
saveData.push(p.textContent);
console.log({ saveData });

const mainContent = document.querySelector(".main-content");
const img = document.querySelector(".float");
const pBaru = document.querySelector("#yap");
if (window.matchMedia("(max-width: 768px)").matches) {
  mainContent.insertBefore(img, pBaru);
  img.style.width = "65%";
}else{
  img.style.width = "35%";
}

for (let i = 0; i < 3; i++) {
  if (
    li[1].addEventListener("click", () => {
      p.textContent = teks1;
    })
  ) {
  } else if (
    li[0].addEventListener("click", () => {
      p.textContent = saveData[0];
    })
  ) {
  } else {
    li[2].addEventListener("click", () => {
      p.textContent = teks2;
    });
  }
}
