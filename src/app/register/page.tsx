import Navbar from "../layout/components/NavBar";
import RegisterPage from "../layout/pages/RegisterPage";

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
