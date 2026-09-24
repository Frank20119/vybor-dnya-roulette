const catalog = [
  { name: 'Netflix', type: 'Стриминг', slug: 'netflix', color: 'E50914', description: 'фильмы и сериалы' },
  { name: 'Spotify', type: 'Музыка', slug: 'spotify', color: '1DB954', description: 'музыка и подкасты' },
  { name: 'Steam', type: 'Игры', slug: 'steam', color: '171A21', description: 'игры для ПК' },
  { name: 'PlayStation Plus', type: 'Игры', slug: 'playstation', color: '003791', description: 'подписка PlayStation' },
  { name: 'Xbox Game Pass', type: 'Игры', slug: 'xbox', color: '107C10', description: 'библиотека Xbox' },
  { name: 'YouTube Premium', type: 'Видео', slug: 'youtube', color: 'FF0000', description: 'видео без рекламы' },
  { name: 'Apple Arcade', type: 'Игры', slug: 'applearcade', color: '111111', description: 'игры Apple' },
  { name: 'Disney+', type: 'Стриминг', slug: 'disneyplus', color: '113CCF', description: 'истории Disney и Marvel' },
  { name: 'Twitch', type: 'Стриминг', slug: 'twitch', color: '9146FF', description: 'стримы и киберспорт' },
  { name: 'Epic Games', type: 'Игры', slug: 'epicgames', color: '313131', description: 'игровая библиотека' },
  { name: 'Telegram', type: 'Сервис', slug: 'telegram', color: '26A5E4', description: 'мессенджер' },
  { name: 'VK Музыка', type: 'Музыка', slug: 'vk', color: '0077FF', description: 'треков и плейлистов' },
  { name: 'Prime Video', type: 'Стриминг', slug: 'primevideo', color: '00A8E1', description: 'фильмы Prime' },
  { name: 'Max', type: 'Стриминг', slug: 'max', color: '1B2CC1', description: 'сериалы и кино' },
  { name: 'Crunchyroll', type: 'Стриминг', slug: 'crunchyroll', color: 'F47521', description: 'аниме и манга' },
  { name: 'Кинопоиск', type: 'Стриминг', slug: 'kinopoisk', color: 'FF5C00', description: 'кино и сериалы' },
  { name: 'IVI', type: 'Стриминг', slug: 'ivi', color: 'EA1F63', description: 'онлайн-кинотеатр' },
  { name: 'Okko', type: 'Стриминг', slug: 'okko', color: '131313', description: 'фильмы и спорт' },
  { name: 'START', type: 'Стриминг', slug: 'start', color: 'FF0050', description: 'сериалы START' },
  { name: 'Wink', type: 'Стриминг', slug: 'wink', color: 'FF5F00', description: 'ТВ и кино' },
  { name: 'KION', type: 'Стриминг', slug: 'kion', color: 'A626E8', description: 'контент МТС' },
  { name: 'Яндекс Плюс', type: 'Сервис', slug: 'yandex', color: 'FC3F1D', description: 'подписка Яндекса' },
  { name: 'Roblox', type: 'Игра', slug: 'roblox', color: '111111', description: 'игры и миры' },
  { name: 'Fortnite', type: 'Игра', slug: 'fortnite', color: '000000', description: 'королевская битва' },
  { name: 'Minecraft', type: 'Игра', slug: 'minecraft', color: '62B47A', description: 'мир из блоков' },
  { name: 'League of Legends', type: 'Игра', slug: 'leagueoflegends', color: 'C89B3C', description: 'командная MOBA' },
  { name: 'Dota 2', type: 'Игра', slug: 'dota2', color: 'B12A1C', description: 'легендарная MOBA' },
  { name: 'Genshin Impact', type: 'Игра', slug: 'genshinimpact', color: '4B75B4', description: 'приключение Teyvat' },
  { name: 'Valorant', type: 'Игра', slug: 'valorant', color: 'FF4655', description: 'тактический шутер' },
  { name: 'Counter-Strike 2', type: 'Игра', slug: 'counterstrike', color: 'D69A2D', description: 'командный шутер' },
  { name: 'World of Warcraft', type: 'Игра', slug: 'worldofwarcraft', color: '148EFF', description: 'мир Азерота' },
  { name: 'EA Play', type: 'Игры', slug: 'ea', color: 'FF4747', description: 'игры Electronic Arts' },
  { name: 'Ubisoft+', type: 'Игры', slug: 'ubisoft', color: '0070FF', description: 'игры Ubisoft' },
  { name: 'Nintendo Switch Online', type: 'Игры', slug: 'nintendoswitch', color: 'E60012', description: 'игры Nintendo' },
  { name: 'Discord Nitro', type: 'Сервис', slug: 'discord', color: '5865F2', description: 'сообщества и звонки' },
  { name: 'GeForce NOW', type: 'Игры', slug: 'nvidia', color: '76B900', description: 'облачный гейминг' }
];

