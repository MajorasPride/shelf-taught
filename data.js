// Shelf Taught library data.
// Add a shelf: put it in a wing's "shelves" list.
// Add outside free resources to a shelf: give it a "links" list.
// Add a guide: add it to GUIDES and put its id in that shelf's "guides" list.
// A shelf's "guides" list is in learning order: first book first.
// table.codeCol: which column shows as code (default 2, use -1 for none).

const WINGS = [
  {
    id: "creative", name: "Creative Arts", color: "#7a3b62",
    shelves: [
      { id: "art", name: "Art", blurb: "Drawing, color theory, shading, painting styles and techniques.", guides: [], links: [{ title: "Drawabox (free drawing course)", url: "https://drawabox.com/" }] },
      { id: "animation", name: "Animation", blurb: "2D and 3D motion.", guides: [] },
      { id: "photo-video", name: "Photo & Video", blurb: "Photography and videography.", guides: [] },
      { id: "writing", name: "Writing & Story", blurb: "Characters, dialogue and worldbuilding.", guides: [] },
      { id: "fashion", name: "Fashion & Cosplay", blurb: "Style basics and cosplay builds.", guides: [] }
    ]
  },
  {
    id: "sound", name: "Sound & Voice", color: "#2f5d8a",
    shelves: [
      { id: "music", name: "Music", blurb: "Reading music, guitar, piano, drums, mandolin and kalimba.", guides: [], links: [{ title: "musictheory.net (reading music, free)", url: "https://www.musictheory.net/" }] },
      { id: "production", name: "Music Production", blurb: "Studio basics, layering, sound design and mixing.", guides: [] },
      { id: "voice", name: "Voice & Speaking", blurb: "Singing, clear speech, giving talks and everyday conversation.", guides: [] }
    ]
  },
  {
    id: "digital", name: "Digital Builder", color: "#1f6b5c",
    shelves: [
      { id: "coding", name: "Coding", blurb: "Programming, Linux and cybersecurity, from your very first line.", guides: ["first-program", "make-decisions", "repeat-with-loops", "store-lists", "make-functions", "read-errors", "use-terminal", "save-with-git", "first-web-page", "lock-down-accounts"], links: [{ title: "freeCodeCamp", url: "https://www.freecodecamp.org/" }, { title: "The Odin Project", url: "https://www.theodinproject.com/" }] },
      { id: "3d", name: "3D & Blender", blurb: "Blender tools and modelling.", guides: [], links: [{ title: "Blender manual", url: "https://docs.blender.org/manual/en/latest/" }] },
      { id: "games", name: "Game Making", blurb: "Engines, UI design, level design and pixel art.", guides: [] },
      { id: "pc", name: "PC Building", blurb: "Picking parts and putting a PC together.", guides: [] }
    ]
  },
  {
    id: "hands-on", name: "Hands-On", color: "#8a5a1c",
    shelves: [
      { id: "crafts", name: "Crafts & Making", blurb: "Cricut, 3D printing and sewing.", guides: [] },
      { id: "woodworking", name: "Woodworking", blurb: "Tool basics up to building a shed.", guides: [] },
      { id: "gardening", name: "Gardening & Bonsai", blurb: "Growing food, flowers and bonsai.", guides: [] },
      { id: "science", name: "Science & Nature", blurb: "Bird watching, astronomy and experiments.", guides: [], links: [{ title: "Merlin Bird ID", url: "https://merlin.allaboutbirds.org/" }, { title: "NASA Space Place", url: "https://spaceplace.nasa.gov/" }] },
      { id: "survival", name: "Survival Skills", blurb: "Shelter, fire, water and first steps outdoors.", guides: [], links: [{ title: "Survivor Library (free PDF archive)", url: "https://www.survivorlibrary.com/" }, { title: "r/PrepperFileShare", url: "https://www.reddit.com/r/PrepperFileShare/" }, { title: "Kiwix (Wikipedia offline)", url: "https://kiwix.org/" }] }
    ]
  },
  {
    id: "everyday", name: "Everyday Life", color: "#5b4a8a",
    shelves: [
      { id: "home", name: "Home Care", blurb: "Deep cleaning by material, painting the house and repairs.", guides: [] },
      { id: "clothing", name: "Clothing Care", blurb: "Laundry, stains and mending.", guides: [] },
      { id: "food", name: "Food & Coffee", blurb: "Cooking and craft coffee: tools, beans and brewing.", guides: [] },
      { id: "business", name: "Money & Business", blurb: "Budgeting, starting a business and licensing.", guides: [], links: [{ title: "SBA business guide (licences and permits)", url: "https://www.sba.gov/business-guide" }] },
      { id: "collecting", name: "Cards & Collecting", blurb: "Organizing trading cards and Magic.", guides: [] },
      { id: "fitness", name: "Fitness", blurb: "Stretching, workouts and posture.", guides: [] },
      { id: "languages", name: "Languages", blurb: "Japanese and more.", guides: [] },
      { id: "kids", name: "Parenting & Kids", blurb: "Activities and science projects for growing at their own pace.", guides: [], links: [{ title: "NASA Space Place", url: "https://spaceplace.nasa.gov/" }] }
    ]
  }
];

