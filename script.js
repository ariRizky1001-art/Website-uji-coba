let namaTerakhir = "";

function cek() {
  let nama = document.getElementById("nama").value.trim();

  if (nama === "") {
    alert("Masukkan namamu dulu, dong!");
    return;
  }
  
  if (nama.toLowerCase() === namaTerakhir.toLowerCase()) {
    return;
  }
  
  namaTerakhir = nama;

  let skor = Math.floor(Math.random() * 101);
  let pesan = "";
  
  let gambarMeme = "";

  if (skor < 20) {
    pesan = "Kamu cowok sigma";
    gambarMeme = "image/Cowok_sigma.jpg"
  } else if (skor < 40) {
    pesan = "Sedikit feminim";
    gambarMeme = "image/Sedikit_feminim.jpg"
  } else if (skor < 60) {
    pesan = "Gaya feminim mulai kuat";
    gambarMeme = "image/Gaya_feminim_mulai_kuat.jpg"
  } else if (skor < 80) {
    pesan = "Sangat feminim";
    gambarMeme = "image/Sangat_feminim.jpg"
  } else {
    pesan = "Terdeteksi femboy";
    gambarMeme = "image/Terdeteksi_femboy.jpg"
  }
  
  let meme = document.getElementById("meme");
  meme.src = gambarMeme;
  meme.hidden = false;
  meme.alt = pesan;

  document.getElementById("persen").textContent =
    nama.toUpperCase() + ": " + skor + "%";

  document.getElementById("hasil").textContent = pesan;

  document.getElementById("progress").style.width =
    skor + "%";
}
