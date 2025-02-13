import './src/utils/timerFix';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';

// Polyfill pour setImmediate
if (typeof setImmediate === 'undefined') {
  global.setImmediate = (callback) => requestAnimationFrame(callback);
}

export default function App() {
  return (
    <>  
      <AppNavigator />
      <StatusBar style="auto" />
    </>
  );
}