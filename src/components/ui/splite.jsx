import { Component, useEffect, useRef, useState } from 'react';

class SplineErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

function SplineCanvas({ scene, className }) {
  const canvasRef = useRef(null);
  const appRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;
    let cancelled = false;

    import('@splinetool/runtime').then(({ Application }) => {
      if (cancelled || !canvasRef.current) return;
      const app = new Application(canvasRef.current);
      appRef.current = app;
      app.load(scene)
        .then(() => { if (!cancelled) setLoading(false); })
        .catch(() => { if (!cancelled) setLoading(false); });
    }).catch(() => {
      if (!cancelled) setLoading(false);
    });

    return () => {
      cancelled = true;
      if (appRef.current && typeof appRef.current.dispose === 'function') {
        appRef.current.dispose();
      }
    };
  }, [scene]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {loading && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: 32, height: 32,
            border: '2px solid rgba(99,179,237,0.4)',
            borderTopColor: '#63b3ed',
            borderRadius: '50%',
            animation: 'splineSpin 0.75s linear infinite',
          }} />
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={className}
        style={{ width: '100%', height: '100%', display: loading ? 'none' : 'block' }}
      />
      <style>{`@keyframes splineSpin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export function SplineScene({ scene, className }) {
  return (
    <SplineErrorBoundary>
      <SplineCanvas scene={scene} className={className} />
    </SplineErrorBoundary>
  );
}
