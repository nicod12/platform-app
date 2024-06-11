import Navbar from "@/components/NavBar";
import RegisterPage from "@/pages/RegisterPage";



export default function Register() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <RegisterPage />
      </main>
    </>
  );
}
