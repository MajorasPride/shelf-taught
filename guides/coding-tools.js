// Coding shelf: Linux terminal, Git, HTML and Security sections.
Object.assign(GUIDES, {
  "use-terminal": {
    title: "Get around in the Linux terminal",
    shelf: "coding",
    tags: ["linux", "terminal", "command line", "bash", "shell", "folders", "files", "commands", "beginner"],
    difficulty: "Beginner", time: "40 min", cost: "Free",
    summary: "The terminal lets you control a computer by typing commands instead of clicking. You'll find out where you are, move between folders, make files and folders, look inside them, and copy, rename and delete them.",
    canDo: [
      "Manage files faster than clicking, and on computers with no screen at all, like web servers.",
      "Follow almost any coding tutorial, since most of them say \"open a terminal and type...\".",
      "Get ready for Linux courses and certifications, which are mostly terminal work."
    ],
    words: [
      { word: "Terminal", meaning: "A window where you type commands to the computer." },
      { word: "Command", meaning: "One instruction, like ls or cd, followed by Enter." },
      { word: "Shell (Bash)", meaning: "The program inside the terminal that reads your commands. Bash is the most common." },
      { word: "Directory", meaning: "The terminal's word for a folder." },
      { word: "Prompt", meaning: "The text before your cursor, like you@pc:~$ . It means \"ready for a command\"." },
      { word: "~ (tilde)", meaning: "Short for your home folder." },
      { word: "Option (flag)", meaning: "An extra setting after a command, like the -l in ls -l." }
    ],
    analogy: "The terminal is talking to a building's front desk instead of walking the halls. pwd asks \"where am I?\", ls asks \"what's in this room?\", and cd says \"take me to that room\".",
    tools: [
      { name: "A Linux terminal", budget: "A free Linux terminal in your browser (see Go deeper)", best: "WSL with Ubuntu on your Windows laptop" },
      { name: "A cheat sheet", budget: "The table on this page", best: "This guide saved as a PDF" }
    ],
    steps: [
      { do: "Open the terminal. Type pwd and press Enter.", happened: "pwd means print working directory. It shows the folder you're in right now, like /home/you." },
      { do: "Type ls and press Enter. Then try ls -l.", happened: "ls lists what's in this folder. -l is an option that adds details: size, date and whether each one is a file or folder." },
      { do: "Type mkdir practice then cd practice, then pwd again.", happened: "mkdir made a folder, and cd moved you into it. pwd now ends in /practice." },
      { do: `Type echo "hello" > note.txt then ls.`, happened: "echo prints text, and > sends it into a file instead of the screen. You've made note.txt with hello inside." },
      { do: "Type cat note.txt", happened: "cat shows what's inside a file, right in the terminal." },
      { do: "Type cp note.txt copy.txt, then mv copy.txt saved.txt, then ls.", happened: "cp made a copy. mv moved it to a new name, which is how you rename in the terminal." },
      { do: "Type rm saved.txt then ls.", happened: "rm deleted the file. There's no Recycle Bin here: it's gone for good." },
      { do: "Type cd .. and then ls. Then type cd ~ to go home.", happened: ".. means the folder above this one. ~ jumps straight to your home folder from anywhere." }
    ],
    diagram: DIAGRAMS["use-terminal"],
    diagramCaption: "Folders sit inside folders like rooms in a building. cd moves you down a room; cd .. moves you back up.",
    table: {
      head: ["Command", "What it does", "Example"],
      rows: [
        ["pwd", "Shows where you are", "pwd"],
        ["ls", "Lists what's in this folder", "ls -l"],
        ["cd", "Moves to another folder", "cd practice"],
        ["mkdir", "Makes a new folder", "mkdir games"],
        ["cat", "Shows what's in a file", "cat note.txt"],
        ["cp", "Copies a file", "cp note.txt backup.txt"],
        ["mv", "Moves or renames a file", "mv note.txt todo.txt"],
        ["rm", "Deletes a file for good", "rm backup.txt"],
        ["man", "Shows the manual for a command", "man ls"],
        ["Tab key", "Finishes a file or folder name for you", "cd pra + Tab"]
      ]
    },
    mistakes: [
      "Expecting rm to send files to a recycle bin. In the terminal they're gone straight away.",
      "Forgetting quotes around names with spaces: cd \"My Games\".",
      "Mixing up capitals. To Linux, Notes.txt and notes.txt are two different files.",
      "Typing long names in full. Press Tab and the terminal finishes the name for you."
    ],
    tryIt: [
      { task: "Make a folder called games with two empty files inside: zelda.txt and mario.txt. Then list them.", hint: "touch makes an empty file: touch zelda.txt", answer: "mkdir games\ncd games\ntouch zelda.txt mario.txt\nls" },
      { task: "Rename mario.txt to luigi.txt, then check it worked.", answer: "mv mario.txt luigi.txt\nls" },
      { task: "Write \"buy milk\" into todo.txt, then add \"call mum\" on a second line without wiping the first.", hint: "> replaces a file's contents; >> adds to the end.", answer: `echo "buy milk" > todo.txt\necho "call mum" >> todo.txt\ncat todo.txt` }
    ],
    quiz: [
      { q: "You're lost and don't know which folder you're in. Which command tells you?", options: ["ls", "cd", "pwd", "cat"], answer: 2, why: "pwd means print working directory: it shows the folder you're standing in." },
      { q: "You want to read what's in notes.txt without opening an editor.", options: ["cat notes.txt", "ls notes.txt", "cd notes.txt", "mkdir notes.txt"], answer: 0, why: "cat prints a file's contents straight into the terminal." },
      { q: "You typed cd Documents and got \"No such file or directory\", but ls shows documents. Why?", options: ["The folder is broken", "You need sudo", "cd only works on files", "Linux cares about capital letters"], answer: 3, why: "Documents with a capital D and documents are different names to Linux." },
      { q: "You ran rm old.txt and now want it back. Where is it?", options: ["In the Trash", "Gone; the terminal has no recycle bin", "In Downloads", "In a backup folder Linux makes"], answer: 1, why: "rm deletes for good, so double-check before you press Enter." },
      { q: "How do you rename draft.txt to final.txt?", options: ["rename draft.txt", "cp draft.txt", "mv draft.txt final.txt", "cd final.txt"], answer: 2, why: "mv moves a file, and moving it to a new name in the same folder renames it." },
      { q: "You're in /home/you/games/saves and want to go up to games. Which command?", options: ["cd ..", "cd ~", "cd games", "pwd"], answer: 0, why: ".. means the folder one level up." },
      { q: "You ran echo \"hi\" > log.txt twice. How many lines are in log.txt?", options: ["Two", "One: > replaces what was there", "None", "An error"], answer: 1, why: "> overwrites the file each time. >> would add a new line." },
      { q: "You want to see more detail, like file sizes, when listing. What do you add?", options: ["ls -l", "ls size", "pwd -l", "cat -l"], answer: 0, why: "-l is an option that tells ls to show the long, detailed list." }
    ],
    links: [
      { title: "Linux Journey (free, step by step)", url: "https://labex.io/linuxjourney" },
      { title: "The Linux Command Line (free book)", url: "https://linuxcommand.org/tlcl.php" }
    ]
  },

  "save-with-git": {
    title: "Save your work with Git",
    shelf: "coding",
    tags: ["git", "github", "version control", "commit", "backup", "save", "push", "beginner"],
    difficulty: "Beginner", time: "45 min", cost: "Free",
    summary: "Git takes snapshots of your project so you can go back if something breaks, and GitHub keeps a copy online. You'll start tracking a folder, save snapshots, look at the history and send it all to GitHub.",
    canDo: [
      "Undo a change that broke your program, even weeks later.",
      "Keep a safe online copy of every project, so a dead laptop isn't a disaster.",
      "Put your projects online for free, like this website, which lives on GitHub."
    ],
    words: [
      { word: "Git", meaning: "A program that saves snapshots of your project's files over time." },
      { word: "Repository (repo)", meaning: "A project folder that Git is tracking, with all its history." },
      { word: "Commit", meaning: "One saved snapshot, with a short note about what changed." },
      { word: "Staging (git add)", meaning: "Picking which changes go into the next commit." },
      { word: "GitHub", meaning: "A website that stores a copy of your repos online." },
      { word: "Push", meaning: "Send your commits up to GitHub." },
      { word: "Pull", meaning: "Bring commits down from GitHub to your computer." }
    ],
    analogy: "Git is save points in a video game. A commit is one save point with a note about what you did. If you mess up later, you load an earlier save. GitHub is the cloud copy of your memory card.",
    tools: [
      { name: "Git", budget: "Git in the terminal (free)", best: "Git plus GitHub Desktop (free)" },
      { name: "Somewhere online to keep a copy", budget: "A free GitHub account", best: "A free GitHub account" }
    ],
    steps: [
      { do: "Install Git (see Go deeper), then once only type: git config --global user.name \"YourGitHubName\" and the same with user.email.", happened: "Every commit is labelled with this name and email. Use your GitHub username, not your real name, if your projects will be public." },
      { do: "In the terminal, go into your project folder and type git init.", happened: "Git starts watching this folder. It makes a hidden .git folder where the history lives." },
      { do: "Type git status.", happened: "Git lists files it hasn't saved yet, usually in red. Run git status any time you're unsure what's going on." },
      { do: "Type git add . (with the dot).", happened: "The dot means everything in this folder. These changes are now picked for the next snapshot; git status shows them in green." },
      { do: `Type git commit -m "First version"`, happened: "You made your first save point. -m adds the message so you know later what this snapshot was." },
      { do: "Change a file, then run git status, git add . and git commit -m \"Describe the change\" again.", happened: "That's the everyday loop: change, add, commit. Small, frequent commits are easiest to go back to." },
      { do: "Type git log --oneline.", happened: "You see your save points, newest first, each with a short code (like 0fbeee2) and its message." },
      { do: "Make an empty repo on GitHub, then run the two lines it shows you: git remote add origin ... and git push -u origin main.", happened: "Your commits now live on GitHub too. After this, a plain git push sends new commits up." }
    ],
    diagram: DIAGRAMS["save-with-git"],
    diagramCaption: "Each dot is a commit. You can always go back to an earlier dot.",
    table: {
      head: ["Command", "What it does", "Example"],
      rows: [
        ["init", "Start tracking a folder", "git init"],
        ["status", "Show what's changed", "git status"],
        ["add", "Pick files for the next snapshot", "git add ."],
        ["commit", "Save the snapshot with a note", "git commit -m \"Add menu\""],
        ["log", "List the save points", "git log --oneline"],
        ["diff", "Show exactly what changed", "git diff"],
        ["push", "Send your save points to GitHub", "git push"],
        ["pull", "Get new save points from GitHub", "git pull"]
      ]
    },
    mistakes: [
      "Vague notes like \"stuff\". Future you won't know which save point to go back to.",
      "Committing passwords or keys. They stay in the history even if you delete the file later.",
      "Forgetting git add before git commit, so the change isn't in the snapshot.",
      "Using your real name in commits on public repos when you'd rather stay private. Use your username."
    ],
    tryIt: [
      { task: "Make a folder git-practice, start Git in it, add a file hello.txt and commit it.", answer: "mkdir git-practice\ncd git-practice\ngit init\necho \"hello\" > hello.txt\ngit add .\ngit commit -m \"Add hello.txt\"" },
      { task: "Change hello.txt, then see exactly what changed before you commit.", hint: "There's a command that shows the difference.", answer: "echo \"hello again\" >> hello.txt\ngit diff\ngit add .\ngit commit -m \"Add a second line\"" },
      { task: "Write three good commit messages for: fixing a typo on the home page, adding a jump sound, and making the player faster.", answer: "Fix typo on the home page\nAdd jump sound\nMake the player move faster" }
    ],
    quiz: [
      { q: "You changed 3 files and want them in your next save point. What do you run first?", options: ["git log", "git add", "git init", "git push"], answer: 1, why: "add picks the files; then commit saves them as one snapshot." },
      { q: "Which commit note helps you most a month from now?", options: ["update", "stuff", "Fix jump height on level 2", "asdf"], answer: 2, why: "It says exactly what changed, so you can find that save point fast." },
      { q: "Your laptop dies. What keeps your code safe?", options: ["Having pushed your commits to GitHub", "Commits that only live on the laptop", "Running git status a lot", "Running git init again"], answer: 0, why: "Commits are saved on your computer until you push them. Pushing puts a copy online." },
      { q: "You committed a file with a password in it. You delete it in the next commit. Is that enough?", options: ["Yes, Git forgets it", "Yes, once you push", "No; it's still in the history, so change the password", "Only if the repo is private"], answer: 2, why: "Every old save point can still be opened, including the one with the password." },
      { q: "You're not sure which files you've changed. Which command tells you?", options: ["git status", "git push", "git init", "git commit"], answer: 0, why: "status shows changed and picked files at any time." },
      { q: "You worked on your laptop and pushed. Now on another computer, how do you get those commits?", options: ["git init", "git pull", "git add .", "git log"], answer: 1, why: "pull brings new commits down from GitHub." },
      { q: "What does the . mean in git add . ?", options: ["Only the first file", "Nothing", "Everything in this folder", "Undo"], answer: 2, why: "The dot means this folder, so every changed file in it is picked." },
      { q: "Your project is public and you don't want your real name on it. What should commits use?", options: ["Your real name", "No name; Git doesn't need one", "Your GitHub username and its no-reply email", "A random name each time"], answer: 2, why: "Set user.name to your username, and GitHub can give you a private no-reply email." }
    ],
    links: [
      { title: "Pro Git (free book)", url: "https://git-scm.com/book/en/v2" },
      { title: "Download Git", url: "https://git-scm.com/downloads" },
      { title: "GitHub Skills (free hands-on courses)", url: "https://github.com/skills" }
    ]
  },

  "first-web-page": {
    title: "Build your first web page",
    shelf: "coding",
    tags: ["html", "web", "website", "web page", "browser", "tags", "beginner"],
    difficulty: "Beginner", time: "40 min", cost: "Free",
    summary: "Web pages are text files written in HTML. You'll make a real page with a title, a heading, a paragraph, a list, a link and a picture, open it in your browser, and learn how every tag works.",
    canDo: [
      "Make your own web pages: a portfolio, a fan page, a page for a club.",
      "Understand what's under every website you visit (right-click, View page source).",
      "Get ready for CSS (colours and layout) and JavaScript (making pages do things)."
    ],
    words: [
      { word: "HTML", meaning: "The language for the words and layout of web pages." },
      { word: "Tag", meaning: "A label in angle brackets, like <p>. Most come in pairs: <p> opens, </p> closes." },
      { word: "Element", meaning: "An opening tag, its content and its closing tag together: <p>Hi</p>." },
      { word: "Attribute", meaning: "Extra information inside an opening tag, like href=\"...\" on a link." },
      { word: "Browser", meaning: "The app that reads HTML and shows it as a page: Chrome, Firefox, Safari." },
      { word: "index.html", meaning: "The usual name for a website's main page." }
    ],
    analogy: "HTML is labelling boxes when you move house. You wrap each thing in a tag that says what it is: this is a heading, this is a paragraph. The browser unpacks the boxes and sets each thing out in the right place.",
    tools: [
      { name: "A text editor", budget: "Notepad", best: "VS Code (free)" },
      { name: "A browser", budget: "Any browser", best: "Chrome or Firefox, with their built-in developer tools" }
    ],
    steps: [
      { do: "In your coding folder, make a new file called index.html (check it isn't index.html.txt).", happened: "The .html ending tells the computer this is a web page, so double-clicking opens it in a browser." },
      { do: "Type <!DOCTYPE html> on the first line, then <title>My page</title> on the next.", happened: "The first line says \"this is a modern web page\". The title is the text on the browser tab, not on the page itself." },
      { do: "Add <h1>My page</h1> and then <p>I'm learning to code.</p>", happened: "h1 is the main heading (big and bold). p is a paragraph. Each opens with <...> and closes with </...>." },
      { do: "Add a list: <ul><li>Python</li><li>HTML</li></ul>", happened: "ul means unordered (bulleted) list, and each li is one list item. Tags can sit inside other tags." },
      { do: `Add a link: <a href="https://developer.mozilla.org">Learn more</a>`, happened: "a makes a link. href is an attribute saying where it goes, and the words between the tags are what you click." },
      { do: `Add a picture: <img src="https://picsum.photos/300" alt="A random photo">`, happened: "img shows a picture from the src address. It has no closing tag. alt describes it for people who can't see it." },
      { do: "Save, then double-click index.html to open it in your browser.", happened: "The browser reads your tags from top to bottom and draws the page." },
      { do: "Change some words, save, and refresh the browser (F5, or pull down on a phone).", happened: "The browser shows the newest saved version only after a refresh. That's the HTML loop: edit, save, refresh." }
    ],
    diagram: DIAGRAMS["first-web-page"],
    diagramCaption: "What you type (left) and what the browser shows (right).",
    table: {
      head: ["Tag", "What it is", "Example"],
      rows: [
        ["h1 to h6", "Headings, biggest to smallest", "<h2>Section</h2>"],
        ["p", "A paragraph of text", "<p>Hello</p>"],
        ["ul and li", "A bulleted list and its items", "<ul><li>One</li></ul>"],
        ["ol and li", "A numbered list", "<ol><li>First</li></ol>"],
        ["a", "A link", "<a href=\"https://...\">Go</a>"],
        ["img", "A picture (no closing tag)", "<img src=\"cat.jpg\" alt=\"My cat\">"],
        ["strong", "Bold, important text", "<strong>Warning</strong>"]
      ]
    },
    mistakes: [
      "Forgetting a closing tag like </h1>, so everything after it turns into a heading.",
      "Windows saving the file as index.html.txt. Turn on file name extensions to check.",
      "Forgetting to save and refresh, so the browser still shows the old page.",
      "Leaving out alt on pictures. It's needed for screen readers and shows if the picture fails."
    ],
    tryIt: [
      { task: "Add a numbered list of your top 3 games under a heading that says My top games.", answer: "<h2>My top games</h2>\n<ol>\n  <li>Zelda</li>\n  <li>Valheim</li>\n  <li>Minecraft</li>\n</ol>" },
      { task: "Make a link that says Watch on YouTube and goes to youtube.com.", answer: `<a href="https://www.youtube.com">Watch on YouTube</a>` },
      { task: "On any website, right-click and choose View page source. Find an <h1> or <p> tag.", answer: "Every website is built from the same tags you're learning. Big sites just have a lot more of them, plus CSS and JavaScript." }
    ],
    quiz: [
      { q: "After your title, the whole rest of the page shows up as a giant heading. Likely cause?", options: ["The wrong browser", "A missing </h1>", "The file is too long", "A missing <p>"], answer: 1, why: "Without the closing tag, the browser thinks the heading never ends." },
      { q: "You want words people can click to go to another site. Which tag?", options: ["p", "li", "h1", "a"], answer: 3, why: "a (anchor) makes a link, and href says where it goes." },
      { q: "You changed the file, but the browser looks exactly the same. What do you check first?", options: ["That you saved the file and refreshed the browser", "Reinstall the browser", "Delete the file", "Rename it to page.html"], answer: 0, why: "The browser only shows the last saved version, and only after a refresh." },
      { q: "Where does the text inside <title> show up?", options: ["As a big heading", "On the browser tab", "Nowhere", "At the bottom of the page"], answer: 1, why: "The title labels the tab and bookmarks, not the page itself." },
      { q: "In <a href=\"https://site.com\">Go</a>, what is href?", options: ["A tag", "The link's words", "An attribute saying where the link goes", "A heading"], answer: 2, why: "Attributes sit inside the opening tag and add information." },
      { q: "You want a numbered list of steps. Which tags?", options: ["ol and li", "ul and li", "p and a", "h1 and h2"], answer: 0, why: "ol is an ordered (numbered) list; ul is bullets." },
      { q: "Your picture doesn't show, and you only see the words A photo of my cat. What are those words?", options: ["An error", "The alt text, shown because the picture didn't load", "The title", "A comment"], answer: 1, why: "alt text shows when the picture can't load, and screen readers read it aloud." },
      { q: "Which tag has no closing tag?", options: ["p", "h1", "img", "li"], answer: 2, why: "img only shows a picture, so it has nothing to wrap." }
    ],
    links: [
      { title: "MDN: Learn web development (free)", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development" },
      { title: "freeCodeCamp: Responsive Web Design (free course)", url: "https://www.freecodecamp.org/learn/" }
    ]
  },

  "lock-down-accounts": {
    title: "Lock down your accounts",
    shelf: "coding",
    tags: ["security", "cybersecurity", "password", "password manager", "2fa", "two-factor", "phishing", "hack", "passkey"],
    difficulty: "Beginner", time: "60 min", cost: "Free",
    summary: "Most hacks start with a weak or reused password, or a fake login page. You'll set up a password manager, turn on two-factor login, learn how passkeys work, and learn to spot phishing.",
    canDo: [
      "Make your accounts far harder to break into, starting with the one that matters most: email.",
      "Spot fake emails and fake login pages before they catch you.",
      "Understand the basics that every cybersecurity course builds on."
    ],
    words: [
      { word: "Password manager", meaning: "An app that makes, stores and fills in a different strong password for every site." },
      { word: "Master passphrase", meaning: "The one long password that unlocks your password manager." },
      { word: "Two-factor login (2FA)", meaning: "Needing a second thing, like a code from your phone, as well as your password." },
      { word: "Authenticator app", meaning: "An app that makes a new 6-digit login code every 30 seconds." },
      { word: "Passkey", meaning: "A login saved on your phone or computer that replaces the password and can't be phished." },
      { word: "Phishing", meaning: "A fake message or page pretending to be a real company to steal your login." },
      { word: "Data breach", meaning: "When a company's database leaks and people's passwords get out." }
    ],
    analogy: "Your accounts are rooms in a house. Using one password everywhere is one key for every door: lose it once and every room is open. A password manager is a ring of different keys locked in a safe, and two-factor login is a guard who also checks your face.",
    tools: [
      { name: "Password manager", budget: "Bitwarden (free)", best: "Bitwarden or 1Password (paid plans)" },
      { name: "Two-factor login", budget: "A free authenticator app on your phone", best: "Passkeys, or a hardware security key" }
    ],
    steps: [
      { do: "Install a password manager on your phone and laptop. Make a master passphrase of four or more random words, like river-pencil-cloud-tiger.", happened: "Long random words are easy to remember and very hard to guess. This is the only password you'll need to know." },
      { do: "Start with your email: change its password to a new one made by the password manager.", happened: "Email goes first because password resets for almost every other account are sent there." },
      { do: "Turn on two-factor login for your email. Choose an authenticator app or a passkey instead of text messages where you can.", happened: "Now a stolen password alone isn't enough to get in. Text codes are better than nothing but can be stolen by moving your number to another SIM." },
      { do: "Save the backup codes it gives you somewhere safe and offline, like printed in a drawer.", happened: "If you lose your phone, backup codes are how you get back in. Don't keep them in the same email account." },
      { do: "Repeat for banking, shopping, social media and your GitHub account.", happened: "Do the accounts that hold money or your identity first. One a day is fine." },
      { do: "Check your email address at Have I Been Pwned (link below).", happened: "It lists known breaches that included your email. Change the password for any site listed, and anywhere you reused it." },
      { do: "From now on, before typing a password after clicking a link, look at the web address. When in doubt, close it and go to the site yourself.", happened: "Fake pages copy logos perfectly, but the address gives them away: bank-0f-america-secure.com isn't your bank." }
    ],
    diagram: DIAGRAMS["lock-down-accounts"],
    diagramCaption: "With two-factor login, a stolen password on its own isn't enough to get in.",
    table: {
      codeCol: -1,
      head: ["How you log in", "How safe", "Why"],
      rows: [
        ["Same password everywhere", "Weak", "One leak opens every account"],
        ["A different strong password for each site", "Good", "A leak stays in one place"],
        ["Plus a code by text message", "Better", "Texts can be stolen by moving your number to another SIM"],
        ["Plus an authenticator app", "Strong", "The code lives only on your phone"],
        ["Passkey or hardware key", "Strongest", "It won't work on a fake site at all"]
      ]
    },
    mistakes: [
      "Using your master passphrase anywhere else.",
      "Keeping your backup codes in the same email account they protect.",
      "Trusting a link because the email has the right logo. Logos are easy to copy; the web address isn't.",
      "Giving a login code to someone who calls or texts you. Real companies never ask for it."
    ],
    tryIt: [
      { task: "Make up a strong master passphrase using four random words. Don't use it; just practise the style.", answer: "Something like: lantern-velvet-orbit-cactus\nRandom, unrelated words, joined with dashes. Never song lyrics or a famous quote." },
      { task: "Look at these addresses and pick the real one for PayPal: paypal.com.secure-login.net, paypa1.com, paypal.com", hint: "Read the part just before the first single / from the right: the real domain.", answer: "paypal.com is real.\npaypal.com.secure-login.net really belongs to secure-login.net.\npaypa1.com uses the number 1 instead of l." },
      { task: "List your 5 most important accounts in order of what to lock down first.", answer: "A good order: 1. Email  2. Bank  3. Password manager itself  4. Phone account (Google or Apple)  5. Shopping or social media" }
    ],
    quiz: [
      { q: "An email says your bank account is locked and links to bank-0f-america-secure.com. What do you do?", options: ["Click and log in quickly", "Reply with your password so they can unlock it", "Close it and go to the bank's site yourself, or call them", "Forward it to friends to warn them"], answer: 2, why: "The address is a fake (a zero instead of an o). Going to the site yourself skips the trap." },
      { q: "Why lock down your email account before anything else?", options: ["It's the oldest account", "Password resets for your other accounts go there", "It costs the most", "It doesn't matter which goes first"], answer: 1, why: "Whoever controls your email can reset most of your other passwords." },
      { q: "Which two-factor option is hardest to trick?", options: ["A text message code", "A security question", "Typing the password twice", "A passkey or hardware key"], answer: 3, why: "Passkeys and hardware keys check the real web address, so they won't log you in to a fake site." },
      { q: "Your password turned up in a breach of an old forum. You used it on 5 sites. What now?", options: ["Change it on all 5, each to a different password", "Change it on the forum only", "Nothing; it was an old forum", "Delete your email account"], answer: 0, why: "Attackers try leaked passwords on other sites. Each site needs its own password." },
      { q: "Someone calls saying they're from your bank and asks for the code just texted to you. What do you do?", options: ["Read them the code", "Hang up and call the bank's real number", "Text the code instead", "Give them half the code"], answer: 1, why: "That code is your second factor. Real banks never ask for it; giving it hands them your account." },
      { q: "Which master passphrase is strongest?", options: ["Password123!", "your pet's name and birthday", "lantern-velvet-orbit-cactus", "qwerty"], answer: 2, why: "Long and random beats short and clever. Personal details are easy to guess." },
      { q: "Where should you keep your 2FA backup codes?", options: ["Somewhere safe and offline, like printed at home", "In an email to yourself", "In a social media post", "Nowhere; you don't need them"], answer: 0, why: "They get you back in if you lose your phone, so keep them safe and away from the account they protect." },
      { q: "Which address really belongs to paypal.com?", options: ["paypal.com.login-check.net", "paypa1.com", "secure-paypal.co", "www.paypal.com/signin"], answer: 3, why: "The domain is the part right before the first single slash. Only the last one ends in paypal.com there." }
    ],
    links: [
      { title: "CISA: Secure Our World (free tips)", url: "https://www.cisa.gov/secure-our-world" },
      { title: "Have I Been Pwned (check for breaches)", url: "https://haveibeenpwned.com/" },
      { title: "Bitwarden (free password manager)", url: "https://bitwarden.com/" }
    ]
  }
});
