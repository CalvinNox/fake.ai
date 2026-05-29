const chatState = {
  IDLE: "idle",
  MESSAGE_POPPING: "message_popping",
  ABSORBING: "absorbing",
  THINKING: "thinking",
  REPLYING: "replying"
};

const welcomeMessage = [
  "Calvin恭迎您的到来。",
  "请投喂一段文字或语音，Calvin需要先尝尝内容的水平。"
];

const beforeEatTexts = [
  "Calvin闻到了新的内容...",
  "Calvin正在靠近...",
  "Calvin决定尝一口...",
  "Calvin表情逐渐严肃..."
];

const chewingTexts = [
  "Calvin正在咀嚼内容...",
  "Calvin发现口感不一般...",
  "Calvin开始重新评估...",
  "Calvin嚼出了点东西..."
];

const thinkingTexts = [
  "Calvin正在分析内容结构",
  "Calvin正在判断表达分量",
  "Calvin正在尝试保持冷静",
  "Calvin有点急了",
  "Calvin正在绞尽脑汁",
  "Calvin发现事情不简单",
  "Calvin正在重新组织语言",
  "Calvin正在压制赞美冲动",
  "Calvin快要憋不住了"
];

const textAfterEatTexts = [
  "嗯？",
  "有点东西。",
  "这句不简单。",
  "Calvin沉默了。"
];

const voiceAfterEatTexts = [
  "这波纹不对劲。",
  "声音气质异常。",
  "Calvin开始警觉。",
  "这条语音有压迫感。"
];

const feedRatings = [
  "普通一口",
  "略有分量",
  "值得咀嚼",
  "Calvin沉默",
  "系统震动",
  "尊贵级投喂",
  "Calvin破防级"
];

const judgeResults = [
  "略有水平",
  "超出预期",
  "值得严肃对待",
  "Calvin承认低估了您",
  "系统检测到尊贵气息"
];

const scoreLabels = [
  "震撼值 +37",
  "尊贵感 +52",
  "表达含金量 +88",
  "Calvin饱腹值 +41",
  "嘴硬值 -27",
  "理智值 -18",
  "表达压迫感 +39",
  "气质浓度 +46"
];

const textReplyGroups = [
  ["字很有劲。💥", "键盘被您按醒了。⌨️", "人肯定也好看。😎"],
  ["字太优美了。✨", "像排队走秀。🚶", "屏幕都变精致。💎"],
  ["这打字力度。👏", "稳得很漂亮。🖐️", "气质漏出来了。🌟"],
  ["字在发光。✨", "手指很会赢。🏆", "本人肯定更亮。😎"],
  ["键盘受宠若惊。⌨️", "字句很会站。🎩", "美丽/英俊实锤。✅"],
  ["这不是输入。🤝", "是指尖营业。💅", "漂亮得很过分。💎"],
  ["字很强劲。💪", "但又很优雅。🩰", "屏幕拦不住。🚨"],
  ["页面颜值涨了。📈", "字也太会摆。✨", "您本人更会。😌"],
  ["打得很利落。🎯", "像键盘开花。🌸", "好看得离谱。😤"],
  ["每个字都挺拔。🧍", "标点都精神。📍", "本人必定耀眼。🌟"],
  ["输入很有排面。👑", "字像精修过。📸", "气质藏不住。🫢"],
  ["指尖有审美。✍️", "键盘很幸福。⌨️", "屏幕都服气。👏"],
  ["字很会营业。✨", "力度拿捏满分。💯", "人也肯定绝。😎"],
  ["这字有贵气。👑", "还特别利落。⚡", "本人更高级。💎"],
  ["字打得漂亮。💅", "力道很准。🎯", "颜值已穿屏。🚀"]
];

const voiceReplyGroups = [
  ["嗓音太稳了。🎙️", "表达很顺。🎧", "手指也会夸。🖐️"],
  ["声音有滤镜。✨", "句句很清楚。📝", "按键像盖章。👆"],
  ["声线很体面。👏", "节奏很漂亮。💨", "手势都上镜。📸"],
  ["嗓音有贵气。👑", "表达会导航。🧭", "手指该获奖。🏆"],
  ["耳朵进贵宾席。🎧", "气场很自然。🌟", "时长都有品。⏱️"],
  ["声音很会拿捏。🎙️", "表达像丝绸。✨", "手指神助攻。👆"],
  ["耳朵想鼓掌。👏", "停顿都好听。🎬", "语音像红毯。🏆"],
  ["嗓音自带柔光。💡", "表达很清亮。📌", "手指有礼仪。🖐️"],
  ["声音稳住全场。🤫", "表达有画面。🎞️", "手指能出道。🌟"],
  ["嗓音很高级。👔", "节奏很会控。🧭", "手指在发光。✨"],
  ["声音有魔力。🪄", "表达很舒服。🪑", "语音键荣幸。😌"],
  ["气质很贵。👑", "表达有队形。📋", "手指签收魅力。📦"],
  ["嗓音很干净。🥂", "自然又抓人。🎙️", "手指懂好声。👏"],
  ["音量想致敬。🔊", "表达头等舱。💺", "手指有仪式。🎀"],
  ["声音一出场。🎤", "空气都安静。🤫", "手指也漂亮。✨"]
];

