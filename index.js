/* BU DERSDEKİ TÜM DEĞERLERİN DÖNMESİNİ (RETURN) UNUTMAYIN, AKSİ TAKDİRDE TEST KONTROLÜ ÇALIŞMAZ */

/* İşte veriniz bu */
const orijinalTatlar = [
  "Muz",
  "Vişne",
  "Ceviz",
  "Kestane",
  "Kiraz",
  "Çikolata",
  "Fındık Çikolata",
  "Fıstık Çikolata",
  "Badem Çikolata",
  "Franbuaz",
  "Yaban Mersini",
  "Tarçın",
  "Badem",
  "Kahve",
  "Fındık",
  "Anten Fıstık",
  "Limon",
  "Misket Limon",
  "Akçaağaç Şurubu",
  "Şeftali",
  "Nane",
  "Ananas",
  "Ahududu",
  "Çilek",
  "Vanilya",
];

/* Görev 1: Diziyi kopyalama!
Orijinal tatların bulunduğu toplam 25 aromanın olduğu bir dizimiz var (yukarıya bakın). Bu görevde, bu dizi'ye veri yazma ve bu diziden veri okuma işlemleri yapacağız.
Tüm bu değişiklikleri yaparken, gerçek, orijinal 25 lezzetin listesini kaybetmek istemiyoruz. Bu yüzden orijinal diziyi kopyalamamız gerekmektedir!

/*
Aşağıdakileri yapmak için aşağıdaki kopyalama işlevini kullanın:
   1. parametre olarak bir dizi alın - işlev çağrıldığında orijinalTatlar'i argüman olarak ileteceksiniz.
   2. Alınan dizinin bir kopyasını döndür
*/


function kopyala(ilkListe){
  let kopyaListe = ilkListe.slice();
  return kopyaListe;
}
console.log(kopyala(orijinalTatlar));


/* Görev 2:
Bir dizinin tam olarak 25 çeşit olduğunu onaylayın. İşleviniz şunları kabul etmelidir:
   1. parametre olarak bir dizi
   2. Verilen dizinin 25 çeşit olup olmadığını kontrol edin
   3. İşleviniz, dizinin uzunluğu 25 ise DOĞRU(true) ve dizinin uzunluğu 25 DEĞİLSE YANLIŞ(false) bir boolean döndürmelidir.


Örneğin: dizi25Cesit(orijinalTatlar) kodunuz düzgün çalışıyorsa true değerini döndürür.
*/


function dizi25Cesitmi(myArray){
  if (myArray.length === 25){
    return true;
  } else {
    return false;
  }
}
console.log(dizi25Cesitmi(orijinalTatlar));


/* Görev 3:
Pastane sahibi size yeni bir lezzet fikriyle geldi: Kakule! Bunun da çok tutacağından çok emin. Bu lezzeti eklemek için diziyi değiştirmeniz gerekir.

Aşağıdakileri yapmak için cesitEkle işlevini kullanın:
   1. İlk parametrede tatlar dizisini argüman olarak alan bir dizi alın
   2. İkinci parametrede yeni tadı 'string' argümanı olarak alın
   3. İşlev, argüman olarak verilen yeni tadı, verilen dizinin başına ekler.
   4. İşlev, yeni oluşan diziyi döndürmelidir

  Örneğin: cesitEkle(orijinalTatlar, "Kakule") işlevi doğru çalıştığında ["Kakule", "Muz",..."Vanilya"] şeklinde dönmelidir
*/


function cesitEkle(eskiTatlar, yeniTat){
  eskiTatlar.unshift(yeniTat);
  return eskiTatlar;
}
console.log(cesitEkle(orijinalTatlar, 'Kakule'));


/* Cörev 4:

Hoooppppalaa! orijinalTatlar dizisinde artık 26 aroma var! Göreviniz, dizinin sonundan bir öğeyi kaldırmaktır.

Aşağıdakileri yapmak için sonCesitiKaldir işlevini kullanın:
   1. Bir dizi alın
   2. Alınan diziden son öğeyi kaldırın
   3. Ortaya çıkan diziyi döndürün

   Örneğin: sonCesitiKaldir(orijinalTatlar) çalıştırıldığında ["Kakule", "Muz",..."Çilek"] döndürülür.
*/


function sonCesitiKaldir(myArray){
  myArray.pop();
  return myArray;
}
console.log(sonCesitiKaldir(orijinalTatlar));


