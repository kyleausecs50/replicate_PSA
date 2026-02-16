class PsaTopNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="top-nav">
        <div class="top-nav-inner">
          <a class="logo" href="#" aria-label="PSA logo home">
            <img src="assets/psa-logo.svg" alt="PSA" />
          </a>
          <nav class="nav-links" aria-label="Primary Navigation">
            <div class="nav-item">
              <a href="#">Getting Started <span class="chevron">⌄</span></a>
              <div class="dropdown-menu" role="menu" aria-label="Getting Started submenu">
                <a href="#" role="menuitem">How It Works</a>
                <a href="#" role="menuitem">Video Tutorials</a>
                <a href="#" role="menuitem">Grading Standards</a>
              </div>
            </div>

            <div class="nav-item">
              <a href="#">Pricing &amp; Services <span class="chevron">⌄</span></a>
              <div class="dropdown-menu" role="menu" aria-label="Pricing & Services submenu">
                <a href="#" role="menuitem">Authentication &amp; Grading</a>
                <a href="#" role="menuitem">Active Specials</a>
                <a href="#" role="menuitem">Collectors Club</a>
                <a href="#" role="menuitem">PSA Verified Repacks</a>
                <a href="#" role="menuitem">Team Store</a>
              </div>
            </div>

            <div class="nav-item">
              <a href="#">Vault &amp; Sell <span class="chevron">⌄</span></a>
              <div class="dropdown-menu" role="menu" aria-label="Vault & Sell submenu">
                <a href="#" role="menuitem">Vault</a>
                <a href="#" role="menuitem">Sell on eBay</a>
                <a href="#" role="menuitem">PSA Partner Offers</a>
              </div>
            </div>

            <div class="nav-item">
              <a href="#">Set Registry <span class="external">↗</span></a>
              <div class="dropdown-menu" role="menu" aria-label="Set Registry submenu">
                <a href="#" role="menuitem">Browse Sets</a>
                <a href="#" role="menuitem">Create Registry</a>
                <a href="#" role="menuitem">Leaderboard</a>
              </div>
            </div>

            <div class="nav-item">
              <a href="#">Research <span class="chevron">⌄</span></a>
              <div class="dropdown-menu" role="menu" aria-label="Research submenu">
                <a href="#" role="menuitem">Cert Verification</a>
                <a href="#" role="menuitem">Population Report</a>
                <a href="#" role="menuitem">Item Details &amp; Pricing</a>
              </div>
            </div>

            <div class="nav-item">
              <a href="#">PSA Near Me <span class="chevron">⌄</span></a>
              <div class="dropdown-menu" role="menu" aria-label="PSA Near Me submenu">
                <a href="#" role="menuitem">Drop Off Events &amp; Shows</a>
                <a href="#" role="menuitem">Dealer Directory</a>
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
