import ItemCard from "./components/ItemCard";
import SponsorCardsSection from "./components/SponsorCardsSection";
import { sponsors } from "./data/sponsors";
import { items } from "./data/items";

function App() {
  return (
    <>
      <header className="VPNav">
        <div className="VPNavBar fill">
          <div className="container">
            <div className="title">
              <div className="VPNavBarTitle">
                <a href="" className="title">
                  <img
                    className="VPImage logo"
                    src="https://vitejs.dev/logo.svg"
                    alt="data - vite -logo"
                  />
                  Vite
                </a>
              </div>
            </div>
            <div className="content">
              <div className="curtain"></div>
              <div className="content-body">
                <div className="VPNavBarSearch search">
                  <div className="docsearch">
                    <button
                      type="button"
                      className="DocSearch DocSearch-Button"
                    >
                      <span className="DocSearch-Button-Container">
                        <svg
                          className="DocSearch-Search-Icon"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          aria-label="search icon"
                        >
                          <path
                            d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                            stroke="currentColor"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <span className="DocSearch-Button-Placeholder">
                          Search
                        </span>
                      </span>
                      <span className="DocSearch-Button-Keys">Ctrl K</span>
                    </button>
                  </div>
                </div>
                <nav className="VPNavBarMenu menu">
                  <span className="visually-hidden">Main Navigation</span>
                  <a className="VPNavBarMenuLink" href="#">
                    Guide
                  </a>
                  <a className="VPNavBarMenuLink" href="#">
                    Config
                  </a>
                  <a className="VPNavBarMenuLink" href="#">
                    Plugins
                  </a>
                  <div className="VPFlyout VPNavBarMenuGroup">Resources</div>
                  <div className="VPFlyout VPNavBarMenuGroup">Version</div>
                </nav>
                <div className="VPFlyout VPNavBarTranslations translations"></div>
                <div className="VPNavBarAppearance appearance"></div>
                <div className="VPSocialLinks VPNavBarSocialLinks social-links"></div>
                <div className="VPFlyout VPNavBarExtra extra"></div>
                <button className="VPNavBarHamburger hamburger"></button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="VPContent is-home">
        <div className="VPHero has-image VPHomeHero">
          <div className="container">
            <div className="main">
              <h1 className="name">
                <span className="clip">Vite</span>
              </h1>
              <p className="text">Next Generation Frontend Tooling</p>
              <p className="tagline">
                Get ready for a development environment that can finally catch
                up with you.
              </p>
              <div className="actions">
                <div className="action">
                  <a href="">Get Started</a>
                </div>
                <div className="action">
                  <a href="">Why Vite?</a>
                </div>
                <div className="action">
                  <a href="">View on GitHub</a>
                </div>
              </div>
            </div>
            <div className="image">
              <div className="image-container">
                <div className="image-bg"></div>
                <img
                  src="https://vitejs.dev/logo-with-shadow.png"
                  alt="Vite-logo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="VPFeatures VPHomeFeatures">
          <div className="container">
            <div className="items">
              {items.map((x, inx) => {
                return (
                  <ItemCard
                    key={`item-card-${inx}`}
                    icon={x.icon}
                    title={x.title}
                    description={x.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="VPHomeSponsors">
          <div className="container">
            <div className="header">
              <div className="love">
                <svg
                  data-v-b1a81964=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="icon"
                >
                  <path d="M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z"></path>
                </svg>
              </div>
              <h2 className="message">Vite is free and open source, made possible by wonderful sponsors.</h2>
            </div>
            <div className="sponsors">
              <div className="VPSponsors">
                {sponsors.map((x, inx) => {
                  return (
                    <SponsorCardsSection 
                      key = { `sponsort-section-${inx}`}
                      title = {x.title}
                      links = {x.links}
                    />
                  )
                })
                }
              </div>
            </div>
          </div>
        </div>
        <div className="action"></div>
        <div></div>
      </main>
    </>
  );
}

export default App;