let services = [...catalog];

const actionLabels = { block: 'заблокировать', slow: 'замедлить', forgive: 'простить' };
const actionMultipliers = { block: 1, slow: 0.72, forgive: 0.48 };
const reel = document.querySelector('#reel');
const reelShell = document.querySelector('.reel-shell');
const brandCount = document.querySelector('#brandCount');
const spinButton = document.querySelector('#spinButton');
const decisionPanel = document.querySelector('#decisionPanel');
const completePanel = document.querySelector('#completePanel');
const instruction = document.querySelector('#instruction');
const roundNumber = document.querySelector('#roundNumber');
const balance = document.querySelector('#balance');
const resultName = document.querySelector('#resultName');
const resultDescription = document.querySelector('#resultDescription');
const soundButton = document.querySelector('#soundButton');
const themeButton = document.querySelector('#themeButton');

let spinning = false;
let currentService = null;
let currentRewards = null;
let round = 1;
let total = 0;
let soundOn = false;
let audioContext;
let currentItemIndex = 0;
const REEL_CYCLES = 18;
const START_CYCLE = 2;

function makeReelItem(service) {
  const node = document.querySelector('#reelItemTemplate').content.firstElementChild.cloneNode(true);
  const logo = node.querySelector('.service-logo');
  const fallback = node.querySelector('.logo-fallback');
  logo.src = `https://cdn.simpleicons.org/${service.slug}/${service.color}`;
  logo.alt = `Логотип ${service.name}`;
  fallback.textContent = service.name.charAt(0);
  logo.addEventListener('error', () => { logo.hidden = true; });
  node.querySelector('.reel-item__type').textContent = service.type;
  node.querySelector('.reel-item__name').textContent = service.name;
  return node;
}

function fillReel() {
  reel.replaceChildren();
  const visibleList = Array.from({ length: REEL_CYCLES }, () => services).flat();
  visibleList.forEach((service) => reel.append(makeReelItem(service)));
  currentItemIndex = START_CYCLE * services.length + Math.floor(Math.random() * services.length);
  reel.style.transition = 'none';
  positionReel(currentItemIndex);
}

function updateBrandCount() {
  brandCount.textContent = String(services.length);
}

function getReelMetrics() {
  const firstCard = reel.firstElementChild;
  const cardWidth = firstCard?.getBoundingClientRect().width ?? 150;
  const gap = Number.parseFloat(getComputedStyle(reel).gap) || 12;
  return { cardWidth, gap, shellWidth: reelShell.clientWidth };
}

function positionReel(itemIndex) {
  const { cardWidth, gap, shellWidth } = getReelMetrics();
  const itemCenter = itemIndex * (cardWidth + gap) + cardWidth / 2;
  reel.style.transform = `translateX(${Math.round(shellWidth / 2 - itemCenter)}px)`;
}

function clearSelectedCard() {
  reel.querySelector('.reel-item--selected')?.classList.remove('reel-item--selected');
}

function money(value) {
  return new Intl.NumberFormat('ru-RU').format(value);
}

function setRewards(service) {
  const base = 10000 + Math.floor(Math.random() * 6) * 1000;
  currentRewards = {
    block: base + 11000,
    slow: Math.round((base + 8000) / 1000) * 1000,
    forgive: Math.round((base + 1000) / 1000) * 1000
  };
  document.querySelectorAll('[data-reward]').forEach((item) => {
    item.textContent = money(currentRewards[item.dataset.reward]);
  });
  resultName.textContent = service.name;
  resultDescription.textContent = service.description;
}

function playTone(frequency, duration, volume = 0.025) {
  if (!soundOn) return;
  audioContext ??= new AudioContext();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.frequency.value = frequency;
  oscillator.type = 'sine';
  gain.gain.setValueAtTime(volume, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration);
}

