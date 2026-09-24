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

const rknCatalog = [
  {
    id: 'linkedin', name: 'LinkedIn', type: 'Соцсеть', slug: 'linkedin', color: '0A66C2', level: 'I', levelColor: '#5f68d9', cost: 18000,
    reason: 'Основание из судебного сообщения: обработка персональных данных с нарушениями.',
    sourceLabel: 'Мосгорсуд · 2016', sourceUrl: 'https://mos-gorsud.ru/mgs/news/e5825bb6-d15d-4512-a158-bdfdb910e82c'
  },
  {
    id: 'viber', name: 'Viber', type: 'Мессенджер', slug: 'viber', color: '7360F2', level: 'II', levelColor: '#8266d7', cost: 35000,
    reason: 'В сообщении РКН — нарушение требований к организаторам распространения информации.',
    sourceLabel: 'РБК · 13.12.2024', sourceUrl: 'https://www.rbc.ru/technology_and_media/13/12/2024/675c690f9a79472300a900a9'
  },
  {
    id: 'signal', name: 'Signal', type: 'Мессенджер', slug: 'signal', color: '3A76F0', level: 'III', levelColor: '#bc7b28', cost: 55000,
    reason: 'В сообщении РКН — требования, связанные с предотвращением терроризма и экстремизма.',
    sourceLabel: 'Интерфакс · 09.08.2024', sourceUrl: 'https://interfax.com/newsroom/top-stories/105001/'
  },
  {
    id: 'discord', name: 'Discord', type: 'Мессенджер', slug: 'discord', color: '5865F2', level: 'IV', levelColor: '#b34342', cost: 75000,
    reason: 'В сообщении РКН — неоднократные нарушения и запрещённая информация.',
    sourceLabel: 'Интерфакс · 2024', sourceUrl: 'https://www.interfax.ru/amp/986204'
  },
  {
    id: 'facebook', name: 'Facebook', type: 'Соцсеть', slug: 'facebook', color: '1877F2', level: 'V', levelColor: '#922f38', cost: 90000,
    reason: 'Генпрокуратура сообщала о требовании ограничить доступ к Facebook и Instagram.',
    sourceLabel: 'Генпрокуратура · 2022', sourceUrl: 'https://epp.genproc.gov.ru/ru/gprf/mass-media/news/main/e480099/'
  },
  {
    id: 'instagram', name: 'Instagram', type: 'Соцсеть', slug: 'instagram', color: 'E4405F', level: 'V', levelColor: '#922f38', cost: 90000,
    reason: 'Генпрокуратура сообщала о требовании ограничить доступ к Instagram и Facebook.',
    sourceLabel: 'Генпрокуратура · 2022', sourceUrl: 'https://epp.genproc.gov.ru/ru/gprf/mass-media/news/main/e480099/'
  }
];

const STORAGE_KEY = 'choice-day-progress-v2';

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || typeof saved !== 'object') throw new Error('No saved progress');
    return {
      balance: Number.isFinite(saved.balance) && saved.balance >= 0 ? saved.balance : 0,
      round: Number.isInteger(saved.round) && saved.round > 0 ? saved.round : 1,
      removed: Array.isArray(saved.removed) ? saved.removed.filter((name) => typeof name === 'string') : [],
      blocked: Array.isArray(saved.blocked) ? saved.blocked.filter((name) => typeof name === 'string') : [],
      unlocked: Array.isArray(saved.unlocked) ? saved.unlocked.filter((id) => typeof id === 'string') : []
    };
  } catch {
    return { balance: 0, round: 1, removed: [], blocked: [], unlocked: [] };
  }
}

const savedProgress = loadProgress();
let removedByUser = [...new Set(savedProgress.removed)];
let blockedByUser = [...new Set(savedProgress.blocked)];
let unlockedRkn = [...new Set(savedProgress.unlocked)];
let services = catalog.filter((service) => !removedByUser.includes(service.name));

const actionLabels = { block: 'заблокировать', slow: 'замедлить', forgive: 'простить' };
const actionMultipliers = { block: 1, slow: 0.72, forgive: 0.48 };
const reel = document.querySelector('#reel');
const reelShell = document.querySelector('.reel-shell');
const brandCount = document.querySelector('#brandCount');
const blockedCount = document.querySelector('#blockedCount');
const spinButton = document.querySelector('#spinButton');
const decisionPanel = document.querySelector('#decisionPanel');
const completePanel = document.querySelector('#completePanel');
const instruction = document.querySelector('#instruction');
const roundNumber = document.querySelector('#roundNumber');
const balance = document.querySelector('#balance');
const storeBalance = document.querySelector('#storeBalance');
const rknStore = document.querySelector('#rknStore');
const resultName = document.querySelector('#resultName');
const resultDescription = document.querySelector('#resultDescription');
const soundButton = document.querySelector('#soundButton');
const themeButton = document.querySelector('#themeButton');

