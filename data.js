// Shelf Taught library data.
// Add a shelf: put it in a wing's "shelves" list.
// Add outside free resources to a shelf: give it a "links" list.
// Add a guide: add it to GUIDES and put its id in that shelf's "guides" list.
// A shelf's "guides" list is in learning order: first book first.
// A big shelf can use "sections" instead of "guides": [{ name, blurb, guides: [...] }],
// e.g. one section per language. Each section is in learning order.
// A section can add review: "<id>" to show a mixed review quiz from REVIEWS at its end.
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
      { id: "coding", name: "Coding", blurb: "Programming, Linux and cybersecurity, from your very first line.", sections: [
        { name: "Start here", blurb: "Never coded before? Start with these. No experience needed.", guides: ["what-is-code", "set-up-editor", "keyboard-symbols", "files-and-folders"], review: "coding-start" },
        { name: "Python", blurb: "Your first language: plain words, and it shows you where things go wrong.", guides: ["first-program", "variables-and-types", "make-decisions", "repeat-with-loops", "store-lists", "make-functions", "read-errors"], review: "coding-python" },
        { name: "Linux terminal", blurb: "Typing commands to move around and manage files.", guides: ["use-terminal"], review: "coding-linux" },
        { name: "Git", blurb: "Save points for your projects, and backing them up to GitHub.", guides: ["save-with-git"], review: "coding-git" },
        { name: "HTML", blurb: "The language web pages are written in.", guides: ["first-web-page"], review: "coding-html" },
        { name: "Security", blurb: "Keeping your accounts and code safe.", guides: ["lock-down-accounts"], review: "coding-security" }
      ], links: [{ title: "freeCodeCamp", url: "https://www.freecodecamp.org/" }, { title: "The Odin Project", url: "https://www.theodinproject.com/" }] },
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
