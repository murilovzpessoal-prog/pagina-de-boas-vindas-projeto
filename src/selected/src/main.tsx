import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SelectedOnboardingApp from './selected/SelectedOnboardingApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SelectedOnboardingApp />
  </StrictMode>
);
