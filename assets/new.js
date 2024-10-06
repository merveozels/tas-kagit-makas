let bilgisayarHamlesi = ["taş", "kağıt","makas"].at(Math.floor(Math.random() * 3));
console.log(bilgisayarHamlesi);

let userChoice = prompt( 'Taş mı Makas mı Kağıt mı?');


if (userChoice=='taş' && bilgisayarHamlesi== 'makas'){
  alert('Tebrikler Biilgisayar Makası Seçmişti Kazandınız');
  console.log('Tebrikler Bilgisayar Makası Seçmişti Kazandınız');
} else if (userChoice=='taş' && bilgisayarHamlesi=='taş'){
  alert('Berabere Kaldınız Bilgisayarda Taşı Seçmişti Tekrar Deneyin');
  console.log('Berabere Kaldınız Bilgisayarda Taşı Seçmişti Tekrar Deneyin');
} else if (userChoice == 'taş' && bilgisayarHamlesi =='kağıt'){
  alert('Üzgünüm Bilgisayar Kağıt Seçmişti Kaybettiniz');
  console.log( 'Üzgünüm  Bilgisayar Kağıt Seçmişti Kaybettiniz');
} else if (userChoice=='kağıt' && bilgisayarHamlesi == 'makas' ){
  alert('Üzgünüm Bilgisayar Makası Seçmişti Kaybettiniz');
  console.log( 'Üzgünüm Bilgisayar Makası Seçmişti Kaybettiniz');
} else if (userChoice=='kağıt' && bilgisayarHamlesi == 'kağıt'){
  alert('Berabere Kaldınız Bilgisayarda Kağıdı Seçmişti Tekrar Deneyin');
  console.log( 'Berabere Kaldınız Bilgisayarda Kağıdı Seçmişti Tekrar Deneyin');
} else if (userChoice=='kağıt' && bilgisayarHamlesi=='taş'){
  alert('Tebrikler Bilgisayar Taşı Seçmişti Kazandınız');
  console.log( 'Tebrikler Bilgisayar Taşı Seçmişti Kazandınız');
} else if (userChoice=='makas' && bilgisayarHamlesi=='taş'){
  alert('Üzgünüm bilgisayar taşı seçmişti Kaybettiniz');
  console.log( 'Üzgünüm  bilgisayar taşı seçmişti Kaybettiniz');
} else if (userChoice=='makas' && bilgisayarHamlesi=='makas'){
  alert('Berabere Kaldınız bilgisayarda makası seçmişti Tekrar Deneyin');
  console.log( 'Berabere Kaldınız bilgisayarda makası seçmişti Tekrar Deneyin');
} else if ( userChoice=='makas' && bilgisayarHamlesi=='kağıt' ){
  alert('Tebrikler Bilgisayar Kağıdı Seçmişti Kazandınız');
  console.log( 'Tebrikler  Bilgisayar Kağıdı Seçmişti Kazandınız');
} else {
  alert('Yanlış Değer Girdiniz');
}; 