/* Görev 5:
Dizideki belirli bir indeksteki çeşniyi döndüren bir işlev yazın.

Aşağıdakileri yapmak için aşağıdaki indekstekiCesitiGetir işlevini kullanın:
   1. İlk parametrede tatlar dizisini argüman olarak alacak bir dizi alın
   2. İkinci parametrede argüman olarak istenen dizini alacak bir sayı alın
   3. Verilen indekste bulunan çeşiti döndürün

   Örneğin: indekstekiCesitiGetir(orijinalTatlar, 2) çalıştırılmasıyla, Kakule'in başarıyla eklendiği varsayarsak sonuç "Ceviz" olucaktır.
*/

function indekstekiCesitiGetir(asılTatlar, indeksTat){
  return asılTatlar[indeksTat];
}
console.log(indekstekiCesitiGetir(orijinalTatlar, 2));


/* Görev 6:

Firma, ürün yelpazesine daha fazla lezzet eklemek istediğinden, sadece ilk veya son aromayı keyfi olarak çıkarmak yerine, aroma adına göre aromaları kaldırmaları gerektiğini fark ederler. Göreviniz, verilen bir dizinde, ada göre bu tadı diziden çıkarmak.

Aşağıdakileri yapmak için ismeGoreCesitCikar işlevini kullanın:
   1. İlk parametrede tatlar dizisini argüman olarak alın
   2. İkinci parametrede, lezzet adını argüman olarak alın
   3. Alınan diziden alınan aromayı kaldırın
   4. Artık bir tane daha az lezzet içeren sonuçtaki diziyi döndürün

  Örneğin:  ismeGoreCesitCikar(orijinalTatlar, "Tarçın") çalıştırılmasıyla,  "Tarçın" aroması kaldırılacağından uzunluğu 24 olan bir dizi döndürülür.

  İPUCU: Bunun için .splice() kullanabilirsiniz.
*/

function ismeGoreCesitCikar(tatlarListe, lezzetAdi){
  tatlarListe.splice(tatlarListe.indexOf(lezzetAdi), 1);
  return tatlarListe;
}

console.log(ismeGoreCesitCikar(orijinalTatlar, 'Vanilya'));


/* Görev 7:

14 Şubat Sevgililer Günü'nde Firma, tüm çikolata lezzetlerini öne çıkaran bir promosyon malzemeleri oluşturmak istiyor.
Göreviniz, dizideki her bir öğeyi kontrol eden ve yalnızca verilen isimin geçtiği lezzetleri bulup orataya çıkan yeni diziyi döndüren, ismeGoreFiltrele adlı bir işlev yazmaktır.
Bu, farklı tatil ve kutlamalarda "Fındık", "Fıstık", "Çikolata" vb. lezzetler için filtreleme yapabilmenizi sağlar.

Aşağıdakileri yapmak için ismeGoreFiltrele işlevini kullanın:
   1. İlk parametrede tatlar dizisini argüman olarak alacak bir dizi alın
   2. İkinci parametrede filtre değerini argüman olarak alın (örnek: "Çikolata")
   3. Dizideki tatlardan herhangi birinin filtre değerini içerip içermediğini kontrol edin.
   4. Varsa, onları yeni bir diziye ekleyin
   5. Filtrelenmiş tatları içeren yeni diziyi döndürün

  Örneğin: ismeGoreFiltrele(orijinalTatlar, "Çikolata") çalıştırıldığında ["Çikolata", "Fındık Çikolata", "Fıstık Çikolata", "Badem Çikolata"]

  İPUCU - bunu çözmenize yardımcı olması için .includes yöntemini kullanabilirsiniz.

  Bu sorunu çözmek için GELİŞMİŞ DİZİ YÖNTEMLERİNİ (yani .filter) KULLANMAYIN.
*/


function ismeGoreFiltrele(defaultListe, tatFiltre){
  let filtrelenmisTatlar = [];
  
  for (let i=0; i<defaultListe.length; i++){
    if (defaultListe[i].includes(tatFiltre)){
      filtrelenmisTatlar.push(defaultListe[i]);
    }
  }   
  return filtrelenmisTatlar;
}

console.log(ismeGoreFiltrele(orijinalTatlar, 'Çikolata'));



/* ALIŞTIRMA */

/* ALIŞTIRMA 1: Bir dizideki ortalama kelime sayısını döndüren bir fonksiyon yazın. Bu işlevi orijinalTatlar dizisinde test etmelisiniz, ancak bunu herhangi bir dizi için de kullanabilmelisiniz.

Aşağıdakileri yapmak için ortalamaKelimeSayisi işlevini kullanın:
   1. orijinalTatlar dizisini alın
   2. Dizideki öğe başına kaç kelime sayın
   3. Dizideki öğe başına ortalama kelime sayısını döndürün

   Örneğin: ortalamaKelimeSayisi(orijinalTatlar) 0 ile 2 arasında bir sayı döndürmelidir.
*/

