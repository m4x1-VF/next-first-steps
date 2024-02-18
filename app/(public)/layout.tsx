import { Navbar } from "@/components";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <h1 className="mb-10">Hello Root Layout Root Public</h1>
        {children}
      </main>
    </>
  );
}
