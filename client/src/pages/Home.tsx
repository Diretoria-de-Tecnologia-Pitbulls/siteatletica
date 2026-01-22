import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Trophy, Users, Zap, MapPin, Phone, Mail, Instagram, Calendar } from "lucide-react";
import { useState } from "react";

/**
 * Clean Modern Design System
 * - Background: Light Off-White (#F8F9FA) - Clean, Modern
 * - Primary: Electric Blue (#0066FF) - Professional, Trustworthy
 * - Secondary: Gold (#FFD700) - Energy, Celebration, Highlight
 * - Text: Dark Gray (#1A1A2E) - Readable, Professional
 * - Approach: Minimalist, spacious, image-focused
 */

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm leading-tight">Atlética</span>
              <span className="font-bold text-sm text-primary leading-tight">Pitbulls</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#eventos" className="text-sm font-medium hover:text-primary transition-colors">Eventos</a>
            <a href="#esportes" className="text-sm font-medium hover:text-primary transition-colors">Esportes</a>
            <a href="#loja" className="text-sm font-medium hover:text-primary transition-colors">Loja</a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-blue-50 border border-primary/20 rounded-full">
                  <span className="text-primary text-sm font-semibold">🐾 Associação Atlética Acadêmica</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-foreground">
                  Pitbulls<br />
                  <span className="text-primary">UFBA</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                  Força, coragem e lealdade. Somos a atlética da Escola de Administração da UFBA, representando Administração, Secretariado, Administração Pública e APGS.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-primary hover:bg-primary/90 text-white gap-2 h-12 px-6">
                  Conheça Nossos Eventos <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-blue-50 h-12 px-6">
                  Sócio-Torcedor
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                <img
                  src="/images/hero-pitbull.jpg"
                  alt="Pitbull em movimento"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Seguidores", value: "1.5K", icon: Users },
              { label: "Posts", value: "310+", icon: Zap },
              { label: "Eventos/Ano", value: "20+", icon: Calendar },
              { label: "Comunidade", value: "Ativa", icon: Trophy },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eventos Section */}
      <section id="eventos" className="py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Nossos Eventos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebramos a comunidade acadêmica com eventos memoráveis que reúnem energia, diversão e espírito de equipe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pit House",
                description: "Nossa festa principal com open bar, DJ e muita celebração",
                image: "/images/event-pit-house.jpg",
              },
              {
                title: "Trote",
                description: "Calourada com atividades, integração e diversão para os novos membros",
                image: "/images/community-team.jpg",
              },
              {
                title: "Pitbulls 2000",
                description: "Festa temática que resgata o melhor da década com muita energia",
                image: "/images/event-pit-house.jpg",
              },
            ].map((event, i) => (
              <Card
                key={i}
                className="overflow-hidden border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredCard(`event-${i}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{event.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-blue-50">
                    Saiba Mais
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Esportes Section */}
      <section id="esportes" className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 text-foreground">Competição e Espírito</h2>
                <p className="text-lg text-muted-foreground">
                  Participamos ativamente de competições esportivas, representando a EAUFBA com dedicação e paixão.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { sport: "Futsal", description: "Liga de Futsal Lauro de Freitas (LFLF) e JUFBA" },
                  { sport: "Jiu Jitsu", description: "Treinos e competições de Jiu Jitsu" },
                  { sport: "Outros Esportes", description: "Participação em diversos eventos esportivos" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.sport}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                <img
                  src="/images/sports-futsal.jpg"
                  alt="Futsal Pitbulls"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loja Section */}
      <section id="loja" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Pitshop - Nossa Loja</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Adquira produtos exclusivos da Atlética Pitbulls com o branding oficial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
            <Card className="border-border hover:shadow-lg transition-all duration-300 p-8 text-center">
              <div className="text-5xl mb-4">👕</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Camisetas</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Camisetas oficiais com design exclusivo
              </p>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                Ver Produtos
              </Button>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300 p-8 text-center">
              <div className="text-5xl mb-4">🎽</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Acessórios</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Bonés, mochilas e outros itens
              </p>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                Ver Produtos
              </Button>
            </Card>
          </div>

          <div className="text-center">
            <a href="https://www.instagram.com/shop.pitbulls/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary text-primary hover:bg-blue-50">
                <Instagram className="w-4 h-4 mr-2" />
                Visite @shop.pitbulls
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Entre em Contato</h2>
            <p className="text-lg text-muted-foreground">
              Quer conhecer mais sobre a Atlética Pitbulls? Nos encontre nas redes sociais ou envie uma mensagem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <a
              href="https://www.instagram.com/atleticapitbulls/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <Instagram className="w-8 h-8 text-primary" />
              <span className="font-semibold text-foreground">Instagram</span>
              <span className="text-sm text-muted-foreground">@atleticapitbulls</span>
            </a>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border">
              <MapPin className="w-8 h-8 text-primary" />
              <span className="font-semibold text-foreground">Localização</span>
              <span className="text-sm text-muted-foreground">UFBA - Salvador, BA</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border">
              <Mail className="w-8 h-8 text-primary" />
              <span className="font-semibold text-foreground">Email</span>
              <span className="text-sm text-muted-foreground">atleticapitbulls@ufba.br</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-foreground">Atlética Pitbulls UFBA</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 Atlética Pitbulls. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/atleticapitbulls/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-primary hover:text-primary/80 transition-colors" />
              </a>
              <a href="https://www.instagram.com/shop.pitbulls/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-primary hover:text-primary/80 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
