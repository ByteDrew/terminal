    const chars = ['░', '▒', '▓', '█', ' '];
    function randomLine(len=8) {
      return Array.from({length: len}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    }
    const data1 = Array.from({length: 20}, () => randomLine());
    const data2 = Array.from({length: 20}, () => randomLine());
    document.getElementById("dataCol1").innerHTML = data1.concat(data1).map(l => `<div>${l}</div>`).join('');
    document.getElementById("dataCol2").innerHTML = data2.concat(data2).map(l => `<div>${l}</div>`).join('');

const creditNames = [
  ">LIST PERSONNEL","Charlie Burgin","ByteDrew","Augusta Butlin","Tobin Buttram","Liz Cambridge",
  "Roxieboy1624","Matt Campbell","Chris Carollo","Dario Casali","Matt Charlesworth",
  "Gabe Cigne","Mike Clancy","Kerry Davis","John Doty","John Faulds","Steve Goldstein",
  "Iikka Keränen","David Sawyer","Kelly Thornton","Marcello Vercosa","Jeep Barnett"
];

const creditsEl = document.getElementById("credits");
let creditIndex = 0;
let typingIndex = 0;
let currentName = creditNames[creditIndex];

creditsEl.style.display = "flex";
creditsEl.style.flexDirection = "column"; 
creditsEl.style.justifyContent = "flex-end"; 
creditsEl.style.alignItems = "flex-end";

const typingDiv = document.createElement("div");
typingDiv.className = "credit-name typing-line";
typingDiv.innerHTML = `<span id="typingText">`;
creditsEl.appendChild(typingDiv);

const typingText = typingDiv.querySelector("#typingText");

const MAX_VISIBLE = 23;

function typeNextChar() {
  if (typingIndex < currentName.length) {
    typingText.textContent += currentName[typingIndex++];
  } else {
    const finished = document.createElement("div");
    finished.className = "credit-name";
    finished.textContent = currentName;

    creditsEl.insertBefore(finished, typingDiv);

    if (creditsEl.children.length > MAX_VISIBLE + 1) {
      creditsEl.removeChild(creditsEl.firstChild);
    }

    creditIndex = (creditIndex + 1) % creditNames.length;
    currentName = creditNames[creditIndex];
    typingText.textContent = "";
    typingIndex = 0;
  }
}

setInterval(typeNextChar, 120);

    const terminal = document.getElementById("terminal");
    const dialogue = [
      "",
      "",
      "Aperture Science Terminal v4.888",
      "Copyright (c) 1986-2020 Aperture Laboratories",
      "",
      "All rights reserved.",
      "Welcome to the Aperture Science Employee Access Terminal",
      "Type 'help' for available commands"
    ];
    let dialogueIndex = 0;
    function appendLine(type, text) {
      const div = document.createElement("div");
      div.className = `terminal-line ${type}`;
      div.textContent = text;
      terminal.appendChild(div);
      terminal.scrollTop = terminal.scrollHeight;
    }
    const dialogueInterval = setInterval(() => {
      if (dialogueIndex < dialogue.length) {
        appendLine("dialogue", dialogue[dialogueIndex++]);
      } else {
        clearInterval(dialogueInterval);
        showPrompt();
      }
    }, 400);

function showPrompt() {
  const form = document.createElement("form");
  form.className = "terminal-line input command-form";
  form.innerHTML = `<span style="display:inline-block;width:28px;"></span>
    <span id="cmdText"></span><span class="cursor"></span>
    <input type="text" id="cmdInput" autofocus autocomplete="off" style="position:absolute;top:-9999px;left:-9999px;">`;
  terminal.appendChild(form);

  terminal.scrollTop = terminal.scrollHeight;

  const cmdText = form.querySelector("#cmdText");
  const cmdInput = form.querySelector("#cmdInput");

  cmdInput.focus();
  form.addEventListener("click", () => cmdInput.focus());

  cmdInput.addEventListener("input", () => {
    cmdText.textContent = cmdInput.value;
    terminal.scrollTop = terminal.scrollHeight;
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    const value = cmdInput.value.trim();
    form.remove();
    appendLine("input", "    " + value);
    handleCommand(value.toLowerCase());
  });
}

    function handleCommand(cmd) {
      if (!cmd) return showPrompt();
      if (cmd === "help") {
        appendLine("output","    Available commands:");
        appendLine("output","      help     - Display this help message");
        appendLine("output","      ip   - UID code");
        appendLine("output","      dir    - Opens directory");
        appendLine("output","      status    - Display system status");
        appendLine("output","      thecakeisalie    - Command inserted by Employee ID: 71, Doug Rattmann");
        appendLine("output","      clear    - Clear terminal screen");
        appendLine("output","      logout    - Logs the user out of the Aperture Science terminal system");
      } else if (cmd === "status") {
        appendLine("green","    System Status: OPERATIONAL");
        appendLine("green","    Enrichment Center: ACTIVE");
        appendLine("output","    Test Chambers: 288 AVAILABLE");
        appendLine("green","    GLaDOS Status: ONLINE");
        appendLine("output","    Cake Availability: PENDING");
      } else if (cmd === "ip") {
        appendLine("output","    Your UID IP: wd7#f8g98c*cc8djdl4p4219xjm44$jj4282k2b4mz8z92k1l24n5-f82j2/22kw&281gn1");
      } else if (cmd === "about") {
        appendLine("output","    Aperture Science");
        appendLine("output","    ---");
        appendLine("output","    Founded: 1943");
        appendLine("output","    Founder: Cave Johnson");
        appendLine("output","    Current CEO: Caroline [CLASSIFIED]");
        appendLine("output","    Specialization: Experimental Physics");
      } else if (cmd === "diagnose") {
        appendLine("output","    Current system diagnostic");
        appendLine("output","    ---");
        appendLine("green","    Erichment Center: OPERATIONAL");
        appendLine("green","    Personality Constructs: OPERATIONAL");
        appendLine("output","    Current power supply: 2 Gigawatt(GW)");
        appendLine("output","    Current hard drive on central AI: 2 Exabyte");
        appendLine("output","    Current Space left on central AI: 477 Petabyte");
        appendLine("error","    Gel Output: LOW");
      } else if (cmd === "thecakeisalie") {
        appendLine("output","    When was the last time you left the building?");
        appendLine("output","    Has anyone left the building lately?");
        appendLine("output","    I don't know why we're in lockdown. I don't know who's in charge.");
        appendLine("output","    I did find out a few things, like these terminals don't have to tap out charcters one at a time.");
        appendLine("output","    And while we're all working on twenty year old equipment, they somehow can afford to build an 'Enrichment Center'.");
        appendLine("output","    I don't think going home is part of our job description anymore");
        appendLine("output","    If a supervisor walks by, type clear!");
      } else if (cmd === "notes") {
        appendLine("output","    FILE: employee_lunch_break_schedule (LAST MODIFIED: 1987)");
        appendLine("output","    FILE: neurtoxin_saftey_manual (LAST MODIFIED: NEVER)");
        appendLine("output","    FILE: glados_conern_report (SIZE: 0KB)");
      } else if (cmd === "employee_lunch_break_schedule") {
        appendLine("output","    Cave Johnson: Whenever I damn feel like it");
        appendLine("output","    Caroline [CLASSIFIED]: 12:30PM-1:30PM");
        appendLine("output","    Greg Harold: 1:00PM-2:30PM");
        appendLine("output","    Henry Stan: 3:00PM-4:00PM");
        appendLine("output","    Phil Konig: 1:00PM-1:01PM");
        appendLine("output","    Christopher Pham: 6:00PM-7:00PM");
        appendLine("output","    Arsenio Navarro: 5:00PM-5:45PM");
        appendLine("output","    Henry Stan: 8:00PM-7:59AM");
        appendLine("output","    Robert Knoll: 0:00AM-0:00AM");
        appendLine("output","    Charlie Cardoze: 4:25AM-5:25AM");
        appendLine("output","    William Kent: 2:20AM-12:00PM");
        appendLine("output","    Al Anderson: 13:99AM-13:99PM");
        appendLine("output","    Emily Naransky: 9:00AM-10:10AM");
        appendLine("output","    David Self: Never, who hired this idiot");
        appendLine("output","    Doug Hopper 4:00PM-4:20PM");
        appendLine("output","    Marc Meaux 6:99AM-7:00M");
        appendLine("output","    Brenda Bogenschutz: Dude died while on lunch break, might have to fire him");
        appendLine("output","    James Murray: 4:30PM-5:00PM");
      } else if (cmd === "glados_conern_report") {
        appendLine("output","    ");
      } else if (cmd === "directory") {
        appendLine("output","    about - About Aperture Science");
        appendLine("output","    diagnose - run a diagnostic through aperture");
        appendLine("output","    notes - Opens Aperture Employee notes/logs");
        appendLine("output","    append - Open Aperture Employee notes");
        appendLine("output","    attrib - Open Aperture Employee notes");
        appendLine("output","    play - Open Aperture Employee notes");
        appendLine("output","    copy - Open Aperture Employee notes");
        appendLine("output","    format - Open Aperture Employee notes");
        appendLine("output","    rename - Open Aperture Employee notes");
        appendLine("output","    tapedisk - Open Aperture Employee notes");
        appendLine("output","    erase - Open Aperture Employee notes");
        appendLine("output","    interrogate - [CLASSIFIED]");
        appendLine("output","    roboticlaws - Open the laws of robotics, to share");
        appendLine("output","    kill - kills current process");
        appendLine("output","    create_gel - creates all three mobility gels");
        appendLine("output","    website - Open the official aperture science website");
        appendLine("output","    database - Open the database page");
      } else if (cmd === "dir") {
        appendLine("output","    about - About Aperture Science");
        appendLine("output","    diagnose - run a diagnostic through aperture");
        appendLine("output","    notes - Opens Aperture Employee notes/logs");
        appendLine("output","    append - Open Aperture Employee notes");
        appendLine("output","    attrib - Open Aperture Employee notes");
        appendLine("output","    play - Open Aperture Employee notes");
        appendLine("output","    copy - Open Aperture Employee notes");
        appendLine("output","    format - Open Aperture Employee notes");
        appendLine("output","    rename - Open Aperture Employee notes");
        appendLine("output","    tapedisk - Open Aperture Employee notes");
        appendLine("output","    erase - Open Aperture Employee notes");
        appendLine("output","    interrogate - [CLASSIFIED]");
        appendLine("output","    roboticlaws - Open the laws of robotics, to share");
        appendLine("output","    kill - kills current process");
        appendLine("output","    create_gel - creates all three mobility gels");
        appendLine("output","    website - Open the official aperture science website");
        appendLine("output","    database - Open the database page");
      } else if (cmd === "catolog") {
        appendLine("output","    about - About Aperture Science");
        appendLine("output","    diagnose - run a diagnostic through aperture");
        appendLine("output","    notes - Opens Aperture Employee notes/logs");
        appendLine("output","    append - Open Aperture Employee notes");
        appendLine("output","    attrib - Open Aperture Employee notes");
        appendLine("output","    play - Open Aperture Employee notes");
        appendLine("output","    copy - Open Aperture Employee notes");
        appendLine("output","    format - Open Aperture Employee notes");
        appendLine("output","    rename - Open Aperture Employee notes");
        appendLine("output","    tapedisk - Open Aperture Employee notes");
        appendLine("output","    erase - Open Aperture Employee notes");
        appendLine("output","    interrogate - [CLASSIFIED]");
        appendLine("output","    roboticlaws - Open the laws of robotics, to share");
        appendLine("output","    kill - kills current process");
        appendLine("output","    create_gel - creates all three mobility gels");
        appendLine("output","    website - Open the official aperture science website");
        appendLine("output","    database - Open the database page");
      } else if (cmd === "cat") {
        appendLine("output","    about - About Aperture Science");
        appendLine("output","    diagnose - run a diagnostic through aperture");
        appendLine("output","    notes - Opens Aperture Employee notes/logs");
        appendLine("output","    append - Open Aperture Employee notes");
        appendLine("output","    attrib - Open Aperture Employee notes");
        appendLine("output","    play - Open Aperture Employee notes");
        appendLine("output","    copy - Open Aperture Employee notes");
        appendLine("output","    format - Open Aperture Employee notes");
        appendLine("output","    rename - Open Aperture Employee notes");
        appendLine("output","    tapedisk - Open Aperture Employee notes");
        appendLine("output","    erase - Open Aperture Employee notes");
        appendLine("output","    interrogate - [CLASSIFIED]");
        appendLine("output","    roboticlaws - Open the laws of robotics, to share");
        appendLine("output","    kill - kills current process");
        appendLine("output","    create_gel - creates all three mobility gels");
        appendLine("output","    website - Open the official aperture science website");
        appendLine("output","    database - Open the database page");
      } else if (cmd === "list") {
        appendLine("output","    about - About Aperture Science");
        appendLine("output","    diagnose - run a diagnostic through aperture");
        appendLine("output","    notes - Opens Aperture Employee notes/logs");
        appendLine("output","    append - Open Aperture Employee notes");
        appendLine("output","    attrib - Open Aperture Employee notes");
        appendLine("output","    play - Open Aperture Employee notes");
        appendLine("output","    copy - Open Aperture Employee notes");
        appendLine("output","    format - Open Aperture Employee notes");
        appendLine("output","    rename - Open Aperture Employee notes");
        appendLine("output","    tapedisk - Open Aperture Employee notes");
        appendLine("output","    erase - Open Aperture Employee notes");
        appendLine("output","    interrogate - [CLASSIFIED]");
        appendLine("output","    roboticlaws - Open the laws of robotics, to share");
        appendLine("output","    kill - kills current process");
        appendLine("output","    create_gel - creates all three mobility gels");
        appendLine("output","    website - Open the official aperture science website");
        appendLine("output","    database - Open the database page");
      } else if (cmd === "ls") {
        appendLine("output","    about - About Aperture Science");
        appendLine("output","    diagnose - run a diagnostic through aperture");
        appendLine("output","    notes - Opens Aperture Employee notes/logs");
        appendLine("output","    append - Open Aperture Employee notes");
        appendLine("output","    attrib - Open Aperture Employee notes");
        appendLine("output","    play - Open Aperture Employee notes");
        appendLine("output","    copy - Open Aperture Employee notes");
        appendLine("output","    format - Open Aperture Employee notes");
        appendLine("output","    rename - Open Aperture Employee notes");
        appendLine("output","    tapedisk - Open Aperture Employee notes");
        appendLine("output","    erase - Open Aperture Employee notes");
        appendLine("output","    interrogate - [CLASSIFIED]");
        appendLine("output","    roboticlaws - Open the laws of robotics, to share");
        appendLine("output","    kill - kills current process");
        appendLine("output","    create_gel - creates all three mobility gels");
        appendLine("output","    website - Open the official aperture science website");
        appendLine("output","    database - Open the database page");
      } else if (cmd === "library") {
        appendLine("output","    about - About Aperture Science");
        appendLine("output","    diagnose - run a diagnostic through aperture");
        appendLine("output","    notes - Opens Aperture Employee notes/logs");
        appendLine("output","    append - Open Aperture Employee notes");
        appendLine("output","    attrib - Open Aperture Employee notes");
        appendLine("output","    play - Open Aperture Employee notes");
        appendLine("output","    copy - Open Aperture Employee notes");
        appendLine("output","    format - Open Aperture Employee notes");
        appendLine("output","    rename - Open Aperture Employee notes");
        appendLine("output","    tapedisk - Open Aperture Employee notes");
        appendLine("output","    erase - Open Aperture Employee notes");
        appendLine("output","    interrogate - [CLASSIFIED]");
        appendLine("output","    roboticlaws - Open the laws of robotics, to share");
        appendLine("output","    kill - kills current process");
        appendLine("output","    create_gel - creates all three mobility gels");
        appendLine("output","    website - Open the official aperture science website");
        appendLine("output","    database - Open the database page");
      } else if (cmd === "lib") {
        appendLine("output","    about - About Aperture Science");
        appendLine("output","    diagnose - run a diagnostic through aperture");
        appendLine("output","    notes - Opens Aperture Employee notes/logs");
        appendLine("output","    append - Open Aperture Employee notes");
        appendLine("output","    attrib - Open Aperture Employee notes");
        appendLine("output","    play - Open Aperture Employee notes");
        appendLine("output","    copy - Open Aperture Employee notes");
        appendLine("output","    format - Open Aperture Employee notes");
        appendLine("output","    rename - Open Aperture Employee notes");
        appendLine("output","    tapedisk - Open Aperture Employee notes");
        appendLine("output","    erase - Open Aperture Employee notes");
        appendLine("output","    interrogate - [CLASSIFIED]");
        appendLine("output","    roboticlaws - Open the laws of robotics, to share");
        appendLine("output","    kill - kills current process");
        appendLine("output","    create_gel - creates all three mobility gels");
        appendLine("output","    website - Open the official aperture science website");
        appendLine("output","    database - Open the database page");
      } else if (cmd === "create_gel") {
        appendLine("error","    Mobility Gel: Propulsion, Warning: Alpha and Beta tanks are inactive. Unable to create gel");
        appendLine("error","    Mobility Gel: Conversion, Warning: No available moon rocks. Unable to create gel");
        appendLine("error","    Mobility Gel: Repulsion, Warning: Alpha and Beta tanks are inactive. Unable to create gel");
        appendLine("green","    Mobility Gel: Cleansing, Warning: Water tanks are low, please refil soon. gel created");
        appendLine("error","    Mobility Gel: Adhesion, Warning: To much in stock, order declined. Unable to create gel");
        appendLine("error","    Mobility Gel: Reflection, Warning: Not ready for release, awaiting GLaDOS confirmation. Unable to create gel");
      } else if (cmd === "neurtoxin_saftey_manual") {
        appendLine("error","    GLaDOS Report: Not needed, self-taught myself to understand the saftey of neurtoxin with minor casualties");
      } else if (cmd === "append") {
        appendLine("error","    The disk is write protected by: Genetic Lifeform and Disk Operating System");
      } else if (cmd === "attrib") {
        appendLine("error","    The disk is write protected by: Genetic Lifeform and Disk Operating System");
      } else if (cmd === "play") {
        appendLine("error","    The disk is write protected by: Genetic Lifeform and Disk Operating System");
      } else if (cmd === "copy") {
        appendLine("error","    The disk is write protected by: Genetic Lifeform and Disk Operating System");
      } else if (cmd === "format") {
        appendLine("error","    The disk is write protected by: Genetic Lifeform and Disk Operating System");
      } else if (cmd === "rename") {
        appendLine("error","    The disk is write protected by: Genetic Lifeform and Disk Operating System");
      } else if (cmd === "tapedisk") {
        appendLine("error","    The disk is write protected by: Genetic Lifeform and Disk Operating System");
      } else if (cmd === "erase") {
        appendLine("error","    The disk is write protected by: Genetic Lifeform and Disk Operating System");
      } else if (cmd === "interogate") {
        appendLine("error","    You are not authorized to view this content, you need a required security level of '4' to view");
      }  else if (cmd === "website") {
    appendLine("output", "    Redirecting to the website...");
    setTimeout(() => {
      window.location.href = "websiteloading.html";
    }, 500);
      }  else if (cmd === "database") {
    appendLine("output", "    Redirecting to the database...");
    setTimeout(() => {
      window.location.href = "https://aperturesciencedatabase.fandom.com/";
    }, 500);
      }  else if (cmd === "logout") {
    appendLine("output", "    Logging out...");
    setTimeout(() => {
      window.location.href = "terminal-login.html";
    }, 500);
      } else if (cmd === "clear") {
        terminal.innerHTML = "";
        dialogueIndex = 0;
        dialogue.forEach((line,i)=>setTimeout(()=>appendLine("dialogue",line),i*200));
      } else {
        appendLine("error","    UNKNOWN COMMAND: " + cmd);
      }
      showPrompt();
    }