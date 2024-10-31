import TokenDebugger from './components/TokenDebugger';

function App() {
  return (
    <>
      {process.env.NODE_ENV === 'development' && <TokenDebugger />}
      {/* ... resto de tu aplicación ... */}
    </>
  );
} 