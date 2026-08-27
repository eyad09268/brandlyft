export function triggerStarBurst(e: React.MouseEvent<HTMLElement> | MouseEvent, count = 10) {
  const target = e.currentTarget as HTMLElement;
  if (!target) return;

  const rect = target.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;

  const colors = [
    { color: '#ffffff', glow: 'rgba(255, 255, 255, 0.9)' },
    { color: '#ff3b6b', glow: 'rgba(255, 59, 107, 0.9)' },
    { color: '#00f2fe', glow: 'rgba(0, 242, 254, 0.9)' },
    { color: '#ff7b00', glow: 'rgba(255, 123, 0, 0.9)' },
    { color: '#10b981', glow: 'rgba(16, 185, 129, 0.9)' },
    { color: '#a855f7', glow: 'rgba(168, 85, 247, 0.9)' },
  ];

  const svgStarMarkup = `
    <svg viewBox="0 0 784.11 815.53" style="width:100%; height:100%;">
      <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path>
    </svg>
  `;

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'burst-star';
    star.innerHTML = svgStarMarkup;

    const randomPalette = colors[Math.floor(Math.random() * colors.length)];
    star.style.setProperty('--star-color', randomPalette.color);
    star.style.setProperty('--star-glow', randomPalette.glow);

    const size = Math.floor(Math.random() * 18) + 12;
    const angle = ((Math.PI * 2) / count) * i + (Math.random() * 0.4 - 0.2);
    const distance = Math.floor(Math.random() * 70) + 45;

    const tx = Math.cos(angle) * distance + 'px';
    const ty = Math.sin(angle) * distance + 'px';

    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = clickX - size / 2 + 'px';
    star.style.top = clickY - size / 2 + 'px';
    star.style.setProperty('--tx', tx);
    star.style.setProperty('--ty', ty);

    target.appendChild(star);
    setTimeout(() => star.remove(), 850);
  }
}
