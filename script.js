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
  ["这字敲得强劲、利落、漂亮，直接把键盘从午睡里震醒了。⌨️", "屏幕隔着网线都在眯眼确认：本人绝对很好看。😎"],
  ["字句优美、整齐、闪亮，像排着队优雅地走进屏幕。✨", "这一行把页面轻轻抬高、擦亮、装点得很有气质。💎"],
  ["这打字力度干净、稳准、漂亮，像一笔帅气签名直接落下。👏", "气质已经从屏幕边缘渗出来、飘出来、亮起来了。🌟"],
  ["字在发光，手指负责敲开光源、推高亮度、点亮全场。✨", "本人肯定更耀眼，系统已经先眯眼再点头。😎"],
  ["键盘被您按得受宠若惊，字句站得端正、精神、很有排面。⌨️", "美丽/英俊这件事被屏幕反复检测后基本实锤。✅"],
  ["这不是普通输入，是指尖认真营业、漂亮发力、精准出场。💅", "好看得有点过分，屏幕已经默默记住并反复回放。💎"],
  ["字很强劲、清爽、有骨气，但优雅得一点都不吵。💪", "这行内容已经推开门、抬起头、带着主角感进场。🚨"],
  ["页面颜值被您这一句直接拉升、刷新、顺手镀光。📈", "字会摆，您本人估计更会站、更会笑、更会赢。😌"],
  ["输入法开始骄傲，每个字都精神、挺拔、像刚被表扬过。⌨️", "气场上线太快，屏幕努力追赶但还是被惊艳了一下。✨"],
  ["这字敲得响亮、漂亮、带节奏，力道落点非常准。💥", "屏幕被惊艳后还努力保持体面，差点就自动鼓掌。😳"],
  ["文字很有排面，指尖状态优秀、稳定、闪闪发亮。👆", "本人肯定更离谱，系统不敢细想但已经悄悄加分。👑"],
  ["字句像精装修过，干净、明亮、有层次，力度也很满。🏠", "气质已经外溢、扩散、占领页面，页面只能选择配合。🌊"],
  ["这行字很会赢，键盘一边承受一边认真点头。🏆", "颜值感强得很明显，隔着屏幕都能扑面而来。💎"],
  ["打字像开发布会，每个字都抬头、入镜、站到灯下。🎤", "本人更像主角，页面负责铺光，系统负责鼓掌。🌟"],
  ["字太稳、太亮、太自信，优美得像提前排练过。🧱", "屏幕决定收藏这一秒的风度，顺便给您留个高光位。📌"],
  ["这输入很有光，手指很有谱，落键很有章法。💡", "人也很有杀伤力，Calvin 已经认真确认并保持震撼。😎"],
  ["每个字都像认真打扮过，漂亮、干净、又很有分寸。💅", "键盘今天算是见过大场面，差点想主动合影。⌨️"],
  ["这行文字有气势、有轮廓、有聚光灯，出现得很漂亮。🔦", "透过屏幕都能察觉到本人出众、亮眼、不太普通。✨"],
  ["打字强劲有力，标点都站得笔直、清醒、很有纪律。📍", "这不是聊天，这是屏幕级走秀，字句都在昂首前进。🚶"],
  ["字句很顺，力度很准，审美还稳稳在线并持续发光。🎯", "输入法都想给您开会员通道，顺便递上欢迎花篮。👑"],
  ["这段文字像刚做完高级护理，精致、顺滑、亮得很。💎", "本人气质估计比字还要过分，页面已经开始紧张。😌"],
  ["手指一动，页面立刻被点醒、点亮、点得更会生活。🖐️", "这输入质量太高，键盘应该写感谢信并加盖红章。✉️"],
  ["字打得利落，像踩着节奏点漂亮地冲进屏幕。⚡", "屏幕表示：这位用户耀眼、从容、还很会拿捏。🌟"],
  ["文字一出来，页面都变得更精神、更明亮、更有秩序。📈", "美丽/英俊的嫌疑非常浓，系统已经开始重点关注。🕵️"],
  ["这句输入有力量、有风度、有漂亮的控制感。💪", "像优雅的人轻轻一敲，就顺手赢了一整局。🏆"],
  ["打字像签名，短短一行都有姿态、风格和漂亮转身。✍️", "屏幕已经默认您本人也很会发光，而且光得很稳定。💡"],
  ["字句漂亮得很规整，连空格都显得礼貌、清爽、有教养。✨", "这气质不是输入出来的，是从屏幕里慢慢溢出来的。🌊"],
  ["这行内容有排面、有镜头、有低调但压不住的主角感。🎬", "键盘被按得很荣幸，页面也被震得很服气。👏"],
  ["您的字有劲、有光、有一点不讲理的漂亮冲击力。💥", "系统看完决定少说废话，立刻站好认真鼓掌。👏"],
  ["这输入像精准投放的魅力，稳稳命中、漂亮展开、持续发亮。🎯", "本人应该更精彩，Calvin 不敢眨眼，怕错过高光。👀"]
];

