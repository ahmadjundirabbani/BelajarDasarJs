// Contoh lengkap dengan penjelasan
let namaLengkap = "Ucup Surucup si keren";

/*
charAt()
Fungsi: Mengambil karakter pada indeks tertentu dalam sebuah string.
*/
// Mengambil huruf 'u' pertama
let hurufUPertama = namaLengkap.charAt(0);
console.log("Huruf pertama:", hurufUPertama);

/*
concat()
Fungsi: Menggabungkan dua atau lebih string menjadi satu string baru.
*/
// Menggabungkan dengan string lain
let kalimatBaru = "Halo, ".concat(namaLengkap, "!");
console.log(kalimatBaru);

/*
indexOf()
Fungsi: Mencari indeks kemunculan pertama suatu substring dalam sebuah string. Jika tidak ditemukan, akan mengembalikan -1.
*/
// Mencari indeks huruf 's' pertama
let indeksHurufS = namaLengkap.indexOf("s");
console.log("Indeks huruf 's' pertama:", indeksHurufS);

/*
substring()
Fungsi: Mengekstrak bagian dari sebuah string, mulai dari indeks awal hingga sebelum indeks akhir.
*/
// Mengambil substring dari indeks 5 hingga sebelum indeks 12
let bagianNama = namaLengkap.substring(5, 12);
console.log("Bagian nama:", bagianNama);

/*
slice()
Fungsi: Mirip dengan substring(), tetapi indeks negatif dapat digunakan untuk menghitung dari akhir string.
*/
let str = "Apple, Banana, Kiwi";
let part = str.slice(-4); // Akan mengembalikan "Kiwi"

/*
replace()
Fungsi: Mengganti semua kemunculan substring pertama dengan substring kedua.
*/
// Mengganti "Ucup Surucup" dengan "Otong Surotong"
let namaBaru = namaLengkap.replace("Ucup Surucup", "Otong Surotong");
console.log("Nama baru:", namaBaru);

/*
toLowerCase()
Fungsi: Mengubah semua karakter dalam string menjadi huruf kecil.
*/
// Mengubah menjadi huruf kecil semua
let hurufKecil = namaBaru.toLowerCase();
console.log("Huruf kecil:", hurufKecil);

/*
toUpperCase()
Fungsi: Mengubah semua karakter dalam string menjadi huruf besar.
*/
// Mengubah menjadi huruf besar semua
let hurufBesar = namaBaru.toUpperCase();
console.log("Huruf besar:", hurufBesar);

/*
parseInt()
Fungsi: Mengubah string menjadi bilangan bulat.
*/
// Mengubah string angka menjadi bilangan bulat
let angkaString = "123";
let angkaInteger = parseInt(angkaString);
console.log("Bilangan bulat:", angkaInteger);

/*
parseFloat()
Fungsi: Mengubah string menjadi bilangan desimal.
*/
// Mengubah string angka desimal menjadi bilangan desimal
let angkaDesimalString = "3.14";
let angkaDesimal = parseFloat(angkaDesimalString);
console.log("Bilangan desimal:", angkaDesimal);

/* 
Penjelasan Lebih Lanjut:
Operasi string sangat penting dalam pemrograman JavaScript, terutama untuk memanipulasi data teks.
Setiap metode memiliki fungsi spesifik untuk melakukan tugas tertentu pada string.
Memahami konsep indeks sangat krusial dalam operasi string, karena indeks digunakan untuk menentukan posisi karakter dalam string.
*/
