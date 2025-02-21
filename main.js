// "Mesajı Gönder" butonuna tıklanınca formu kontrol etme
document.getElementById("sendBtn").addEventListener("click", function() {
    // Form alanlarını alıyoruz
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Boş alanlar var mı kontrol ediyoruz
    if (!name || !email || !subject || !message) {
      // Boş alan varsa uyarı veriyoruz
      alert("Lütfen tüm alanları doldurunuz.");
    } else {
      // Eğer tüm alanlar dolmuşsa, başarı mesajı gösteriyoruz
      alert("Mesajınız gönderildi.");
      
      // Formu temizleme işlemi
      document.getElementById("contactForm").reset();
    }
  });

  // E-posta alanındaki @ işareti kontrolü
  document.getElementById("email").addEventListener("input", function() {
    const emailInput = document.getElementById("email");
    const emailHelp = document.getElementById("emailHelp");
    
    if (!emailInput.value.includes("@")) {
      emailHelp.style.display = "block"; // @ işareti yoksa uyarıyı göster
    } else {
      emailHelp.style.display = "none"; // @ işareti varsa uyarıyı gizle
    }
  });