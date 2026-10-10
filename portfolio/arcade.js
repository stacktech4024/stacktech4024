/* Developer Arcade — local, educational interactions; no network/model requests. */
(() => {
  const root = document.getElementById('arcade');
  if (!root) return;

  const stationNames = ['bits', 'graph', 'ai'];
  const visited = new Set(['bits']);
  const tabs = Array.from(root.querySelectorAll('[data-arcade-tab]'));
  const worlds = Array.from(root.querySelectorAll('[data-arcade-world]'));
  const panels = Array.from(root.querySelectorAll('[data-arcade-panel]'));
  const progress = root.querySelector('#arcade-progress');

  function selectStation(name, focusTab = false) {
    if (!stationNames.includes(name)) return;
    visited.add(name);
    tabs.forEach(button => {
      const active = button.dataset.arcadeTab === name;
      button.setAttribute('aria-selected', String(active));
      button.tabIndex = active ? 0 : -1;
      if (active && focusTab) button.focus();
    });
    worlds.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.arcadeWorld === name)));
    panels.forEach(panel => { panel.hidden = panel.dataset.arcadePanel !== name; });
    if (progress) progress.textContent = visited.size + '/3 stations explored';
  }
  tabs.forEach((button, i) => {
    button.addEventListener('click', () => selectStation(button.dataset.arcadeTab));
    button.addEventListener('keydown', event => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'Home' && event.key !== 'End') return;
      event.preventDefault();
      const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 :
        (i + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      selectStation(tabs[nextIndex].dataset.arcadeTab, true);
    });
  });
  worlds.forEach(button => button.addEventListener('click', () => selectStation(button.dataset.arcadeWorld)));

  const bits = Array.from(root.querySelectorAll('[data-byte-bit]'));
  const decimal = root.querySelector('#arcade-decimal');
  const hexadecimal = root.querySelector('#arcade-hexadecimal');
  const binary = root.querySelector('#arcade-binary');
  let byteValue = 0;
  function renderByte() {
    bits.forEach(button => {
      const index = Number(button.dataset.byteBit);
      const on = Boolean(byteValue & (1 << index));
      button.textContent = on ? '1' : '0';
      button.setAttribute('aria-pressed', String(on));
      button.setAttribute('aria-label', 'Bit ' + index + ', weight ' + (1 << index) + ', ' + (on ? 'on' : 'off'));
    });
    decimal.textContent = String(byteValue);
    hexadecimal.textContent = '0x' + byteValue.toString(16).toUpperCase().padStart(2, '0');
    binary.textContent = byteValue.toString(2).padStart(8, '0');
  }
  bits.forEach(button => button.addEventListener('click', () => {
    byteValue ^= (1 << Number(button.dataset.byteBit));
    renderByte();
  }));
  root.querySelector('#arcade-byte-reset')?.addEventListener('click', () => { byteValue = 0; renderByte(); });
  root.querySelector('#arcade-byte-random')?.addEventListener('click', () => {
    byteValue = Math.floor(Math.random() * 256);
    renderByte();
  });
  renderByte();

  const routeChoices = Array.from(root.querySelectorAll('[data-arcade-route]'));
  const routeOutput = root.querySelector('#arcade-route-output');
  const graphEdges = Array.from(root.querySelectorAll('[data-graph-edge]'));
  const routes = {
    ACD: { edges: ['AC','CD'], label: 'A → C → D', distance: 3 + 4 },
    ABD: { edges: ['AB','BD'], label: 'A → B → D', distance: 10 + 2 }
  };
  function renderRoute(name) {
    const route = routes[name];
    if (!route) return;
    routeChoices.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.arcadeRoute === name)));
    graphEdges.forEach(edge => { edge.dataset.path = String(route.edges.includes(edge.dataset.graphEdge)); });
    routeOutput.textContent = route.label + ' | total = ' + route.distance +
      (name === 'ACD' ? ' · shortest route ✓' : ' · this route is 5 units longer');
  }
  routeChoices.forEach(button => button.addEventListener('click', () => renderRoute(button.dataset.arcadeRoute)));
  renderRoute('ACD');

  const modes = {
    summary: 'Example input: "The team scored twice after halftime."\nSample summary: The team scored two second-half goals.',
    sentiment: 'Example input: "The team celebrated an excellent performance."\nSample label: Positive',
    tags: 'Example input: "A dramatic late winner in the championship."\nSample tags: #soccer #final #winninggoal'
  };
  const modeButtons = Array.from(root.querySelectorAll('[data-arcade-mode]'));
  const sampleOutput = root.querySelector('#arcade-sample-output');
  function renderMode(name) {
    if (!Object.prototype.hasOwnProperty.call(modes, name)) return;
    modeButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.arcadeMode === name)));
    sampleOutput.textContent = modes[name];
  }
  modeButtons.forEach(button => button.addEventListener('click', () => renderMode(button.dataset.arcadeMode)));
  renderMode('summary');
  selectStation('bits');
})();
