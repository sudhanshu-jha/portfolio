import { Component, useState } from 'react';

class SplineErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

function SplineFrame({ scene, className }) {
  const [loaded, setLoaded] = useState(false);

  // Convert splinecode URL to embed URL:
  // https://prod.spline.design/{id}/scene.splinecode → https://my.spline.design/{id}/
  const embedUrl = scene.replace(
    /^https?:\/\/prod\.spline\.design\/([^/]+)\/scene\.splinecode$/,
    'https://my.spline.design/$1/'
  );

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {!loaded && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: 32, height: 32,
            border: '2px solid rgba(99,179,237,0.3)',
            borderTopColor: '#63b3ed',
            borderRadius: '50%',
            animation: 'splineSpin 0.75s linear infinite',
          }} />
        </div>
      )}
      <iframe
        src={embedUrl}
        className={className}
        title="3D Hero"
        allowFullScreen
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          background: 'transparent',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s',
        }}
      />
      <style>{`@keyframes splineSpin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export function SplineScene({ scene, className }) {
  return (
    <SplineErrorBoundary>
      <SplineFrame scene={scene} className={className} />
    </SplineErrorBoundary>
  );
}
