import GlassmorphismCard from '@/app/components/GlassmorphismCard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-gradient">
        Career Dashboard
      </h1>
      <GlassmorphismCard />
    </main>
  );
}
