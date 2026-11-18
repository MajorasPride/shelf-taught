// Coding shelf, "Start here" section: for someone who has never written code.
Object.assign(DIAGRAMS, {
  "what-is-code": `<svg viewBox="0 0 320 120" role="img" aria-label="You write code, a translator turns it into computer instructions, the computer does the job"><rect x="6" y="38" width="86" height="44" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="49" y="58" text-anchor="middle" font-size="12" fill="currentColor">You write</text><text x="49" y="74" text-anchor="middle" font-size="12" fill="currentColor">code</text><path d="M92 60h22" stroke="currentColor" stroke-width="2"/><path d="M108 54l8 6-8 6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="117" y="38" width="86" height="44" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="160" y="58" text-anchor="middle" font-size="12" fill="currentColor">Python</text><text x="160" y="74" text-anchor="middle" font-size="12" fill="currentColor">translates</text><path d="M203 60h22" stroke="currentColor" stroke-width="2"/><path d="M219 54l8 6-8 6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="228" y="38" width="86" height="44" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="271" y="58" text-anchor="middle" font-size="12" fill="currentColor">Computer</text><text x="271" y="74" text-anchor="middle" font-size="12" fill="currentColor">does it</text></svg>`,
  "set-up-editor": `<svg viewBox="0 0 320 140" role="img" aria-label="An online editor: code on the left, a Run button on top, output on the right"><rect x="6" y="10" width="308" height="122" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 34h308M160 34v98" stroke="currentColor" stroke-width="2"/><rect x="118" y="15" width="38" height="15" rx="3" fill="currentColor"/><text x="137" y="26" text-anchor="middle" font-size="10" fill="#fff">Run</text><text x="16" y="26" font-size="10" fill="currentColor">main.py</text><text x="16" y="56" font-size="11" fill="currentColor" font-family="monospace">print("Hi")</text><text x="170" y="26" font-size="10" fill="currentColor">Output</text><text x="170" y="56" font-size="11" fill="currentColor" font-family="monospace">Hi</text><text x="83" y="120" text-anchor="middle" font-size="11" fill="currentColor">you type here</text><text x="237" y="120" text-anchor="middle" font-size="11" fill="currentColor">results show here</text></svg>`,
  "keyboard-symbols": `<svg viewBox="0 0 320 110" role="img" aria-label="Pairs of brackets that open and close"><text x="40" y="45" text-anchor="middle" font-size="26" fill="currentColor" font-family="monospace">( )</text><text x="40" y="80" text-anchor="middle" font-size="11" fill="currentColor">brackets</text><text x="120" y="45" text-anchor="middle" font-size="26" fill="currentColor" font-family="monospace">[ ]</text><text x="120" y="80" text-anchor="middle" font-size="11" fill="currentColor">square brackets</text><text x="200" y="45" text-anchor="middle" font-size="26" fill="currentColor" font-family="monospace">{ }</text><text x="200" y="80" text-anchor="middle" font-size="11" fill="currentColor">curly braces</text><text x="280" y="45" text-anchor="middle" font-size="26" fill="currentColor" font-family="monospace">" "</text><text x="280" y="80" text-anchor="middle" font-size="11" fill="currentColor">quotes</text><text x="160" y="104" text-anchor="middle" font-size="11" fill="currentColor">Every opener needs its closer.</text></svg>`,
  "files-and-folders": `<svg viewBox="0 0 320 130" role="img" aria-label="A Documents folder holds a coding folder, which holds hello.py"><rect x="10" y="10" width="110" height="30" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="65" y="30" text-anchor="middle" font-size="12" fill="currentColor">Documents</text><path d="M40 40v28h40" fill="none" stroke="currentColor" stroke-width="2"/><rect x="80" y="54" width="100" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="73" text-anchor="middle" font-size="12" fill="currentColor">coding</text><path d="M110 82v28h40" fill="none" stroke="currentColor" stroke-width="2"/><rect x="150" y="96" width="100" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 2"/><text x="200" y="115" text-anchor="middle" font-size="12" fill="currentColor">hello.py</text><text x="258" y="115" font-size="10" fill="currentColor">a file</text><text x="188" y="73" font-size="10" fill="currentColor">a folder</text></svg>`
});

