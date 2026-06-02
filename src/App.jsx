import React, { useState } from 'react';
import HomeView from './views/Home/HomeView';
import AetherView from './views/Landings/AetherAI/AetherView';
import BioRootView from './views/Landings/BioRoot/BioRootView';
import ZenithView from './views/Landings/ZenithWatches/ZenithView';
import FinFlowView from './views/Landings/FinFlow/FinFlowView';
import ApexView from './views/Landings/ApexSpace/ApexView';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'aether':
        return <AetherView onViewChange={setCurrentView} />;
      case 'bioroot':
        return <BioRootView onViewChange={setCurrentView} />;
      case 'zenith':
        return <ZenithView onViewChange={setCurrentView} />;
      case 'finflow':
        return <FinFlowView onViewChange={setCurrentView} />;
      case 'apex':
        return <ApexView onViewChange={setCurrentView} />;
      default:
        return <HomeView onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="app-container">
      {renderView()}
    </div>
  );
}

export default App;