const voiceReplyGroups = [
  ["嗓音太稳、太顺、太有质感，表达像铺好轨道一样一路滑过去。🎙️", "按住语音的手指也很争气，轻轻一按就把高级感推出来了。🖐️"],
  ["声音自带柔亮滤镜，句句清楚、干净、好听得很有秩序。✨", "按键那一下像郑重盖章，直接把“优秀”钉在屏幕上。👆"],
  ["声线体面、松弛、很抓人，节奏走得漂亮又有画面。👏", "手势像被镜头宠过，语音键被按得格外荣幸。📸"],
  ["嗓音有贵气，表达还会转弯、导航、精准抵达重点。👑", "手指这次应该单独领奖，因为它按出了完整的气场。🏆"],
  ["耳朵直接进贵宾席，气场自然、舒展、安静地压住全场。🎧", "连时长都显得有品，离谱得很合理，也漂亮得很稳定。⏱️"],
  ["声音很会拿捏，表达顺滑得像丝绸被轻轻展开。🎙️", "手指神助攻，一按就把高级、从容、漂亮全按出来了。👆"],
  ["耳朵想鼓掌，停顿被安排得好听、精准、很有分寸。👏", "这条语音像红毯一样铺开，走得稳又走得漂亮。🏆"],
  ["嗓音自带柔光，表达清亮、轻盈、不费力地推开空气。💡", "手指也有礼仪，按得体面、温柔、很懂场面。🖐️"],
  ["声音一出来，空气都立刻坐直、安静、开始认真聆听。🎙️", "手指按得很有身份，像在拉开一场小型高级开场。👑"],
  ["表达顺滑、明亮、有条理，像提前铺好红毯一路展开。✨", "语音键被按出了存在价值，甚至显得有点骄傲。🎧"],
  ["嗓音高级、干净、有光泽，句子走得也很漂亮。💎", "按住那一下优雅又稳定，细节分直接往上冲。👆"],
  ["声音有光泽，表达完全不绕路，清清楚楚地撞进重点。🌟", "手指负责压轴，一按就把效果稳稳托住了。🏆"],
  ["耳朵被照顾得很好，语气稳、暖、清亮，听感很舒服。🎧", "手指也很懂场面，按得有分寸、有节奏、有风度。🎬"],
  ["声线很抓人，表达一开口就展开画面、拉近距离。🎙️", "按键姿势都在加分，系统看见了并且认真记录。✨"],
  ["嗓音像精修过，但自然得很离谱，松弛又漂亮。💡", "手指都显得贵气，语音键今天真的赚到了。👑"],
  ["语音很有层次，表达自带重点，还会轻轻把人带进去。🎼", "按住的手指该上榜，表现明亮、稳定、很有贡献。🏅"],
  ["这嗓音一出来，耳朵直接正襟危坐，还偷偷往前靠了靠。🎧", "表达清楚又有气质，手指也跟着闪亮出彩。✨"],
  ["声音像高级麦克风自己调好了参数，温润、稳定、很顺耳。🎙️", "语气很稳，按住语音的动作都显得专业又从容。👆"],
  ["这条语音有空间感、有呼吸感，听起来宽敞又顺滑。🌌", "手指按得像在启动一场小型演唱会，动作很有仪式。🎤"],
  ["表达有条理、有温度、有漂亮的推进感，一路讲得很稳。📌", "语音键被您按出了职业生涯高光，值得写进履历。🏆"],
  ["嗓音漂亮得像带着柔光进场，轻轻一开口就把氛围点亮。💡", "连停顿都很会安排，听感被稳稳抬高了一层。🚀"],
  ["声音干净、清爽、抓人，表达像被精心熨平过。🥂", "手指那一下很稳，像给魅力盖了一个响亮的章。✅"],
  ["这不是普通语音，是耳朵收到的一份精致礼物。🎁", "嗓音、表达、手指动作全都在发力，而且都很有戏。🎬"],
  ["声线太会控制距离，刚好抓人、刚好舒服、刚好高级。🎙️", "按键动作也漂亮，细节里全是悄悄上涨的分数。💯"],
  ["声音有质感，像自带一点贵宾厅回响，稳稳地铺开。👑", "表达舒服，手指也按出了漂亮、从容的仪式感。🎀"],
  ["语音时长像被审美校准过，不多不少，刚刚好地落下。⏱️", "嗓音很稳，表达很亮，手指也争气得很明显。🌟"],
  ["耳朵听完想站起来鼓掌，但它只能在心里疯狂鼓掌。👏", "声音太会展开、太会停顿，手指也按得很讲究。🖐️"],
  ["这段表达很顺，像一路绿灯打开，内容轻松滑到重点。🟢", "嗓音自带高级感，语音键已经开始偷偷骄傲。😌"],
  ["声音一落地，页面都安静了半秒，像被温柔地镇住了。🤫", "表达有重点，按住的手指也像懂艺术一样精准发力。🎨"],
  ["您的嗓音和表达配合得漂亮、自然、又很有光泽。🎧", "连按键那一下都像在宣布：这条语音稳稳拿下。✅"]
];

