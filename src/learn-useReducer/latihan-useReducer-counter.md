# 🧪 Latihan `useReducer` — Counter

## 🎯 Tujuan

Memahami bagaimana `useReducer` mengatur perubahan **State** menggunakan **action** dan `dispatch()`.

## 📱 Tugas

Buat aplikasi **Counter** dengan tampilan:

```text
======================

       Angka
         0

    [ Tambah ]

    [ Kurangi ]

    [ Reset ]

======================
```

## 📌 Ketentuan

Gunakan:

- `useReducer`
- `reducer`
- `state`
- `action`
- `dispatch`

Buat 3 action:

```text
tambah
kurangi
reset
```

## ⚙️ Aturan Perubahan

```text
Tambah  → angka + 1
Kurangi → angka - 1
Reset   → angka kembali 0
```

## 🔄 Contoh Hasil

### Kondisi Awal

```text
Angka: 0

[ Tambah ]
[ Kurangi ]
[ Reset ]
```

### Klik `Tambah`

```text
Angka: 0
   ↓
[ Tambah ]
   ↓
Angka: 1
```

### Klik `Tambah` Lagi

```text
Angka: 1
   ↓
[ Tambah ]
   ↓
Angka: 2
```

### Klik `Kurangi`

```text
Angka: 2
   ↓
[ Kurangi ]
   ↓
Angka: 1
```

### Klik `Reset`

```text
Angka: 1
   ↓
[ Reset ]
   ↓
Angka: 0
```

## 🎯 Alur `useReducer`

```text
User klik tombol
       ↓
   dispatch()
       ↓
     action
       ↓
   reducer()
       ↓
  State berubah
       ↓
Tampilan diperbarui
```

Contoh ketika tombol **Tambah** diklik:

```text
Klik [Tambah]
      ↓
dispatch({ type: "tambah" })
      ↓
reducer menjalankan aturan
      ↓
angka + 1
      ↓
State baru
```

