import { useForm } from "react-hook-form";

export default function DashboardUser() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing its name

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start gap-y-10 m-5 shadow-2xl rounded-xl p-5 border-2 border-black"
    >
      {/* nama */}
      <div className="flex flex-col">
        <label htmlFor="nama">Nama Siswa</label>
        <input
          {...register("nama", {
            required: {
              value: true,
              message: "nama harus diisi",
            },
          })}
          type="text"
          className="border"
          name="nama"
          id="nama"
          placeholder="Masukkan Nama..."
        />
        {errors.nama && <p className="text-red-500">{errors.nama.message}</p>}
      </div>
      {/* umur */}
      <div className="flex flex-col">
        <label htmlFor="umur">Umur Siswa</label>
        <input
          {...register("umur", {
            required: {
              value: true,
              message: "umur harus diisi",
            },
            min: {
              value: 12,
              message: "umur minimal 10 tahun",
            },
            max: {
              value: 20,
              message: "umur maksimal 20 tahun",
            },
          })}
          type="number"
          name="umur"
          id="nama"
          className="border"
        />
        {errors.umur && <p className="text-red-500">{errors.umur.message}</p>}
      </div>
      {/* gender */}
      <div className="flex flex-col">
        <label htmlFor="gender">Pilih gender</label>
        {/* gender2nya */}
        <div className="flex gap-x-5">
          <label htmlFor="laki-laki">
            <input
              {...register("gender", {
                required: { value: true, message: "gender belum diisi" },
              })}
              type="radio"
              name="gender"
              value={"laki-laki"}
              id="laki-laki"
            />
            Laki-laki
          </label>
          <label htmlFor="perempuan">
            <input
              {...register("gender", {
                required: { value: true, message: "gender belum diisi" },
              })}
              type="radio"
              name="gender"
              value={"perempuan"}
              id="perempuan"
            />
            Perempuan
          </label>
          <label htmlFor="tidak-bisa-memberi-tahu">
            <input
              {...register("gender", {
                required: { value: true, message: "gender belum diisi" },
              })}
              type="radio"
              name="gender"
              value={"tidak-bisa-memberi-tahu"}
              id="tidak-bisa-memberi-tahu"
            />
            Lainnya
          </label>
        </div>
        {errors.gender && (
          <p className="text-red-500">{errors.gender.message}</p>
        )}
      </div>
      {/* program */}
      <div className="flex flex-col">
        <label htmlFor="program">Pilih Program</label>
        <select
          {...register("program")}
          name="program"
          id="program"
          className="border py-1 px-2"
        >
          <option value="">Pilih Program</option>
          <option value="tahfidz">Tahfidz</option>
          <option value="it">IT</option>
          <option value="lainnya">lainnya</option>
        </select>
      </div>

      <button
        type="submit"
        className="border border-black px-8 py-1 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
}
