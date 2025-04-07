"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  category: string
  image: string
  link: string
}

interface CertificateCardProps {
  certificate: Certificate
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Card
        className="overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-48 w-full">
          <Image src={certificate.image || "/placeholder.svg"} alt={certificate.title} fill className="object-cover" />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold line-clamp-2">{certificate.title}</h3>
            <Badge variant="outline" className="ml-2 shrink-0">
              {certificate.category}
            </Badge>
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-1 text-gray-500" />
              <span>{certificate.issuer}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1 text-gray-500" />
              <span>{certificate.date}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{certificate.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <div className="relative h-[400px] w-full mb-4">
              <Image
                src={certificate.image || "/placeholder.svg"}
                alt={certificate.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-primary" />
                <span className="font-medium">Penerbit:</span>
                <span className="ml-2">{certificate.issuer}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                <span className="font-medium">Tanggal:</span>
                <span className="ml-2">{certificate.date}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                <span className="font-medium">Link:</span>
                <span className="ml-2">{certificate.link}</span>
              </div>
              <div className="mt-4">
                <Badge>{certificate.category}</Badge>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

