// Bagian 1: Dasar-dasar String
// Membuat string sederhana
let dataString = "data string";
console.log(dataString);

// Escaping karakter khusus dalam string
let data1 = 'ucup \tberkata "apa kabar dunia?"'; // Menggunakan single quote
console.log(data1);
let data2 = "otong berkata \"tetep asyiiik\""; // Menggunakan double quote
console.log(data2);
let data3 = "ucup berjalan-jalan di tepi pantai, \nkereeen"; // Menggunakan backslash untuk newline
console.log(data3);

// Bagian 2: Template Literal (ES6)
// Mendefinisikan variabel
let namaDepan = "Otong";
let namaBelakang = "Surotong";
let umur = 10;

// Cara konvensional (akan terjadi konversi tipe data)
let namaLengkap = umur + " " + namaDepan + " " + namaBelakang;
console.log(namaLengkap); // Output: 10 Otong Surotong

// Menggunakan template literal (cara yang lebih baik)
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata); // Output: Otong Surotong dengan umur 10

// Contoh lain penggunaan template literal
let kalimat = `Halo, nama saya ${namaDepan}. Saya berusia ${umur} tahun.`;
console.log(kalimat);

// Membuat string dengan multi-line
let puisi = `
Bintang gemerlap di langit malam,
Cahaya bulan menyinari bumi.
`;
console.log(puisi);

/*
Penjelasan:

Dasar-dasar String:
String diapit oleh tanda kutip tunggal (') atau ganda (").
Escaping: Untuk memasukkan karakter khusus seperti tanda kutip, backslash, atau karakter kontrol (tab, newline) ke dalam string, kita menggunakan backslash ().

Template Literal:
Dikenal juga sebagai template string.
Diapit oleh backtick (`).
Memungkinkan kita menyisipkan ekspresi JavaScript langsung ke dalam string menggunakan ${}.
Cara yang lebih bersih dan mudah untuk membuat string yang mengandung variabel atau ekspresi.

Keunggulan Template Literal:
Lebih mudah dibaca: Sintaksnya lebih intuitif dan mirip dengan bahasa sehari-hari.
Mencegah kesalahan konversi tipe data: Kita tidak perlu khawatir dengan konversi tipe data secara implisit seperti pada cara konvensional.
Memungkinkan multi-line string: Kita bisa membuat string yang mencakup beberapa baris tanpa perlu menggunakan backslash untuk newline.
*/