function spin() {
  if (spinning) return;
  spinning = true;
  decisionPanel.hidden = true;
  completePanel.hidden = true;
  spinButton.disabled = true;
  spinButton.querySelector('span:last-child').textContent = 'Рулетка крутится…';
  instruction.innerHTML = '<span class="material-symbols-rounded">hourglass_top</span> Выбираем сервис…';
  const selectedIndex = Math.floor(Math.random() * services.length);
  currentService = services[selectedIndex];
  clearSelectedCard();

  // When the virtual strip approaches its end, start a fresh long strip before spinning.
  // It prevents empty space from ever entering the window, even after many rounds.
  if (currentItemIndex > (REEL_CYCLES - 7) * services.length) fillReel();

  const minimumTarget = currentItemIndex + services.length * 5;
  const targetIndex = minimumTarget + ((selectedIndex - (minimumTarget % services.length) + services.length) % services.length);
  reel.style.transition = 'transform 5.2s cubic-bezier(.07,.82,.08,1)';
  requestAnimationFrame(() => positionReel(targetIndex));
  playTone(280, .16);

  window.setTimeout(() => {
    spinning = false;
    currentItemIndex = targetIndex;
    reel.children[targetIndex]?.classList.add('reel-item--selected');
    setRewards(currentService);
    decisionPanel.hidden = false;
    decisionPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    spinButton.disabled = false;
    spinButton.querySelector('span:last-child').textContent = 'Крутить рулетку';
    instruction.innerHTML = '<span class="material-symbols-rounded">arrow_downward</span> Выбери действие для результата';
    playTone(620, .24, .04);
  }, 5300);
}

function chooseAction(event) {
  const button = event.currentTarget;
  const action = button.dataset.action;
  const reward = currentRewards[action];
  total += reward;
  balance.textContent = `${money(total)} ₽`;
  services = services.filter((service) => service.name !== currentService.name);
  updateBrandCount();
  document.querySelector('#completeTitle').textContent = `+${money(reward)} ₽ в этом раунде`;
  document.querySelector('#completeText').textContent = `${currentService.name}: решение «${actionLabels[action]}» сохранено. Этот сервис больше не выпадет в следующих раундах.`;
  if (services.length === 0) {
    document.querySelector('#againButton').innerHTML = '<span class="material-symbols-rounded">restart_alt</span> Начать заново';
  }
  decisionPanel.hidden = true;
  completePanel.hidden = false;
  round += 1;
  roundNumber.textContent = String(round).padStart(2, '0');
  instruction.innerHTML = '<span class="material-symbols-rounded">task_alt</span> Раунд завершён';
  playTone(770, .32, .045);
}

function startAgain() {
  if (services.length === 0) {
    services = [...catalog];
    total = 0;
    round = 1;
    balance.textContent = '0 ₽';
    roundNumber.textContent = '01';
    updateBrandCount();
    document.querySelector('#againButton').innerHTML = '<span class="material-symbols-rounded">replay</span> Ещё раунд';
  }
  fillReel();
  completePanel.hidden = true;
  decisionPanel.hidden = true;
  instruction.innerHTML = '<span class="material-symbols-rounded">touch_app</span> Нажми, чтобы узнать выбор';
  document.querySelector('.game-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function changeTheme() {
  const dark = document.body.classList.toggle('dark');
  localStorage.setItem('choice-day-theme', dark ? 'dark' : 'light');
  themeButton.querySelector('span').textContent = dark ? 'light_mode' : 'dark_mode';
  themeButton.setAttribute('aria-label', dark ? 'Включить светлую тему' : 'Включить тёмную тему');
}

function changeSound() {
  soundOn = !soundOn;
  soundButton.setAttribute('aria-pressed', String(soundOn));
  soundButton.setAttribute('aria-label', soundOn ? 'Выключить звук' : 'Включить звук');
  soundButton.querySelector('span').textContent = soundOn ? 'volume_up' : 'volume_off';
  if (soundOn) playTone(520, .1);
}

fillReel();
updateBrandCount();
window.addEventListener('resize', () => {
  if (!spinning) positionReel(currentItemIndex);
});
if (localStorage.getItem('choice-day-theme') === 'dark') changeTheme();
spinButton.addEventListener('click', spin);
document.querySelectorAll('.decision-card').forEach((button) => button.addEventListener('click', chooseAction));
document.querySelector('#againButton').addEventListener('click', startAgain);
themeButton.addEventListener('click', changeTheme);
soundButton.addEventListener('click', changeSound);
