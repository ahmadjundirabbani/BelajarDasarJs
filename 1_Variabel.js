// Contoh penggunaan variabel dengan let, var, dan const

// Menggunakan let: Memiliki block scope
let nama = "Ucup Surucup"; // Deklarasi variabel nama dengan nilai awal "Ucup Surucup"

// Menampilkan nilai variabel nama
console.log(nama); // Output: Ucup Surucup

// Mengubah nilai variabel nama (diperbolehkan)
nama = "Otong Surotong";
console.log(nama); // Output: Otong Surotong

// Menggunakan var: Memiliki function scope (atau global scope jika di luar fungsi)
var namaDepan = "Ucup";

// Menampilkan nilai variabel namaDepan
console.log(namaDepan); // Output: Ucup

// Mengubah nilai variabel namaDepan (diperbolehkan)
namaDepan = "Otong";
console.log(namaDepan); // Output: Otong

// Melihat perbedaan scope antara let dan var dalam block
let namaBelakang = "Surucup";
{
  // Dalam block ini, kita mendeklarasikan variabel namaBelakang lagi dengan nilai yang berbeda
  let namaBelakang = "Surotong"; 
  console.log(namaBelakang); // Output: Surotong (hanya berlaku dalam block ini)
}
console.log(namaBelakang); // Output: Surucup (nilai di luar block tetap sama)

var namaTengah = "Keren";
{
  // Dalam block ini, kita mendeklarasikan variabel namaTengah lagi dengan nilai yang berbeda
  var namaTengah = "Ganteng"; 
  console.log(namaTengah); // Output: Ganteng
}
console.log(namaTengah); // Output: Ganteng (nilai di luar block juga berubah karena var memiliki function scope)

// Jika tidak menggunakan keyword let atau const, secara default akan dianggap sebagai var
gorengan = "Bala-bala";
{
  gorengan = "Combro";
}
console.log(gorengan); // Output: Combro

// Menggunakan const: Nilai tidak dapat diubah setelah dideklarasikan
const TTL = "10 Maret 2022";
console.log(TTL);
// TTL = "11 Maret 2054"; // Akan menghasilkan error karena nilai const tidak dapat diubah

// Contoh lain penggunaan const untuk objek
const person = {
  name: "John Doe",
  age: 30
};
console.log(person); // Output: { name: 'John Doe', age: 30 }

// Meskipun objek itu sendiri tidak dapat diubah, propertinya masih bisa diubah
person.age = 31;
console.log(person); // Output: { name: 'John Doe', age: 31 }

// Namun, kita tidak bisa menugaskan objek baru ke variabel const
// person = { name: 'Jane Doe', age: 25 }; // Akan menghasilkan error

/* Penjelasan Tambahan:

let: Memiliki block scope, artinya variabel yang dideklarasikan dengan let hanya berlaku dalam block tempat ia dideklarasikan.
var: Memiliki function scope atau global scope. Jika dideklarasikan di dalam fungsi, variabel hanya berlaku dalam fungsi tersebut. Jika dideklarasikan di luar fungsi, variabel akan menjadi global dan dapat diakses dari mana saja.
const: Nilai variabel yang dideklarasikan dengan const tidak dapat diubah setelah inisialisasi. Namun, untuk objek, propertinya masih bisa diubah.
Kapan Menggunakan Apa:

let: Gunakan untuk variabel yang nilainya mungkin berubah dalam waktu berjalan program dan Anda ingin membatasi scope-nya.
const: Gunakan untuk variabel yang nilainya tidak akan pernah berubah, seperti konstanta matematika atau nilai konfigurasi.
var: Sebaiknya hindari penggunaan var karena dapat menyebabkan masalah terkait scope yang sulit diprediksi.
Tips:

Selalu inisialisasi variabel dengan nilai awal saat dideklarasikan.
Gunakan const sebisa mungkin untuk membuat kode lebih stabil dan menghindari kesalahan yang tidak disengaja.
Hindari penggunaan variabel global sebanyak mungkin.
Dengan pemahaman yang lebih baik tentang let, var, dan const, Anda dapat menulis kode JavaScript yang lebih bersih, efisien, dan mudah dipelihara. */
