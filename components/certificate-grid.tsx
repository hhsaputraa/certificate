"use client"

import { useState } from "react"
import { CertificateCard } from "@/components/certificate-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample certificate data
const certificates = [
  {
    id: 1,
    title: "AWS re/start",
    issuer: "Orbit Future academy",
    date: "Desember 2024",
    category: "cloud",
    image: "https://pub-970318b1a2ff45d0a5aa7746d743c2a5.r2.dev/aws%20restart_1.png",
    link : "https://drive.google.com/file/d/1pYS4hrBsGymYiJh6drmF_AnQR3UZT9VL/view?usp=drive_link"
  },
  {
    id: 2,
    title: "GCP Foundation",
    issuer: "credly",
    date: "April 2024",
    category: "cloud",
    image: "https://pub-970318b1a2ff45d0a5aa7746d743c2a5.r2.dev/Screenshot%20(491).png",
    link : "https://www.credly.com/badges/dd1a617a-f5de-4c00-b5bf-5846aedef579/linked_in_profile",
  },
  {
    id: 6,
    title: "Bangkit Cloud Computing",
    issuer: "Bangkit",
    date: "July 2024",
    category: "cloud",
    image: "https://pub-970318b1a2ff45d0a5aa7746d743c2a5.r2.dev/%5BBangkit%202024%20Batch%201%5D%20Certificate%20-%20C193D4KY1176_1.png",
    link : "https://drive.google.com/file/d/1-k5zdiCy7krUDKz7GkKvM_HaAPSifHsq/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Machine Learning Google Cloud",
    issuer: "Dicoding",
    date: "Mei 2024",
    category: "cloud",
    image: "https://pub-970318b1a2ff45d0a5aa7746d743c2a5.r2.dev/mlgc_1.png",
    link : "https://drive.google.com/file/d/1S1dBHWDmrJFxhSZL6rS0Z_JLbBVY4vcA/view?usp=drive_link",
  },
  {
    id: 5,
    title: "Google Cloud Engineer",
    issuer: "Dicoding",
    date: "Mei 2024",
    category: "cloud",
    image: "https://pub-970318b1a2ff45d0a5aa7746d743c2a5.r2.dev/gce_1.png",
    link : "https://drive.google.com/file/d/1t0TVT__Pwq50qHzdZgrHl_9Xs_mcOy8m/view?usp=drive_link",
  },
  {
    id: 10,
    title: "English Business Communication",
    issuer: "The British Institute",
    date: "July 2024",
    category: "Non IT",
    image: "https://pub-970318b1a2ff45d0a5aa7746d743c2a5.r2.dev/Bangkit%20English_1.png",
    link : "https://drive.google.com/file/d/1pzeHHBuWoHpuTaFrTbFhAMfQyOi-q6kr/view?usp=sharing",
  },
  {
    id: 7,
    title: "Studi Independen",
    issuer: "Kampus Merdeka",
    date: "Juni 2024",
    category: "Non IT",
    image: "https://pub-970318b1a2ff45d0a5aa7746d743c2a5.r2.dev/MSIB%20KM_1.png",
    link : "https://drive.google.com/file/d/1DImF91KU8v8bR2yJmogf64C6v7XZtSpL/view?usp=drive_link",
  },
  {
    id: 8,
    title: "Google IT Support",
    issuer: "Coursera",
    date: "April 2024",
    category: "IT Support",
    image: "https://pub-970318b1a2ff45d0a5aa7746d743c2a5.r2.dev/Google%20IT%20Support_1.png",
    link : "https://drive.google.com/file/d/1nw1WlQ3VxDYJCKjCcZJqponOllkgS2R0/view?usp=drive_link",
  },
  {
    id: 9,
    title: "Google Cybersecurity",
    issuer: "Coursera",
    date: "July 2024",
    category: "cybersecurity",
    image: "https://pub-970318b1a2ff45d0a5aa7746d743c2a5.r2.dev/Coursera%20Google%20Cybersecurity_1.png",
    link : "https://drive.google.com/file/d/1b_mZURDeEAAGtaqbliDe-05cAPzrK7w-/view?usp=sharing",
  },
  {
    id: 3,
    title: "Paklaring AHM",
    issuer: "Astra Honda Motor",
    date: "Mei 2020",
    category: "Non IT",
    image: "https://pub-970318b1a2ff45d0a5aa7746d743c2a5.r2.dev/paklaring.jpg",
    link : "https://drive.google.com/file/d/1MeY1e3cmdD8wlY5r5v_yqEwX6oQpeUTB/view?usp=sharing",
  },
]

export function CertificateGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredCertificates =
    selectedCategory === "all" ? certificates : certificates.filter((cert) => cert.category === selectedCategory)

  return (
    <div id="certificates" className="space-y-6">
      <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
        <div className="flex justify-center mb-6">
          <TabsList>
            <TabsTrigger value="all">Semua</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="cloud">Cloud</TabsTrigger>
            <TabsTrigger value="Non IT">Non IT</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value={selectedCategory} className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {filteredCertificates.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">Tidak ada sertifikat dalam kategori ini.</p>
        </div>
      )}
    </div>
  )
}