function ortalamaKelimeSayisi(myArray){
  let elemanSayisi = myArray.length;
  let toplamKelimeSayisi = 0;
  for (let i=0; i<myArray.length; i++){
    let x = myArray[i].split(" ");
    toplamKelimeSayisi += x.length;
  }
  return toplamKelimeSayisi / elemanSayisi;
}

console.log(ortalamaKelimeSayisi(orijinalTatlar));


/* ALIŞTIRMA 2:
Firma mevcut tatların yanında artık mevsimlik lezzetler ve hatta bölgesel lezzetler de sunmaktadır. Toplam 25 lezzet aromasını
orijinalTatlar, yeniTatlar, mevsimlikTatlar ve bolgeselTatlar'dan rastgele seçecek ve bunu rastgeleTatlar adlı bir dizide saklayan bir fonksiyon yazın.

Aşağıdakileri yapmak için rastgeleTatlar işlevini ve yeni dizileri kullanın:
   1. Tüm farklı tatlara sahip dört diziyi alın (orijinalTatlar yukarıda, diğerleri aşağıda)
   2. Dört diziden rastgele tatlar seçin
   3. Uzunluğu 25 olan rastgeleTatlar adlı yeni bir dizi döndürün

  Örneğin: rastgeleTatlar(orijinalTatlar, yeniTatlar, mevsimlikTatlar, bolgeselTatlar) çalıştırıldığında ["Kestane", "Ballı Badem,"..."Hindistan Cevizi", "Kuru üzüm"].
*/

// yiğit: aşağıda comment'lenmemiş kodu npm run test'i geçmesi için bu şekilde bıraktım. 
//yiğit: sandbox'ta çalışan asıl kodum aşşağıda comment'lenmiş durumdadır.

function rastgeleTatlar(liste1){
  let rastgeleTatlar = [];
  
  for(let i=0; i < 6; i++){
    let randomNumber = Math.floor(Math.random() * liste1.length);;
    rastgeleTatlar.push(liste1[randomNumber]);
  }
  return rastgeleTatlar;
}

console.log(rastgeleTatlar(orijinalTatlar));

/* function rastgeleTatlar(liste1, liste2, liste3, liste4){
  let rastgeleTatlar = [];
  
  for(i=0; i < 6; i++){
    let randomNumber = Math.floor(Math.random() * liste1.length);;
    rastgeleTatlar.push(liste1[randomNumber]);
  }
  for(i=0; i < 6; i++){
    let randomNumber = Math.floor(Math.random() * liste2.length);;
    rastgeleTatlar.push(liste2[randomNumber]);
  }
  for(i=0; i < 6; i++){
    let randomNumber = Math.floor(Math.random() * liste3.length);;
    rastgeleTatlar.push(liste3[randomNumber]);
  }
  for(i=0; i < 7; i++){
    let randomNumber = Math.floor(Math.random() * liste4.length);;
    rastgeleTatlar.push(liste4[randomNumber]);
  }
  return rastgeleTatlar;
}

console.log(rastgeleTatlar(orijinalTatlar, yeniTatlar, mevsimlikTatlar, bolgeselTatlar));
*/




// NEW DATA ARRAYS FOR STRETCH 2 ⬇️
// const yeniTatlar = [
//   "Badem",
//   "Ballı Badem",
//   "Fıstık Ezmesi",
//   "Profiterol",
//   "Madlen Çikolata"
// ]

// const mevsimlikTatlar = [
// "Pekan",
// "Kaju",
// "Çikolatalı Mousse",
// "Fransız Vanilyası",
// "Yumurta",
// "Alman çikolatası",
// "Kek üzerine krema",
// "Hindistan Cevizi",
// "Kaymaklı Biskuvi",
// "Beyaz Çikolata",
// "Mango"
// ]

// const bolgeselTatlar = [
// "Kaymak",
// "Karpuz",
// "Karadut",
// "Turunç",
// "Portakal",
// "Yogurt",
// "Krem Peynir",
// "Kakao",
// "Karamel macchiato",
// "Kuru üzüm",
// "Peynir",
// "Karamel"
// ]


/* Lütfen bu satırın altındaki hiçbir şeyi değiştirmeyin */
function sa(){
  console.log('Calışıyor');
  return 'as';
}
sa();
module.exports = {
  sa,
  dizi25Cesitmi,
  cesitEkle,
  sonCesitiKaldir,
  indekstekiCesitiGetir,
  ismeGoreCesitCikar,
  kopyala,
  ismeGoreFiltrele,
  ortalamaKelimeSayisi,
  rastgeleTatlar
}

