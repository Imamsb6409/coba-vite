import ProfilPengguna from "./ProfilPengguna";
import CardProps from "./CardProps";
import Santri from "./Santri";
import { Button } from "@/components/ui/button";
export default function Hero() {
  const laptops = [
    {
      name: "Predator Helios 300",
      harga: "Rp. 28.000.000",
    },
    {
      name: "Asus ROG Strix G15",
      harga: "Rp. 25.000.000",
    },
    {
      name: "Lenovo Legion 5",
      harga: "Rp. 20.000.000",
    },
  ];

  const students = [
    { name: "John Doe", role: "Admin" },
    { name: "Albar", role: "Santri" },
    { name: "Naufal", role: "Marinir" },
  ];
  if (students.length === 0)
    return (
      <div className="hero h-screen">
        <p>No students found.</p>
      </div>
    );

  const Santries = [
    {
      Nama: "Ahmad",
      Kelas: "XI",
      Hobi: "Coding",
      Aktif: true,
    },
    {
      Nama: "Ali",
      Kelas: "XII",
      Hobi: "Membaca",
      Aktif: false,
    },
    {
      Nama: "Umar",
      Kelas: "X",
      Hobi: "Futsal",
      Aktif: true,
    },
  ];

  return (
    <div className="hero h-max flex flex-col gap-y-5">
      <h1>Hero Section</h1>

      <Button>Click me</Button>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        students.map((student, index) => (
          <ProfilPengguna key={index} name={student.name} role={student.role} />
        ))
      )}

      <div className="flex flex-wrap gap-4 mt-4 h-max">
        {laptops.map((laptop, index) => (
          <CardProps key={index} nama={laptop.name} harga={laptop.harga} />
        ))}
      </div>
      <div>
        {Santries.map((santri, index) => (
          <Santri
            key={index}
            nama={santri.Nama}
            kelas={santri.Kelas}
            hobi={santri.Hobi}
            aktif={santri.Aktif}
          />
        ))}
      </div>
    </div>
  );
}