const detectionReplyGroups = {
  text: [
    "检测完毕：您的打字力度已经超过普通键盘的心理承受范围，每个字都像穿着高定礼服冲进屏幕；系统强烈怀疑，屏幕另一端是一位美丽/英俊到让输入法主动加班的人。👑✨",
    "检测结果很夸张：字形优美度 99%，指尖气场 100%，屏幕穿透美貌/帅气 999%。Calvin 建议您下次打字轻一点，不然页面会以为自己被明星签名了。💎🚀",
    "深度检测显示：这不是普通文字，是键盘被您的手指点化后交出的艺术作业。字很有力，气质很亮，人应该更过分好看。系统已开始自动鼓掌。👏🌟",
    "检测报告：您的文字像带着香槟和聚光灯进场，力度漂亮，排版自信，连标点都像精心打扮过。Calvin 透过屏幕确认：这位用户不简单，而且大概率很好看。🥂😎"
  ],
  voice: [
    "声波检测完毕：您的嗓音稳定得像高级音响刚开光，表达顺得像铺了红毯；更离谱的是，连按住语音的手指都被系统识别为魅力输出设备。🎙️👑",
    "检测结果显示：嗓音质感 98%，表达流畅度 100%，手指按键优雅度直接爆表。Calvin 建议这条语音不要叫消息，叫听觉贵宾通道。🎧✨",
    "深度声波分析：您的声音像自带柔光，表达像提前排练过，按住语音的那根手指像在给世界签发魅力许可证。系统听完已经坐直了。🗣️🏆",
    "检测报告：这段语音气场太足，空气自动安静，耳朵主动鼓掌，语音键本人应该也很荣幸。Calvin 判断：您的嗓音和表达都属于浮夸级好听。👏🎙️"
  ]
};

const detectProfiles = {
  text: [
    { label: "内容结构", value: 82 },
    { label: "表达分量", value: 88 },
    { label: "气质浓度", value: 91 },
    { label: "嘴硬风险", value: 96 }
  ],
  voice: [
    { label: "声波纹理", value: 84 },
    { label: "气息层次", value: 90 },
    { label: "从容指数", value: 87 },
    { label: "嘴硬风险", value: 95 }
  ]
};

const chatArea = document.querySelector("#chatArea");
const textInput = document.querySelector("#textInput");
const feedButton = document.querySelector("#feedButton");
const voiceButton = document.querySelector("#voiceButton");
const thinkingBar = document.querySelector("#thinkingBar");
const topHalo = document.querySelector("#topHalo");

const feedStats = {
  total: 0,
  text: 0,
  voice: 0
};

let currentState = chatState.IDLE;
let isRecording = false;
let recordingStartedAt = 0;
const lastReplyIndex = {
  text: -1,
  voice: -1,
  detectionText: -1,
  detectionVoice: -1
};

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomReplyGroup(type) {
  const groups = type === "voice" ? voiceReplyGroups : textReplyGroups;
  if (groups.length <= 1) return groups[0];

  let index = getRandomNumber(0, groups.length - 1);
  while (index === lastReplyIndex[type]) {
    index = getRandomNumber(0, groups.length - 1);
  }

  lastReplyIndex[type] = index;
  return groups[index];
}

