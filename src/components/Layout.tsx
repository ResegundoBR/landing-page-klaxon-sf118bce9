import { Outlet, Link } from 'react-router-dom'
import { Instagram, Linkedin } from 'lucide-react'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-border/40 transition-all duration-300">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-foreground"
          >
            KLAXON
          </Link>
          <a
            href="#contato"
            className="bg-foreground text-background px-5 py-2.5 md:px-8 md:py-3 text-xs md:text-sm font-medium tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            Fale com um Consultor
          </a>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-foreground text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <span className="font-serif text-3xl font-bold tracking-widest block mb-4">
                KLAXON
              </span>
              <p className="text-gray-400 text-sm max-w-sm">
                Design Assinado e Acabamento Premium. Elevando o padrão internacional na fabricação
                de projetos sob medida.
              </p>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors flex items-center justify-center"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.105 0 7.328 2.933 7.328 6.841 0 4.092-2.583 7.391-6.177 7.391-1.203 0-2.35-.625-2.74-1.375l-.746 2.845c-.27 1.039-1.002 2.34-1.492 3.136 1.144.353 2.355.545 3.593.545 6.621 0 11.987-5.367 11.987-11.987C24.004 5.367 18.638 0 12.017 0z" />
                </svg>
                <span className="sr-only">Pinterest</span>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Klaxon Brasil. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-300">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-gray-300">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
