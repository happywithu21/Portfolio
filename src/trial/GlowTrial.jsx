import React from 'react';

/**
 * TRIAL COMPONENT: Glow Demonstration
 * This shows the soft glow effect in isolation.
 */
const GlowTrial = () => {
  return (
    <div style={{ backgroundColor: '#0a0a0a', padding: '100px', display: 'flex', gap: '40px', justifyContent: 'center' }}>
      <div className="data-card glow-orange" style={{ width: '300px' }}>
        <h3 className="mono" style={{ color: 'var(--brand-orange)' }}>ORANGE GLOW</h3>
        <p style={{ opacity: 0.7 }}>Minimal, professional rim light effect.</p>
      </div>

      <div className="data-card glow-purple" style={{ width: '300px' }}>
        <h3 className="mono" style={{ color: '#c084fc' }}>PURPLE GLOW</h3>
        <p style={{ opacity: 0.7 }}>Soft, aesthetic depth from your reference.</p>
      </div>
    </div>
  );
};

export default GlowTrial;
