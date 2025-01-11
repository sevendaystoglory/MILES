import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import DownloadButton from '../components/DownloadButton';

const Index = () => {
  const handleDownload = () => {
    // Replace with actual extension download URL
    window.open('https://chrome.google.com/webstore/category/extensions', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-background to-secondary">
      <div className="w-full max-w-6xl mx-auto text-center space-y-12">
        <div className="space-y-6 fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            What will you say next?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover New ways to reply with MILES
          </p>
        </div>

        <div className="fade-in" style={{ animationDelay: '0.2s' }}>
          <VideoPlayer videoUrl="https://your-video-url.mp4" />
        </div>

        <div className="space-y-8 fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col items-center gap-6">
            <DownloadButton onClick={handleDownload} />
          </div>
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              Transform your browser into a powerful engagement platform
            </p>
            <p className="text-muted-foreground">
              Track, analyze, and optimize your digital interactions effortlessly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;