const GUIDES = {
  "first-program": {
    title: "Write your first program",
    shelf: "coding",
    tags: ["python", "beginner", "hello world", "start coding", "learn to code"],
    difficulty: "Beginner", time: "20 min", cost: "Free",
    summary: "A program is a list of instructions a computer follows in order. You'll write one in Python that says hello, asks your name and answers back.",
    analogy: "Code is a recipe. The computer is a cook who follows every line exactly, top to bottom, and never guesses. If the recipe says \"add salt\" but you spell it \"add slat\", the cook stops and says it doesn't know what that is. That's an error message.",
    tools: [
      { name: "Somewhere to run Python", budget: "A free online editor in your browser", best: "Python installed on your laptop" },
      { name: "A notebook", budget: "Any paper", best: "A notes app you keep open" }
    ],
    steps: [
      "Open a free online Python editor, or Python on your laptop.",
      "Type: print(\"Hello!\") and press Run. You should see Hello! appear.",
      "On a new line type: name = input(\"What's your name? \")",
      "On the next line type: print(\"Nice to meet you,\", name)",
      "Run it, type your name, and press Enter.",
      "Change the words inside the quotes and run it again."
    ],
    diagram: "<svg viewBox=\"0 0 320 120\" role=\"img\" aria-label=\"Input goes into the program, output comes out\"><rect x=\"8\" y=\"40\" width=\"80\" height=\"40\" rx=\"6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"48\" y=\"65\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Input</text><rect x=\"120\" y=\"30\" width=\"80\" height=\"60\" rx=\"6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"65\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Program</text><rect x=\"232\" y=\"40\" width=\"80\" height=\"40\" rx=\"6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"272\" y=\"65\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Output</text><path d=\"M88 60h30M200 60h30\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M112 54l8 6-8 6M224 54l8 6-8 6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/></svg>",
    diagramCaption: "Your name goes in (input), the program works on it, and the greeting comes out (output).",
    table: {
      head: ["Word", "What it means", "In your program"],
      rows: [
        ["print", "Show something on screen", "print(\"Hello!\")"],
        ["input", "Ask the person to type something", "input(\"What's your name? \")"],
        ["variable", "A labelled box that holds a value", "name"],
        ["string", "Text inside quotes", "\"Hello!\""]
      ]
    },
    mistakes: [
      "Forgetting a closing quote or bracket. Python will point at the line.",
      "Using curly quotes copied from a phone keyboard instead of straight quotes.",
      "Writing Print with a capital P. Python cares about capitals."
    ],
    quiz: [
      {
        q: "You run print(\"Hi\") and see Hi on screen. What did print do?",
        options: ["Saved Hi to a file", "Showed Hi on the screen", "Asked you to type Hi", "Sent Hi to a printer"],
        answer: 1,
        why: "print shows text on the screen. It has nothing to do with paper printers."
      },
      {
        q: "Your friend's code says name = input(\"Name? \"). Where does the answer they type end up?",
        options: ["In the variable called name", "On a printer", "Nowhere, it's thrown away", "In the word input"],
        answer: 0,
        why: "The = puts whatever input gets back into the box labelled name, so you can use it later."
      },
      {
        q: "You get an error after typing print(\"Hello). What's the most likely fix?",
        options: ["Restart the computer", "Add the missing closing quote", "Change print to Print", "Delete the brackets"],
        answer: 1,
        why: "The text started with a quote but never closed it, so Python doesn't know where the words end."
      }
    ],
    links: [
      { title: "The official Python tutorial", url: "https://docs.python.org/3/tutorial/" },
      { title: "freeCodeCamp (free courses)", url: "https://www.freecodecamp.org/" }
    ]
  },

  "make-decisions": {
    title: "Make decisions with if",
    shelf: "coding",
    tags: ["python", "if", "else", "conditions", "decisions", "compare", "beginner"],
    difficulty: "Beginner", time: "20 min", cost: "Free",
    summary: "Programs choose what to do with if. You'll write one that checks someone's age and gives a different answer depending on it.",
    analogy: "if is a bouncer at a door. He checks one thing: are you on the list? Yes, you go in. No, you're sent to the else door. He only checks; he never guesses.",
    tools: [
      { name: "Somewhere to run Python", budget: "A free online editor in your browser", best: "Python installed on your laptop" },
      { name: "A notebook", budget: "Any paper", best: "A notes app you keep open" }
    ],
    steps: [
      `Type: age = int(input("How old are you? "))`,
      `On the next line type: if age >= 18:`,
      `On the next line, indented 4 spaces: print("You can vote.")`,
      `Next line, back at the left edge: else:`,
      `Indented 4 spaces: print("Not yet!")`,
      "Run it twice: once typing 20, once typing 12. You should get two different answers.",
      `Add an elif line between them, like elif age >= 16: print("You can drive."), and test with 17.`
    ],
    diagram: `<svg viewBox="0 0 320 150" role="img" aria-label="A question splits into a yes path and a no path"><path d="M160 10l60 35-60 35-60-35z" fill="none" stroke="currentColor" stroke-width="2"/><text x="160" y="50" text-anchor="middle" font-size="13" fill="currentColor">age &gt;= 18?</text><path d="M100 45H40v55M220 45h60v55" fill="none" stroke="currentColor" stroke-width="2"/><text x="60" y="38" font-size="12" fill="currentColor">yes</text><text x="240" y="38" font-size="12" fill="currentColor">no</text><rect x="5" y="100" width="90" height="36" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="50" y="123" text-anchor="middle" font-size="12" fill="currentColor">You can vote</text><rect x="235" y="100" width="80" height="36" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="275" y="123" text-anchor="middle" font-size="12" fill="currentColor">Not yet!</text></svg>`,
    diagramCaption: "The if asks one yes-or-no question. Only one path runs each time.",
    table: {
      head: ["Sign", "What it asks", "Example"],
      rows: [
        ["==", "Are these the same?", "if lives == 0:"],
        ["!=", "Are these different?", `if answer != "yes":`],
        [">", "Is the left bigger?", "if score > 100:"],
        [">=", "Is the left bigger or the same?", "if total >= 50:"],
        ["<", "Is the left smaller?", "if hp < 10:"]
      ]
    },
    mistakes: [
      "Writing = instead of ==. One = stores a value; two == compares.",
      "Forgetting the colon at the end of the if or else line.",
      "Not indenting the lines that belong to the if. Python uses the spaces to know what's inside.",
      "Forgetting int() around input(). input always gives text, and text can't be compared with a number."
    ],
    quiz: [
      {
        q: "A game has: if lives == 0: print(\"Game over\"). The player has 2 lives. What happens?",
        options: ["Game over shows up", "Nothing shows up", "Python shows an error", "It prints 2"],
        answer: 1,
        why: "2 isn't equal to 0, so the question is a no and the indented line is skipped."
      },
      {
        q: "A shop gives free shipping at $50 or more. Which line gets it right?",
        options: ["if total > 50:", "if total == 50:", "if total >= 50:", "if total < 50:"],
        answer: 2,
        why: ">= includes exactly 50. With > a $50 order would miss out."
      },
      {
        q: "You typed if score = 10: and Python shows an error. Why?",
        options: ["score needs a capital S", "= stores a value; comparing needs ==", "10 needs quotes", "if can't use numbers"],
        answer: 1,
        why: "One = means 'put this in the box'. To ask 'is it the same?' you need ==."
      },
      {
        q: "Your age program crashes on age >= 18 when age came straight from input(). What's missing?",
        options: ["Quotes around 18", "A second else", "int() around input()", "A capital If"],
        answer: 2,
        why: "input always hands back text. int() turns the text \"20\" into the number 20 so it can be compared."
      }
    ],
    links: [
      { title: "Python tutorial: if statements", url: "https://docs.python.org/3/tutorial/controlflow.html" },
      { title: "Python Tutor (watch your code run step by step)", url: "https://pythontutor.com/" }
    ]
  },

  "repeat-with-loops": {
    title: "Repeat things with loops",
    shelf: "coding",
    tags: ["python", "loop", "for", "while", "range", "repeat", "beginner"],
    difficulty: "Beginner", time: "25 min", cost: "Free",
    summary: "A loop runs the same lines again and again, so you don't copy and paste. You'll count laps and go through a shopping list.",
    analogy: "A loop is laps around a track. for says how many laps to run, or which items to visit. while keeps running laps until something tells it to stop, like running until the whistle blows.",
    tools: [
      { name: "Somewhere to run Python", budget: "A free online editor in your browser", best: "Python installed on your laptop" },
      { name: "A notebook", budget: "Any paper", best: "A notes app you keep open" }
    ],
    steps: [
      "Type: for i in range(1, 6):",
      `Indented 4 spaces: print("Lap", i)`,
      "Run it. You should see Lap 1 up to Lap 5 (not 6).",
      `New line at the left edge: shopping = ["eggs", "milk", "bread"]`,
      "Then: for item in shopping:",
      `Indented: print("Buy", item)`,
      "Run it, then add a fourth item to the list and run it again. The loop picks it up by itself."
    ],
    diagram: `<svg viewBox="0 0 320 130" role="img" aria-label="A loop goes round, running the same step for each lap, then exits"><circle cx="120" cy="65" r="45" fill="none" stroke="currentColor" stroke-width="2"/><path d="M158 42l7-12 4 13" fill="none" stroke="currentColor" stroke-width="2"/><text x="120" y="60" text-anchor="middle" font-size="13" fill="currentColor">run the</text><text x="120" y="77" text-anchor="middle" font-size="13" fill="currentColor">lines again</text><path d="M165 65h60" stroke="currentColor" stroke-width="2"/><path d="M219 59l8 6-8 6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="230" y="45" width="82" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="271" y="70" text-anchor="middle" font-size="13" fill="currentColor">Done</text><text x="195" y="55" text-anchor="middle" font-size="11" fill="currentColor">no laps left</text></svg>`,
    diagramCaption: "Each trip round the circle is one lap. When there are no laps or items left, the program moves on.",
    table: {
      head: ["Loop", "Use it when", "Example"],
      rows: [
        ["for with range", "You know how many times", "for i in range(5):"],
        ["for over a list", "You want to do something to each item", "for item in shopping:"],
        ["while", "You keep going until something changes", "while lives > 0:"],
        ["break", "You want out of the loop early", "break"]
      ]
    },
    mistakes: [
      "Expecting range(1, 6) to include 6. It stops just before the second number.",
      "A while loop that never ends because nothing inside it changes. Press Stop or Ctrl+C, then change the variable inside the loop.",
      "Forgetting to indent the lines that should repeat."
    ],
    quiz: [
      {
        q: "for i in range(3): print(i). What shows up?",
        options: ["1 2 3", "0 1 2 3", "3", "0 1 2"],
        answer: 3,
        why: "range starts at 0 and stops just before the number you give it."
      },
      {
        q: "You want to send the same message to each of 20 friends in a list. What's the best tool?",
        options: ["A for loop over the list", "20 print lines", "One if statement", "A while loop with nothing that stops it"],
        answer: 0,
        why: "A for loop visits each item for you, and still works if the list grows to 200."
      },
      {
        q: "Your while lives > 0: loop never stops. What's the most likely cause?",
        options: ["range is missing", "lives never goes down inside the loop", "The list is empty", "print is spelled wrong"],
        answer: 1,
        why: "while only stops when its question becomes a no. If lives never changes, it never does."
      },
      {
        q: "You're checking a long list for \"milk\" and want to stop as soon as you find it. What do you use?",
        options: ["else", "range", "break", "print"],
        answer: 2,
        why: "break jumps straight out of the loop, so you don't check the rest for nothing."
      }
    ],
    links: [
      { title: "Python tutorial: for loops and range", url: "https://docs.python.org/3/tutorial/controlflow.html" },
      { title: "Python Tutor (watch each lap happen)", url: "https://pythontutor.com/" }
    ]
  },

  "store-lists": {
    title: "Keep lots of things in a list",
    shelf: "coding",
    tags: ["python", "list", "array", "append", "index", "beginner"],
    difficulty: "Beginner", time: "20 min", cost: "Free",
    summary: "A list holds many values in one variable, in order. You'll build a to-do list, add to it, take things off and count what's left.",
    analogy: "A list is an egg carton with numbered slots, except the first slot is number 0, not 1. You can add eggs at the end, take one out, or count how many are in there.",
    tools: [
      { name: "Somewhere to run Python", budget: "A free online editor in your browser", best: "Python installed on your laptop" },
      { name: "A notebook", budget: "Any paper", best: "A notes app you keep open" }
    ],
    steps: [
      `Type: todo = ["dishes", "laundry"]`,
      `Add to the end: todo.append("homework")`,
      "Show the first item: print(todo[0]). You should see dishes.",
      `Take one off: todo.remove("dishes")`,
      "Count what's left: print(len(todo)). You should see 2.",
      "Show every job with a loop: for job in todo: print(job)"
    ],
    diagram: `<svg viewBox="0 0 320 110" role="img" aria-label="Three boxes in a row numbered 0, 1 and 2"><rect x="20" y="30" width="90" height="44" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><rect x="115" y="30" width="90" height="44" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><rect x="210" y="30" width="90" height="44" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="65" y="57" text-anchor="middle" font-size="13" fill="currentColor">dishes</text><text x="160" y="57" text-anchor="middle" font-size="13" fill="currentColor">laundry</text><text x="255" y="57" text-anchor="middle" font-size="13" fill="currentColor">homework</text><text x="65" y="95" text-anchor="middle" font-size="13" fill="currentColor">[0]</text><text x="160" y="95" text-anchor="middle" font-size="13" fill="currentColor">[1]</text><text x="255" y="95" text-anchor="middle" font-size="13" fill="currentColor">[2]</text><text x="160" y="20" text-anchor="middle" font-size="12" fill="currentColor">todo</text></svg>`,
    diagramCaption: "One list, three slots. The slot numbers start at 0.",
    table: {
      codeCol: 1,
      head: ["Do this", "Code", "Result for x = [\"a\", \"b\", \"c\"]"],
      rows: [
        ["Get the first item", "x[0]", "\"a\""],
        ["Get the last item", "x[-1]", "\"c\""],
        ["Add to the end", "x.append(\"d\")", "[\"a\", \"b\", \"c\", \"d\"]"],
        ["Remove an item", "x.remove(\"b\")", "[\"a\", \"c\"]"],
        ["Count the items", "len(x)", "3"]
      ]
    },
    mistakes: [
      "Counting from 1. In a list of 3 items, the slots are 0, 1 and 2, so x[3] is an IndexError.",
      "Leaving out a comma between items.",
      "Removing something that isn't in the list. Python gives a ValueError."
    ],
    quiz: [
      {
        q: "colors = [\"red\", \"green\", \"blue\"]. What is colors[1]?",
        options: ["red", "green", "blue", "An error"],
        answer: 1,
        why: "Counting starts at 0, so slot 1 is the second item."
      },
      {
        q: "Your list has 3 items and you ask for items[3]. What happens?",
        options: ["You get the last item", "You get the first item", "You get None", "IndexError"],
        answer: 3,
        why: "3 items means slots 0, 1 and 2. There's no slot 3."
      },
      {
        q: "You want to add \"pizza\" to the end of your menu list. Which line?",
        options: ["menu[0] = \"pizza\"", "menu.append(\"pizza\")", "len(menu)", "menu.remove(\"pizza\")"],
        answer: 1,
        why: "append adds to the end. menu[0] = would replace the first item instead."
      },
      {
        q: "You don't know how long a list is but want its last item. Which works every time?",
        options: ["x[-1]", "x[len(x)]", "x[0]", "x.last"],
        answer: 0,
        why: "-1 counts back from the end. x[len(x)] is one slot past the end."
      }
    ],
    links: [
      { title: "Python tutorial: lists", url: "https://docs.python.org/3/tutorial/introduction.html#lists" },
      { title: "Python Tutor (see the boxes)", url: "https://pythontutor.com/" }
    ]
  },

  "make-functions": {
    title: "Make your own functions",
    shelf: "coding",
    tags: ["python", "function", "def", "return", "reuse", "beginner"],
    difficulty: "Beginner", time: "25 min", cost: "Free",
    summary: "A function is a named set of steps you can use again. You'll make one that greets anyone you give it, and one that adds tax to a price.",
    analogy: "A function is a vending machine. You put something in (the argument), it does its job inside, and something comes out (the return value). You don't build a new machine every time you want a snack.",
    tools: [
      { name: "Somewhere to run Python", budget: "A free online editor in your browser", best: "Python installed on your laptop" },
      { name: "A notebook", budget: "Any paper", best: "A notes app you keep open" }
    ],
    steps: [
      "Type: def greet(name):",
      `Indented 4 spaces: print("Hi,", name)`,
      `At the left edge: greet("Sam") then, on the next line, greet("Ava")`,
      "Run it. One function, two greetings.",
      "Now type: def with_tax(price):",
      "Indented: return price * 1.08",
      "At the left edge: print(with_tax(10)). Run it; you should see about 10.8."
    ],
    diagram: `<svg viewBox="0 0 320 130" role="img" aria-label="An argument goes into a function and a return value comes out"><text x="40" y="45" text-anchor="middle" font-size="13" fill="currentColor">10</text><path d="M40 52v20h60" fill="none" stroke="currentColor" stroke-width="2"/><path d="M94 66l8 6-8 6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="105" y="35" width="110" height="75" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="160" y="65" text-anchor="middle" font-size="13" fill="currentColor">with_tax</text><text x="160" y="85" text-anchor="middle" font-size="11" fill="currentColor">price * 1.08</text><path d="M215 72h50" stroke="currentColor" stroke-width="2"/><path d="M259 66l8 6-8 6" fill="none" stroke="currentColor" stroke-width="2"/><text x="292" y="77" text-anchor="middle" font-size="13" fill="currentColor">10.8</text><text x="40" y="25" text-anchor="middle" font-size="11" fill="currentColor">argument</text><text x="292" y="55" text-anchor="middle" font-size="11" fill="currentColor">return</text></svg>`,
    diagramCaption: "Something goes in, the function does its one job, and the answer comes back out.",
    table: {
      head: ["Word", "What it means", "Example"],
      rows: [
        ["def", "Start making a function", "def greet(name):"],
        ["parameter", "The name for what the function expects", "name"],
        ["argument", "The actual thing you hand it", "greet(\"Sam\")"],
        ["return", "Hand an answer back", "return price * 1.08"]
      ]
    },
    mistakes: [
      "Making a function but never calling it. def only builds the machine; greet(\"Sam\") uses it.",
      "Using print when you meant return. print shows the answer but hands nothing back, so you get None.",
      "Calling the function above the def line in your file. Python reads top to bottom."
    ],
    quiz: [
      {
        q: "You wrote def cheer(): print(\"Go!\") and ran the file, but nothing shows. Why?",
        options: ["def is spelled wrong", "You need a return", "You never called cheer()", "print is broken"],
        answer: 2,
        why: "def only sets the function up. Nothing happens until a line says cheer()."
      },
      {
        q: "In def area(w, h): return w * h, what are w and h?",
        options: ["Parameters: the inputs the function expects", "Return values", "Error messages", "Lists"],
        answer: 0,
        why: "Parameters are the labelled slots you fill each time you call it, like area(3, 4)."
      },
      {
        q: "x = add_tax(5) gives x the value None. add_tax uses print instead of return. What's the fix?",
        options: ["Add another print", "Rename x", "Delete the def", "Change print to return"],
        answer: 3,
        why: "print shows the answer on screen; return actually hands it back so x can hold it."
      },
      {
        q: "You've pasted the same 6 lines into 4 places in your game. What's the cleaner way?",
        options: ["Make the file longer", "Put the lines in a function and call it 4 times", "Wrap them in an if", "Delete three copies"],
        answer: 1,
        why: "One function means one place to fix when something changes."
      }
    ],
    links: [
      { title: "Python tutorial: defining functions", url: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions" },
      { title: "freeCodeCamp (free courses)", url: "https://www.freecodecamp.org/" }
    ]
  },

  "read-errors": {
    title: "Read an error without panicking",
    shelf: "coding",
    tags: ["python", "error", "debug", "debugging", "traceback", "bug", "fix", "beginner"],
    difficulty: "Beginner", time: "20 min", cost: "Free",
    summary: "An error is Python telling you exactly where it got confused. You'll learn to read the last line first, find the line number and fix the most common ones.",
    analogy: "An error message is your GPS saying \"route lost\". It tells you where you were (the line number) and what went wrong (the last line). The car isn't broken; you just turn around.",
    tools: [
      { name: "Somewhere to run Python", budget: "A free online editor in your browser", best: "Python installed on your laptop" },
      { name: "A search engine", budget: "Any search engine", best: "Search plus Python Tutor to watch your code" }
    ],
    steps: [
      "Read the last line first. It names the kind of error and gives a short reason.",
      "Look for the word line and a number. Go to that line.",
      "Check the line just above it too. A missing bracket or quote often starts there.",
      "Fix one thing, then run it again.",
      "Still stuck? Copy the last line of the error into a search engine.",
      "Still stuck? Add print() lines to see what your variables hold just before the crash."
    ],
    diagram: `<svg viewBox="0 0 320 120" role="img" aria-label="An error message with the line number and the last line highlighted"><rect x="10" y="10" width="300" height="100" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="22" y="32" font-size="11" fill="currentColor" font-family="monospace">Traceback (most recent call last):</text><text x="22" y="52" font-size="11" fill="currentColor" font-family="monospace">  File "game.py", line 8</text><text x="22" y="72" font-size="11" fill="currentColor" font-family="monospace">    print(score + " points")</text><text x="22" y="96" font-size="11" fill="currentColor" font-family="monospace" font-weight="bold">TypeError: unsupported operand</text><rect x="68" y="40" width="50" height="17" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/><rect x="18" y="82" width="230" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/></svg>`,
    diagramCaption: "The two parts that matter: which line (top box) and what went wrong (bottom box).",
    table: {
      head: ["Error", "Usually means", "Example cause"],
      rows: [
        ["SyntaxError", "Something's written the wrong way", "print(\"hi\""],
        ["NameError", "You used a name Python doesn't know", "prnt(\"hi\")"],
        ["TypeError", "You mixed things that don't go together", "\"5\" + 5"],
        ["IndentationError", "The spaces at the start don't line up", "print(x) not indented under if x:"],
        ["IndexError", "That list slot doesn't exist", "items[10]"]
      ]
    },
    mistakes: [
      "Reading only the top of the error. The useful part is at the bottom.",
      "Changing lots of things at once, so you can't tell which one fixed it.",
      "Ignoring the line above the one Python points at."
    ],
    quiz: [
      {
        q: "You see: NameError: name 'pirnt' is not defined. What's the fix?",
        options: ["Install pirnt", "Spell print correctly", "Restart the computer", "Put quotes around pirnt"],
        answer: 1,
        why: "Python doesn't know a word called pirnt. It's a typo for print."
      },
      {
        q: "age = input(\"Age? \") then print(age + 1) gives a TypeError. What's the fix?",
        options: ["Use int(age) + 1", "Delete the print", "Add an if", "Put 1 in a list"],
        answer: 0,
        why: "input gives text. You can't add a number to text, so turn it into a number first."
      },
      {
        q: "The error points at line 8, but line 8 looks fine. Where do you look next?",
        options: ["Line 1", "The end of the file", "Line 7, just above", "Nowhere; it's a Python bug"],
        answer: 2,
        why: "An unclosed bracket or quote on line 7 only gets noticed when Python reaches line 8."
      },
      {
        q: "Which part of an error message do you read first?",
        options: ["The first line", "The file name", "The last line", "None of it"],
        answer: 2,
        why: "The last line names the error and why. Then you go find the line number."
      }
    ],
    links: [
      { title: "Python tutorial: errors and exceptions", url: "https://docs.python.org/3/tutorial/errors.html" },
      { title: "Python Tutor (step through to the crash)", url: "https://pythontutor.com/" }
    ]
  },

  "use-terminal": {
    title: "Get around in the Linux terminal",
    shelf: "coding",
    tags: ["linux", "terminal", "command line", "bash", "shell", "folders", "files", "beginner"],
    difficulty: "Beginner", time: "30 min", cost: "Free",
    summary: "The terminal lets you control the computer by typing commands. You'll find out where you are, move between folders, make a file and look inside it.",
    analogy: "The terminal is talking to a building's front desk instead of walking the halls. pwd asks \"where am I?\", ls asks \"what's in this room?\", and cd says \"take me to that room\".",
    tools: [
      { name: "A Linux terminal", budget: "A free Linux terminal in your browser", best: "WSL with Ubuntu on your laptop" },
      { name: "A cheat sheet", budget: "The table on this page", best: "The table printed and stuck by your desk" }
    ],
    steps: [
      "Open the terminal. Type pwd and press Enter to see which folder you're in.",
      "Type ls to see what's in this folder.",
      "Type mkdir practice to make a new folder, then cd practice to go into it.",
      `Type echo "hello" > note.txt to make a file with hello inside.`,
      "Type cat note.txt to see what's inside it.",
      "Type cd .. to go back up one folder, then ls to see your practice folder."
    ],
    diagram: `<svg viewBox="0 0 320 140" role="img" aria-label="A folder tree: home holds Documents and practice; practice holds note.txt"><rect x="120" y="8" width="80" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="160" y="27" text-anchor="middle" font-size="12" fill="currentColor">/home/you</text><path d="M160 36v14H80v14M160 50h80v14" fill="none" stroke="currentColor" stroke-width="2"/><rect x="35" y="64" width="90" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="80" y="83" text-anchor="middle" font-size="12" fill="currentColor">Documents</text><rect x="195" y="64" width="90" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="240" y="83" text-anchor="middle" font-size="12" fill="currentColor">practice</text><path d="M240 92v16" stroke="currentColor" stroke-width="2"/><rect x="200" y="108" width="80" height="26" rx="4" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 2"/><text x="240" y="126" text-anchor="middle" font-size="12" fill="currentColor">note.txt</text><text x="292" y="83" font-size="10" fill="currentColor">cd</text><text x="150" y="58" font-size="10" fill="currentColor">cd ..</text></svg>`,
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
        ["rm", "Deletes a file for good", "rm backup.txt"]
      ]
    },
    mistakes: [
      "Expecting rm to send files to a recycle bin. In the terminal they're gone straight away.",
      "Forgetting quotes around names with spaces: cd \"My Games\".",
      "Mixing up capitals. To Linux, Notes.txt and notes.txt are two different files."
    ],
    quiz: [
      {
        q: "You're lost and don't know which folder you're in. Which command tells you?",
        options: ["ls", "cd", "pwd", "cat"],
        answer: 2,
        why: "pwd means print working directory: it shows the folder you're standing in."
      },
      {
        q: "You want to read what's in notes.txt without opening an editor.",
        options: ["cat notes.txt", "ls notes.txt", "cd notes.txt", "mkdir notes.txt"],
        answer: 0,
        why: "cat prints a file's contents straight into the terminal."
      },
      {
        q: "You typed cd Documents and got \"No such file or directory\", but ls shows documents. Why?",
        options: ["The folder is broken", "You need sudo", "cd only works on files", "Linux cares about capital letters"],
        answer: 3,
        why: "Documents with a capital D and documents are different names to Linux."
      },
      {
        q: "You ran rm old.txt and now want it back. Where is it?",
        options: ["In the Trash", "Gone; the terminal has no recycle bin", "In Downloads", "In a backup folder Linux makes"],
        answer: 1,
        why: "rm deletes for good, so double-check before you press Enter."
      }
    ],
    links: [
      { title: "Linux Journey (free, step by step)", url: "https://labex.io/linuxjourney" },
      { title: "The Linux Command Line (free book)", url: "https://linuxcommand.org/tlcl.php" }
    ]
  },

  "save-with-git": {
    title: "Save your work with Git",
    shelf: "coding",
    tags: ["git", "github", "version control", "commit", "backup", "save", "beginner"],
    difficulty: "Beginner", time: "30 min", cost: "Free",
    summary: "Git takes snapshots of your project so you can go back if something breaks. You'll start tracking a folder, save a snapshot and look at the history.",
    analogy: "Git is save points in a video game. A commit is one save point with a note about what you did. If you mess up later, you load an earlier save. GitHub is the cloud copy of your memory card.",
    tools: [
      { name: "Git", budget: "Git in the terminal (free)", best: "Git plus GitHub Desktop (free)" },
      { name: "Somewhere online to keep a copy", budget: "A free GitHub account", best: "A free GitHub account" }
    ],
    steps: [
      "In the terminal, go into your project folder and type git init. Git starts watching it.",
      "Type git status to see which files are new or changed.",
      "Type git add . to pick every changed file for the next snapshot.",
      `Type git commit -m "First version" to save the snapshot with a note.`,
      "Change a file, then run git status, git add . and git commit again with a new note.",
      "Type git log --oneline to see your list of save points."
    ],
    diagram: `<svg viewBox="0 0 320 110" role="img" aria-label="Three save points in a row, joined by a line, each with a short note"><path d="M40 50h240" stroke="currentColor" stroke-width="2"/><circle cx="40" cy="50" r="12" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="160" cy="50" r="12" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="280" cy="50" r="12" fill="currentColor"/><text x="40" y="85" text-anchor="middle" font-size="11" fill="currentColor">First version</text><text x="160" y="85" text-anchor="middle" font-size="11" fill="currentColor">Add jump</text><text x="280" y="85" text-anchor="middle" font-size="11" fill="currentColor">Fix jump height</text><text x="280" y="25" text-anchor="middle" font-size="11" fill="currentColor">you are here</text></svg>`,
    diagramCaption: "Each dot is a commit. You can always go back to an earlier dot.",
    table: {
      head: ["Command", "What it does", "Example"],
      rows: [
        ["init", "Start tracking a folder", "git init"],
        ["status", "Show what's changed", "git status"],
        ["add", "Pick files for the next snapshot", "git add ."],
        ["commit", "Save the snapshot with a note", "git commit -m \"Add menu\""],
        ["log", "List the save points", "git log --oneline"],
        ["push", "Send your save points to GitHub", "git push"]
      ]
    },
    mistakes: [
      "Vague notes like \"stuff\". Future you won't know which save point to go back to.",
      "Committing passwords or keys. They stay in the history even if you delete the file later.",
      "Forgetting git add before git commit, so the change isn't in the snapshot."
    ],
    quiz: [
      {
        q: "You changed 3 files and want them in your next save point. What do you run first?",
        options: ["git log", "git add", "git init", "git push"],
        answer: 1,
        why: "add picks the files; then commit saves them as one snapshot."
      },
      {
        q: "Which commit note helps you most a month from now?",
        options: ["update", "stuff", "Fix jump height on level 2", "asdf"],
        answer: 2,
        why: "It says exactly what changed, so you can find that save point fast."
      },
      {
        q: "Your laptop dies. What keeps your code safe?",
        options: ["Having pushed your commits to GitHub", "Commits that only live on the laptop", "Running git status a lot", "Running git init again"],
        answer: 0,
        why: "Commits are saved on your computer until you push them. Pushing puts a copy online."
      },
      {
        q: "You committed a file with a password in it. You delete it in the next commit. Is that enough?",
        options: ["Yes, Git forgets it", "Yes, once you push", "No; it's still in the history, so change the password", "Only if the repo is private"],
        answer: 2,
        why: "Every old save point can still be opened, including the one with the password."
      }
    ],
    links: [
      { title: "Pro Git (free book)", url: "https://git-scm.com/book/en/v2" },
      { title: "GitHub Skills (free hands-on courses)", url: "https://github.com/skills" }
    ]
  },

  "first-web-page": {
    title: "Build your first web page",
    shelf: "coding",
    tags: ["html", "web", "website", "web page", "browser", "beginner"],
    difficulty: "Beginner", time: "25 min", cost: "Free",
    summary: "Web pages are text files written in HTML. You'll make one with a heading, a paragraph, a list and a link, then open it in your browser.",
    analogy: "HTML is labelling boxes when you move house. You wrap each thing in a tag that says what it is: this is a heading, this is a paragraph. The browser unpacks the boxes and sets each thing out in the right place.",
    tools: [
      { name: "A text editor", budget: "Notepad", best: "VS Code (free)" },
      { name: "A browser", budget: "Any browser", best: "Chrome or Firefox, with their built-in developer tools" }
    ],
    steps: [
      "Make a new file and save it as index.html.",
      "On the first line type <h1>My page</h1>",
      "Under it type <p>I'm learning to code.</p>",
      "Add a list: <ul><li>Python</li><li>HTML</li></ul>",
      `Add a link: <a href="https://developer.mozilla.org">Learn more</a>`,
      "Save, then double-click the file to open it in your browser.",
      "Change some words, save again and refresh the browser to see the change."
    ],
    diagram: `<svg viewBox="0 0 320 130" role="img" aria-label="Code on the left turns into a page on the right"><rect x="8" y="10" width="140" height="110" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="16" y="35" font-size="10" fill="currentColor" font-family="monospace">&lt;h1&gt;My page&lt;/h1&gt;</text><text x="16" y="55" font-size="10" fill="currentColor" font-family="monospace">&lt;p&gt;Learning&lt;/p&gt;</text><text x="16" y="75" font-size="10" fill="currentColor" font-family="monospace">&lt;ul&gt;&lt;li&gt;Python</text><text x="16" y="95" font-size="10" fill="currentColor" font-family="monospace">&lt;a href=...&gt;</text><path d="M152 65h20" stroke="currentColor" stroke-width="2"/><path d="M166 59l8 6-8 6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="178" y="10" width="134" height="110" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="188" y="38" font-size="16" font-weight="bold" fill="currentColor">My page</text><text x="188" y="58" font-size="11" fill="currentColor">Learning</text><text x="188" y="78" font-size="11" fill="currentColor">• Python</text><text x="188" y="98" font-size="11" fill="currentColor" text-decoration="underline">Learn more</text></svg>`,
    diagramCaption: "What you type (left) and what the browser shows (right).",
    table: {
      head: ["Tag", "What it is", "Example"],
      rows: [
        ["h1", "The main heading", "<h1>My page</h1>"],
        ["p", "A paragraph of text", "<p>Hello</p>"],
        ["ul and li", "A bulleted list and its items", "<ul><li>One</li></ul>"],
        ["a", "A link", "<a href=\"https://...\">Go</a>"],
        ["img", "A picture", "<img src=\"cat.jpg\" alt=\"My cat\">"]
      ]
    },
    mistakes: [
      "Forgetting a closing tag like </h1>, so everything after it turns into a heading.",
      "Windows saving the file as index.html.txt. Turn on file name extensions in File Explorer to check.",
      "Forgetting to save and refresh, so the browser still shows the old page."
    ],
    quiz: [
      {
        q: "After your title, the whole rest of the page shows up as a giant heading. Likely cause?",
        options: ["The wrong browser", "A missing </h1>", "The file is too long", "A missing <p>"],
        answer: 1,
        why: "Without the closing tag, the browser thinks the heading never ends."
      },
      {
        q: "You want words people can click to go to another site. Which tag?",
        options: ["p", "li", "h1", "a"],
        answer: 3,
        why: "a (anchor) makes a link, and href says where it goes."
      },
      {
        q: "You changed the file, but the browser looks exactly the same. What do you check first?",
        options: ["That you saved the file and refreshed the browser", "Reinstall the browser", "Delete the file", "Rename it to page.html"],
        answer: 0,
        why: "The browser only shows the last saved version, and only after a refresh."
      }
    ],
    links: [
      { title: "MDN: Learn web development (free)", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development" },
      { title: "freeCodeCamp (free courses)", url: "https://www.freecodecamp.org/" }
    ]
  },

  "lock-down-accounts": {
    title: "Lock down your accounts",
    shelf: "coding",
    tags: ["security", "cybersecurity", "password", "password manager", "2fa", "two-factor", "phishing", "hack"],
    difficulty: "Beginner", time: "45 min", cost: "Free",
    summary: "Most hacks start with a weak or reused password, or a fake login page. You'll set up a password manager, turn on two-factor login and learn to spot phishing.",
    analogy: "Your accounts are rooms in a house. Using one password everywhere is one key for every door: lose it once and every room is open. A password manager is a ring of different keys locked in a safe, and two-factor login is a guard who also checks your face.",
    tools: [
      { name: "Password manager", budget: "Bitwarden (free)", best: "Bitwarden or 1Password (paid plans)" },
      { name: "Two-factor login", budget: "A free authenticator app on your phone", best: "A hardware security key" }
    ],
    steps: [
      "Install a password manager and make one long master passphrase, like four random words. Don't use it anywhere else.",
      "Start with your email account: give it a new, unique password made by the manager.",
      "Turn on two-factor login for your email. Use an authenticator app instead of text messages where the site allows it.",
      "Save the backup codes somewhere safe and offline, like printed in a drawer.",
      "Do the same for banking, shopping and social accounts.",
      "Check your email address at haveibeenpwned.com and change any password from a listed breach.",
      "Before typing a password after clicking an email link, check the web address. When in doubt, close it and go to the site yourself."
    ],
    diagram: `<svg viewBox="0 0 320 120" role="img" aria-label="Logging in needs two things: something you know and something you have"><rect x="10" y="35" width="100" height="50" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="60" y="57" text-anchor="middle" font-size="12" fill="currentColor">Password</text><text x="60" y="74" text-anchor="middle" font-size="10" fill="currentColor">you know it</text><text x="125" y="66" text-anchor="middle" font-size="18" fill="currentColor">+</text><rect x="140" y="35" width="100" height="50" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="190" y="57" text-anchor="middle" font-size="12" fill="currentColor">Phone code</text><text x="190" y="74" text-anchor="middle" font-size="10" fill="currentColor">you have it</text><path d="M240 60h30" stroke="currentColor" stroke-width="2"/><path d="M264 54l8 6-8 6" fill="none" stroke="currentColor" stroke-width="2"/><text x="295" y="65" text-anchor="middle" font-size="12" fill="currentColor">In</text></svg>`,
    diagramCaption: "With two-factor login, a stolen password on its own isn't enough to get in.",
    table: {
      codeCol: -1,
      head: ["How you log in", "How safe", "Why"],
      rows: [
        ["Same password everywhere", "Weak", "One leak opens every account"],
        ["A different strong password for each site", "Good", "A leak stays in one place"],
        ["Plus a code by text message", "Better", "Texts can be stolen by moving your number to another SIM"],
        ["Plus an authenticator app", "Strong", "The code lives only on your phone"],
        ["Plus a hardware key", "Strongest", "It won't work on a fake site"]
      ]
    },
    mistakes: [
      "Using your master passphrase anywhere else.",
      "Keeping your backup codes in the same email account they protect.",
      "Trusting a link because the email has the right logo. Logos are easy to copy; the web address isn't."
    ],
    quiz: [
      {
        q: "An email says your bank account is locked and links to bank-0f-america-secure.com. What do you do?",
        options: ["Click and log in quickly", "Reply with your password so they can unlock it", "Close it and go to the bank's site yourself, or call them", "Forward it to friends to warn them"],
        answer: 2,
        why: "The address is a fake (a zero instead of an o). Going to the site yourself skips the trap."
      },
      {
        q: "Why lock down your email account before anything else?",
        options: ["It's the oldest account", "Password resets for your other accounts go there", "It costs the most", "It doesn't matter which goes first"],
        answer: 1,
        why: "Whoever controls your email can reset most of your other passwords."
      },
      {
        q: "Which two-factor option is hardest to trick?",
        options: ["A text message code", "A security question", "Typing the password twice", "A hardware security key"],
        answer: 3,
        why: "A hardware key checks the real web address, so it won't log you in to a fake site."
      },
      {
        q: "Your password turned up in a breach of an old forum. You used it on 5 sites. What now?",
        options: ["Change it on all 5, each to a different password", "Change it on the forum only", "Nothing; it was an old forum", "Delete your email account"],
        answer: 0,
        why: "Attackers try leaked passwords on other sites. Each site needs its own password."
      }
    ],
    links: [
      { title: "CISA: Secure Our World (free tips)", url: "https://www.cisa.gov/secure-our-world" },
      { title: "Have I Been Pwned (check for breaches)", url: "https://haveibeenpwned.com/" }
    ]
  }
};
