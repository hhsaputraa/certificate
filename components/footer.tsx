import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t" id="contact">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="font-bold text-lg mb-2">Portofolio Sertifikat</h2>
            <p className="text-gray-600 text-sm">© {new Date().getFullYear()}</p>
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://github.com/hhsaputraa" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="www.linkedin.com/in/hhsaputra" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:harihandika12@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

