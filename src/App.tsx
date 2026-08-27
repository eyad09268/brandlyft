import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LiveWallpaper } from './components/LiveWallpaper';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { CampaignModal } from './components/CampaignModal';
import { ToastContainer } from './components/ToastContainer';

import { HomePage } from './pages/HomePage';
import { CreatorsPage } from './pages/CreatorsPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { PricingPage } from './pages/PricingPage';
import { DashboardPage } from './pages/DashboardPage';

import { ColorTheme } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [colorTheme, setColorTheme] = useState<ColorTheme>('cyber-violet');
  
  // Modals
  const [selectedVideo, setSelectedVideo] = useState<any | null>(null);
  const [isCampaignModalOpen, setIsCampaignModalOpen] = useState<boolean>(false);
  const [campaignCreator, setCampaignCreator] = useState<string | null>(null);

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 4000);
  };

  const handleOpenCampaignModal = (creatorName?: string) => {
    setCampaignCreator(creatorName || null);
    setIsCampaignModalOpen(true);
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-between selection:bg-pink-500 selection:text-white">
      
      {/* GPU Accelerated Animated Wallpaper */}
      <LiveWallpaper theme={colorTheme} />

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        
        {/* Navigation Bar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          colorTheme={colorTheme}
          setColorTheme={(theme) => {
            setColorTheme(theme);
            showToast(`Applied ${theme.replace('-', ' ')} accent color theme!`);
          }}
          onOpenCampaignModal={() => handleOpenCampaignModal()}
        />

        {/* Dynamic Page Views */}
        <main className="flex-1">
          {activeTab === 'home' && (
            <HomePage
              onOpenVideoModal={setSelectedVideo}
              onOpenCampaignModal={handleOpenCampaignModal}
              setActiveTab={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onShowToast={showToast}
            />
          )}

          {activeTab === 'creators' && (
            <CreatorsPage
              onOpenVideoModal={setSelectedVideo}
              onOpenCampaignModal={handleOpenCampaignModal}
              onShowToast={showToast}
            />
          )}

          {activeTab === 'case-studies' && (
            <CaseStudiesPage
              onOpenVideoModal={setSelectedVideo}
              onOpenCampaignModal={handleOpenCampaignModal}
              onShowToast={showToast}
            />
          )}

          {activeTab === 'pricing' && (
            <PricingPage
              onOpenCampaignModal={handleOpenCampaignModal}
              onShowToast={showToast}
            />
          )}

          {activeTab === 'dashboard' && (
            <DashboardPage
              onOpenVideoModal={setSelectedVideo}
              onOpenCampaignModal={handleOpenCampaignModal}
              onShowToast={showToast}
            />
          )}
        </main>

        {/* Universal Footer */}
        <Footer
          setActiveTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenCampaignModal={() => handleOpenCampaignModal()}
          onShowToast={showToast}
        />

      </div>

      {/* Interactive Lightbox Video Reel Modal */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onHireCreator={(creatorName) => {
          handleOpenCampaignModal(creatorName);
          showToast(`Selected creator: ${creatorName}`);
        }}
      />

      {/* Campaign Launcher Wizard Modal */}
      <CampaignModal
        isOpen={isCampaignModalOpen}
        onClose={() => setIsCampaignModalOpen(false)}
        preselectedCreator={campaignCreator}
      />

      {/* Floating Toast Notification Container */}
      <ToastContainer
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

    </div>
  );
}
