
# 🛠️ JavaScript Method & Function Cheatsheet

Berikut ini adalah kumpulan fungsi dan method penting dalam JavaScript untuk manipulasi array, string, objek, dan matematika.

---

## ✂️ `split()`

Memecah string menjadi array berdasarkan delimiter.

```javascript
"hello world".split(" "); // ["hello", "world"]
```

---

## 🗺️ `map()`

Mengubah setiap elemen dalam array dan mengembalikan array baru.

```javascript
[1, 2, 3].map(x => x * 2); // [2, 4, 6]
```

---

## 🧹 `filter()`

Menyaring elemen dalam array berdasarkan kondisi.

```javascript
[1, 2, 3, 4].filter(x => x % 2 === 0); // [2, 4]
```

---

## ❓ `isNaN()`

Mengembalikan `true` jika nilai **bukan angka** (Not-a-Number).

```javascript
isNaN("abc"); // true
isNaN(123);   // false
```

---

## 🧮 `reduce()`

Menggabungkan nilai array menjadi satu nilai.

```javascript
[1, 2, 3].reduce((acc, val) => acc + val, 0); // 6
```

---

## 🔃 `sort()`

Mengurutkan array **secara in-place**. Default sebagai string.

```javascript
[5, 10, 1].sort(); // [1, 10, 5] → string sort
[5, 10, 1].sort((a, b) => a - b); // [1, 5, 10]
```

---

## 🔁 `toSorted()` (Immutable sort)

Mengembalikan versi terurut dari array **tanpa mengubah array asli** (ES2023+).

```javascript
const arr = [3, 1, 2];
const sorted = arr.toSorted(); // [1, 2, 3]
console.log(arr); // [3, 1, 2]
```

---

## 🧺 `Set`

Struktur data untuk menyimpan **nilai unik**.

```javascript
const set = new Set([1, 2, 2, 3]);
[...set]; // [1, 2, 3]
```

---

## 📦 `Object.keys()` dan `Object.values()`

Mengambil array dari properti atau nilai objek.

```javascript
const obj = { a: 1, b: 2 };
Object.keys(obj);   // ["a", "b"]
Object.values(obj); // [1, 2]
```

---

## 🔗 `join()`

Menggabungkan elemen array menjadi string.

```javascript
["a", "b", "c"].join("-"); // "a-b-c"
```

---

## 🧠 `Math.min()` dan `Math.max()`

Mencari nilai minimum dan maksimum.

```javascript
Math.min(3, 1, 7); // 1
Math.max(3, 1, 7); // 7
```

---

## ⚡ `Math.pow()` dan `Math.sqrt()`

Perpangkatan dan akar kuadrat.

```javascript
Math.pow(2, 3);  // 8
Math.sqrt(16);   // 4
```

---

## 📝 Kesimpulan

| Fungsi         | Tujuan                              |
|----------------|--------------------------------------|
| `split()`      | Pecah string → array                |
| `map()`        | Transformasi elemen array           |
| `filter()`     | Saring elemen array                 |
| `isNaN()`      | Cek bukan angka                     |
| `reduce()`     | Akumulasi nilai                    |
| `sort()`       | Urutkan array (ubah asli)           |
| `toSorted()`   | Urutkan array (tidak ubah asli)     |
| `Set`          | Kumpulan nilai unik                 |
| `Object.keys()`| Ambil properti objek                |
| `Object.values()`| Ambil nilai objek                |
| `join()`       | Gabung array → string              |
| `Math.min()`   | Nilai terkecil                      |
| `Math.max()`   | Nilai terbesar                      |
| `Math.pow()`   | Perpangkatan                        |
| `Math.sqrt()`  | Akar kuadrat                        |
