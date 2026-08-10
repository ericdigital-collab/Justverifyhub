import { Menu, Plus, User, ShoppingCart, Globe } from "lucide-react";

function App() {
  const services = [
    { name: "Airbnb", server: "Server 3", price: 420, flag: "🇺🇸" },
    { name: "1688", server: "Server 3", price: 420, flag: "🇺🇸" },
    { name: "1Q", server: "Server 3", price: 180, flag: "🇺🇸" },
    { name: "2RedBeans", server: "Server 3", price: 180, flag: "🇺🇸" },
    { name: "360NRS", server: "Server 3", price: 250, flag: "🇺🇸" }
  ];

  return (
    <div className="app">

      <header className="header">
        <button className="menu">
          <Menu size={25} />
        </button>

        <h1>USA Numbers</h1>

        <div className="header-actions">
          <button className="add">
            <Plus size={28} />
          </button>

          <button className="profile">
            <User size={23} />
          </button>
        </div>
      </header>

      <main className="content">

        <div className="balance">
          <div>
            <span>Balance</span>
            <strong>₦3,750</strong>
          </div>

          <button>
            <Plus size={25} />
          </button>
        </div>

        <div className="service-list">

          {services.map((service) => (
            <div className="service-card" key={service.name}>

              <div className="service-top">
                <div className="service-info">
                  <div className="service-icon">
                    <Globe size={23} />
                  </div>

                  <div>
                    <h2>{service.name}</h2>
                    <p>{service.server}</p>
                  </div>
                </div>

                <span className="flag">{service.flag}</span>
              </div>

              <div className="divider"></div>

              <div className="service-bottom">
                <div>
                  <span>Price</span>
                  <strong>₦{service.price}</strong>
                </div>

                <button className="buy">
                  <ShoppingCart size={20} />
                  Buy
                </button>
              </div>

            </div>
          ))}

        </div>

      </main>

    </div>
  );
}

export default App;
