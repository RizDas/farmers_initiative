import FarmerNews from "@/components/News";

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Latest Farmer News</h1>
      <FarmerNews />
    </main>
  );
}