// Coding shelf: "Teach it back" boxes (the Feynman check). Loaded after the guide files.
// Each guide gets: model (a short model explanation) and mustHave (what a good explanation includes).
const CODING_TEACHBACK = {
  "what-is-code": {
    model: "Code is a list of instructions for a computer, written in a language it can follow. A computer is fast but takes everything literally, so the steps have to be exact. Different languages are good at different jobs: Python for programs, HTML for web pages, terminal commands for controlling the computer.",
    mustHave: ["Code = step-by-step instructions", "The computer follows them exactly, no guessing", "Different languages for different jobs"]
  },
  "set-up-editor": {
    model: "An editor is where you type code. When you press Run, the code goes to Python, which carries it out, and the results show in the output area. An online editor needs nothing installed; Thonny does the same thing on your own laptop.",
    mustHave: ["The editor is where you type", "Run sends the code to Python", "Results (or errors) show in the output"]
  },
  "keyboard-symbols": {
    model: "Code uses symbols as grammar. Brackets, square brackets, curly braces and quotes come in pairs: every one that opens has to close. A colon starts a block, and one equals sign stores a value, while two equals signs compare.",
    mustHave: ["Pairs must open and close", "= stores, == compares", "A missing symbol is the most common beginner error"]
  },
  "files-and-folders": {
    model: "Code is saved in files, and files sit inside folders, like papers in folders in a drawer. The ending of a file's name, like .py, says what kind of file it is, so turn file extensions on to see the real name. A path is the list of folders you go through to reach a file.",
    mustHave: ["Files live in folders", "The extension (.py) tells the file type", "A path is the route to a file"]
  },
  "first-program": {
    model: "A program runs top to bottom, one line at a time. print() shows a message. input() asks a question, waits for typing and hands back what was typed, which you keep in a variable so you can use it later, like in a greeting.",
    mustHave: ["Lines run in order, top to bottom", "print() shows, input() asks and waits", "Keep the answer in a variable to use it"]
  },
  "variables-and-types": {
    model: "A variable is a labelled box holding a value. The value has a type: text (str), a whole number (int) or a decimal (float). \"5\" in quotes is text and can't be added like a number, so typed answers need int() or float() before doing maths.",
    mustHave: ["Variable = a labelled box", "Text, whole numbers and decimals are different types", "input() gives text: convert it before maths"]
  },
  "make-decisions": {
    model: "if checks whether something is true and only runs its indented lines when it is. elif checks another condition if the first was false, and else catches everything left. Python checks them top to bottom and runs only the first one that's true.",
    mustHave: ["if runs code only when a condition is true", "elif and else add more choices", "Only the first true branch runs, and indentation shows what belongs to it"]
  },
  "repeat-with-loops": {
    model: "A loop repeats lines so you don't copy and paste them. A for loop goes through a set number of times or through every item in a list. A while loop keeps going as long as a condition is true, so something inside it must change or it never stops.",
    mustHave: ["Loops repeat instead of copy-paste", "for = a set number of times or each item", "while = until a condition changes (watch for endless loops)"]
  },
  "store-lists": {
    model: "A list holds many values in order inside one variable, in square brackets. Each item has a position number that starts at 0, so the first item is [0]. You can add with append, remove items, count with len, and go through them all with a for loop.",
    mustHave: ["One variable, many values, in order", "Positions start at 0", "append, remove, len, and looping through"]
  },
  "make-functions": {
    model: "A function is a named recipe: you write the steps once with def, then use it any time by calling its name. Values you pass in are parameters. return hands an answer back so the rest of the program can use it, while print only shows it.",
    mustHave: ["def writes it once, calling uses it many times", "Parameters are the inputs", "return hands a result back (print only shows it)"]
  },
  "read-errors": {
    model: "An error message is Python pointing at what confused it. Read the last line first: it names the kind of error. Then find the line number above it, look at that line and the one before it, fix one thing and run again. print() helps you see what values really are.",
    mustHave: ["Read the last line first", "Go to the line number (and the line before)", "Fix one thing at a time and run again"]
  },
  "use-terminal": {
    model: "The terminal lets you control the computer by typing commands. You're always standing in one folder: pwd shows where, ls shows what's there and cd moves you. mkdir and touch make folders and files; cp copies, mv moves or renames, and rm deletes with no recycle bin.",
    mustHave: ["You're always 'in' a folder (pwd, ls, cd)", "Commands to make, copy, move and delete", "rm has no undo"]
  },
  "save-with-git": {
    model: "Git takes snapshots of a project folder. git init starts tracking it, git add picks which changes go in the next snapshot, and git commit saves the snapshot with a message. git log shows the history, and pushing sends a copy to GitHub as an online backup.",
    mustHave: ["Commits are save points you can go back to", "add picks changes, commit saves them with a message", "GitHub keeps an online copy (push)"]
  },
  "first-web-page": {
    model: "A web page is a text file written in HTML. Tags in angle brackets wrap the content and say what each part is, like a heading, a paragraph or a link. Most tags open and close, and the browser reads the file and draws the page.",
    mustHave: ["HTML is a text file the browser reads", "Tags say what each part is", "Most tags open and close (<p> ... </p>)"]
  },
  "lock-down-accounts": {
    model: "Most break-ins use a weak or reused password, or a fake login page. A password manager makes a different strong password for every account. Two-factor login adds a second check, so a stolen password alone isn't enough, and passkeys can't be typed into a fake site at all. Always check the address before logging in.",
    mustHave: ["A unique password for every account (password manager)", "Two-factor or passkeys as a second lock", "Check links and addresses to spot phishing"]
  }
};
Object.entries(CODING_TEACHBACK).forEach(([id, tb]) => { if (GUIDES[id]) GUIDES[id].teachBack = tb; });
