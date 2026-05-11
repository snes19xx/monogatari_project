const SETTINGS_CSS = `
#settings-shell {
  --ui-bg: #121212;
  --ui-panel: #1e1e1e;
  --ui-text: #e0e0e0;
  --ui-border: 3px solid #000000;
  --ui-outline: #333333;
  --ui-label: #aaaaaa;
  --ui-input-bg: #121212;
  --ui-input-text: #e0e0e0;
  --ui-input-border: #333333;
  --ui-box-shadow: 12px 12px 0 #000;
}

#settings-shell[data-settings-theme="light"] {
  --ui-bg: #f4f4f4;
  --ui-panel: #e8e8e8;
  --ui-text: #1a1a1a;
  --ui-border: 3px solid #999999;
  --ui-outline: #bbbbbb;
  --ui-label: #555555;
  --ui-input-bg: #ffffff;
  --ui-input-text: #1a1a1a;
  --ui-input-border: #999999;
  --ui-box-shadow: 12px 12px 0 #999;
}

#settings-shell * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#settings-shell .settings-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10001;
}

#settings-shell .settings-modal[hidden] {
  display: none !important;
}

#settings-shell .settings-content {
  position: relative;
  background: var(--ui-panel);
  color: var(--ui-text);
  border: var(--ui-border);
  box-shadow: var(--ui-box-shadow);
  padding: 30px 40px;
  width: 95%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  font-family: "Space Grotesk", sans-serif;
  transition: background 0.15s, color 0.15s;
}

#settings-shell .panel-actions {
  position: absolute;
  top: -22px;
  right: -22px;
  display: flex;
  gap: 8px;
  align-items: center;
  z-index: 10;
}

#settings-shell .theme-toggle-btn {
  height: 40px;
  padding: 0 14px;
  background: var(--ui-panel);
  border: var(--ui-border);
  color: var(--ui-text);
  font-family: "Space Grotesk", sans-serif;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  transition: all 0.1s;
}

#settings-shell .theme-toggle-btn:hover {
  background: var(--ui-text);
  color: var(--ui-panel);
}

#settings-shell .close-btn {
  width: 40px;
  height: 40px;
  background: var(--ui-panel);
  border: var(--ui-border);
  color: var(--ui-text);
  font-family: "Space Grotesk", sans-serif;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s;
}

#settings-shell .close-btn:hover {
  background: var(--ui-text);
  color: var(--ui-panel);
}

#settings-shell .settings-column {
  display: flex;
  flex-direction: column;
}

#settings-shell .section-header {
  font-size: 20px;
  font-weight: 900;
  letter-spacing: -0.5px;
  border-bottom: 2px solid var(--ui-outline);
  padding-bottom: 8px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: var(--ui-text);
}

#settings-shell .section-header span {
  font-size: 12px;
  color: #888;
  letter-spacing: 2px;
}

#settings-shell label {
  display: block;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 6px;
  color: var(--ui-label);
}

#settings-shell section {
  margin-bottom: 16px;
}

#settings-shell input,
#settings-shell select {
  width: 100%;
  padding: 12px 14px;
  border: 2px solid var(--ui-input-border);
  background: var(--ui-input-bg);
  color: var(--ui-input-text);
  font-family: "Space Grotesk", sans-serif;
  font-size: 14px;
  font-weight: 700;
  outline: none;
  transition: border-color 0.1s;
}

#settings-shell input:focus,
#settings-shell select:focus {
  border-color: var(--ui-text);
}

#settings-shell select option {
  background: var(--ui-input-bg);
  color: var(--ui-input-text);
}

#settings-shell .geo-inputs {
  display: flex;
  gap: 15px;
}

#settings-shell .shortcut-row {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

#settings-shell .shortcut-row input,
#settings-shell .shortcut-row select {
  padding: 10px 12px;
  font-size: 13px;
}

#settings-shell .theme-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}

#settings-shell .theme-grid button {
  padding: 8px 6px;
  border: 2px solid var(--ui-outline);
  background: var(--ui-bg);
  color: var(--ui-text);
  cursor: pointer;
  font-family: "Space Grotesk", sans-serif;
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  transition: all 0.1s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#settings-shell .theme-grid button[data-theme="black_hanekawa"]:hover,
#settings-shell .theme-grid button[data-theme="black_hanekawa"].active { background: #fefefe; color: #000; border-color: #fefefe; }

#settings-shell .theme-grid button[data-theme="hanekawa"]:hover,
#settings-shell .theme-grid button[data-theme="hanekawa"].active { background: #4c6a52; color: #fff; border-color: #4c6a52; }

#settings-shell .theme-grid button[data-theme="hitagi"]:hover,
#settings-shell .theme-grid button[data-theme="hitagi"].active { background: #614b79; color: #fff; border-color: #614b79; }

#settings-shell .theme-grid button[data-theme="nadeko"]:hover,
#settings-shell .theme-grid button[data-theme="nadeko"].active { background: #f3d3ce; color: #000; border-color: #f3d3ce; }

#settings-shell .theme-grid button[data-theme="ononoki"]:hover,
#settings-shell .theme-grid button[data-theme="ononoki"].active { background: #ec6715; color: #000; border-color: #ec6715; }

#settings-shell .theme-grid button[data-theme="shinobu"]:hover,
#settings-shell .theme-grid button[data-theme="shinobu"].active { background: #501814ed; color: #c9c9c9; border-color: #501814ed; }

#settings-shell .theme-grid button[data-theme="tsukihi"]:hover,
#settings-shell .theme-grid button[data-theme="tsukihi"].active { background: #006a66; color: #fff; border-color: #006a66; }

#settings-shell .theme-grid button[data-theme="karen"]:hover,
#settings-shell .theme-grid button[data-theme="karen"].active { background: #f9d800; color: #000; border-color: #f9d800; }

#settings-shell .theme-grid button[data-theme="kanbaru"]:hover,
#settings-shell .theme-grid button[data-theme="kanbaru"].active { background: #1a3a6b; color: #fff; border-color: #1a3a6b; }

#settings-shell .theme-grid button[data-theme="mayoi"]:hover,
#settings-shell .theme-grid button[data-theme="mayoi"].active { background: #c9d36e; color: #2c2b2b; border-color: #c9d36e; }

#settings-shell .theme-grid button[data-theme="sodachi"]:hover,
#settings-shell .theme-grid button[data-theme="sodachi"].active { background: #9d9ea4; color: #000; border-color: #9d9ea4; }

#settings-shell .theme-grid button[data-theme="ougi"]:hover,
#settings-shell .theme-grid button[data-theme="ougi"].active { background: #12102b; color: #a89fd8; border-color: #12102b; }

#settings-shell .theme-grid button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

#settings-shell .bottom-actions {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

#settings-shell .save-btn {
  width: 100%;
  padding: 16px;
  background: var(--ui-outline);
  color: var(--ui-text);
  border: var(--ui-border);
  font-family: "Space Grotesk", sans-serif;
  font-weight: 900;
  font-size: 16px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.1s;
}

#settings-shell .save-btn:hover {
  background: var(--ui-text);
  color: var(--ui-panel);
}

#settings-shell .reset-btn {
  width: 100%;
  padding: 10px;
  background: transparent;
  color: var(--ui-label);
  border: 2px solid var(--ui-outline);
  font-family: "Space Grotesk", sans-serif;
  font-weight: 900;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.1s;
}

#settings-shell .reset-btn:hover {
  border-color: #cc0000;
  color: #cc0000;
}
`;

