// NaN dan Undefined di JavaScript

// NaN = Not a Number
console.log("Contoh NaN:");

// Menghitung akar kuadrat dari -1, yang tidak terdefinisi dalam bilangan riil
console.log(`Akar dari -1: ${Math.sqrt(-1)}`); // Output: NaN

// Menggunakan operator pembagian dengan string, yang tidak dapat dihitung
console.log(`"ucup" / "otong": ${"ucup" / "otong"}`); // Output: NaN

// Menggunakan operator perkalian dengan string, yang tidak dapat dihitung
console.log(`"ucup" * "otong": ${"ucup" * "otong"}`); // Output: NaN

// Menggunakan operator penjumlahan dengan string, yang dapat digabungkan
console.log(`"ucup" + "otong": ${"ucup" + "otong"}`); // Output: "ucupotong"

// Menggunakan operator pengurangan dengan string, yang tidak dapat dihitung
console.log(`"ucup" - "otong": ${"ucup" - "otong"}`); // Output: NaN

// Mengonversi string yang tidak dapat diubah menjadi angka
let data = parseInt("test123"); // Hasilnya NaN karena "test123" tidak dapat diubah menjadi angka
console.log(`Hasil parseInt("test123") + 5: ${data + 5}`); // Output: NaN (NaN tidak bisa dioperasikan)


// Undefined - Variabel yang belum diinisialisasi
console.log("\nContoh Undefined:");

// Mendeklarasikan variabel tanpa memberikan nilai
let a; // 'a' dideklarasikan tetapi belum diinisialisasi
console.log(`a = ${a}`); // Output: a = undefined

// Menghitung akar kuadrat dari 4, yang terdefinisi
console.log(`Akar kuadrat dari 4: ${Math.sqrt(4)}`); // Output: 2

// Menampilkan string "test" di konsol
console.log(console.log("test")); // Output: "test" di konsol, dan undefined karena console.log tidak mengembalikan nilai

/*
NaN (Not a Number):
  NaN adalah nilai yang menunjukkan bahwa hasil dari operasi numerik tidak terdefinisi atau tidak dapat direpresentasikan sebagai angka.
  
  Contoh:
    Math.sqrt(-1): Menghitung akar kuadrat dari -1, yang tidak terdefinisi dalam bilangan riil, sehingga menghasilkan NaN.
    Operasi aritmatika dengan string, seperti pembagian ("ucup" / "otong") dan perkalian ("ucup" * "otong"), juga menghasilkan NaN karena string tidak dapat dihitung sebagai angka.
    Penjumlahan string ("ucup" + "otong") menghasilkan penggabungan string, bukan NaN.
    parseInt("test123"): Mengonversi string yang tidak dapat diubah menjadi angka, menghasilkan NaN. Ketika NaN dijumlahkan dengan angka (5), hasilnya tetap NaN.

Undefined:
  undefined adalah nilai yang menunjukkan bahwa variabel telah dideklarasikan tetapi belum diinisialisasi dengan nilai.
  
  Contoh:
    Variabel a dideklarasikan tetapi tidak diberikan nilai, sehingga ketika dicetak, hasilnya adalah undefined.
    Math.sqrt(4): Menghitung akar kuadrat dari 4, yang terdefinisi dan menghasilkan 2.
    console.log(console.log("test")): Menampilkan "test" di konsol, tetapi console.log tidak mengembalikan nilai, sehingga hasilnya adalah undefined.
*/
