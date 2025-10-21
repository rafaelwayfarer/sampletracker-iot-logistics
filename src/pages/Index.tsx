import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LeadFormDialog } from "@/components/LeadFormDialog";
import { 
  Thermometer, 
  MapPin, 
  Clock, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle2,
  Package,
  Database,
  Zap
} from "lucide-react";
import logoFull from "@/assets/logo-full.png";
import logoHero from "@/assets/logo-hero.png";
import device from "@/assets/device.png";
import laptopSampleTracker from "@/assets/laptop_SampleTracker_transparent.png";
import sampleTrackerMobile from "@/assets/SampleTracker-2_transparent.png";
import clientLaboratory from "@/assets/client-laboratory.jpg";
import clientHospital from "@/assets/client-hospital.jpg";
import clientPharma from "@/assets/client-pharma.jpg";
import clientVaccination from "@/assets/client-vaccination.jpg";
import clientTransport from "@/assets/client-transport.jpg";

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const benefits = [
    {
      icon: Shield,
      title: "Evite perdas e recoletas",
      description: "Elimine variações térmicas que comprometem suas amostras"
    },
    {
      icon: TrendingUp,
      title: "Gerenciamento de Rotas",
      description: "Acompanhe em tempo real todas as jornadas"
    },
    {
      icon: Users,
      title: "Transparência para Clientes",
      description: "Ofereça rastreamento completo e relatórios detalhados"
    },
    {
      icon: Database,
      title: "Integração Completa",
      description: "Conecte com seu LIS, ERP e CRM sem complicação"
    },
    {
      icon: Package,
      title: "Gestão de Frota",
      description: "Gerencie veículos próprios e terceirizados em um só lugar"
    },
    {
      icon: CheckCircle2,
      title: "Check-in e Check-out",
      description: "Controle cada etapa do processo logístico"
    }
  ];

  const howItWorksSteps = [
    {
      number: "01",
      title: "Coloque o dispositivo",
      description: "No malote, caixa ou veículo – sem instalação necessária"
    },
    {
      number: "02",
      title: "Monitoramento automático",
      description: "Temperatura, localização e tempo de rota são capturados automaticamente"
    },
    {
      number: "03",
      title: "Dados na nuvem",
      description: "Transmissão em tempo real para a plataforma"
    },
    {
      number: "04",
      title: "Check-in e Check-out",
      description: "Acompanhe o passo a passo completo das rotas"
    },
    {
      number: "05",
      title: "Acesse de qualquer lugar",
      description: "Painel web ou app com alertas, relatórios e histórico completo"
    }
  ];

  const targetAudience = [
    {
      title: "Laboratórios de Análises Clínicas e Patológicas",
      image: clientLaboratory
    },
    {
      title: "Hospitais e Clínicas",
      image: clientHospital
    },
    {
      title: "Indústria Farmacêutica",
      image: clientPharma
    },
    {
      title: "Clínicas de Vacinação",
      image: clientVaccination
    },
    {
      title: "Transportadoras de Material Biológico e Medicamento",
      image: clientTransport
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-end">
          <Button onClick={() => setIsDialogOpen(true)} size="lg">
            Solicitar Demonstração
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block mb-6">
              <img src={logoHero} alt="SampleTracker" className="h-20 md:h-24 mx-auto" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Controle Total da Sua Logística de{" "}
              <span className="text-primary">Amostras Biológicas</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Segurança, agilidade e controle em tempo real para quem transporta materiais sensíveis.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button onClick={() => setIsDialogOpen(true)} size="lg" className="text-lg px-8">
                Solicitar Demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is SampleTracker */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              O que é o <span className="text-primary">SampleTracker</span>?
            </h2>
            <Card className="border-2">
              <CardContent className="p-8">
                <p className="text-lg md:text-xl text-center leading-relaxed">
                  É uma plataforma de gerenciamento que por meio de dispositivos IoT monitora{" "}
                  <strong className="text-primary">temperatura</strong>,{" "}
                  <strong className="text-primary">localização</strong> e{" "}
                  <strong className="text-primary">tempo de rota</strong> de cargas sensíveis ao calor. 
                  Tudo isso sem instalação e com transmissão automática de dados para a nuvem.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center space-y-2">
                    <Thermometer className="h-12 w-12 mx-auto text-primary" />
                    <h3 className="font-semibold">Temperatura</h3>
                  </div>
                  <div className="text-center space-y-2">
                    <MapPin className="h-12 w-12 mx-auto text-primary" />
                    <h3 className="font-semibold">Localização</h3>
                  </div>
                  <div className="text-center space-y-2">
                    <Clock className="h-12 w-12 mx-auto text-primary" />
                    <h3 className="font-semibold">Tempo de Rota</h3>
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  <img src={device} alt="SampleTracker Device" className="h-32 md:h-40" />
                </div>
              </CardContent>
            </Card>
            
            {/* Platform Screenshots */}
            <div className="mt-12 flex justify-center items-center gap-6">
              <img 
                src={laptopSampleTracker} 
                alt="SampleTracker Platform Dashboard" 
                className="w-[15%] max-w-[200px]"
              />
              <img 
                src={sampleTrackerMobile} 
                alt="SampleTracker Mobile App" 
                className="w-[15%] max-w-[200px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who uses */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Quem usa?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {targetAudience.map((audience, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={audience.image} 
                      alt={audience.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="font-medium">{audience.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Como funciona?
            </h2>
            <div className="space-y-6">
              {howItWorksSteps.map((step, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6 flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Benefícios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 space-y-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pronto para transformar sua logística?
            </h2>
            <p className="text-xl opacity-90">
              Solicite uma demonstração e veja como o SampleTracker pode melhorar seu controle de amostras biológicas.
            </p>
            <Button 
              onClick={() => setIsDialogOpen(true)} 
              size="lg" 
              variant="secondary"
              className="text-lg px-8"
            >
              Solicitar Demonstração Gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <img src={logoFull} alt="SampleTracker" className="h-8" />
            <p className="text-sm text-muted-foreground">
              © 2024 SampleTracker. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Lead Form Dialog */}
      <LeadFormDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  );
};

export default Index;