const SETTINGS_HTML = `
<div id="settings-menu" class="settings-modal" hidden>
  <div class="settings-content" id="settings-wrapper">

    <div class="panel-actions">
      <button id="settings-theme-toggle" class="theme-toggle-btn">LIGHT MODE</button>
      <button id="close-settings" class="close-btn" aria-label="Close">X</button>
    </div>

    <div class="settings-column">
      <div class="section-header">
        DATA <span>IDENTITY &amp; LOCATION</span>
      </div>
      <section>
        <label>Username</label>
        <input type="text" id="pref-username" placeholder="USERNAME" autocomplete="off" />
      </section>
      <section>
        <label>Coordinates (Open-Meteo)</label>
        <div class="geo-inputs">
          <input type="number" step="0.001" id="pref-lat" placeholder="LAT" />
          <input type="number" step="0.001" id="pref-lon" placeholder="LON" />
        </div>
      </section>

      <section>
        <label>
          <input type="checkbox" id="pref-use-12-hour-clock" />
          12-hour clock
        </label>
      </section>

      <section>
        <label>
          <input type="checkbox" id="pref-use-fahrenheit" />
          Use Fahrenheit
        </label>
      </section>

      <div class="section-header" style="margin-top: 20px;">
        LINKS <span>SHORTCUTS</span>
      </div>
      <section id="shortcut-inputs" class="shortcuts-container"></section>
    </div>

    <div class="settings-column">
      <div class="section-header">
        SYSTEM <span>THEME CONFIG</span>
      </div>
      <section>
        <label>Active Interface</label>
        <div class="theme-grid">
          <button data-theme="black_hanekawa">Black Hanekawa</button>
          <button data-theme="hanekawa">Tsubasa</button>
          <button data-theme="mayoi">Mayoi</button>
          <button data-theme="sodachi">Sodachi</button>
          <button data-theme="tsukihi">Tsukihi</button>
          <button data-theme="shinobu">Shinobu</button>
          <button data-theme="hitagi">Hitagi</button>
          <button data-theme="nadeko">Nadeko</button>
          <button data-theme="ononoki">Yotsugi</button>
          <button data-theme="karen">Karen</button>
          <button data-theme="kanbaru">Kanbaru</button>
          <button data-theme="ougi">Ougi</button>
        </div>
      </section>

      <section id="tsukihi-mode-section" hidden>
        <label>Tsukihi Mode</label>
        <select id="pref-tsukihi-mode">
          <option value="auto">Auto (Day/Night)</option>
          <option value="light">Always Light</option>
          <option value="dark">Always Dark</option>
        </select>
      </section>

      <section id="karen-mode-section" hidden>
        <label>Karen Mode</label>
        <select id="pref-karen-mode">
          <option value="auto">Auto (Day/Night)</option>
          <option value="light">Always Light</option>
          <option value="dark">Always Dark</option>
        </select>
      </section>

      <section id="mayoi-mode-section" hidden>
        <label>Mayoi Mode</label>
        <select id="pref-mayoi-mode">
          <option value="auto">Auto (Day/Night)</option>
          <option value="light">Mayoi</option>
          <option value="dark">Mayoi Onee-San</option>
        </select>
      </section>

      <section id="kanbaru-mode-section" hidden>
        <label>Kanbaru Mode</label>
        <select id="pref-kanbaru-mode">
          <option value="auto">Auto (Day/Night)</option>
          <option value="light">Always Light</option>
          <option value="dark">Always Dark</option>
        </select>
      </section>

      <section id="sodachi-mode-section" hidden>
        <label>Sodachi Mode</label>
        <select id="pref-sodachi-mode">
          <option value="auto">Auto (Day/Night)</option>
          <option value="light">Always Light</option>
          <option value="dark">Always Dark</option>
        </select>
      </section>

      <section id="ougi-mode-section" hidden>
        <label>Ougi Mode</label>
        <select id="pref-ougi-mode">
          <option value="auto">Auto (Day/Night)</option>
          <option value="light">Always Light</option>
          <option value="dark">Always Dark</option>
        </select>
      </section>
      
      <section id="shinobu-mode-section" hidden>
        <label>Shinobu Mode</label>
        <select id="pref-shinobu-mode">
          <option value="auto">Auto (Day/Night)</option>
          <option value="light">Shinobu (Day)</option>
          <option value="dark">Kiss-shot (Night)</option>
        </select>
      </section>

      <div class="bottom-actions">
        <button id="save-settings" class="save-btn">APPLY CONFIGURATION</button>
        <button id="reset-settings" class="reset-btn">FACTORY RESET</button>
      </div>
    </div>

  </div>
</div>
`;