let spinning = false;
let currentService = null;
let currentRewards = null;
let round = savedProgress.round;
let total = savedProgress.balance;
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
  if (services.length === 0) {
    reel.replaceChildren();
    spinButton.disabled = false;
    spinButton.querySelector('span:last-child').textContent = 'Собрать новую очередь';
    instruction.innerHTML = '<span class="material-symbols-rounded">playlist_add</span> Все сервисы уже отмечены';
    return;
  }
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

function updateProgressUi() {
  balance.textContent = `${money(total)} ₽`;
  storeBalance.textContent = `${money(total)} ₽`;
  blockedCount.textContent = String(blockedByUser.length);
  roundNumber.textContent = String(round).padStart(2, '0');
  updateBrandCount();
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    balance: total,
    round,
    removed: removedByUser,
    blocked: blockedByUser,
    unlocked: unlockedRkn
  }));
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

function renderRknStore() {
  rknStore.replaceChildren();
  rknCatalog.forEach((service) => {
    const unlocked = unlockedRkn.includes(service.id);
    const card = document.createElement('article');
    card.className = `unlock-card${unlocked ? ' unlock-card--unlocked' : ''}`;
    card.innerHTML = `
      <div class="unlock-card__top">
        <div class="unlock-card__brand">
          <div class="logo-wrap"><img class="service-logo" alt="Логотип ${service.name}"><span class="logo-fallback">${service.name.charAt(0)}</span></div>
          <div><h3>${service.name}</h3><p>${service.type}</p></div>
        </div>
        <span class="severity" style="--severity-color: ${service.levelColor}" title="Игровой уровень основания">${service.level}</span>
      </div>
      <p class="unlock-card__reason">${service.reason}</p>
      <a class="unlock-card__source" href="${service.sourceUrl}" target="_blank" rel="noopener noreferrer"><span class="material-symbols-rounded">open_in_new</span>${service.sourceLabel}</a>
      <div class="unlock-card__footer"><span class="unlock-card__price">${money(service.cost)} ₽</span></div>
    `;
    const logo = card.querySelector('.service-logo');
    logo.src = `https://cdn.simpleicons.org/${service.slug}/${service.color}`;
    logo.addEventListener('error', () => { logo.hidden = true; });
    const footer = card.querySelector('.unlock-card__footer');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `unlock-button${unlocked ? ' unlock-button--done' : ''}`;
    button.textContent = unlocked ? 'Разблокировано в демо' : `Разблокировать за ${money(service.cost)} ₽`;
    button.disabled = unlocked || total < service.cost;
    button.addEventListener('click', () => unlockRknService(service.id));
    footer.append(button);
    rknStore.append(card);
  });
}

function unlockRknService(id) {
  const service = rknCatalog.find((item) => item.id === id);
  if (!service || unlockedRkn.includes(id) || total < service.cost) return;
  total -= service.cost;
  unlockedRkn.push(id);
  updateProgressUi();
  saveProgress();
  renderRknStore();
  playTone(690, .22, .045);
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
  if (services.length === 0) {
    removedByUser = [];
    services = [...catalog];
    round = 1;
    fillReel();
    updateProgressUi();
    saveProgress();
    spinButton.querySelector('span:last-child').textContent = 'Крутить рулетку';
    return;
  }
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
  if (!removedByUser.includes(currentService.name)) removedByUser.push(currentService.name);
  if (action === 'block' && !blockedByUser.includes(currentService.name)) blockedByUser.push(currentService.name);
  services = services.filter((service) => service.name !== currentService.name);
  updateProgressUi();
  saveProgress();
  renderRknStore();
  document.querySelector('#completeTitle').textContent = `+${money(reward)} ₽ в этом раунде`;
  document.querySelector('#completeText').textContent = `${currentService.name}: решение «${actionLabels[action]}» сохранено в localStorage. Этот сервис больше не выпадет в следующих раундах.`;
  if (services.length === 0) {
    document.querySelector('#againButton').innerHTML = '<span class="material-symbols-rounded">restart_alt</span> Начать заново';
  }
  decisionPanel.hidden = true;
  completePanel.hidden = false;
  round += 1;
  updateProgressUi();
  saveProgress();
  instruction.innerHTML = '<span class="material-symbols-rounded">task_alt</span> Раунд завершён';
  playTone(770, .32, .045);
}

function startAgain() {
  if (services.length === 0) {
    services = [...catalog];
    removedByUser = [];
    round = 1;
    updateProgressUi();
    saveProgress();
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
updateProgressUi();
renderRknStore();
window.addEventListener('resize', () => {
  if (!spinning) positionReel(currentItemIndex);
});
if (localStorage.getItem('choice-day-theme') === 'dark') changeTheme();
spinButton.addEventListener('click', spin);
document.querySelectorAll('.decision-card').forEach((button) => button.addEventListener('click', chooseAction));
document.querySelector('#againButton').addEventListener('click', startAgain);
themeButton.addEventListener('click', changeTheme);
soundButton.addEventListener('click', changeSound);
