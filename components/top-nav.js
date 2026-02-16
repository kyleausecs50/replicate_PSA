class PsaTopNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="top-nav">
        <div class="top-nav-inner">
          <a class="logo" href="index.html" aria-label="PSA logo home">
            <img src="assets/psa-logo.svg" alt="PSA" />
          </a>
          <nav class="nav-links" aria-label="Primary Navigation">
            <div class="nav-item">
              <a href="getting-started.html">Getting Started <span class="chevron">⌄</span></a>
              <div class="dropdown-menu" role="menu" aria-label="Getting Started submenu">
                <a href="how-it-works.html" role="menuitem">How It Works</a>
                <a href="video-tutorials.html" role="menuitem">Video Tutorials</a>
                <a href="grading-standards.html" role="menuitem">Grading Standards</a>
              </div>
            </div>

            <div class="nav-item">
              <a href="pricing-and-services.html">Pricing &amp; Services <span class="chevron">⌄</span></a>
              <div class="dropdown-menu" role="menu" aria-label="Pricing & Services submenu">
                <a href="authentication-and-grading.html" role="menuitem">Authentication &amp; Grading</a>
                <a href="active-specials.html" role="menuitem">Active Specials</a>
                <a href="collectors-club.html" role="menuitem">Collectors Club</a>
                <a href="psa-verified-repacks.html" role="menuitem">PSA Verified Repacks</a>
                <a href="team-store.html" role="menuitem">Team Store</a>
              </div>
            </div>

            <div class="nav-item">
              <a href="vault-and-sell.html">Vault &amp; Sell <span class="chevron">⌄</span></a>
              <div class="dropdown-menu" role="menu" aria-label="Vault & Sell submenu">
                <a href="vault.html" role="menuitem">Vault</a>
                <a href="sell-on-ebay.html" role="menuitem">Sell on eBay</a>
                <a href="psa-partner-offers.html" role="menuitem">PSA Partner Offers</a>
              </div>
            </div>

            <div class="nav-item">
              <a href="set-registry.html">Set Registry <span class="external">↗</span></a>
              <div class="dropdown-menu" role="menu" aria-label="Set Registry submenu">
                <a href="browse-sets.html" role="menuitem">Browse Sets</a>
                <a href="create-registry.html" role="menuitem">Create Registry</a>
                <a href="leaderboard.html" role="menuitem">Leaderboard</a>
              </div>
            </div>

            <div class="nav-item">
              <a href="research.html">Research <span class="chevron">⌄</span></a>
              <div class="dropdown-menu" role="menu" aria-label="Research submenu">
                <a href="cert-verification.html" role="menuitem">Cert Verification</a>
                <a href="population-report.html" role="menuitem">Population Report</a>
                <a href="item-details-and-pricing.html" role="menuitem">Item Details &amp; Pricing</a>
              </div>
            </div>

            <div class="nav-item">
              <a href="psa-near-me.html">PSA Near Me <span class="chevron">⌄</span></a>
              <div class="dropdown-menu" role="menu" aria-label="PSA Near Me submenu">
                <a href="drop-off-events-and-shows.html" role="menuitem">Drop Off Events &amp; Shows</a>
                <a href="dealer-directory.html" role="menuitem">Dealer Directory</a>
              </div>
            </div>
          </nav>
          <div class="actions">
            <button class="submission-btn">Start Submission</button>
            <button class="profile-btn" aria-label="Profile">●</button>
            <button class="menu-btn" aria-label="Open menu">☰</button>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('psa-top-nav', PsaTopNav);
