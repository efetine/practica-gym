import Image from "next/image"
import { Navbar } from "~/components/navbar"
import { Button } from "~/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">Transforma tu cuerpo, mejora tu vida</h1>
                <p className="mb-6">Únete a GymFit y comienza tu viaje hacia una vida más saludable y en forma.</p>
                <Button size="lg">Comienza Ahora</Button>
              </div>
              <div className="md:w-1/2">
                <Image src="/placeholder.svg" alt="Gimnasio" width={500} height={300} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Clases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Nuestras Clases</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Yoga", "Spinning", "Crossfit"].map((clase) => (
                <div key={clase} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{clase}</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Lo que dicen nuestros miembros</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "María G.", text: "GymFit cambió mi vida. He perdido 20 kilos y me siento mejor que nunca." },
                { name: "Juan P.", text: "Los entrenadores son increíbles y las instalaciones son de primera clase." },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
            <p className="mb-8">Únete hoy y obtén tu primera semana gratis</p>
            <Button size="lg">Registrarse Ahora</Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 GymFit. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

