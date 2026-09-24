const services = [
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
  { name: 'VK Музыка', type: 'Музыка', slug: 'vk', color: '0077FF', description: 'треков и плейлистов' }
];

const actionLabels = { block: 'заблокировать', slow: 'замедлить', forgive: 'простить' };
const actionMultipliers = { block: 1, slow: 0.72, forgive: 0.48 };
const reel = document.querySelector('#reel');
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
  const visibleList = Array.from({ length: 7 }, () => services).flat();
  visibleList.forEach((service) => reel.append(makeReelItem(service)));
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
  reel.style.transition = 'none';
  reel.style.transform = 'translateX(-50%)';

  const selectedIndex = Math.floor(Math.random() * services.length);
  currentService = services[selectedIndex];
  const itemWidth = window.innerWidth <= 700 ? 142 : 162;
  const targetIndex = services.length * 5 + selectedIndex;
  const offset = targetIndex * itemWidth;
  requestAnimationFrame(() => requestAnimationFrame(() => {
    reel.style.transition = 'transform 3.7s cubic-bezier(.10,.78,.13,1)';
    reel.style.transform = `translateX(calc(-50% - ${offset}px))`;
  }));
  playTone(280, .16);

  window.setTimeout(() => {
    spinning = false;
    setRewards(currentService);
    decisionPanel.hidden = false;
    decisionPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    spinButton.disabled = false;
    spinButton.querySelector('span:last-child').textContent = 'Крутить рулетку';
    instruction.innerHTML = '<span class="material-symbols-rounded">arrow_downward</span> Выбери действие для результата';
    playTone(620, .24, .04);
  }, 3850);
}

function chooseAction(event) {
  const button = event.currentTarget;
  const action = button.dataset.action;
  const reward = currentRewards[action];
  total += reward;
  balance.textContent = `${money(total)} ₽`;
  document.querySelector('#completeTitle').textContent = `+${money(reward)} ₽ в этом раунде`;
  document.querySelector('#completeText').textContent = `${currentService.name}: решение «${actionLabels[action]}» сохранено в демо-игре.`;
  decisionPanel.hidden = true;
  completePanel.hidden = false;
  round += 1;
  roundNumber.textContent = String(round).padStart(2, '0');
  instruction.innerHTML = '<span class="material-symbols-rounded">task_alt</span> Раунд завершён';
  playTone(770, .32, .045);
}

function startAgain() {
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
if (localStorage.getItem('choice-day-theme') === 'dark') changeTheme();
spinButton.addEventListener('click', spin);
document.querySelectorAll('.decision-card').forEach((button) => button.addEventListener('click', chooseAction));
document.querySelector('#againButton').addEventListener('click', startAgain);
themeButton.addEventListener('click', changeTheme);
soundButton.addEventListener('click', changeSound);
