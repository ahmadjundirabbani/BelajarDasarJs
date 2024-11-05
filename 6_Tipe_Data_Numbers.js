// Mendefinisikan berbagai tipe data numerik

// Integer - nilai bilangan bulat
let nilai_int = 10; 
console.log("Nilai Integer:", nilai_int);

// Float - nilai bilangan desimal
let nilai_float = 10.123; 
console.log("Nilai Float:", nilai_float);

// BigInt - untuk bilangan bulat yang sangat besar
let nilai_big_int = 1234509817692786389175623123n; 
console.log("Nilai BigInt:", nilai_big_int);

// Contoh penggunaan angka desimal
let angka = 5.678;

// Mengonversi angka desimal ke integer menggunakan parseInt
let angka_int = parseInt(angka);
console.log("Angka setelah diubah menjadi Integer:", angka_int); // Output: 5

// Mengonversi integer ke float menggunakan parseFloat
let angka_2 = 10;
let angka_2_float = parseFloat(angka_2);
console.log("Angka setelah diubah menjadi Float:", angka_2_float); // Output: 10

// Mengonversi string ke angka menggunakan parseInt dan parseFloat
let data = "10.98";
console.log("Data String:", data);

// Mengonversi string ke integer
console.log("String diubah menjadi Integer:", parseInt(data)); // Output: 10

// Mengonversi string ke float
console.log("String diubah menjadi Float:", parseFloat(data)); // Output: 10.98

// Contoh penggunaan konversi dalam perhitungan
let pembelian = "10000"; // String yang merepresentasikan angka
let pajak = 1200; // Integer

// Mengonversi string pembelian ke integer dan menambahkan pajak
let total_bayar = parseInt(pembelian) + pajak;
console.log("Total Bayar (Pembelian + Pajak):", total_bayar); // Output: 11200

/*
Penjelasan Kode:
Tipe Data Numerik:
  nilai_int: Menyimpan nilai integer.
  nilai_float: Menyimpan nilai float (bilangan desimal).
  nilai_big_int: Menyimpan nilai BigInt, yang digunakan untuk bilangan bulat yang sangat besar.

Konversi Tipe Data:
  parseInt(): Mengonversi nilai menjadi integer. Jika nilai adalah float, bagian desimal akan diabaikan.
  parseFloat(): Mengonversi nilai menjadi float. Ini berguna untuk mendapatkan nilai desimal dari string atau integer.

Contoh Penggunaan:
  Mengonversi string yang merepresentasikan angka menjadi integer dan float.
  Menghitung total pembayaran dengan mengonversi string ke integer dan menambahkan pajak.

Dengan penjelasan ini, Anda dapat lebih memahami bagaimana cara kerja tipe data numerik dan konversi di JavaScript.
*/
