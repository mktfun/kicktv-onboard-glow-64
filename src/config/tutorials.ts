// Configuration for tutorial videos and download links by plan and device
export interface TutorialConfig {
  videoUrl?: string;
  downloadUrl?: string;
  additionalInfo?: string;
}

export interface TutorialsByPlan {
  [plan: string]: {
    [device: string]: TutorialConfig;
  };
}

export const tutorialConfigs: TutorialsByPlan = {
  essencial: {
    tv: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Essencial Iptv + p2p em Smart TV'
    },
    android: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Essencial Iptv + p2p em Android'
    },
    iphone: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Essencial Iptv + p2p em iPhone'
    },
    mac: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Essencial Iptv + p2p em Mac'
    },
    windows: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Essencial Iptv + p2p em Windows'
    },
    chromecast: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Essencial Iptv + p2p em Chromecast'
    },
    'android-tv': {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Essencial Iptv + p2p em Android TV'
    },
    'tv-box': {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Essencial Iptv + p2p em TV Box'
    }
  },
  krator: {
    tv: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do krator + em Smart TV'
    },
    android: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do krator + em Android'
    },
    windows: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do krator + em Windows'
    },
    chromecast: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do krator + em Chromecast'
    },
    'android-tv': {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do krator + em Android TV'
    },
    'tv-box': {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do krator + em TV Box'
    }
    // Note: iPhone and Mac are not available for krator + plan
  },
  nexus: {
    tv: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Nexus em Smart TV'
    },
    android: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Nexus em Android'
    },
    windows: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Nexus em Windows'
    },
    chromecast: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Nexus em Chromecast'
    },
    'android-tv': {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Nexus em Android TV'
    },
    'tv-box': {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Nexus em TV Box'
    }
    // Note: iPhone and Mac are not available for Nexus plan
  },
  whot: {
    windows: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para acesso ao whot no navegador Windows'
    },
    mac: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para acesso ao whot no navegador Mac'
    },
    android: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para acesso ao whot no navegador Android'
    },
    iphone: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para acesso ao whot no navegador iPhone'
    }
    // Note: whot only works in browser, no app installation needed
  }
};

// Helper function to get tutorial config for a specific plan and device
export const getTutorialConfig = (plan: string, device: string): TutorialConfig | null => {
  return tutorialConfigs[plan]?.[device] || null;
};
