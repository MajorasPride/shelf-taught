// Coding shelf: end-of-section review quizzes. New questions, and each review mixes in earlier sections.
Object.assign(REVIEWS, {
  "coding-start": {
    shelf: "coding",
    title: "Start here: review quiz",
    intro: "Questions you haven't seen yet, covering all four Start here guides. Get most right and you're ready for Python.",
    quiz: [
      { q: "A recipe app tells the cook to bake the cake before mixing it. In code, what would you call that?", options: ["A bug: steps in the wrong order", "A language", "An output", "A file extension"], answer: 0, why: "The computer follows steps in order, so steps in the wrong order are a bug." },
      { q: "You're at a friend's house with only your phone and want to test a line of Python. What do you use?", options: ["Thonny", "A free online editor in the browser", "File Explorer", "Git"], answer: 1, why: "An online editor needs nothing installed." },
      { q: "You typed print(“Hi”) on your phone and got an error. What's the fix?", options: ["Add a colon", "Use capitals", "Replace the curly quotes with straight quotes", "Delete the brackets"], answer: 2, why: "Python only understands straight quotes: \" \"." },
      { q: "Which symbol starts a note that Python ignores?", options: ["#", "=", ":", "["], answer: 0, why: "Everything after # on a line is a comment." },
      { q: "Your file is called game.py.txt. What will happen if you try to run it as Python?", options: ["It runs normally", "It opens as plain text, not Python", "It deletes itself", "It turns into a web page"], answer: 1, why: "The real extension is .txt. Rename it to game.py." },
      { q: "Which language would you use to make the words and layout of a web page?", options: ["Python", "Bash", "Git", "HTML"], answer: 3, why: "HTML is the language of web page content." },
      { q: "You pressed Run and see SyntaxError. What's the best first reaction?", options: ["Uninstall Python", "Read where it points and check the brackets and quotes", "Restart the laptop", "Give up for today"], answer: 1, why: "Errors point at the problem. Missing symbols are the usual cause." },
      { q: "Which is the address of a file?", options: ["Documents\\coding\\hello.py", "print(\"hello\")", "# hello", "hello == hello"], answer: 0, why: "A path lists the folders down to the file." }
    ]
  },

  "coding-python": {
    shelf: "coding",
    title: "Python: review quiz",
    intro: "Mixed questions on every Python guide, plus a few from Start here. They're new wordings, so you can't just remember the answers.",
    quiz: [
      { q: "points = 5, then points = points * 2, then points = points - 1. What's in points?", options: ["10", "9", "5", "4"], answer: 1, why: "5 * 2 = 10, then 10 - 1 = 9." },
      { q: "A cinema charges $8 for kids under 12 and $14 for everyone else. Which code fits?", options: ["if age < 12: price = 8 / else: price = 14", "if age = 12: price = 8", "for age in 12: price = 8", "price = 8 + 14"], answer: 0, why: "One question with two answers: if and else." },
      { q: "for n in range(2, 5): print(n). What shows?", options: ["2 3 4 5", "2 3 4", "5 4 3 2", "0 1 2 3 4"], answer: 1, why: "range starts at 2 and stops just before 5." },
      { q: "team = [\"Ava\", \"Ben\", \"Cal\"]. How do you show Cal without counting?", options: ["team[3]", "team[-1]", "team[\"Cal\"]", "team.last"], answer: 1, why: "-1 is always the last item." },
      { q: "You get TypeError: can only concatenate str (not \"int\") to str. Which line probably caused it?", options: ["print(\"Lives: \" + lives) where lives is 3", "lives = 3", "print(lives)", "if lives > 0:"], answer: 0, why: "+ can't glue text to a number. Use str(lives) or a comma." },
      { q: "def total(a, b): return a + b. What does total(total(1, 2), 3) give?", options: ["3", "5", "6", "An error"], answer: 2, why: "The inner call gives 3, then 3 + 3 = 6." },
      { q: "A loop should run until the player types q. Which line starts it?", options: ["while key != \"q\":", "for key in range(\"q\"):", "if key == \"q\":", "def key(q):"], answer: 0, why: "while keeps going as long as the key isn't q." },
      { q: "You wrote if total > 100 with no colon. Which error do you get?", options: ["NameError", "IndexError", "SyntaxError", "ValueError"], answer: 2, why: "A missing colon is a mistake in how the line is written." },
      { q: "price = input(\"Price? \") then price * 2 gives \"4.994.99\". Why?", options: ["Python can't multiply", "price is text, so * 2 repeats it", "The price was wrong", "You needed a list"], answer: 1, why: "Text times 2 repeats the text. Use float(input(...)) for prices." },
      { q: "Which is the safest name for a variable holding a high score?", options: ["high score", "High-Score", "1st_score", "high_score"], answer: 3, why: "No spaces or dashes, and names can't start with a number." }
    ]
  },

  "coding-linux": {
    shelf: "coding",
    title: "Linux terminal: review quiz",
    intro: "Terminal questions, mixed with Python and Start here so they stay fresh.",
    quiz: [
      { q: "You opened a terminal and want to see what's in the folder you're in. Which command?", options: ["pwd", "ls", "cat", "cd"], answer: 1, why: "ls lists the folder's contents; pwd only says where you are." },
      { q: "You're in your home folder and want to go into a folder called projects. Which command?", options: ["cd projects", "mkdir projects", "ls projects", "cat projects"], answer: 0, why: "cd moves you into a folder." },
      { q: "You want a copy of report.txt called report-old.txt. Which command?", options: ["mv report.txt report-old.txt", "rm report.txt", "cp report.txt report-old.txt", "cat report-old.txt"], answer: 2, why: "cp copies; mv would rename the original instead." },
      { q: "You saved hello.py in your coding folder. In the terminal, which command runs it (with Python installed)?", options: ["cat hello.py", "python3 hello.py", "cd hello.py", "ls hello.py"], answer: 1, why: "python3 followed by the file name runs it. cat would only show the code." },
      { q: "You typed cd Coding but the folder is called coding. What happens?", options: ["It works anyway", "It makes a new folder", "No such file or directory", "It deletes the folder"], answer: 2, why: "Linux cares about capital letters." },
      { q: "In Python, what does range(3) give you?", options: ["0, 1, 2", "1, 2, 3", "3", "0, 1, 2, 3"], answer: 0, why: "Three numbers starting at 0." },
      { q: "You want to delete a file, but you're not sure it's the right one. What's the safe first step?", options: ["rm it and see", "cat it or ls -l to check first", "Rename it", "Restart the terminal"], answer: 1, why: "rm can't be undone, so check before you delete." }
    ]
  },

  "coding-git": {
    shelf: "coding",
    title: "Git: review quiz",
    intro: "Git questions, mixed with the terminal and Python.",
    quiz: [
      { q: "You've just finished a feature. What's the right order?", options: ["git commit, then git add", "git add, then git commit, then git push", "git push, then git add", "git init every time"], answer: 1, why: "Pick the changes, save the snapshot, then send it to GitHub." },
      { q: "You broke your game and want to see what changed since the last commit. Which command?", options: ["git diff", "git init", "git push", "git pull"], answer: 0, why: "diff shows exactly which lines changed." },
      { q: "You only run git init once per project. When?", options: ["Before every commit", "When you start tracking a new project folder", "After every push", "Never"], answer: 1, why: "init sets up Git in a folder the first time." },
      { q: "Which terminal command gets you into your project folder before running Git?", options: ["ls", "cat", "cd", "rm"], answer: 2, why: "cd moves you into the folder; Git commands work on the folder you're in." },
      { q: "You want to save a file called .env that has your API key. Should it go in a public GitHub repo?", options: ["Yes, everything should", "No: keys must stay out of Git, even private repos", "Only if you push quickly", "Only on weekends"], answer: 1, why: "Anything committed stays in the history and can leak." },
      { q: "In Python, which line adds 1 to a variable called count?", options: ["count + 1", "count = count + 1", "count == count + 1", "1 = count"], answer: 1, why: "Work out count + 1, then store it back in count." },
      { q: "git log --oneline shows a list. What is each line?", options: ["A file", "A saved snapshot (commit) and its message", "An error", "A folder"], answer: 1, why: "log lists your save points, newest first." }
    ]
  },

  "coding-html": {
    shelf: "coding",
    title: "HTML: review quiz",
    intro: "HTML questions, mixed with Git, the terminal and Python.",
    quiz: [
      { q: "Which line makes a bulleted list with two items?", options: ["<ol><li>A</li></ol>", "<ul><li>A</li><li>B</li></ul>", "<p>A, B</p>", "<li><ul>A B</ul></li>"], answer: 1, why: "ul makes bullets; each li is one item." },
      { q: "You want the browser tab to say Shelf Taught. Which tag?", options: ["<h1>Shelf Taught</h1>", "<title>Shelf Taught</title>", "<p>Shelf Taught</p>", "<tab>Shelf Taught</tab>"], answer: 1, why: "title sets the tab's text." },
      { q: "A screen reader reaches your picture and has nothing to read out. What did you forget?", options: ["The alt text", "A closing </img>", "A heading", "Git"], answer: 0, why: "alt text describes the picture for screen readers, and shows if the picture can't load." },
      { q: "You made index.html and want it online for free with a GitHub repo. What do you do after committing?", options: ["git push, then turn on GitHub Pages", "Email it to yourself", "git init again", "Rename it to index.py"], answer: 0, why: "Push sends it to GitHub; Pages turns the repo into a website." },
      { q: "A link should open MDN. Which is correct?", options: ["<a>https://developer.mozilla.org</a>", "<a href=\"https://developer.mozilla.org\">MDN</a>", "<link>MDN</link>", "<href>MDN</href>"], answer: 1, why: "href holds the address; the words between the tags are what you click." },
      { q: "Everything after your paragraph is bold. What's likely missing?", options: ["</strong>", "<p>", "<title>", "alt"], answer: 0, why: "A tag that never closes keeps applying to everything after it." },
      { q: "In the terminal, how do you make a new empty file called about.html?", options: ["touch about.html", "cd about.html", "ls about.html", "git about.html"], answer: 0, why: "touch makes an empty file." },
      { q: "In Python, which shows the word Hello on the screen?", options: ["show(\"Hello\")", "print(\"Hello\")", "<p>Hello</p>", "echo Hello"], answer: 1, why: "print is Python. <p> is HTML, and echo is the terminal." }
    ]
  },

  "coding-security": {
    shelf: "coding",
    title: "Security: review quiz",
    intro: "Security questions, mixed with everything else on the shelf. This is the final review for the Coding shelf.",
    quiz: [
      { q: "A text says your parcel is stuck and links to usps-redelivery-fee.co. What's your move?", options: ["Pay the fee", "Go to the real carrier's site yourself, or ignore it", "Reply STOP", "Forward it to everyone"], answer: 1, why: "The address isn't the carrier's. Fake delivery texts are a common phishing trick." },
      { q: "Which login is the hardest to steal with a fake site?", options: ["A reused password", "A password plus a text code", "A passkey", "A security question"], answer: 2, why: "Passkeys only work on the real site." },
      { q: "You accidentally pushed a file with a password to GitHub. What's the most important step?", options: ["Delete the repo and forget it", "Change the password straight away", "Make another commit", "Rename the file"], answer: 1, why: "The old commit still has it. Changing the password makes the leaked one useless." },
      { q: "Your password manager asks for a master passphrase. Which is best?", options: ["Your name and birth year", "orbit-maple-lantern-quartz", "password1", "The same one as your email"], answer: 1, why: "Long, random, and used nowhere else." },
      { q: "In Linux, which command would permanently delete secrets.txt?", options: ["cat secrets.txt", "mv secrets.txt", "rm secrets.txt", "ls secrets.txt"], answer: 2, why: "rm deletes for good, which is what you want for an old secrets file." },
      { q: "Your HTML page asks people for their email. What should the page's link start with to be safe?", options: ["http://", "https://", "ftp://", "Nothing"], answer: 1, why: "https means the connection is encrypted." },
      { q: "In Python, what does this print? x = [3, 1, 2]; print(len(x))", options: ["3", "6", "2", "1"], answer: 0, why: "len counts the items, not their values." },
      { q: "Which should you lock down first?", options: ["A game forum account", "Your email account", "A shopping wishlist", "An old blog"], answer: 1, why: "Email controls the password resets for everything else." }
    ]
  }
});
