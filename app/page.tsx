import { CertificateGrid } from "@/components/certificate-grid"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Portofolio Sertifikat</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Kumpulan sertifikat yang telah saya peroleh dari berbagai pelatihan dan kursus.
          </p>
        </section>

        <CertificateGrid />
      </main>
      <Footer />
    </div>
  )
}