class SettingsMenu {
  constructor() {
    const styleEl = document.createElement("style");
    styleEl.id = "settings-css";
    styleEl.textContent = SETTINGS_CSS;
    document.head.appendChild(styleEl);

    this.shell = document.createElement("div");
    this.shell.id = "settings-shell";
    this.shell.innerHTML = SETTINGS_HTML;
    document.body.appendChild(this.shell);

    this.menu = document.getElementById("settings-menu");
    this.wrapper = document.getElementById("settings-wrapper");

    this._setupListeners();
  }

  open() {
    this._render();
    this.menu.hidden = false;
  }

  close() {
    this.menu.hidden = true;
  }

  _setupListeners() {
    document
      .getElementById("close-settings")
      .addEventListener("click", () => this.close());

    document
      .getElementById("save-settings")
      .addEventListener("click", () => this._save());

    document
      .getElementById("reset-settings")
      .addEventListener("click", async () => {
        if (
          !confirm(
            "Factory reset will clear all settings and cached data. Continue?",
          )
        )
          return;

        localStorage.clear();

        if ("serviceWorker" in navigator) {
          const regs = await navigator.serviceWorker
            .getRegistrations()
            .catch(() => []);
          await Promise.all(regs.map((r) => r.unregister().catch(() => {})));
        }

        if ("caches" in window) {
          const keys = await caches.keys().catch(() => []);
          await Promise.all(keys.map((k) => caches.delete(k).catch(() => {})));
        }

        window.location.replace("hanekawa.html");
      });

    document
      .getElementById("settings-theme-toggle")
      .addEventListener("click", () => {
        const current =
          this.shell.getAttribute("data-settings-theme") || "dark";
        const next = current === "dark" ? "light" : "dark";
        this.shell.setAttribute("data-settings-theme", next);
        document.getElementById("settings-theme-toggle").textContent =
          next === "dark" ? "LIGHT MODE" : "DARK MODE";
      });

    this.menu.addEventListener("click", (e) => {
      if (e.target === this.menu) this.close();
    });
  }

