// Shelf Taught library data.
// Add a shelf: put it in a wing's "shelves" list.
// Add outside free resources to a shelf: give it a "links" list.
// Add a guide: add it to GUIDES and put its id in that shelf's "guides" list.

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
      { id: "coding", name: "Coding", blurb: "Programming, Linux and cybersecurity, from your very first line.", guides: ["first-program"], links: [{ title: "freeCodeCamp", url: "https://www.freecodecamp.org/" }, { title: "The Odin Project", url: "https://www.theodinproject.com/" }] },
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
  }
};
