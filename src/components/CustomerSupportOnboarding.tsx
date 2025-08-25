import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle, Monitor, Smartphone, Tv, Laptop, Cast, HelpCircle, Bug, Wifi, AlertCircle, PlayCircle, MessageCircle } from "lucide-react";

interface CustomerSupportOnboardingProps {
  onBackToLanding: () => void;
}

type CustomerType = 'new' | 'existing';
type Device = 'tv' | 'android' | 'iphone' | 'mac' | 'windows' | 'chromecast' | 'android-tv' | 'tv-box';
type InstallationStatus = 'installed' | 'not-installed';
type SupportType = 'app-problem' | 'connection-issue' | 'bug' | 'login-issue' | 'missing-content' | 'other';

interface SupportData {
  customerType: CustomerType | null;
  device: Device | null;
  hasInstalled: InstallationStatus | null;
  supportType: SupportType | null;
  description: string;
}

export const CustomerSupportOnboarding = ({ onBackToLanding }: CustomerSupportOnboardingProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [supportData, setSupportData] = useState<SupportData>({
    customerType: null,
    device: null,
    hasInstalled: null,
    supportType: null,
    description: ''
  });

  const devices = [
    { id: 'tv' as Device, name: 'Smart TV', icon: Tv },
    { id: 'android' as Device, name: 'Android', icon: Smartphone },
    { id: 'iphone' as Device, name: 'iPhone', icon: Smartphone },
    { id: 'mac' as Device, name: 'Mac', icon: Monitor },
    { id: 'windows' as Device, name: 'Windows', icon: Laptop },
    { id: 'chromecast' as Device, name: 'Chromecast', icon: Cast },
    { id: 'android-tv' as Device, name: 'Android TV', icon: Tv },
    { id: 'tv-box' as Device, name: 'TV Box', icon: Monitor }
  ];

  const supportTypes = [
    { id: 'app-problem' as SupportType, name: 'Problema no aplicativo', icon: Bug, description: 'App travando ou fechando' },
    { id: 'connection-issue' as SupportType, name: 'Problema de conexão', icon: Wifi, description: 'Buffering ou não carrega' },
    { id: 'bug' as SupportType, name: 'Bug no aplicativo', icon: AlertCircle, description: 'Funcionalidade não funciona' },
    { id: 'login-issue' as SupportType, name: 'Não consegue entrar', icon: HelpCircle, description: 'Problemas com login' },
    { id: 'missing-content' as SupportType, name: 'Conteúdo em falta', icon: PlayCircle, description: 'Canal ou programa não aparece' },
    { id: 'other' as SupportType, name: 'Outro problema', icon: MessageCircle, description: 'Descreva seu problema' }
  ];

  const handleCustomerTypeSelect = (type: CustomerType) => {
    setSupportData(prev => ({ ...prev, customerType: type }));
    if (type === 'new') {
      setCurrentStep(2);
    } else {
      setCurrentStep(2);
    }
  };

  const handleDeviceSelect = (device: Device) => {
    setSupportData(prev => ({ ...prev, device }));
    setCurrentStep(3);
  };

  const handleInstallationStatus = (status: InstallationStatus) => {
    setSupportData(prev => ({ ...prev, hasInstalled: status }));
    if (status === 'installed') {
      setCurrentStep(4);
    } else {
      setCurrentStep(5); // Tutorial step
    }
  };

  const handleSupportTypeSelect = (type: SupportType) => {
    setSupportData(prev => ({ ...prev, supportType: type }));
    setCurrentStep(6); // Final step
  };

  const generateWhatsAppMessage = () => {
    const deviceName = devices.find(d => d.id === supportData.device)?.name || '';
    const supportTypeName = supportTypes.find(s => s.id === supportData.supportType)?.name || '';

    const message = `*SOLICITAÇÃO DE SUPORTE KICK TV*

*Tipo de Cliente:* ${supportData.customerType === 'existing' ? 'Cliente Existente' : 'Novo Cliente'}
*Dispositivo:* ${deviceName}
*IPTV Instalado:* ${supportData.hasInstalled === 'installed' ? 'Sim' : 'Não'}
*Tipo de Suporte:* ${supportTypeName}

${supportData.description ? `*Descrição do Problema:*\n${supportData.description}` : ''}

---
*Equipe de Suporte Kick TV*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5511956076123?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Central de <span className="text-kick-green">Suporte</span>
        </h1>
        <p className="text-gray-300 text-lg">
          Estamos aqui para ajudar você a resolver qualquer problema
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {/* Step 1: Customer Type */}
        {currentStep === 1 && (
          <motion.div
            key="customer-type"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-xl text-center">
                  Você é novo ou já é nosso cliente?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Button
                    onClick={() => handleCustomerTypeSelect('new')}
                    variant="outline"
                    className="h-16 bg-white/5 border-white/10 hover:bg-kick-green hover:text-black text-white"
                  >
                    <div className="text-center">
                      <HelpCircle className="h-6 w-6 mx-auto mb-2" />
                      <div>Sou novo cliente</div>
                    </div>
                  </Button>
                  <Button
                    onClick={() => handleCustomerTypeSelect('existing')}
                    variant="outline"
                    className="h-16 bg-white/5 border-white/10 hover:bg-kick-green hover:text-black text-white"
                  >
                    <div className="text-center">
                      <CheckCircle className="h-6 w-6 mx-auto mb-2" />
                      <div>Já sou cliente</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Step 2: Device Selection */}
        {currentStep === 2 && (
          <motion.div
            key="device-selection"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-xl text-center">
                  Qual dispositivo você está usando?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2">
                  {devices.map((device) => {
                    const Icon = device.icon;
                    return (
                      <Button
                        key={device.id}
                        onClick={() => handleDeviceSelect(device.id)}
                        variant="outline"
                        className="h-20 bg-white/5 border-white/10 hover:bg-kick-green hover:text-black text-white"
                      >
                        <div className="text-center">
                          <Icon className="h-6 w-6 mx-auto mb-2" />
                          <div className="text-sm">{device.name}</div>
                        </div>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Step 3: Installation Status */}
        {currentStep === 3 && (
          <motion.div
            key="installation-status"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-xl text-center">
                  Você já instalou o IPTV no seu {devices.find(d => d.id === supportData.device)?.name}?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Button
                    onClick={() => handleInstallationStatus('installed')}
                    variant="outline"
                    className="h-16 bg-white/5 border-white/10 hover:bg-kick-green hover:text-black text-white"
                  >
                    <div className="text-center">
                      <CheckCircle className="h-6 w-6 mx-auto mb-2" />
                      <div>Sim, já está instalado</div>
                    </div>
                  </Button>
                  <Button
                    onClick={() => handleInstallationStatus('not-installed')}
                    variant="outline"
                    className="h-16 bg-white/5 border-white/10 hover:bg-kick-green hover:text-black text-white"
                  >
                    <div className="text-center">
                      <HelpCircle className="h-6 w-6 mx-auto mb-2" />
                      <div>Não, preciso instalar</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Step 4: Support Type Selection */}
        {currentStep === 4 && (
          <motion.div
            key="support-type"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-xl text-center">
                  Qual tipo de suporte você precisa?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {supportTypes.map((support) => {
                    const Icon = support.icon;
                    return (
                      <Button
                        key={support.id}
                        onClick={() => handleSupportTypeSelect(support.id)}
                        variant="outline"
                        className="h-20 bg-white/5 border-white/10 hover:bg-kick-green hover:text-black text-white text-left p-4"
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="h-6 w-6 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">{support.name}</div>
                            <div className="text-sm opacity-70">{support.description}</div>
                          </div>
                        </div>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Step 5: Tutorial (for not installed) */}
        {currentStep === 5 && (
          <motion.div
            key="tutorial"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-xl text-center">
                  Tutorial de Instalação
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="text-gray-300">
                  <p className="mb-4">
                    Vamos te ajudar a instalar o IPTV no seu {devices.find(d => d.id === supportData.device)?.name}!
                  </p>
                  <div className="bg-white/10 rounded-lg p-6 mb-6">
                    <PlayCircle className="h-16 w-16 mx-auto mb-4 text-kick-green" />
                    <p className="text-lg font-semibold mb-2">Vídeo Tutorial</p>
                    <p className="text-sm opacity-70">
                      Assista ao passo a passo completo para instalação no seu dispositivo
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button
                    onClick={() => {
                      // Here you would open the tutorial video
                      console.log('Opening tutorial for:', supportData.device);
                    }}
                    className="w-full bg-kick-green text-black hover:bg-kick-green-dark"
                  >
                    <PlayCircle className="h-5 w-5 mr-2" />
                    Assistir Tutorial
                  </Button>
                  <Button
                    onClick={() => setCurrentStep(4)}
                    variant="outline"
                    className="w-full bg-white/5 border-white/10 text-white hover:bg-white/10"
                  >
                    Já instalei, preciso de suporte
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Step 6: Final Step - Generate WhatsApp */}
        {currentStep === 6 && (
          <motion.div
            key="final"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-xl text-center">
                  Descreva seu problema (opcional)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <textarea
                  value={supportData.description}
                  onChange={(e) => setSupportData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Descreva detalhadamente o problema que está enfrentando..."
                  className="w-full h-32 p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-kick-green"
                />
                <div className="text-center space-y-4">
                  <Button
                    onClick={generateWhatsAppMessage}
                    className="w-full bg-kick-green text-black hover:bg-kick-green-dark text-lg py-6"
                  >
                    <MessageCircle className="h-6 w-6 mr-2" />
                    Enviar pelo WhatsApp
                  </Button>
                  <p className="text-sm text-gray-400">
                    Sua solicitação será enviada diretamente para nossa equipe de suporte
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8">
        <Button
          onClick={() => {
            if (currentStep > 1) {
              setCurrentStep(currentStep - 1);
            } else {
              onBackToLanding();
            }
          }}
          variant="outline"
          className="bg-white/5 border-white/10 text-white hover:bg-white/10"
        >
          Voltar
        </Button>
        
        <div className="text-white text-sm">
          Passo {currentStep} de {supportData.hasInstalled === 'not-installed' ? '5' : '6'}
        </div>
      </div>
    </div>
  );
};