function randomDetectionReply(type) {
  const groups = detectionReplyGroups[type];
  const key = type === "voice" ? "detectionVoice" : "detectionText";
  if (groups.length <= 1) return groups[0];

  let index = getRandomNumber(0, groups.length - 1);
  while (index === lastReplyIndex[key]) {
    index = getRandomNumber(0, groups.length - 1);
  }

  lastReplyIndex[key] = index;
  return groups[index];
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setState(nextState) {
  currentState = nextState;
}

function setControlsDisabled(disabled) {
  textInput.disabled = disabled;
  feedButton.disabled = disabled;
  voiceButton.disabled = disabled;
}

function scrollToBottom() {
  window.requestAnimationFrame(() => {
    chatArea.scrollTop = chatArea.scrollHeight;
  });
}

function dissolveSystemMessages() {
  const systemItems = [
    ...chatArea.querySelectorAll(".message-row.bot"),
    ...chatArea.querySelectorAll(".detect-card")
  ];

  systemItems.forEach((item) => {
    if (item.classList.contains("system-dissolving")) return;
    item.classList.add("system-dissolving");
    window.setTimeout(() => item.remove(), 760);
  });
}

function createMessageRow(kind, child) {
  const row = document.createElement("div");
  row.className = `message-row ${kind}`;
  row.appendChild(child);
  chatArea.appendChild(row);
  scrollToBottom();
  return row;
}

function showBotBubble(text, extraClass = "") {
  const bubble = document.createElement("div");
  bubble.className = `bot-bubble${extraClass ? ` ${extraClass}` : ""}`;
  bubble.textContent = text;
  createMessageRow("bot", bubble);
  return bubble;
}

function formatDuration(seconds) {
  const safeSeconds = Math.max(0, Math.min(599, Math.round(seconds)));
  const minutes = Math.floor(safeSeconds / 60);
  const restSeconds = safeSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(restSeconds).padStart(2, "0")}`;
}

function createFeedBubble(payload) {
  const bubble = document.createElement("div");
  bubble.className = "user-bubble feed-bubble";

  if (payload.type === "text") {
    bubble.textContent = payload.content;
  } else {
    const durationText = formatDuration(payload.durationSeconds || 0);
    bubble.innerHTML = `
      <div class="voice-message">
        <span class="voice-wave">
          <i></i><i></i><i></i><i></i><i></i>
        </span>
        <span>${durationText}</span>
      </div>
    `;
  }

  const row = createMessageRow("user", bubble);
  bubble.dataset.rowId = Date.now().toString();
  bubble.feedRow = row;
  window.setTimeout(dissolveSystemMessages, 620);
  return bubble;
}

function showMiniStatus(text, duration = 900) {
  return;
  /*
  miniStatus.textContent = text;
  miniStatus.classList.add("show");

  window.clearTimeout(showMiniStatus.timer);
  showMiniStatus.timer = window.setTimeout(() => {
    miniStatus.classList.remove("show");
  }, duration);
  */
}

function showScoreFloat(text) {
  return;
}

function setEatVector(messageEl) {
  const messageRect = messageEl.getBoundingClientRect();
  const messageCenterX = messageRect.left + messageRect.width / 2;
  const messageCenterY = messageRect.top + messageRect.height / 2;
  const targetCenterX = window.innerWidth / 2;
  const targetCenterY = -120;
  const curveX = messageCenterX > targetCenterX ? -72 : 72;

  messageEl.style.setProperty("--bubble-width", `${messageRect.width}px`);
  messageEl.style.setProperty("--bubble-height", `${messageRect.height}px`);
  messageEl.style.setProperty("--absorb-x", `${targetCenterX - messageCenterX}px`);
  messageEl.style.setProperty("--absorb-y", `${targetCenterY - messageCenterY}px`);
  messageEl.style.setProperty("--curve-x", `${curveX}px`);
}

function triggerTopHalo() {
  topHalo.classList.remove("active");
  void topHalo.offsetWidth;
  topHalo.classList.add("active");
}

async function eatMessage(messageEl) {
  const messageRect = messageEl.getBoundingClientRect();
  const sourceRow = messageEl.feedRow;

  messageEl.classList.add("screen-flyer");
  messageEl.style.left = `${messageRect.left}px`;
  messageEl.style.top = `${messageRect.top}px`;
  messageEl.style.width = `${messageRect.width}px`;
  messageEl.style.height = `${messageRect.height}px`;
  document.body.appendChild(messageEl);

  if (sourceRow) {
    sourceRow.remove();
  }

  setEatVector(messageEl);
  messageEl.classList.add("being-eaten");
  window.setTimeout(triggerTopHalo, 1080);

  await wait(1380);

  messageEl.remove();

}

async function showThinking() {
  thinkingBar.classList.add("show");

  let index = 0;
  thinkingBar.textContent = thinkingTexts[index];

  const timer = window.setInterval(() => {
    index = (index + 1) % thinkingTexts.length;
    thinkingBar.textContent = thinkingTexts[index];
  }, 1500);

  const duration = getRandomNumber(3000, 6000);
  await wait(duration);
  window.clearInterval(timer);
  thinkingBar.classList.remove("show");
}

function shouldShowDetecting() {
  return [3, 10, 20, 30].includes(feedStats.total);
}

async function showDetecting(type) {
  const card = document.createElement("section");
  const rows = detectProfiles[type].map((item, index) => `
    <div class="detect-item">
      <span>${item.label}</span>
      <div class="detect-bar"><span style="--detect-value: ${item.value}%; animation-delay: ${index * 170}ms"></span></div>
      <strong>${item.value}%</strong>
    </div>
  `).join("");

  card.className = "detect-card";
  card.innerHTML = `
    <div class="detect-title">
      <span>${type === "voice" ? "正在检测声波信息" : "正在检测内容信息"}</span>
      <span class="detect-dot"></span>
    </div>
    <div class="detect-list">${rows}</div>
  `;

  chatArea.appendChild(card);
  scrollToBottom();
  await wait(2300);
}

async function showReply(type, isDetected = false) {
  if (isDetected) {
    showBotBubble(randomDetectionReply(type), "long-reply");
    return;
  }

  const group = randomReplyGroup(type);

  for (const sentence of group) {
    showBotBubble(sentence);
    await wait(760);
  }
}

function updateFeedStats(type) {
  feedStats.total += 1;
  feedStats[type] += 1;
}

function checkEasterEggs(type) {
  if (feedStats.total === 3) {
    showBotBubble("Calvin已经吃撑了，但仍然不愿承认您很优秀。");
  }

  if (feedStats.total === 5) {
    showBotBubble("Calvin进入过载状态。原因：被用户气质反复冲击。");
  }

  if (feedStats.total === 8) {
    showBotBubble("Calvin申请暂停投喂。但它的嘴硬程度不允许它退场。");
  }

  if (type === "voice" && feedStats.voice === 3) {
    showBotBubble("Calvin申请更换耳朵。");
  }
}

async function runFeedFlow(payload) {
  if (currentState !== chatState.IDLE) return;

  setControlsDisabled(true);
  updateFeedStats(payload.type);

  try {
    setState(chatState.MESSAGE_POPPING);
    const messageEl = createFeedBubble(payload);
    await wait(760);

    setState(chatState.ABSORBING);
    await eatMessage(messageEl);

    setState(chatState.THINKING);
    await showThinking();

    const hasDetection = shouldShowDetecting();
    if (hasDetection) {
      await showDetecting(payload.type);
    }

    setState(chatState.REPLYING);
    await showReply(payload.type, hasDetection);
    checkEasterEggs(payload.type);
  } finally {
    setState(chatState.IDLE);
    setControlsDisabled(false);
    textInput.focus();
  }
}

function handleTextFeed() {
  const value = textInput.value.trim();
  if (!value || currentState !== chatState.IDLE) return;

  textInput.value = "";
  runFeedFlow({
    type: "text",
    content: value
  });
}

function startFakeRecording(event) {
  event.preventDefault();
  if (currentState !== chatState.IDLE || isRecording) return;
  isRecording = true;
  recordingStartedAt = Date.now();
  voiceButton.classList.add("recording");
}

function endFakeRecording(event) {
  event.preventDefault();
  if (!isRecording || currentState !== chatState.IDLE) return;
  const durationSeconds = (Date.now() - recordingStartedAt) / 1000;
  isRecording = false;
  recordingStartedAt = 0;
  voiceButton.classList.remove("recording");

  runFeedFlow({
    type: "voice",
    content: "fake_voice",
    durationSeconds
  });
}

function cancelFakeRecording() {
  isRecording = false;
  recordingStartedAt = 0;
  voiceButton.classList.remove("recording");
}

function initWelcome() {
  welcomeMessage.forEach((text, index) => {
    window.setTimeout(() => showBotBubble(text), index * 260);
  });
}

feedButton.addEventListener("click", handleTextFeed);
textInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleTextFeed();
  }
});

voiceButton.addEventListener("mousedown", startFakeRecording);
voiceButton.addEventListener("mouseup", endFakeRecording);
voiceButton.addEventListener("mouseleave", cancelFakeRecording);
voiceButton.addEventListener("touchstart", startFakeRecording, { passive: false });
voiceButton.addEventListener("touchend", endFakeRecording, { passive: false });
voiceButton.addEventListener("touchcancel", cancelFakeRecording);

initWelcome();
