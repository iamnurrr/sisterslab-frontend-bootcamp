import React, { useState } from 'react';

const RenkSecici = () => {
  // renk: şu anda seçili olan renk, setRenk: renk durumunu güncellemek için kullanılacak fonksiyon
  const [renk, setRenk] = useState("#FFFFFF");

  // renkSayisi: her renk için sayacın tutulduğu dizi, setRenkSayisi: renkSayisi durumunu güncellemek için kullanılacak fonksiyon
  const [renkSayisi, setRenkSayisi] = useState([]);

  // renkSec fonksiyonu: yeni bir rastgele renk seçer ve bu rengi ve sayısını günceller
  const renkSec = () => {
    // Rastgele bir renk oluştur
    const rastgeleRenk = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    // Renkleri güncelle ve ardından sayıyı güncelle
    setRenk(rastgeleRenk);

    // renkSayisi durumunu güncelle
    setRenkSayisi(prevRenkler => {
      // Seçilen renk önceki renkler dizisinde var mı kontrol et
      const index = prevRenkler.findIndex(item => item.renk === rastgeleRenk);

      if (index !== -1) {
        // Eğer varsa, sayıyı bir artır
        const newRenkler = [...prevRenkler];
        newRenkler[index] = { ...newRenkler[index], sayi: newRenkler[index].sayi + 1 };
        return newRenkler;
      } else {
        // Yoksa, yeni bir renk nesnesi oluştur ve diziyi güncelle
        return [...prevRenkler, { renk: rastgeleRenk, sayi: 1 }];
      }
    });
  };

  // JSX içinde görünen bileşen
  return (
    <div>
      {/* Seçilen rengin arka plan rengini ayarla */}
      <div style={{ backgroundColor: renk, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Renk seçme butonu */}
        <button onClick={renkSec}>Bir Renk Dene !</button>
      </div>
      
      {/* Toplam renk sayısını göster */}
      <p>Toplam Renk Sayısı: {renkSayisi.reduce((total, item) => total + item.sayi, 0)}</p>
      
      {/* Renklerin sayısını liste olarak göster */}
      <p>Renklerin Sayısı:</p>
      <ul>
        {renkSayisi.map(({ renk, sayi }) => (
          <li key={renk}>{sayi} adet {renk}</li>
        ))}
      </ul>
    </div>
  );
}

export default RenkSecici;
