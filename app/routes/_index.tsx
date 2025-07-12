
import { useState } from 'react';
import {MenuItems} from "~/data/menuItems";
import AboutMe from "~/components/AboutMe";
import Contacts from "~/components/Contacts";
import Resume from "~/components/Resume";
import Projects from "~/components/Projects";
import {ChevronLeft} from "lucide-react";
import {Card} from "~/components/ui/card";
import {Button} from "~/components/ui/button";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const menuItems = MenuItems;

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <AboutMe />;
      case 'resume':
        return <Resume />;
      case 'projects':
        return <Projects />;
      case 'contacts':
        return <Contacts />;
      default:
        return null;
    }
  };

  const handleBack = () => {
    setActiveSection(null);
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background particles effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-3/4 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10">
          {/* Main Menu View */}
          <div className={`transition-all duration-700 ease-in-out ${
              activeSection ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
          }`}>
            <div className="min-h-screen flex flex-col items-center justify-center p-8">
              {/* Header */}
              <div className="text-center mb-12 animate-fade-in">
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  Software Engineer
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
                  Senior Solution Architect with Hands-on Expertise
                </p>
              </div>

              {/* Menu Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
                {menuItems.map((item, index) => (
                    <Card
                        key={item.id}
                        className={`group cursor-pointer border-0 bg-gradient-to-br ${item.color} p-[1px] hover:scale-105 transition-all duration-300 animate-fade-in`}
                        style={{
                          animationDelay: `${index * 200}ms`
                        }}
                        onClick={() => setActiveSection(item.id)}
                    >
                      <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg p-8 h-full flex flex-col items-center justify-center text-center group-hover:bg-slate-800/90 transition-colors">
                        <item.icon className="w-12 h-12 mb-4 text-white group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-semibold text-white">{item.label}</h3>
                      </div>
                    </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Content View */}
          <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              activeSection ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`}>
            {activeSection && (
                <div className="min-h-screen p-8">
                  {/* Back Button */}
                  <Button
                      onClick={handleBack}
                      variant="ghost"
                      className="mb-8 text-white hover:bg-white/10 animate-fade-in"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Back to Menu
                  </Button>

                  {/* Content */}
                  <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                    {renderContent()}
                  </div>
                </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default Index;