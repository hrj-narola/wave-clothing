import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Categories />
      <LeadForm />
    </main>
  );
}
