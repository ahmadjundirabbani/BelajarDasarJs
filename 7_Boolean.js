// Tipe data boolean di JavaScript

// Mendefinisikan variabel boolean dengan nilai false
let data_bool_1 = false; // false = 0 dalam konteks biner
console.log("Data Boolean 1:", data_bool_1); // Output: false

// Menggunakan operator perbandingan untuk menghasilkan nilai boolean
let data_bool_2 = (3 < 10); // Memeriksa apakah 3 kurang dari 10
console.log("Data Boolean 2 (3 < 10):", data_bool_2); // Output: true

// Membandingkan dua string untuk kesetaraan
let data_bool_3 = ("ucup" == "otong"); // Memeriksa apakah "ucup" sama dengan "otong"
console.log("Data Boolean 3 ('ucup' == 'otong'):", data_bool_3); // Output: false

// Membandingkan boolean dengan angka
let data_bool_4 = (false == 0); // false dianggap sama dengan 0
console.log("Data Boolean 4 (false == 0):", data_bool_4); // Output: true

// Membandingkan boolean dengan BigInt
data_bool_4 = (false == 0n); // false dianggap sama dengan 0n (BigInt)
console.log("Data Boolean 4 (false == 0n):", data_bool_4); // Output: true

// Membandingkan boolean dengan string yang berisi spasi
data_bool_4 = (false == " "); // false tidak sama dengan string yang berisi spasi
console.log("Data Boolean 4 (false == ' '):", data_bool_4); // Output: false

/*
Penjelasan Kode:

Tipe Data Boolean:
Tipe data boolean hanya memiliki dua nilai: true dan false. Dalam konteks biner, false dapat dianggap sebagai 0 dan true sebagai 1.

Contoh Penggunaan:
  data_bool_1: Didefinisikan dengan nilai false.
  data_bool_2: Menggunakan operator perbandingan (<) untuk memeriksa apakah 3 kurang dari 10, yang menghasilkan true.
  data_bool_3: Membandingkan dua string menggunakan operator kesetaraan (==). Hasilnya adalah false karena "ucup" tidak sama dengan "otong".

Perbandingan Boolean dengan Tipe Lain:
  data_bool_4: Membandingkan false dengan angka 0. Dalam JavaScript, false dianggap sama dengan 0, sehingga hasilnya true.
  Membandingkan false dengan 0n (BigInt). Hasilnya juga true karena false dianggap sama dengan 0 dalam konteks BigInt.
  Membandingkan false dengan string yang berisi spasi (" "). Hasilnya adalah false karena false tidak sama dengan string yang berisi karakter.
*/
