import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle, Monitor, Smartphone, Tv, Laptop, Cast, HelpCircle, Bug, Wifi, AlertCircle, PlayCircle, MessageCircle, Download, ExternalLink } from "lucide-react";
import { getTutorialConfig } from "../config/tutorials";

interface CustomerSupportOnboardingProps {
  onBackToLanding: () => void;
}

type CustomerType = 'new' | 'existing';
type Plan = 'essencial' | 'nexus' | 'krator' | 'whot';
type Device = 'tv' | 'android' | 'iphone' | 'mac' | 'windows' | 'chromecast' | 'android-tv' | 'tv-box';
type InstallationStatus = 'installed' | 'not-installed';
type SupportType = 'app-problem' | 'connection-issue' | 'bug' | 'login-issue' | 'missing-content' | 'other';

interface SupportData {
  customerType: CustomerType | null;
  plan: Plan | null;
  device: Device | null;
  hasInstalled: InstallationStatus | null;
  supportType: SupportType | null;
  description: string;
}

export const CustomerSupportOnboarding = ({ onBackToLanding }: CustomerSupportOnboardingProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [supportData, setSupportData] = useState<SupportData>({
    customerType: null,
    plan: null,
    device: null,
    hasInstalled: null,
    supportType: null,
    description: ''
  });

  // Reset state when going back to previous steps that affect later choices
  const resetDependentState = (fromStep: number) => {
    setSupportData(prev => {
      const newData = { ...prev };

      // If going back to plan selection, reset device and everything after
      if (fromStep <= 2) {
        newData.plan = null;
        newData.device = null;
        newData.hasInstalled = null;
        newData.supportType = null;
        newData.description = '';
      }
      // If going back to device selection, reset installation status and everything after
      else if (fromStep <= 3) {
        newData.device = null;
        newData.hasInstalled = null;
        newData.supportType = null;
        newData.description = '';
      }
      // If going back to installation status, reset support type and description
      else if (fromStep <= 4) {
        newData.hasInstalled = null;
        newData.supportType = null;
        newData.description = '';
      }
      // If going back to support type selection, reset description
      else if (fromStep <= 5) {
        newData.supportType = null;
        newData.description = '';
      }

      return newData;
    });
  };

  // Get the correct step flow based on current state
  const getStepFlow = () => {
    const flow = [1, 2, 3, 4]; // customer type, plan, device, installation status

    if (supportData.hasInstalled === 'installed') {
      flow.push(5, 7); // support type selection, final step
    } else if (supportData.hasInstalled === 'not-installed') {
      flow.push(6); // tutorial step
    } else if (currentStep >= 5) {
      // If we're at step 5 or beyond but installation status is not set,
      // we need to determine the flow
      flow.push(5, 7); // default to support flow
    }

    return flow;
  };

  // Smart navigation that respects the flow
  const navigateToStep = (targetStep: number, resetState = true) => {
    if (resetState && targetStep < currentStep) {
      resetDependentState(targetStep);
    }
    setCurrentStep(targetStep);
  };

  // Get previous step in the flow
  const getPreviousStep = () => {
    const flow = getStepFlow();
    const currentIndex = flow.indexOf(currentStep);
    if (currentIndex > 0) {
      return flow[currentIndex - 1];
    }
    return 1;
  };

  // Get total steps for display
  const getTotalSteps = () => {
    if (supportData.hasInstalled === 'not-installed') {
      return 6;
    } else if (supportData.hasInstalled === 'installed') {
      return 7;
    }
    return 7; // default
  };

  const plans = [
    { id: 'essencial' as Plan, name: 'Essencial Iptv + p2p', description: 'Plano básico com canais essenciais' },
    { id: 'nexus' as Plan, name: 'Nexus', description: 'Plano avançado (não disponível para iPhone/Mac)' },
    { id: 'krator' as Plan, name: 'krator +', description: 'Plano especializado (não disponível para iPhone/Mac)' },
    { id: 'whot' as Plan, name: 'whot', description: 'Funciona apenas no navegador' }
  ];

  const allDevices = [
    { id: 'tv' as Device, name: 'Smart TV', icon: Tv },
    { id: 'android' as Device, name: 'Android', icon: Smartphone },
    { id: 'iphone' as Device, name: 'iPhone', icon: Smartphone },
    { id: 'mac' as Device, name: 'Mac', icon: Monitor },
    { id: 'windows' as Device, name: 'Windows', icon: Laptop },
    { id: 'chromecast' as Device, name: 'Chromecast', icon: Cast },
    { id: 'android-tv' as Device, name: 'Android TV', icon: Tv },
    { id: 'tv-box' as Device, name: 'TV Box', icon: Monitor }
  ];

  // Filter devices based on selected plan
  const getAvailableDevices = () => {
    if (supportData.plan === 'krator' || supportData.plan === 'nexus') {
      return allDevices.filter(device => device.id !== 'iphone' && device.id !== 'mac');
    }
    if (supportData.plan === 'whot') {
      // whot only works in browser, so only allow devices that can run browsers
      return allDevices.filter(device =>
        device.id === 'windows' ||
        device.id === 'mac' ||
        device.id === 'android' ||
        device.id === 'iphone'
      );
    }
    return allDevices;
  };

  const devices = getAvailableDevices();

  // Run validation when plan changes to ensure device compatibility
  useEffect(() => {
    if (supportData.plan && supportData.device) {
      const availableDevices = getAvailableDevices();
      const isDeviceCompatible = availableDevices.some(d => d.id === supportData.device);
      if (!isDeviceCompatible) {
        setSupportData(prev => ({
          ...prev,
          device: null,
          hasInstalled: null,
          supportType: null,
          description: ''
        }));
        if (currentStep > 3) {
          setCurrentStep(3);
        }
      }
    }
  }, [supportData.plan]); // Only run when plan changes

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
    navigateToStep(2, false); // Go to plan selection
  };

  const handlePlanSelect = (plan: Plan) => {
    setSupportData(prev => ({
      ...prev,
      plan,
      device: null, // Reset device when plan changes
      hasInstalled: null, // Reset installation status
      supportType: null, // Reset support type
      description: '' // Reset description
    }));
    navigateToStep(3, false); // Go to device selection, don't reset state as we just did it
  };

  const handleDeviceSelect = (device: Device) => {
    setSupportData(prev => ({
      ...prev,
      device,
      hasInstalled: null, // Reset installation status when device changes
      supportType: null, // Reset support type
      description: '' // Reset description
    }));
    navigateToStep(4, false); // Go to installation status
  };

  const handleInstallationStatus = (status: InstallationStatus) => {
    setSupportData(prev => ({
      ...prev,
      hasInstalled: status,
      supportType: null, // Reset support type when installation status changes
      description: '' // Reset description
    }));
    if (status === 'installed') {
      navigateToStep(5, false); // Go to support type selection
    } else {
      navigateToStep(6, false); // Go to tutorial step
    }
  };

  const handleSupportTypeSelect = (type: SupportType) => {
    setSupportData(prev => ({ ...prev, supportType: type }));
    navigateToStep(7, false); // Final step
  };

  const generateWhatsAppMessage = () => {
    const planName = plans.find(p => p.id === supportData.plan)?.name || '';
    const deviceName = allDevices.find(d => d.id === supportData.device)?.name || '';
    const supportTypeName = supportTypes.find(s => s.id === supportData.supportType)?.name || '';

    const message = `*SOLICITAÇÃO DE SUPORTE KICK TV*

*Tipo de Cliente:* ${supportData.customerType === 'existing' ? 'Cliente Existente' : 'Novo Cliente'}
*Plano:* ${planName}
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
                    className="h-16 bg-white/5 border-white/10 hover:bg-kick-green hover:text-black text-white flex flex-col items-center justify-center"
                  >
                    <HelpCircle className="h-6 w-6 mb-2" />
                    <div className="text-sm">Sou novo cliente</div>
                  </Button>
                  <Button
                    onClick={() => handleCustomerTypeSelect('existing')}
                    variant="outline"
                    className="h-16 bg-white/5 border-white/10 hover:bg-kick-green hover:text-black text-white flex flex-col items-center justify-center"
                  >
                    <CheckCircle className="h-6 w-6 mb-2" />
                    <div className="text-sm">Já sou cliente</div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Step 2: Plan Selection */}
        {currentStep === 2 && (
          <motion.div
            key="plan-selection"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-xl text-center">
                  Qual é o seu plano?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {plans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => handlePlanSelect(plan.id)}
                    className="w-full h-auto min-h-[80px] bg-white/5 border border-white/10 hover:bg-kick-green hover:text-black text-white text-left p-4 rounded-md transition-colors overflow-hidden"
                    style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                  >
                    <div className="w-full max-w-full overflow-hidden">
                      <div
                        className="font-semibold text-base mb-1"
                        style={{
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                          hyphens: 'auto',
                          maxWidth: '100%'
                        }}
                      >
                        {plan.name}
                      </div>
                      <div
                        className="text-sm opacity-70 leading-relaxed"
                        style={{
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                          hyphens: 'auto',
                          maxWidth: '100%'
                        }}
                      >
                        {plan.description}
                      </div>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Step 3: Device Selection */}
        {currentStep === 3 && (
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
                  {(supportData.plan === 'krator' || supportData.plan === 'nexus') && (
                    <p className="text-sm text-yellow-400 mt-2">
                      * iPhone e Mac não são compatíveis com o plano {plans.find(p => p.id === supportData.plan)?.name}
                    </p>
                  )}
                  {supportData.plan === 'whot' && (
                    <p className="text-sm text-blue-400 mt-2">
                      * O plano whot funciona apenas no navegador
                    </p>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                  {devices.map((device) => {
                    const Icon = device.icon;
                    return (
                      <Button
                        key={device.id}
                        onClick={() => handleDeviceSelect(device.id)}
                        variant="outline"
                        className="h-20 bg-white/5 border-white/10 hover:bg-kick-green hover:text-black text-white flex flex-col items-center justify-center"
                      >
                        <Icon className="h-6 w-6 mb-2" />
                        <div className="text-sm text-center">{device.name}</div>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Step 4: Installation Status */}
        {currentStep === 4 && (
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
                  Você já instalou o IPTV no seu {allDevices.find(d => d.id === supportData.device)?.name}?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Button
                    onClick={() => handleInstallationStatus('installed')}
                    variant="outline"
                    className="h-16 bg-white/5 border-white/10 hover:bg-kick-green hover:text-black text-white flex flex-col items-center justify-center"
                  >
                    <CheckCircle className="h-6 w-6 mb-2" />
                    <div className="text-sm text-center">Sim, já está instalado</div>
                  </Button>
                  <Button
                    onClick={() => handleInstallationStatus('not-installed')}
                    variant="outline"
                    className="h-16 bg-white/5 border-white/10 hover:bg-kick-green hover:text-black text-white flex flex-col items-center justify-center"
                  >
                    <HelpCircle className="h-6 w-6 mb-2" />
                    <div className="text-sm text-center">Não, preciso instalar</div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Step 5: Support Type Selection */}
        {currentStep === 5 && (
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
                        className="h-20 bg-white/5 border-white/10 hover:bg-kick-green hover:text-black text-white text-left p-4 flex items-center justify-start"
                      >
                        <div className="flex items-center space-x-3 w-full">
                          <Icon className="h-6 w-6 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold break-words">{support.name}</div>
                            <div className="text-sm opacity-70 break-words">{support.description}</div>
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

        {/* Step 6: Tutorial (for not installed) */}
        {currentStep === 6 && (
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
              <CardContent className="space-y-6">
                {(() => {
                  const tutorialConfig = getTutorialConfig(supportData.plan!, supportData.device!);
                  const planName = plans.find(p => p.id === supportData.plan)?.name;
                  const deviceName = allDevices.find(d => d.id === supportData.device)?.name;

                  return (
                    <div className="text-gray-300">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Tutorial de Instalação
                        </h3>
                        <p className="text-gray-300">
                          Vamos te ajudar a instalar o {planName} no seu {deviceName}!
                        </p>
                      </div>

                      {tutorialConfig ? (
                        <div className="space-y-6">
                          {/* Video Section */}
                          {tutorialConfig.videoId && (
                            <div className="bg-white/5 rounded-lg p-4">
                              <div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
                                <iframe
                                  width="100%"
                                  height="100%"
                                  src={`https://www.youtube.com/embed/${tutorialConfig.videoId}`}
                                  title="Tutorial Video"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  className="w-full h-full"
                                ></iframe>
                              </div>
                              <p className="text-sm text-center opacity-70">
                                {tutorialConfig.additionalInfo}
                              </p>
                            </div>
                          )}

                          {/* Download Section */}
                          {tutorialConfig.downloadUrl && (
                            <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                              <div className="flex items-center space-x-3 mb-3">
                                <Download className="h-6 w-6 text-blue-400" />
                                <div>
                                  <p className="font-semibold text-blue-400">Download Direto</p>
                                  <p className="text-sm opacity-70">Baixe o aplicativo</p>
                                </div>
                              </div>
                              <Button
                                onClick={() => {
                                  if (tutorialConfig.downloadUrl) {
                                    window.open(tutorialConfig.downloadUrl, '_blank');
                                  }
                                }}
                                variant="outline"
                                className="w-full bg-blue-500/20 border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white"
                              >
                                <Download className="h-4 w-4 mr-2" />
                                Baixar Aplicativo
                              </Button>
                            </div>
                          )}

                          {/* Step by Step Instructions */}
                          <div className="bg-white/5 rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-4">
                              <div className="bg-kick-green rounded-full p-2">
                                <AlertCircle className="h-5 w-5 text-black" />
                              </div>
                              <h4 className="font-semibold text-white">Passo a Passo</h4>
                            </div>

                            <div className="space-y-4">
                              {tutorialConfig.steps.map((step, index) => (
                                <div key={index} className="flex space-x-4">
                                  <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-kick-green rounded-full flex items-center justify-center">
                                      <span className="text-black text-sm font-bold">{step.step}</span>
                                    </div>
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="font-semibold text-white mb-1">{step.title}</h5>
                                    <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-yellow-500/20 rounded-lg p-6 text-center">
                          <AlertCircle className="h-16 w-16 mx-auto mb-4 text-yellow-400" />
                          <p className="text-lg font-semibold mb-2 text-white">Tutorial em Preparação</p>
                          <p className="text-sm opacity-70">
                            O tutorial para {planName} em {deviceName} ainda está sendo preparado.
                            Entre em contato conosco para receber suporte personalizado.
                          </p>
                        </div>
                      )}

                      <div className="text-center">
                        <Button
                          onClick={() => {
                            setSupportData(prev => ({ ...prev, hasInstalled: 'installed' }));
                            navigateToStep(5, false);
                          }}
                          variant="outline"
                          className="w-full bg-white/5 border-white/10 text-white hover:bg-white/10"
                        >
                          Já instalei, preciso de suporte
                        </Button>
                      </div>
                    </div>
                  );
                })()}
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Step 7: Final Step - Generate WhatsApp */}
        {currentStep === 7 && (
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
              const previousStep = getPreviousStep();
              navigateToStep(previousStep);
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
          Passo {currentStep} de {getTotalSteps()}
        </div>
      </div>
    </div>
  );
};
