import Navbar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>Hello world</p>
      </main>
    </>
  );
}