Object.assign(GUIDES, {
  "what-is-code": {
    title: "What code is (and what it isn't)",
    shelf: "coding",
    tags: ["start", "beginner", "what is coding", "what is programming", "never coded", "zero experience", "languages"],
    difficulty: "Absolute beginner", time: "15 min", cost: "Free",
    summary: "Code is a list of instructions written in a language a computer can follow. Before you type anything, this guide explains what code is, why there are different languages, and which ones this shelf teaches.",
    canDo: [
      "Understand what a program is before writing one.",
      "Know which language to learn for what: Python for programs, HTML for web pages, terminal commands for controlling a computer.",
      "Read the rest of this shelf without feeling lost."
    ],
    words: [
      { word: "Code", meaning: "Instructions written for a computer, in a language it understands." },
      { word: "Program", meaning: "A finished set of code that does a job, like a game, a calculator or an app." },
      { word: "Programming language", meaning: "A set of words and rules for writing code. Python and JavaScript are languages." },
      { word: "Run", meaning: "Tell the computer to follow your code now." },
      { word: "Bug", meaning: "A mistake in code that makes it do the wrong thing." },
      { word: "Output", meaning: "What the program shows or gives back, like text on the screen." }
    ],
    analogy: "Code is like a recipe written for a cook who has never cooked before. The cook follows every line in order and does exactly what it says, even if it's silly. Write \"add 100 eggs\" and you get 100 eggs. The cook never guesses what you meant, so the recipe has to be clear.",
    tools: [
      { name: "Something to read this on", budget: "Your phone", best: "A laptop, so you can try code as you go" },
      { name: "A notebook", budget: "Any paper", best: "A notes app you keep open" }
    ],
    steps: [
      { do: "Think of something you do in steps every day, like making a sandwich. Write the steps down in order.", happened: "You just wrote an algorithm: a list of steps that does a job. Every program is an algorithm written in a language the computer understands." },
      { do: "Read your steps back as if you were a robot who only does exactly what's written. Did you say to open the bread bag?", happened: "Computers need every step spelled out. Most beginner bugs are a step that was obvious to you but never written down." },
      { do: "Look at this line of Python: print(\"Hello\"). Say it out loud as \"show the word Hello on the screen\".", happened: "print is an instruction word, and the brackets hold what it should work on. Code is just instructions with careful punctuation." },
      { do: "Look at the table on this page and find which language each guide on this shelf uses.", happened: "Different languages do different jobs, like different tools in a toolbox. You don't need them all at once." },
      { do: "Decide your first goal: finish the Start here section, then the Python section.", happened: "Python reads close to English, so it's the easiest first language. What you learn there (steps, choices, repeats) works in every other language too." }
    ],
    diagram: DIAGRAMS["what-is-code"],
    diagramCaption: "You write code in a language like Python. Python turns it into instructions the computer can carry out.",
    table: {
      codeCol: 2,
      head: ["Language", "What it's for", "A tiny example"],
      rows: [
        ["Python", "Programs, games, automating boring jobs", "print(\"Hi\")"],
        ["HTML", "The words and layout of web pages", "<h1>My page</h1>"],
        ["Terminal (Bash)", "Controlling a computer by typing", "ls"],
        ["Git", "Saving versions of your project", "git commit"],
        ["JavaScript", "Making web pages interactive (later on)", "alert(\"Hi\")"]
      ]
    },
    mistakes: [
      "Thinking you need to be good at maths. Most beginner code is about steps and logic, not sums.",
      "Trying to learn three languages at once. Pick one (Python) and stick with it for a while.",
      "Expecting to remember everything. Real coders look things up all day; that's normal."
    ],
    tryIt: [
      { task: "Write the steps for brushing your teeth, as if for a robot that does nothing you don't write down.", hint: "Start from where the toothbrush is. Picking it up is a step.", answer: "1. Pick up the toothbrush.\n2. Turn on the tap.\n3. Wet the brush.\n4. Put toothpaste on the brush.\n5. Brush top teeth for 1 minute.\n6. Brush bottom teeth for 1 minute.\n7. Spit.\n8. Rinse the brush.\n9. Turn off the tap." },
      { task: "Read your steps again. Find one step that could go wrong if done in a different order.", answer: "Putting toothpaste on before wetting the brush, or turning off the tap before rinsing. Order matters in code too: the computer follows the steps top to bottom." }
    ],
    quiz: [
      { q: "Your friend says, \"A computer just knows what I want.\" What's a better way to put it?", options: ["It follows exactly what the code says, in order", "It guesses what you meant", "It only works if you're good at maths", "It fixes your mistakes for you"], answer: 0, why: "Computers do exactly what the code says, nothing more. That's why clear steps matter." },
      { q: "You want to make your own small game. Which language on this shelf is the best place to start?", options: ["HTML", "Git", "Python", "The terminal"], answer: 2, why: "Python is a full programming language that reads close to English. HTML only lays out web pages." },
      { q: "Your program shows the wrong total. What do coders call that?", options: ["A virus", "A bug", "An output", "A language"], answer: 1, why: "A bug is a mistake in the code that makes it do the wrong thing. Every coder makes them." },
      { q: "Your sandwich robot made a sandwich still inside the bread bag. What went wrong?", options: ["The robot is broken", "Sandwiches can't be coded", "You used the wrong language", "A step was missing: open the bag"], answer: 3, why: "The robot followed every written step. The missing step is the bug." },
      { q: "You want to change the words on a web page. Which language does that?", options: ["HTML", "Python", "Git", "None; you need special software"], answer: 0, why: "HTML holds the words and layout of web pages." },
      { q: "In print(\"Hello\"), what does print do?", options: ["Sends Hello to a paper printer", "Shows Hello on the screen", "Saves Hello to a file", "Deletes Hello"], answer: 1, why: "In Python, print shows text on the screen. The name comes from old computers that printed onto paper." },
      { q: "You forgot how to do something you learned last week. What do real coders do?", options: ["Give up on coding", "Start the course over", "Look it up and keep going", "Guess until it works"], answer: 2, why: "Looking things up is a normal, everyday part of coding, even for experts." }
    ],
    links: [
      { title: "freeCodeCamp: what is programming? (free)", url: "https://www.freecodecamp.org/news/what-is-programming/" },
      { title: "Python for beginners (python.org)", url: "https://www.python.org/about/gettingstarted/" }
    ]
  },

  "set-up-editor": {
    title: "Get a place to write code",
    shelf: "coding",
    tags: ["start", "beginner", "editor", "online editor", "install python", "thonny", "where to code", "run code"],
    difficulty: "Absolute beginner", time: "20 min", cost: "Free",
    summary: "You need somewhere to type code and run it. You'll start with a free online editor that works in your phone or laptop browser, with nothing to install, and later move to Thonny on your laptop.",
    canDo: [
      "Type Python and run it in about a minute, on any device with a browser.",
      "Know where your code goes and where the results show up.",
      "Make your first error on purpose, so errors stop being scary."
    ],
    words: [
      { word: "Editor", meaning: "The place where you type code. Like a notes app, but for code." },
      { word: "Online editor", meaning: "An editor that runs in your web browser. Nothing to install." },
      { word: "Run button", meaning: "The button that tells the computer to follow your code now." },
      { word: "Output (or console)", meaning: "The area where your program's results and error messages show up." },
      { word: "Error message", meaning: "Python telling you it got stuck, and on which line. Normal and helpful." },
      { word: ".py file", meaning: "A file that holds Python code. The .py ending tells the computer it's Python." }
    ],
    analogy: "An editor is a kitchen. The online editor is a food truck: open it anywhere and start cooking right away, but you can't store much. Thonny on your laptop is your own kitchen: it takes a few minutes to set up, then everything you make stays saved.",
    tools: [
      { name: "An editor", budget: "Programiz online Python editor (free, in the browser)", best: "Thonny on your laptop (free, made for beginners)" },
      { name: "A device", budget: "Your phone", best: "A laptop with a keyboard" }
    ],
    steps: [
      { do: "Open the Programiz online Python editor (link at the bottom of this guide) in your browser.", happened: "You've got a code area (usually on the left or top) and an output area (right or bottom). There's starter code in the code area already." },
      { do: "Click in the code area, select all the starter code and delete it.", happened: "The code area is like a blank page now. Python only runs what's typed here." },
      { do: `Type exactly: print("I can code")`, happened: "You wrote one instruction. Check the quotes are straight (\" not “) and both brackets are there." },
      { do: "Press the Run button.", happened: "Python read your line from left to right, and the words I can code appeared in the output area. You just ran a program." },
      { do: `Now remove the last quote so it says print("I can code) and press Run again.`, happened: "You get an error message, something like SyntaxError: unterminated string. Python is saying the text never ended. Nothing broke; you just learned what an error looks like." },
      { do: "Put the quote back and run it again.", happened: "It works again. Fixing errors like this is most of what coding is." },
      { do: "When you're on your laptop, download Thonny from thonny.org and install it. It comes with Python built in.", happened: "Now you can save your code as files and work without the internet. Use the online editor whenever you're on your phone." }
    ],
    diagram: DIAGRAMS["set-up-editor"],
    diagramCaption: "Code goes in on one side; press Run and the results come out on the other.",
    table: {
      codeCol: -1,
      head: ["Editor", "Good for", "Not so good for"],
      rows: [
        ["Programiz online editor", "Quick practice on any device, nothing to install", "Saving lots of files"],
        ["Thonny", "Beginners on a laptop; shows what each line is doing", "Big projects later on"],
        ["VS Code", "Everything, once you're comfortable", "Day one: lots of buttons and settings"]
      ]
    },
    mistakes: [
      "Typing smart quotes (“ ”) from a phone keyboard. Python needs straight quotes (\" \").",
      "Leaving the starter code in, so your code and the old code get mixed up.",
      "Thinking an error means you broke something. You can't break the computer by running a print line."
    ],
    tryIt: [
      { task: "Make the program show two lines: your first name, and then your favourite food.", hint: "One print line shows one line of output. Use two print lines.", answer: `print("Sam")\nprint("Pizza")` },
      { task: "Make an error on purpose by spelling print as prnt. Run it and read the last line of the error.", answer: "NameError: name 'prnt' is not defined\nPython doesn't know the word prnt. Fix the spelling and it runs." }
    ],
    quiz: [
      { q: "You're on your phone and want to practise Python right now. What's the quickest option?", options: ["Install VS Code", "Buy a laptop", "Use a free online editor in the browser", "Wait until you're home"], answer: 2, why: "An online editor runs in the browser, so it works on a phone with nothing to install." },
      { q: "You typed your code but nothing appeared in the output. What did you most likely forget?", options: ["To press Run", "To restart the phone", "To pay for the editor", "To type in capitals"], answer: 0, why: "Code only runs when you press Run. Typing it just writes it down." },
      { q: "Your code looks right, but Python shows an error about the quotes. You typed it on your phone. What's likely wrong?", options: ["Python doesn't work on phones", "The keyboard made curly quotes instead of straight ones", "You need more brackets", "The editor is broken"], answer: 1, why: "Phone keyboards often swap \" for “ ”. Python only understands straight quotes." },
      { q: "You see a red error message after pressing Run. What does it mean?", options: ["You broke the computer", "Python got stuck and is telling you where", "You need to reinstall Python", "The code was deleted"], answer: 1, why: "An error is Python pointing at the problem. Fix it and run again." },
      { q: "You want to save lots of programs and work without internet. What should you set up?", options: ["A second phone", "Nothing; online editors save everything", "A bigger screen", "Thonny on your laptop"], answer: 3, why: "Thonny runs on your laptop and saves your code as files, even offline." },
      { q: "Where do the results of print show up?", options: ["In the output or console area", "In the code area", "On a printer", "In your email"], answer: 0, why: "The output area is where results and error messages appear." },
      { q: "You open the online editor and it already has code in it. You want to start fresh. What do you do?", options: ["Run it first", "Leave it and type below it", "Select it all and delete it", "Close the browser"], answer: 2, why: "Deleting the starter code means only your code runs, so the results aren't mixed up." }
    ],
    links: [
      { title: "Programiz online Python editor (free)", url: "https://www.programiz.com/python-programming/online-compiler/" },
      { title: "Thonny: Python for beginners (free, MIT licence)", url: "https://thonny.org/" }
    ]
  },

  "keyboard-symbols": {
    title: "The keyboard symbols code uses",
    shelf: "coding",
    tags: ["start", "beginner", "symbols", "brackets", "quotes", "colon", "keyboard", "punctuation"],
    difficulty: "Absolute beginner", time: "15 min", cost: "Free",
    summary: "Code uses symbols you rarely type in normal life: brackets, colons, equals signs and more. This guide names each one, shows where it is and explains what it means in code.",
    canDo: [
      "Find every symbol you need on a laptop or phone keyboard.",
      "Read a line of code out loud using the right names.",
      "Spot the most common beginner error: a symbol that opens but never closes."
    ],
    words: [
      { word: "Brackets ( )", meaning: "Hold the thing an instruction works on: print(\"Hi\")." },
      { word: "Square brackets [ ]", meaning: "Hold a list of things: [\"eggs\", \"milk\"]." },
      { word: "Curly braces { }", meaning: "Used for groups of labelled values, and in other languages for blocks of code." },
      { word: "Quotes \" \" or ' '", meaning: "Wrap text so Python knows it's words, not instructions." },
      { word: "Colon :", meaning: "Means \"the indented lines below belong to this\". Ends lines like if age > 18:" },
      { word: "Equals =", meaning: "Puts a value into a labelled box. == (two) asks whether two things are the same." },
      { word: "Hash #", meaning: "Starts a comment: a note for humans that Python ignores." }
    ],
    analogy: "Symbols in code are like punctuation in a text message, but stricter. A friend can read a text with a missing full stop. Python can't: a missing closing bracket is like a sentence that never ends, so it stops and asks where it finishes.",
    tools: [
      { name: "A keyboard", budget: "Your phone keyboard (tap ?123 or the symbols key)", best: "A laptop keyboard" },
      { name: "A cheat sheet", budget: "The table on this page", best: "This guide downloaded as a PDF" }
    ],
    steps: [
      { do: "Find the ( and ) keys. On most laptops they're Shift + 9 and Shift + 0.", happened: "These are the symbols you'll use most. Every ( needs a matching )." },
      { do: "Find [ and ] (right of the P key) and { } (the same keys with Shift).", happened: "Square brackets hold lists. You'll meet them in the lists guide." },
      { do: "Find the quote key \" (Shift + the ' key, left of Enter).", happened: "Quotes wrap text. Python accepts \"double\" or 'single', as long as both ends match." },
      { do: "Find the colon : (Shift + ;) and the equals sign = (left of Backspace).", happened: "You'll use : at the end of if, for and def lines, and = to store values." },
      { do: "On your phone, open the online editor and tap the ?123 or symbols key to find the same symbols.", happened: "Phones hide symbols one level down. Some keyboards have a long-press too: hold a key to see extra symbols." },
      { do: `Type this line and run it: print("Hi") # this shows Hi`, happened: "Hi shows up, but the part after # doesn't. That's a comment: a note for you that Python skips." }
    ],
    diagram: DIAGRAMS["keyboard-symbols"],
    diagramCaption: "Brackets and quotes always come in pairs: one to open, one to close.",
    table: {
      head: ["Symbol", "Name", "Example in code"],
      rows: [
        ["( )", "Brackets (or parentheses)", "print(\"Hi\")"],
        ["[ ]", "Square brackets", "[\"eggs\", \"milk\"]"],
        ["{ }", "Curly braces", "{\"name\": \"Sam\"}"],
        ["\" \"", "Double quotes", "\"Hello\""],
        [":", "Colon", "if age > 18:"],
        ["=", "Equals (store a value)", "age = 30"],
        ["==", "Double equals (are they the same?)", "if age == 30:"],
        ["#", "Hash (comment)", "# a note to myself"],
        [",", "Comma (separates things)", "print(\"a\", \"b\")"],
        ["_", "Underscore (joins words in names)", "my_score"]
      ]
    },
    mistakes: [
      "Opening a bracket or quote and never closing it. Count them: each opener needs a closer.",
      "Using curly quotes “ ” from a phone or a word processor. Code needs straight quotes.",
      "Mixing quote types: \"Hello' starts with double and ends with single, so Python gets confused.",
      "Using a space in a name, like my score. Use my_score instead."
    ],
    tryIt: [
      { task: "This line has a missing symbol. Find it and fix it: print(\"Good morning\"", hint: "Count the brackets. How many open, how many close?", answer: `print("Good morning")\nThe closing bracket ) was missing.` },
      { task: "Add a comment above a print line that says what it does. Run it and check the comment doesn't show.", answer: `# this greets the user\nprint("Hello!")` },
      { task: "This line has two problems: print('Hi\"). Fix it.", hint: "Look at how the text starts and ends.", answer: `print('Hi')  or  print("Hi")\nThe quotes must match at both ends.` }
    ],
    quiz: [
      { q: "You see print(\"Hi\". Python shows an error. What's missing?", options: ["A closing quote", "A closing bracket )", "A colon", "A comma"], answer: 1, why: "The bracket opened before the text but never closed after it." },
      { q: "You want Python to ignore a line because it's a note for you. What do you put at the start?", options: ["#", ":", "=", "\""], answer: 0, why: "# starts a comment. Python skips everything after it on that line." },
      { q: "Which line stores the number 5 in a box called lives?", options: ["lives == 5", "lives: 5", "lives = 5", "\"lives\" = 5"], answer: 2, why: "One = stores a value. Two == compares." },
      { q: "You copied code from a document and get a strange error near “Hello”. What's the likely problem?", options: ["Curly quotes instead of straight quotes", "The word Hello is banned", "Missing colon", "Too many spaces"], answer: 0, why: "Word processors and phones swap straight quotes for curly ones, which Python can't read." },
      { q: "Which line has quotes that match?", options: ["print(\"Hi')", "print('Hi\")", "print(\"Hi)", "print('Hi')"], answer: 3, why: "Both ends use the same kind of quote." },
      { q: "You want a name with two words for your score. Which works in Python?", options: ["my score", "my-score", "my_score", "my.score"], answer: 2, why: "Names can't have spaces. An underscore joins the words." },
      { q: "On your phone keyboard you can't find the [ key. Where should you look?", options: ["It doesn't exist on phones", "In the symbols pages (the ?123 or !#1 key, then the next page)", "In the emoji page", "In the settings"], answer: 1, why: "Phones keep extra symbols one or two pages into the symbols keyboard. The key is called ?123 on some phones and !#1 on Samsung." },
      { q: "A line ends with a colon, like if score > 10: — what does the colon tell Python?", options: ["The line is finished and nothing follows", "The indented lines below belong to this line", "Multiply the numbers", "Start a comment"], answer: 1, why: "A colon says the indented block underneath is part of this instruction." }
    ],
    links: [
      { title: "Python's official beginner's guide", url: "https://wiki.python.org/moin/BeginnersGuide" },
      { title: "Programiz online Python editor (practise typing symbols)", url: "https://www.programiz.com/python-programming/online-compiler/" }
    ]
  },

  "files-and-folders": {
    title: "Files, folders and file names",
    shelf: "coding",
    tags: ["start", "beginner", "files", "folders", "file extension", "save", "windows", "file explorer"],
    difficulty: "Absolute beginner", time: "20 min", cost: "Free",
    summary: "Your code lives in files, and files live in folders. You'll make a coding folder on your laptop, turn on file extensions so you can see a file's real name, and save your first .py file.",
    canDo: [
      "Keep all your practice code in one place you can find again.",
      "See whether a file is really hello.py or secretly hello.py.txt.",
      "Understand the folder paths the terminal and Git guides use later."
    ],
    words: [
      { word: "File", meaning: "One saved thing: a photo, a document or a piece of code." },
      { word: "Folder (or directory)", meaning: "A container that holds files and other folders." },
      { word: "File extension", meaning: "The ending after the dot, like .py or .html. It says what kind of file it is." },
      { word: "Path", meaning: "The address of a file, folder by folder, like Documents\\coding\\hello.py." },
      { word: "Save As", meaning: "Save a file with a name and place you choose." },
      { word: "File Explorer", meaning: "The Windows app for looking through your folders and files." }
    ],
    analogy: "Folders are drawers in a filing cabinet, and files are the papers inside. The extension is the label on the corner of each paper saying what it is: .py means \"Python recipe\", .html means \"web page\". If the label's hidden, you can't tell a recipe from a shopping list.",
    tools: [
      { name: "A file manager", budget: "File Explorer (built into Windows)", best: "File Explorer with file extensions turned on" },
      { name: "An editor that saves files", budget: "Notepad", best: "Thonny" }
    ],
    steps: [
      { do: "Open File Explorer (the folder icon on the taskbar, or press Windows key + E).", happened: "You're looking at your folders. Documents, Downloads and Pictures are folders Windows makes for you." },
      { do: "At the top, choose View, then Show, then tick File name extensions.", happened: "Now every file shows its full name, like photo.jpg. Windows hides these by default, which causes confusing mix-ups." },
      { do: "Open Documents. Right-click an empty space, choose New, then Folder, and name it coding.", happened: "You made a home for all your practice code. Keeping it in one place makes the terminal and Git guides much easier." },
      { do: `Open Thonny, type print("Saved!"), then choose File, Save As.`, happened: "A Save window opens so you can pick where the file goes and what it's called." },
      { do: "Go into Documents, then coding, name the file hello.py and save.", happened: "The .py ending tells the computer this is Python code. The file's path is now Documents\\coding\\hello.py." },
      { do: "Close Thonny, then double-click hello.py in File Explorer (or open it from Thonny's File menu).", happened: "Your code is still there. Saved files survive closing the app; code in an online editor usually doesn't." }
    ],
    diagram: DIAGRAMS["files-and-folders"],
    diagramCaption: "The file hello.py sits inside the coding folder, which sits inside Documents. That chain is its path.",
    table: {
      head: ["Extension", "What kind of file", "Example name"],
      rows: [
        [".py", "Python code", "hello.py"],
        [".html", "A web page", "index.html"],
        [".txt", "Plain text", "notes.txt"],
        [".css", "Web page styles (colours, fonts)", "styles.css"],
        [".js", "JavaScript code", "app.js"],
        [".zip", "A squashed bundle of files", "project.zip"]
      ]
    },
    mistakes: [
      "Leaving extensions hidden, then saving hello.py.txt by accident. The file won't run as Python.",
      "Saving code in Downloads or on the desktop, then losing it. Use your coding folder every time.",
      "Using spaces or odd symbols in file names. my_game.py is safer than my game!.py."
    ],
    tryIt: [
      { task: "Make a second file in your coding folder called about_me.py that prints your name and age on two lines.", hint: "File, New in Thonny, then two print lines, then Save As into the coding folder.", answer: `print("Sam")\nprint(30)\nSaved as Documents\\coding\\about_me.py` },
      { task: "In File Explorer, write down the full path to about_me.py.", hint: "Click the address bar at the top of File Explorer while you're in the coding folder.", answer: "Something like C:\\Users\\yourname\\Documents\\coding\\about_me.py" }
    ],
    quiz: [
      { q: "You saved hello.py, but it opens in Notepad and won't run. File Explorer shows hello.py.txt. What happened?", options: ["Python is broken", "The file was saved as a text file by mistake", "The file is too big", "You need a new laptop"], answer: 1, why: "The real name ends in .txt. Rename it to hello.py, and turn on file extensions so you can see this." },
      { q: "Where's the best place to keep your practice code?", options: ["Downloads", "The Recycle Bin", "One coding folder in Documents", "Wherever it saves"], answer: 2, why: "One known folder means you can always find your code, and the terminal and Git guides use it." },
      { q: "What does the .html at the end of index.html tell you?", options: ["It's a web page", "It's a photo", "It's Python code", "It's a zip file"], answer: 0, why: "The extension says what kind of file it is. .html means a web page." },
      { q: "Which is the safest file name?", options: ["my game!.py", "my_game.py", "my game.py", "my/game.py"], answer: 1, why: "No spaces or odd symbols. Underscores are safe everywhere." },
      { q: "Documents\\coding\\hello.py is an example of a...", options: ["Password", "Folder name", "Error message", "Path"], answer: 3, why: "A path lists the folders you go through to reach the file." },
      { q: "You closed the online editor and your code is gone. How do you stop that happening?", options: ["Never close the browser", "Save your code as a file on your laptop", "Take a screenshot", "Write it on paper"], answer: 1, why: "Files saved on your laptop stay there after you close the app." },
      { q: "In File Explorer, how do you make the real file endings show?", options: ["View, Show, File name extensions", "Right-click, Delete", "Restart Windows", "Rename every file"], answer: 0, why: "Windows hides extensions by default. That setting shows them." }
    ],
    links: [
      { title: "How to show file extensions in Windows 11 (step by step)", url: "https://www.simplified.guide/microsoft-windows/file-extensions-show" },
      { title: "Thonny (free editor that saves .py files)", url: "https://thonny.org/" }
    ]
  }
});
