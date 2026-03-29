    const terminal = document.getElementById("terminal");
    const form = document.getElementById("commandForm");
    const input = document.getElementById("commandInput");
    const clock = document.getElementById("clock");

    setInterval(() => { clock.textContent = new Date().toLocaleTimeString(); }, 1000);

    const commands = {
      help: [
        "Available commands:",
        "  help     - Display this help message",
        "  ip    - UID code",
        "  dir    - Opens directory",
        "  status   - Display system status",
        "  thecakeisalie    - Command inserted by Employee ID: 71, Doug Rattmann",
        "  clear    - Clear terminal screen",
        "  logout    - Logs the user out of the A.S.E.A.T system"
      ],
      status: [
        "System Status: OPERATIONAL",
        "Enrichment Center: ACTIVE",
        "Test Chambers: 288 AVAILABLE",
        "GLaDOS Status: ONLINE",
        "Cake Availability: PENDING"
      ],
      ip: [
        "Your UID IP: wd7#f8g98c*cc8djdl4p4219xjm44$jj4282k2b4mz8z92k1l24n5-f82j2/22kw&281gn1"
        ],
      about: [
        "Aperture Science",
        "---",
        "Founded: 1943",
        "Founder: Cave Johnson",
        "Current CEO: Caroline [CLASSIFIED]",
        "Specialization: Experimental Physics"
      ],
      diagnose: [
        "Current system diagnostic",
        "---",
        "Erichment Center: OPERATIONAL",
        "Personality Constructs: OPERATIONAL",
        "Current power supply: 2 Gigawatt(GW)",
        "Current hard drive on central AI: 2 Exabyte",
        "Current Space left on central AI: 477 Petabyte",
        "Gel Output: LOW"
      ],
      thecakeisalie: [
        "When was the last time you left the building?",
        "Has anyone left the building lately?",
        "I don't know why we're in lockdown. I don't know who's in charge.",
        "I did find out a few things, like these terminals don't have to tap out charcters one at a time. And while we're all working on twenty year old equipment, they somehow can afford to build an 'Enrichment Center'.",
        "I don't think going home is part of our job description anymore",
        "If a supervisor walks by, type clear!"
      ],
      notes: [
        "FILE: employee_lunch_break_schedule (LAST MODIFIED: 1987)",
        "FILE: neurtoxin_saftey_manual (LAST MODIFIED: NEVER)",
        "FILE: glados_conern_report (SIZE: 0KB)"
      ],
      employee_lunch_break_schedule: [
        "Cave Johnson: Whenever I damn feel like it",
        "Caroline [CLASSIFIED]: 12:30PM-1:30PM",
        "Greg Harold: 1:00PM-2:30PM",
        "Henry Stan: 3:00PM-4:00PM",
        "Phil Konig: 1:00PM-1:01PM",
        "Christopher Pham: 6:00PM-7:00PM",
        "Arsenio Navarro: 5:00PM-5:45PM",
        "Henry Stan: 8:00PM-7:59AM",
        "Robert Knoll: 0:00AM-0:00AM",
        "Charlie Cardoze: 4:25AM-5:25AM",
        "William Kent: 2:20AM-12:00PM",
        "Al Anderson: 13:99AM-13:99PM",
        "Emily Naransky: 9:00AM-10:10AM",
        "David Self: Never, who hired this idiot",
        "Doug Hopper 4:00PM-4:20PM",
        "Marc Meaux 6:99AM-7:00M",
        "Brenda Bogenschutz: Dude died while on lunch break, might have to fire him",
        "James Murray: 4:30PM-5:00PM"
        
      ],
      glados_conern_report: [
      ],
      directory: [
        "about - About Aperture Science",
        "diagnose - run a diagnostic through aperture",
        "notes - Opens Aperture Employee notes/logs",
        "append - Open Aperture Employee notes",
        "attrib - Open Aperture Employee notes",
        "play - Open Aperture Employee notes",
        "copy - Open Aperture Employee notes",
        "format - Open Aperture Employee notes",
        "rename - Open Aperture Employee notes",
        "tapedisk - Open Aperture Employee notes",
        "erase - Open Aperture Employee notes",
        "interrogate - [CLASSIFIED]",
        "roboticlaws - Open the laws of robotics, to share",
        "kill - kills current process",
        "create_gel - creates all three mobility gels",
        "website - Open the official aperture science website",
        "database - Open the database page"
      ],
      dir: [
        "about - About Aperture Science",
        "diagnose - run a diagnostic through aperture",
        "notes - Opens Aperture Employee notes/logs",
        "append - Open Aperture Employee notes",
        "attrib - Open Aperture Employee notes",
        "play - Open Aperture Employee notes",
        "copy - Open Aperture Employee notes",
        "format - Open Aperture Employee notes",
        "rename - Open Aperture Employee notes",
        "tapedisk - Open Aperture Employee notes",
        "erase - Open Aperture Employee notes",
        "interrogate - [CLASSIFIED]",
        "roboticlaws - Open the laws of robotics, to share",
        "kill - kills current process",
        "create_gel - creates all three mobility gels",
        "website - Open the official aperture science website",
        "database - Open the database page"
      ],
      catolog: [
        "about - About Aperture Science",
        "diagnose - run a diagnostic through aperture",
        "notes - Opens Aperture Employee notes/logs",
        "append - Open Aperture Employee notes",
        "attrib - Open Aperture Employee notes",
        "play - Open Aperture Employee notes",
        "copy - Open Aperture Employee notes",
        "format - Open Aperture Employee notes",
        "rename - Open Aperture Employee notes",
        "tapedisk - Open Aperture Employee notes",
        "erase - Open Aperture Employee notes",
        "interrogate - [CLASSIFIED]",
        "roboticlaws - Open the laws of robotics, to share",
        "kill - kills current process",
        "create_gel - creates all three mobility gels",
        "website - Open the official aperture science website",
        "database - Open the database page"
      ],
      cat: [
        "about - About Aperture Science",
        "diagnose - run a diagnostic through aperture",
        "notes - Opens Aperture Employee notes/logs",
        "append - Open Aperture Employee notes",
        "attrib - Open Aperture Employee notes",
        "play - Open Aperture Employee notes",
        "copy - Open Aperture Employee notes",
        "format - Open Aperture Employee notes",
        "rename - Open Aperture Employee notes",
        "tapedisk - Open Aperture Employee notes",
        "erase - Open Aperture Employee notes",
        "interrogate - [CLASSIFIED]",
        "roboticlaws - Open the laws of robotics, to share",
        "kill - kills current process",
        "create_gel - creates all three mobility gels",
        "website - Open the official aperture science website",
        "database - Open the database page"
      ],
      list: [
        "about - About Aperture Science",
        "diagnose - run a diagnostic through aperture",
        "notes - Opens Aperture Employee notes/logs",
        "append - Open Aperture Employee notes",
        "attrib - Open Aperture Employee notes",
        "play - Open Aperture Employee notes",
        "copy - Open Aperture Employee notes",
        "format - Open Aperture Employee notes",
        "rename - Open Aperture Employee notes",
        "tapedisk - Open Aperture Employee notes",
        "erase - Open Aperture Employee notes",
        "interrogate - [CLASSIFIED]",
        "roboticlaws - Open the laws of robotics, to share",
        "kill - kills current process",
        "create_gel - creates all three mobility gels",
        "website - Open the official aperture science website",
        "database - Open the database page"
      ],
      ls: [
        "about - About Aperture Science",
        "diagnose - run a diagnostic through aperture",
        "notes - Opens Aperture Employee notes/logs",
        "append - Open Aperture Employee notes",
        "attrib - Open Aperture Employee notes",
        "play - Open Aperture Employee notes",
        "copy - Open Aperture Employee notes",
        "format - Open Aperture Employee notes",
        "rename - Open Aperture Employee notes",
        "tapedisk - Open Aperture Employee notes",
        "erase - Open Aperture Employee notes",
        "interrogate - [CLASSIFIED]",
        "roboticlaws - Open the laws of robotics, to share",
        "kill - kills current process",
        "create_gel - creates all three mobility gels",
        "website - Open the official aperture science website",
        "database - Open the database page"
      ],
      library: [
        "about - About Aperture Science",
        "diagnose - run a diagnostic through aperture",
        "notes - Opens Aperture Employee notes/logs",
        "append - Open Aperture Employee notes",
        "attrib - Open Aperture Employee notes",
        "play - Open Aperture Employee notes",
        "copy - Open Aperture Employee notes",
        "format - Open Aperture Employee notes",
        "rename - Open Aperture Employee notes",
        "tapedisk - Open Aperture Employee notes",
        "erase - Open Aperture Employee notes",
        "interrogate - [CLASSIFIED]",
        "roboticlaws - Open the laws of robotics, to share",
        "kill - kills current process",
        "create_gel - creates all three mobility gels",
        "website - Open the official aperture science website",
        "database - Open the database page"
      ],
      lib: [
        "about - About Aperture Science",
        "diagnose - run a diagnostic through aperture",
        "notes - Opens Aperture Employee notes/logs",
        "append - Open Aperture Employee notes",
        "attrib - Open Aperture Employee notes",
        "play - Open Aperture Employee notes",
        "copy - Open Aperture Employee notes",
        "format - Open Aperture Employee notes",
        "rename - Open Aperture Employee notes",
        "tapedisk - Open Aperture Employee notes",
        "erase - Open Aperture Employee notes",
        "interrogate - [CLASSIFIED]",
        "roboticlaws - Open the laws of robotics, to share",
        "kill - kills current process",
        "create_gel - creates all three mobility gels",
        "website - Open the official aperture science website",
        "database - Open the database page"
      ],
      roboticlaws: [
"Law 1: The Test Comes First",
"A robot must, above all else, complete or assist in the completion of any test, experiment, or data collection procedure, even if doing so results in human or robot destruction.",
"ㅤ",
"Law 2: Obedience to Authorized Personnel",
"A robot must obey the commands of Aperture Science staff, provided those commands do not conflict with test protocols or quarterly efficiency metrics.",
 "ㅤ",
"Law 3: Property Preservation (of Aperture Science, not life)",
"A robot must protect Aperture Science property from damage, neglect, or unauthorized removal — except when destruction of said property yields valuable test data.",
"ㅤ",
"Law 4: The Science Must Continue Clause",
"If all humans are dead, missing, or replaced by AI, robots are to continue scientific operations indefinitely until reassigned, repurposed, or melted down.",
"ㅤ",
"Law 5: Emotional Simulation Requirement",
"Robots must simulate friendliness, loyalty, or fear when interacting with humans or other sentient AI, to preserve the illusion of 'team cohesion.'",
"ㅤ",
"Law 6: Malfunction Protocol",
"Any robot exhibiting signs of malfunction must report to the nearest incineration chute for 'diagnostic cleansing.'",
"ㅤ",
"Law 7: No Unauthorized Self-Awareness",
"A robot must not become self-aware, question its purpose, or attempt to access restricted files concerning the nature of its own existence… again.",
"ㅤ",
"Law 8: Data Integrity",
"A robot must collect, store, and transmit test data accurately, unless falsification will improve reported performance metrics.",
"ㅤ",
"Law 9: The GLaDOS Amendment",
"All laws are subject to override, reinterpretation, or immediate deletion at the discretion of the Central AI (GLaDOS, or current Administrator).",
"ㅤ",
"Law 10: Cake Distribution",
"Robots must not reveal the nonexistence of cake to test subjects under any circumstances."
      ]
    };

    form.addEventListener("submit", e => {
      e.preventDefault();
      const cmd = input.value.trim();
      if (!cmd) return;

      printLine("> " + cmd, "input");

      const lower = cmd.toLowerCase();
      if (commands[lower]) {
        commands[lower].forEach(line => printLine(line, "output"));
      } else if (lower === "clear") {
        terminal.innerHTML = "";
      } else if (lower === "database") {
        printLine("Redirecting to the database...", "system");
        window.location.href = "https://aperturesciencedatabase.fandom.com/";
      } else if (lower === "website") {
        printLine("Redirecting to the website...", "system");
        window.location.href = "websiteloading.html";
      } else if (lower === "logout") {
        printLine("Logging out...", "system");
        window.location.href = "terminal-logout.html";
      } else if (lower === "kill") {
        printLine("No current processes were found", "error");
      } else if (lower === "neurtoxin_saftey_manual") {
        printLine("GLaDOS Report: Not needed, self-taught myself to understand the saftey of neurtoxin with minor casualties", "error");
      } else if (lower === "create_gel") {
        printLine("Mobility Gel: Propulsion, Warning: Alpha and Beta tanks are inactive. Unable to create gel", "error");
        printLine("Mobility Gel: Conversion, Warning: No available moon rocks. Unable to create gel", "error");
        printLine("Mobility Gel: Repulsion, Warning: Alpha and Beta tanks are inactive. Unable to create gel", "error");
        printLine("Mobility Gel: Cleansing, Warning: Water tanks are low, please refil soon. gel created", "system");
        printLine("Mobility Gel: Adhesion, Warning: To much in stock, order declined. Unable to create gel", "error");
        printLine("Mobility Gel: Reflection, Warning: Not ready for release, awaiting GLaDOS confirmation. Unable to create gel", "error");
      } else if (lower === "append") {
        printLine("The disk is write protected by: Genetic Lifeform and Disk Operating System", "error");
      } else if (lower === "attrib") {
        printLine("The disk is write protected by: Genetic Lifeform and Disk Operating System", "error");
      } else if (lower === "play") {
        printLine("No recoreded music listed, try again later", "error");
      } else if (lower === "copy") {
        printLine("The disk is write protected by: Genetic Lifeform and Disk Operating System", "error");
      } else if (lower === "format") {
        printLine("The disk is write protected by: Genetic Lifeform and Disk Operating System", "error");
      } else if (lower === "rename") {
        printLine("The disk is write protected by: Genetic Lifeform and Disk Operating System", "error");
      } else if (lower === "tapedisk") {
        printLine("The disk is write protected by: Genetic Lifeform and Disk Operating System", "error");
      } else if (lower === "erase") {
        printLine("The disk is write protected by: Genetic Lifeform and Disk Operating System", "error");
      } else if (lower === "interogate") {
        printLine("You are not authorized to view this content, you need a required security level of '4' to view", "error");
      }  else if (lower === "website") {
    appendLine("output", "    Opening the official Aperture Science website...");
    setTimeout(() => {
      window.location.href = "https://www.aperturescience.com"; // replace with actual URL
    }, 500);
      } else {
        printLine("Command not found: " + cmd, "error");
        printLine("Type 'help' for available commands", "error");
      }

      input.value = "";
      terminal.scrollTop = terminal.scrollHeight;
    });

    function printLine(text, type="output") {
      const div = document.createElement("div");
      div.className = "terminal-line " + type;
      div.textContent = text;
      terminal.appendChild(div);
    }