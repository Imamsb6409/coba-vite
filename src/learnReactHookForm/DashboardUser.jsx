import { useForm, Watch } from "react-hook-form";

export default function DashboardUser() {
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nama: "",
      umur: "",
      gender: "",
      program: "",
      ekstrakulikuler: [],
      persyaratan: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Data berhasil dikirim:", data);
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-xl bg-white rounded-2xl border border-neutral-200 shadow-xl p-6 sm:p-8">
        {/* Header Form */}
        <div className="mb-8 border-b border-neutral-200 pb-4">
          <h2 className="text-2xl font-bold text-neutral-900">
            Form Pendaftaran Siswa
          </h2>
          <p className="text-sm text-neutral-500 mt-1">
            Silakan isi formulir di bawah ini dengan lengkap dan benar.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          noValidate
        >
          {/* Input Nama */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="nama"
              className="text-sm font-semibold text-neutral-800"
            >
              Nama Siswa
            </label>
            <input
              id="nama"
              type="text"
              placeholder="Masukkan Nama..."
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-neutral-800 placeholder-neutral-400 transition-all focus:outline-none focus:ring-2 ${
                errors.nama
                  ? "border-red-500 bg-red-50/20 focus:border-red-500 text-red-500 focus:ring-red-500/20"
                  : "border-neutral-300 focus:border-neutral-900 focus:ring-neutral-900/20"
              }`}
              {...register("nama", {
                required: {
                  value: true,
                  message: "Nama harus diisi",
                },
                // nama tidak boleh ada simbol2 ataupun angka
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Nama tidak boleh ada simbol2 ataupun angka",
                },
              })}
            />
            {errors.nama && (
              <span className="text-xs font-medium text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md w-fit">
                {errors.nama.message}
              </span>
            )}
          </div>

          {/* input email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-neutral-800"
            >
              email
            </label>
            <input
              type="email"
              placeholder="Masukkan email..."
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-neutral-800 placeholder-neutral-400 transition-all focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 text-red-500 bg-red-50/20 focus:border-red-500 focus:ring-red-500/20"
                  : "border-neutral-300 focus:border-neutral-900 focus:ring-neutral-900/20"
              }`}
              {...register("email", {
                required: {
                  value: true,
                  message: "Email harus diisi",
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Email tidak valid",
                },
              })}
            />
            {errors.email && (
              <span className="text-xs font-medium text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md w-fit">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Input Umur */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="umur"
              className="text-sm font-semibold text-neutral-800"
            >
              Umur Siswa
            </label>
            <input
              id="umur"
              type="number"
              placeholder="Masukkan Umur..."
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-neutral-800 placeholder-neutral-400 transition-all focus:outline-none focus:ring-2 ${
                errors.umur
                  ? "border-red-500 text-red-500 bg-red-50/20 focus:border-red-500 focus:ring-red-500/20"
                  : "border-neutral-300 focus:border-neutral-900 focus:ring-neutral-900/20"
              }`}
              {...register("umur", {
                required: {
                  value: true,
                  message: "Umur harus diisi",
                },
                min: {
                  value: 12,
                  message: "Umur minimal 12 tahun",
                },
                max: {
                  value: 20,
                  message: "Umur maksimal 20 tahun",
                },
              })}
            />
            {errors.umur && (
              <span className="text-xs font-medium text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md w-fit">
                {errors.umur.message}
              </span>
            )}
          </div>

          {/* Input Gender */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-neutral-800">
              Pilih Gender
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "laki-laki", label: "Laki-laki", value: "laki-laki" },
                { id: "perempuan", label: "Perempuan", value: "perempuan" },
                {
                  id: "tidak-bisa-memberi-tahu",
                  label: "Lainnya",
                  value: "tidak-bisa-memberi-tahu",
                },
              ].map((option) => (
                <label
                  key={option.id}
                  htmlFor={option.id}
                  className={`flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition text-sm text-neutral-700 ${
                    errors.gender
                      ? "border-red-300 bg-red-50/20 hover:border-red-400"
                      : "border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50"
                  }`}
                >
                  <input
                    id={option.id}
                    type="radio"
                    value={option.value}
                    className="w-4 h-4 text-neutral-900 border-neutral-300 focus:ring-neutral-900 accent-neutral-900"
                    {...register("gender", {
                      required: {
                        value: true,
                        message: "Gender belum diisi",
                      },
                    })}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            {errors.gender && (
              <span className="text-xs font-medium text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md w-fit">
                {errors.gender.message}
              </span>
            )}
          </div>

          {/* Select Program */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="program"
              className="text-sm font-semibold text-neutral-800"
            >
              Pilih Program
            </label>
            <select
              id="program"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-neutral-800 bg-white transition-all focus:outline-none focus:ring-2 ${
                errors.program
                  ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-red-500/20"
                  : "border-neutral-300 focus:border-neutral-900 focus:ring-neutral-900/20"
              }`}
              {...register("program", {
                required: {
                  value: true,
                  message: "Program harus dipilih",
                },
              })}
            >
              <option value="">Pilih Program</option>
              <option value="tahfidz">Tahfidz</option>
              <option value="it">IT</option>
              <option value="lainnya">Lainnya</option>
            </select>
            {errors.program && (
              <span className="text-xs font-medium text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md w-fit">
                {errors.program.message}
              </span>
            )}
          </div>

          {/* Select Ekstrakulikuler */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-neutral-800">
              Pilih Ekstrakulikuler
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { id: "beladiri", label: "Beladiri", value: "beladiri" },
                { id: "basket", label: "Basket", value: "basket" },
                { id: "futsal", label: "Futsal", value: "futsal" },
                { id: "voli", label: "Voli", value: "voli" },
                { id: "anggar", label: "Anggar", value: "anggar" },
              ].map((item) => (
                <label
                  key={item.id}
                  htmlFor={item.id}
                  className={`flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition text-sm text-neutral-700 ${
                    errors.ekstrakulikuler
                      ? "border-red-300 bg-red-50/20 hover:border-red-400"
                      : "border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50"
                  }`}
                >
                  <input
                    id={item.id}
                    type="checkbox"
                    value={item.value}
                    className="w-4 h-4 rounded text-neutral-900 border-neutral-300 focus:ring-neutral-900 accent-neutral-900"
                    {...register("ekstrakulikuler", {
                      validate: (value) =>
                        (value && value.length > 0) ||
                        "Pilih minimal 1 ekstrakulikuler",
                    })}
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
            {errors.ekstrakulikuler && (
              <span className="text-xs font-medium text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md w-fit mt-1">
                {errors.ekstrakulikuler.message}
              </span>
            )}
          </div>

          {/* Persyaratan */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="persyaratan"
              className={`flex items-start gap-3 p-3.5 rounded-lg border cursor-pointer transition text-sm text-neutral-700 select-none ${
                errors.persyaratan
                  ? "border-red-500 bg-red-50/20"
                  : "border-neutral-200 hover:border-neutral-400 bg-neutral-50/50"
              }`}
            >
              <input
                id="persyaratan"
                type="checkbox"
                className="mt-0.5 w-4 h-4 rounded text-neutral-900 border-neutral-300 focus:ring-neutral-900 accent-neutral-900 cursor-pointer"
                {...register("persyaratan", {
                  required: {
                    value: true,
                    message:
                      "Anda harus menyetujui persyaratan untuk melanjutkan",
                  },
                })}
              />
              <span>
                Saya menyetujui{" "}
                <span className="font-semibold text-neutral-900 underline">
                  syarat dan ketentuan
                </span>{" "}
                yang berlaku.
              </span>
            </label>
            {errors.persyaratan && (
              <span className="text-xs font-medium text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md w-fit">
                {errors.persyaratan.message}
              </span>
            )}
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="w-full mt-2 bg-neutral-900 hover:bg-black text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 active:scale-[0.99] shadow-sm text-sm"
          >
            Submit Data
          </button>
        </form>
      </div>
    </div>
  );
}
