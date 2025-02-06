import Link from "next/link"
import { Button } from "~/components/ui/button"

export function Navbar() {
  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            GymFit
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-secondary">
              Inicio
            </Link>
            <Link href="/clases" className="hover:text-secondary">
              Clases
            </Link>
            <Link href="/instalaciones" className="hover:text-secondary">
              Instalaciones
            </Link>
            <Link href="/precios" className="hover:text-secondary">
              Precios
            </Link>
            <Link href="/contacto" className="hover:text-secondary">
              Contacto
            </Link>
          </div>
          <Button>Prueba Gratis</Button>
        </div>
      </div>
    </nav>
  )
}