  _showModeSection(activeTheme) {
    const sections = {
      "tsukihi-mode-section": "tsukihi",
      "karen-mode-section": "karen",
      "mayoi-mode-section": "mayoi",
      "kanbaru-mode-section": "kanbaru",
      "sodachi-mode-section": "sodachi",
      "ougi-mode-section": "ougi",
      "shinobu-mode-section": "shinobu",
    };
    for (const [id, theme] of Object.entries(sections)) {
      const el = document.getElementById(id);
      if (el) el.hidden = activeTheme !== theme;
    }
  }

  _render() {
    const config = window.state.config;

    const currentTheme =
      window.location.pathname.split("/").pop().replace(".html", "") ||
      config.activeTheme;
    config.activeTheme = currentTheme;

    document.getElementById("pref-username").value = config.username || "";
    document.getElementById("pref-lat").value = config.location?.lat ?? 0;
    document.getElementById("pref-lon").value = config.location?.lon ?? 0;

    document.getElementById("pref-use-12-hour-clock").checked =
        config.use12HourClock === true;

    document.getElementById("pref-use-fahrenheit").checked =
          config.useFahrenheit === true;


    document.getElementById("pref-tsukihi-mode").value =
      config.tsukihiMode || "auto";
    document.getElementById("pref-karen-mode").value =
      config.karenMode || "auto";
    document.getElementById("pref-mayoi-mode").value =
      config.mayoiMode || "auto";
    document.getElementById("pref-kanbaru-mode").value =
      config.kanbaruMode || "auto";
    document.getElementById("pref-sodachi-mode").value =
      config.sodachiMode || "auto";
    document.getElementById("pref-ougi-mode").value = config.ougiMode || "auto";
    document.getElementById("pref-shinobu-mode").value =
      config.shinobuMode || "auto";

    const savedTheme = config.settingsTheme || "dark";
    this.shell.setAttribute("data-settings-theme", savedTheme);
    document.getElementById("settings-theme-toggle").textContent =
      savedTheme === "dark" ? "LIGHT MODE" : "DARK MODE";

    const iconOptions = Object.keys(iconDict);
    const scContainer = document.getElementById("shortcut-inputs");
    scContainer.innerHTML = (config.shortcuts || [])
      .map(
        (s) => `
        <div class="shortcut-row">
          <input type="text" class="sc-label" value="${s.label}" placeholder="LABEL" style="flex: 1;" />
          <input type="text" class="sc-url" value="${s.url}" placeholder="URL" style="flex: 1.5;" />
          <select class="sc-icon" style="flex: 0.8;">
            ${iconOptions.map((n) => `<option value="${n}" ${s.icon === n ? "selected" : ""}>${n.toUpperCase()}</option>`).join("")}
          </select>
        </div>
      `,
      )
      .join("");

    document
      .querySelectorAll("#settings-shell .theme-grid button[data-theme]")
      .forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.theme === currentTheme);
        btn.onclick = () => {
          document
            .querySelectorAll("#settings-shell .theme-grid button")
            .forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          this._showModeSection(btn.dataset.theme);
        };
      });

    this._showModeSection(currentTheme);
  }

  _save() {
    const config = window.state.config;

    config.username = document.getElementById("pref-username").value;
    config.location.lat = parseFloat(document.getElementById("pref-lat").value);
    config.location.lon = parseFloat(document.getElementById("pref-lon").value);

    config.use12HourClock = document.getElementById(
      "pref-use-12-hour-clock",
    ).checked;

    config.useFahrenheit = document.getElementById(
        "pref-use-fahrenheit",
    ).checked;

    config.tsukihiMode = document.getElementById("pref-tsukihi-mode").value;
    config.karenMode = document.getElementById("pref-karen-mode").value;
    config.mayoiMode = document.getElementById("pref-mayoi-mode").value;
    config.kanbaruMode = document.getElementById("pref-kanbaru-mode").value;
    config.sodachiMode = document.getElementById("pref-sodachi-mode").value;
    config.ougiMode = document.getElementById("pref-ougi-mode").value;
    config.shinobuMode = document.getElementById("pref-shinobu-mode").value;
    config.settingsTheme =
      this.shell.getAttribute("data-settings-theme") || "dark";

    config.shortcuts = Array.from(
      document.querySelectorAll("#settings-shell .shortcut-row"),
    ).map((row, i) => ({
      label: row.querySelector(".sc-label").value,
      url: row.querySelector(".sc-url").value,
      icon: row.querySelector(".sc-icon").value,
      ...(config.shortcuts[i]?.color
        ? { color: config.shortcuts[i].color }
        : {}),
    }));

    const activeBtn = document.querySelector(
      "#settings-shell .theme-grid button.active",
    );
    if (activeBtn) config.activeTheme = activeBtn.dataset.theme;

    localStorage.setItem("monogatari_start_config", JSON.stringify(config));
    this.close();

    window.location.href = (config.activeTheme || "hanekawa") + ".html";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const settingsInstance = new SettingsMenu();
  window.openSettings = () => settingsInstance.open();
});
