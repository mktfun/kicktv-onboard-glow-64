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
  starter: {
    tv: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Starter em Smart TV'
    },
    android: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Starter em Android'
    },
    iphone: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Starter em iPhone'
    },
    mac: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Starter em Mac'
    },
    windows: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Starter em Windows'
    },
    chromecast: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Starter em Chromecast'
    },
    'android-tv': {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Starter em Android TV'
    },
    'tv-box': {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Starter em TV Box'
    }
  },
  premium: {
    tv: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Premium em Smart TV'
    },
    android: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Premium em Android'
    },
    iphone: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Premium em iPhone'
    },
    mac: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Premium em Mac'
    },
    windows: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Premium em Windows'
    },
    chromecast: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Premium em Chromecast'
    },
    'android-tv': {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Premium em Android TV'
    },
    'tv-box': {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Premium em TV Box'
    }
  },
  krator: {
    tv: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Krator+ em Smart TV'
    },
    android: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Krator+ em Android'
    },
    windows: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Krator+ em Windows'
    },
    chromecast: {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Krator+ em Chromecast'
    },
    'android-tv': {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Krator+ em Android TV'
    },
    'tv-box': {
      videoUrl: '', // Add your video URL here
      downloadUrl: '', // Add your download URL here
      additionalInfo: 'Tutorial para instalação do Krator+ em TV Box'
    }
    // Note: iPhone and Mac are not available for Krator+ plan
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
  }
};

// Helper function to get tutorial config for a specific plan and device
export const getTutorialConfig = (plan: string, device: string): TutorialConfig | null => {
  return tutorialConfigs[plan]?.[device] || null;
};
