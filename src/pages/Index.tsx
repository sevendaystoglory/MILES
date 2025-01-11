import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import DownloadButton from '../components/DownloadButton';
import { Button } from '../components/ui/button';
import { Github } from 'lucide-react';

const Index = () => {
  const handleDownload = () => {
    // Replace with actual extension download URL
    window.open('https://chrome.google.com/webstore/category/extensions', '_blank');
  };

  const handleGithubSupport = () => {
    // Replace with actual GitHub repository URL
    window.open('https://github.com/yourusername/miles', '_blank');
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <DownloadButton onClick={handleDownload} />
            <Button 
              variant="outline" 
              onClick={handleGithubSupport}
              className="hover-scale"
            >
              <Github className="mr-2" />
              Support on GitHub
            </Button>
          </div>
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              We understand it's not always easy to reply to a debate, spark a conversation, or persuade someone about a long-term goal. That's where Miles comes in to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;