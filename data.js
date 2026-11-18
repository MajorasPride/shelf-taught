// Shelf Taught library data.
// Add a shelf: put it in a wing's "shelves" list.
// Add outside free resources to a shelf: give it a "links" list.
// Add a guide: add it to GUIDES and put its id in that shelf's "guides" list.
// A shelf's "guides" list is in learning order: first book first.
// A big shelf can use "sections" instead of "guides": [{ name, blurb, guides: [...] }],
// e.g. one section per language. Each section is in learning order.
// A section can add review: "<id>" to show a mixed review quiz from REVIEWS at its end.
// table.codeCol: which column shows as code (default 2, use -1 for none).
// A shelf can add roadmap: 5 levels [{ name, guides, milestone, ready }] and project: { name, goal };
// each section can then add project: "what to build for the shelf project in this section".

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
      { id: "coding", name: "Coding", blurb: "Programming, Linux and cybersecurity, from your very first line.", sections: [
        { name: "Start here", blurb: "Never coded before? Start with these. No experience needed.", guides: ["what-is-code", "set-up-editor", "keyboard-symbols", "files-and-folders"], review: "coding-start", project: "Make a folder called login-project with an empty file called login.py inside it. Everything you build next goes here." },
        { name: "Python", blurb: "Your first language: plain words, and it shows you where things go wrong.", guides: ["first-program", "variables-and-types", "make-decisions", "repeat-with-loops", "store-lists", "make-functions", "read-errors"], review: "coding-python", project: "Write login.py: ask for a username and password with input(), check them against saved ones with if, give 3 tries with a loop, keep users in a list, and put the check inside a function called check_login()." },
        { name: "Linux terminal", blurb: "Typing commands to move around and manage files.", guides: ["use-terminal"], review: "coding-linux", project: "Use only the terminal: cd into login-project, make a notes.txt with touch, and run your program with python3 login.py." },
        { name: "Git", blurb: "Save points for your projects, and backing them up to GitHub.", guides: ["save-with-git"], review: "coding-git", project: "Turn login-project into a Git project, commit each version that works, and push it to GitHub. Never commit a real password." },
        { name: "HTML", blurb: "The language web pages are written in.", guides: ["first-web-page"], review: "coding-html", project: "Make login.html: a page with a heading, a username box, a password box and a button. It only has to look right for now." },
        { name: "Security", blurb: "Keeping your accounts and code safe.", guides: ["lock-down-accounts"], review: "coding-security", project: "Make your login safer: store a hash of each password instead of the password itself (Python's hashlib), lock the account after 3 wrong tries, and print a note for every failed attempt." }
      ],
      project: { name: "Toy login system", goal: "One tiny project runs through the whole shelf. Each section adds a piece, until you have a small login system that checks passwords safely. That one project teaches the basics of programs, files, saving work, web pages and security." },
      roadmap: [
        { name: "First steps", guides: ["what-is-code", "set-up-editor", "keyboard-symbols", "files-and-folders"], milestone: "Run one line of Python and save it as hello.py in your coding folder.", ready: "you can find, open and run your own file without looking anything up." },
        { name: "Python basics", guides: ["first-program", "variables-and-types", "make-decisions", "repeat-with-loops", "store-lists"], milestone: "A number-guessing game that keeps asking until you win.", ready: "you can write a short program with input, if and a loop from a blank page." },
        { name: "Your own tools", guides: ["make-functions", "read-errors"], milestone: "A tip or tax calculator built from your own functions.", ready: "you can fix most of your own errors without asking for help." },
        { name: "Real-world tools", guides: ["use-terminal", "save-with-git", "first-web-page"], milestone: "A project made from the terminal, saved in Git, pushed to GitHub, with its own web page.", ready: "you can start a project, save versions and put it online by yourself." },
        { name: "Build it safe", guides: ["lock-down-accounts"], milestone: "The finished toy login system: hashed passwords, 3-try lockout, failed-try notes.", ready: "you can explain why each safety step is there and what it stops." }
      ],
      links: [{ title: "freeCodeCamp", url: "https://www.freecodecamp.org/" }, { title: "The Odin Project", url: "https://www.theodinproject.com/" }] },
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

// Guides live in guides/<shelf>-<section>.js and fill these in.
const GUIDES = {};
// Section review quizzes, mixing this section with earlier ones.
const REVIEWS = {};
