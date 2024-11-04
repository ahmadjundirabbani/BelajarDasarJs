// Tutorial: Tipe Data dalam JavaScript

// String: Sekumpulan karakter yang diapit oleh tanda kutip
let dataString = "Ucup";
console.log(dataString); // Output: Ucup
console.log(typeof dataString); // Output: string

// Number: Angka, baik integer maupun desimal
let dataNumber = 16.324;
console.log(dataNumber); // Output: 16.324
console.log(typeof dataNumber); // Output: number

// Boolean: Nilai benar atau salah
let dataBoolean = true;
console.log(dataBoolean); // Output: true
console.log(typeof dataBoolean); // Output: boolean

// JavaScript bersifat dynamically typed, artinya tipe data variabel dapat berubah
dataString = 2; // Sekarang dataString menjadi tipe number
console.log(dataString); // Output: 2
console.log(typeof dataString); // Output: number

// Undefined: Variabel yang belum diinisialisasi
let dataKosong;
console.log(dataKosong); // Output: undefined
console.log(typeof dataKosong); // Output: undefined

// Mengisi nilai ke variabel yang sebelumnya undefined
dataKosong = "Otong";
console.log(dataKosong); // Output: Otong
console.log(typeof dataKosong); // Output: string

/* Penjelasan:
String:
Sekumpulan karakter yang diapit oleh tanda kutip tunggal (') atau ganda (").
Digunakan untuk merepresentasikan teks, seperti nama, alamat, atau pesan.

Number:
Angka, baik integer (bilangan bulat) maupun desimal (bilangan pecahan).
Digunakan untuk melakukan operasi matematika.

Boolean:
Hanya memiliki dua nilai: true atau false.
Digunakan untuk membuat keputusan logika.

Undefined:
Nilai yang diberikan kepada variabel yang belum diinisialisasi.
Biasanya digunakan untuk memeriksa apakah suatu variabel telah dideklarasikan tetapi belum diberikan nilai.

Dynamic Typing:
JavaScript bersifat dynamically typed, artinya tipe data suatu variabel dapat berubah selama eksekusi program.
Ini memberikan fleksibilitas, tetapi juga dapat menyebabkan kesalahan jika tidak digunakan dengan hati-hati.

Tips:
- Selalu inisialisasi variabel dengan nilai awal untuk menghindari nilai undefined.
- Gunakan tipe data yang sesuai untuk setiap variabel.
- Perhatikan konversi tipe data secara implisit atau eksplisit.
- Gunakan operator typeof untuk memeriksa tipe data suatu variabel.
Dengan memahami konsep tipe data ini, Anda dapat menulis kode JavaScript yang lebih efektif dan menghindari kesalahan umum. */
