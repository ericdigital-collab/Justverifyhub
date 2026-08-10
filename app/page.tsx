'use client';
import { useState } from 'react';

export default function Marketplace() {
  const [wallet, setWallet] = useState(415);
  const [activeTab, setActiveTab] = useState('all');

  const products = [
    { id: 1, category: 'facebook', name: 'Foreign Facebook Accounts', price: '₦1,000', stock: '98 pcs', hot: true },
    { id: 2, category: 'twitter', name: 'X (Twitter) Accounts | Verified', price: '₦1,000', stock: '45 pcs', hot: true },
    { id: 3, category: 'tiktok', name: 'Hacked TikTok 1300+ Real Followers', price: '₦15,000', stock: 'Out of stock', hot: false },
    { id: 4, category: 'instagram', name: 'Foreign Instagram 5000-10000 Followers', price: '₦10,000', stock: '5 pcs', hot: false },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#f8f9fa', minHeight: '100vh', paddingBottom: '50px' }}>
      {/* Top Header */}
      <header style={{ background: '#ffffff', padding: '15px 20px', borderBottom: '1px solid #eaeaea', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ background: '#0085ff', color: '#fff', padding: '8px 12px', borderRadius: '8px', fontWeight: 'bold' }}>⚡</div>
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#111' }}>TopVerified <span style={{ fontSize: '12px', background: '#e1f0ff', color: '#0066cc', padding: '2px 6px', borderRadius: '4px' }}>MARKETPLACE</span></span>
        </div>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <span style={{ background: '#e8f5e9', color: '#2e7d32', padding: '6px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold' }}>Wallet: ₦{wallet}</span>
        </div>
      </header>

      {/* Hero Banner */}
      <div style={{ background: 'linear-gradient(135deg, #0066cc, #0085ff)', color: '#fff', padding: '30px 20px', textAlign: 'center', margin: '15px', borderRadius: '12px' }}>
        <h2 style={{ margin: '0 0 10px 0', fontSize: '22px' }}>Premium Social Media Accounts</h2>
        <p style={{ margin: '0 0 15px 0', fontSize: '14px', opacity: 0.9 }}>Verified accounts across all major platforms. Instant delivery, 24/7 support.</p>
        <button style={{ background: '#fff', color: '#0066cc', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>⚡ Shop Now</button>
      </div>

      {/* Search Bar */}
      <div style={{ padding: '0 15px', marginBottom: '15px' }}>
        <input type="text" placeholder="Search products or categories..." style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', fontSize: '14px' }} />
      </div>

      {/* Category Pills */}
      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', padding: '0 15px 15px 15px', whiteSpace: 'nowrap' }}>
        {['Popular', 'Instagram', 'TikTok', 'YouTube', 'Twitter', 'Facebook', 'VPN'].map((cat) => (
          <button key={cat} onClick={() => setActiveTab(cat.toLowerCase())} style={{ background: '#fff', border: '1px solid #ddd', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', cursor: 'pointer' }}>
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div style={{ padding: '0 15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h3 style={{ fontSize: '16px', color: '#333', margin: 0 }}>🔥 Cheap Giveaway Accounts</h3>
          <span style={{ fontSize: '13px', color: '#0066cc', cursor: 'pointer' }}>View All →</span>
        </div>

        <div style={{ display: 'grid', gap: '10px' }}>
          {products.map((item) => (
            <div key={item.id} style={{ background: '#fff', padding: '15px', borderRadius: '10px', border: '1px solid #eaeaea', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '5px' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '14px', color: '#222' }}>{item.name}</span>
                  {item.hot && <span style={{ background: '#ffebee', color: '#c62828', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>98 pcs</span>}
                </div>
                <span style={{ fontSize: '13px', color: '#0085ff', fontWeight: 'bold' }}>{item.price}</span>
              </div>
              <button style={{ background: '#0085ff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>
                Buy →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Live Activity Section */}
      <div style={{ margin: '20px 15px', background: '#fff', padding: '15px', borderRadius: '10px', border: '1px solid #eaeaea' }}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#444' }}>🔴 LIVE ACTIVITY</h4>
        <div style={{ fontSize: '13px', color: '#666', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div>🟢 <strong>Eri***</strong> signed in <span style={{ float: 'right', color: '#999' }}>just now</span></div>
          <div>🟢 <strong>Amg***</strong> signed in <span style={{ float: 'right', color: '#999' }}>just now</span></div>
          <div>🔵 <strong>Mid***</strong> bought Foreign Old 3Years+ Facebook <span style={{ float: 'right', color: '#999' }}>1 min ago</span></div>
        </div>
      </div>
    </div>
  );
}