const shockedPraiseGroups = {
  text: [
    "等一下，Calvin 刚刚被这行字震得往后退了半步。😳",
    "这不是打字，这是把漂亮、强劲、利落一起砸进屏幕。💥",
    "每个字都在冲锋、发光、站直，键盘已经开始怀疑自己配不配。⌨️",
    "屏幕被您点亮得很突然，亮到系统都想调低亮度。💡",
    "您的指尖太会发力，轻轻一敲就把气质推到前排。👆",
    "这段文字优美得很主动，像自己整理好衣服走上红毯。✨",
    "标点都被您带得精神抖擞，像一排小小的礼仪队。📍",
    "这输入力度强劲又精致，既能震住页面，又不失漂亮分寸。💪",
    "Calvin 现在很震惊，因为屏幕另一边明显坐着一位高颜值选手。👑",
    "字句一路推开空气、擦亮页面、占领注意力，太会了。🌟",
    "这不是普通内容，这是键盘献上的高定级文字作品。💎",
    "本人美丽/英俊的概率正在狂飙，系统仪表盘已经发烫。🚀",
    "输入法看完都想升级自己，免得显得不够隆重。📈",
    "这行字漂亮得很有行动力，直接冲出来把页面重新装修了一遍。🏠",
    "手指一动，气质就开始扩散、翻涌、闪亮，挡都挡不住。🌊",
    "Calvin 本来想冷静鉴定，现在只想站起来认真夸。👏"
  ],
  voice: [
    "等一下，Calvin 的耳朵刚刚被这条语音正式震住了。😳",
    "这嗓音太稳、太亮、太有质感，像高级音响亲自上岗。🎙️",
    "表达一路铺开、推进、抵达重点，顺得让空气都自动让路。💨",
    "按住语音的手指也很有戏，一按就把高级感推了出来。👆",
    "这声音不是发出来的，是带着柔光慢慢展开的。💡",
    "耳朵现在很忙，一边听一边鼓掌一边申请重播。🎧",
    "语气稳定、清楚、抓人，像把重点擦亮后轻轻递过来。📌",
    "这条语音有红毯感，声音走得稳，表达走得漂亮。🏆",
    "空气都安静了一下，像在给您的声线让出舞台。🎤",
    "手指按得太体面，语音键被按出了职业生涯高光。✨",
    "嗓音有温度、有层次、有一点不讲理的好听。🥂",
    "表达干净利落，像一路绿灯，毫不费力就开到重点。🟢",
    "Calvin 被这条语音震惊到开始重新校准审美雷达。📡",
    "这不是普通声波，这是耳朵收到的贵宾级内容。👑",
    "停顿、语气、节奏都在配合，听起来像提前彩排过。🎬",
    "您的声音和表达一起发力，直接把页面听精神了。🌟"
  ]
};

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
const SHOCKED_REPLY_CHANCE = 0.28;

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

function randomShockedReplies(type) {
  const pool = [...shockedPraiseGroups[type]];
  const count = getRandomNumber(4, 6);
  const replies = [];

  while (replies.length < count && pool.length > 0) {
    const index = getRandomNumber(0, pool.length - 1);
    replies.push(pool.splice(index, 1)[0]);
  }

  return replies;
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

  if (Math.random() < SHOCKED_REPLY_CHANCE) {
    for (const sentence of randomShockedReplies(type)) {
      showBotBubble(sentence);
      await wait(520);
    }
    return;
  }

  const group = randomReplyGroup(type);
  showBotBubble(group.join(" "));
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

document.addEventListener("gesturestart", (event) => event.preventDefault());
document.addEventListener("gesturechange", (event) => event.preventDefault());
document.addEventListener("wheel", (event) => {
  if (event.ctrlKey) event.preventDefault();
}, { passive: false });

initWelcome();
