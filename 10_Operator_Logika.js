// Operator Logika di JavaScript

// Operator logika digunakan untuk menggabungkan atau membalik nilai boolean.
// Terdapat tiga operator logika utama: AND (&&), OR (||), dan NOT (!).

// 1. NOT (!)
// NOT adalah operator yang membalik nilai boolean. Jika nilai true, maka menjadi false, dan sebaliknya.
let data_bool = true;
console.log(`data_bool = ${data_bool}`); // Output: true

// Menggunakan NOT untuk membalik nilai
console.log(`!data_bool = ${!data_bool}`); // Output: false (ngeflip data boolean)
console.log(`!!data_bool = ${!!data_bool}`); // Output: true (mengembalikan ke nilai asli)
console.log(`!1 = ${!1}`); // Output: false (1 dianggap true)
console.log(`!0 = ${!0}`); // Output: true (0 dianggap false)

// Contoh penggunaan NOT
let is_keren = true; // Variabel is_keren bernilai true
let is_jelek = !is_keren; // Menggunakan NOT untuk membalik nilai
console.log(`is_jelek = ${is_jelek}`); // Output: false

// 2. OR (||)
// OR adalah operator yang mengembalikan true jika salah satu atau kedua operand bernilai true.
// Tabel kebenaran untuk OR:
// A      true true  false false
// B      true false true  false
// Hasil  true true  true  false

console.log(`true || true, Hasil = ${true || true}`); // Output: true
console.log(`true || false, Hasil = ${true || false}`); // Output: true
console.log(`false || true, Hasil = ${false || true}`); // Output: true
console.log(`false || false, Hasil = ${false || false}`); // Output: false

// Contoh penggunaan OR
let makan = false; // Variabel makan bernilai false
let minum = false; // Variabel minum bernilai false

// Menggunakan OR untuk menentukan apakah sudah menyantap
let sudah_menyantap = makan || minum; // Hasil true jika salah satu bernilai true
console.log(`sudah menyantap = ${sudah_menyantap}`); // Output: false

// 3. AND (&&)
// AND adalah operator yang mengembalikan true hanya jika kedua operand bernilai true.
// Tabel kebenaran untuk AND:
// A      true true  false false
// B      true false true  false
// Hasil  true false false false

console.log(`true && true, Hasil = ${true && true}`); // Output: true
console.log(`true && false, Hasil = ${true && false}`); // Output: false
console.log(`false && true, Hasil = ${false && true}`); // Output: false
console.log(`false && false, Hasil = ${false && false}`); // Output: false

// Contoh penggunaan AND
makan = true; // Mengubah nilai makan menjadi true
minum = true; // Mengubah nilai minum menjadi true

// Menggunakan AND untuk menentukan apakah sudah makan dan minum
let sudah_makmin = makan && minum; // Hasil true jika kedua variabel bernilai true
console.log(`sudah makan dan minum? = ${sudah_makmin}`); // Output: true

/*
Operator NOT (!):
Operator NOT membalik nilai boolean. Jika nilai adalah true, maka hasilnya false, dan sebaliknya.

  Contoh:
    !data_bool membalik nilai data_bool yang awalnya true menjadi false.
    !!data_bool mengembalikan nilai asli dari data_bool (double negasi).

Operator OR (||):
Operator OR mengembalikan true jika salah satu dari operandnya adalah true.
Tabel kebenaran menunjukkan bahwa hasilnya true jika salah satu operand adalah true, dan hanya false jika kedua operand adalah false.

  Contoh:
  makan || minum akan menghasilkan true jika salah satu dari makan atau minum adalah true.

Operator AND (&&):
Operator AND mengembalikan true hanya jika kedua operandnya adalah true.
Tabel kebenaran menunjukkan bahwa hasilnya true hanya jika kedua operator tersebut true semua

  contoh:
  console.log(`true && true, Hasil = ${true && true}`); // Output: true
*/
