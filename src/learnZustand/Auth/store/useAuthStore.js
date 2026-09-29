import { create } from "zustand";

const useAuthStore = create((set) => ({
  username: "Fulan",
  role: "User",
  count: 3,

  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: ()=> set((state) => ({ count: state.count - 1 })),
}));

export default useAuthStore;

// zustand adalah library untuk state management di React yang ringan dan mudah digunakan. Dengan zustand, kita dapat membuat store global untuk menyimpan state aplikasi kita, sehingga komponen-komponen dapat mengakses dan memperbarui state tersebut dengan mudah. di contoh di atas, kita membuat store bernama useAuthStore yang menyimpan state username dengan nilai awal 'Fulan' dan role dengan nilai awal 'User'. Komponen-komponen lain dapat menggunakan hook useAuthStore untuk mengakses dan memperbarui state username dan role sesuai kebutuhan.
// zustand digunakan untuk mengelola state global di aplikasi React, sehingga memudahkan pengelolaan state yang kompleks dan mengurangi kebutuhan untuk prop drilling.
// create() adalah fungsi dari zustand yang digunakan untuk membuat store baru. Di dalamnya, kita mendefinisikan state awal dan fungsi-fungsi untuk memperbarui state tersebut. untuk membuat store di zustand, kita cukup memanggil create() dan memberikan sebuah fungsi yang menerima parameter set. Parameter set digunakan untuk memperbarui state di dalam store.
// set adalah fungsi dari zustand yang digunakan untuk memperbarui state. Di dalamnya, kita dapat memperbarui state dengan menggunakan fungsi set().
