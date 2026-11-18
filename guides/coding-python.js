// Coding shelf, Python section: from your first line to functions and errors.
Object.assign(DIAGRAMS, {
  "variables-and-types": `<svg viewBox="0 0 320 120" role="img" aria-label="Three labelled boxes: name holds text, age holds a whole number, price holds a decimal"><rect x="10" y="30" width="90" height="50" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="55" y="22" text-anchor="middle" font-size="12" fill="currentColor">name</text><text x="55" y="60" text-anchor="middle" font-size="13" fill="currentColor">"Sam"</text><text x="55" y="100" text-anchor="middle" font-size="11" fill="currentColor">text (str)</text><rect x="115" y="30" width="90" height="50" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="160" y="22" text-anchor="middle" font-size="12" fill="currentColor">age</text><text x="160" y="60" text-anchor="middle" font-size="13" fill="currentColor">30</text><text x="160" y="100" text-anchor="middle" font-size="11" fill="currentColor">whole number (int)</text><rect x="220" y="30" width="90" height="50" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="265" y="22" text-anchor="middle" font-size="12" fill="currentColor">price</text><text x="265" y="60" text-anchor="middle" font-size="13" fill="currentColor">4.99</text><text x="265" y="100" text-anchor="middle" font-size="11" fill="currentColor">decimal (float)</text></svg>`
});

const PY_TOOLS = [
  { name: "Somewhere to run Python", budget: "Programiz online editor in your browser", best: "Thonny on your laptop" },
  { name: "A notebook", budget: "Any paper", best: "A notes app you keep open" }
];

Object.assign(GUIDES, {
  "first-program": {
    title: "Write your first program",
    shelf: "coding",
    tags: ["python", "beginner", "hello world", "start coding", "learn to code", "print", "input"],
    difficulty: "Beginner", time: "30 min", cost: "Free",
    summary: "A program is a list of instructions a computer follows in order. You'll write one in Python that says hello, asks your name and answers back, and you'll understand every line of it.",
    canDo: [
      "Make the computer show any message you like.",
      "Ask the person using your program a question and use their answer.",
      "Build the start of every chatbot, quiz and text game ever made."
    ],
    words: [
      { word: "print()", meaning: "Shows something on the screen." },
      { word: "input()", meaning: "Shows a question, waits for the person to type, and hands back what they typed." },
      { word: "String", meaning: "Text inside quotes, like \"Hello!\"." },
      { word: "Variable", meaning: "A labelled box that holds a value so you can use it later, like name." },
      { word: "Run", meaning: "Tell Python to follow your code from the top line down." }
    ],
    analogy: "Code is a recipe. The computer is a cook who follows every line exactly, top to bottom, and never guesses. If the recipe says \"add salt\" but you spell it \"add slat\", the cook stops and says it doesn't know what that is. That's an error message.",
    tools: PY_TOOLS,
    steps: [
      { do: "Open your Python editor and delete any starter code.", happened: "You have a blank page. Python will only run what you type here." },
      { do: `Type: print("Hello!") and press Run.`, happened: "Python found the instruction print, looked inside the brackets, saw the text Hello! in quotes and showed it in the output." },
      { do: `On a new line type: name = input("What's your name? ")`, happened: "Nothing runs yet. You've told Python: show this question, wait for typing, and put the answer in a box labelled name." },
      { do: `On the next line type: print("Nice to meet you,", name)`, happened: "This print shows two things, separated by a comma: the text in quotes and whatever's in the name box. Note name has no quotes: you want what's in the box, not the word name." },
      { do: "Press Run, type your name in the output area and press Enter.", happened: "Python ran line 1 (Hello!), line 2 (asked and waited), then line 3 used your answer. Lines always run top to bottom." },
      { do: "Change the words inside the quotes and run it again.", happened: "Text in quotes is yours to change. The instruction words (print, input) have to stay exactly as they are." }
    ],
    diagram: DIAGRAMS["first-program"],
    diagramCaption: "Your name goes in (input), the program works on it, and the greeting comes out (output).",
    table: {
      head: ["Word", "What it means", "In your program"],
      rows: [
        ["print", "Show something on screen", "print(\"Hello!\")"],
        ["input", "Ask the person to type something", "input(\"What's your name? \")"],
        ["variable", "A labelled box that holds a value", "name"],
        ["string", "Text inside quotes", "\"Hello!\""],
        ["comma in print", "Show two things with a space between", "print(\"Hi\", name)"]
      ]
    },
    mistakes: [
      "Forgetting a closing quote or bracket. Python will point at the line.",
      "Using curly quotes copied from a phone keyboard instead of straight quotes.",
      "Writing Print with a capital P. Python cares about capitals.",
      "Putting quotes around a variable: print(\"name\") shows the word name, not what's in the box."
    ],
    tryIt: [
      { task: "Make the program also ask for a favourite food, then say \"[food] sounds great!\".", hint: "Use input() again with a new variable, like food.", answer: `name = input("What's your name? ")\nfood = input("Favourite food? ")\nprint("Nice to meet you,", name)\nprint(food, "sounds great!")` },
      { task: "Make a three-line poem appear on screen.", answer: `print("Roses are red")\nprint("Code can be too")\nprint("Errors are normal")` },
      { task: "What will this show? print(\"name\") — then run it and check.", answer: "It shows the word name, because the quotes make it text. Without quotes, print(name) shows what's inside the name box." }
    ],
    quiz: [
      { q: "You run print(\"Hi\") and see Hi on screen. What did print do?", options: ["Saved Hi to a file", "Showed Hi on the screen", "Asked you to type Hi", "Sent Hi to a printer"], answer: 1, why: "print shows text on the screen. It has nothing to do with paper printers." },
      { q: "Your friend's code says name = input(\"Name? \"). Where does the answer they type end up?", options: ["In the variable called name", "On a printer", "Nowhere, it's thrown away", "In the word input"], answer: 0, why: "The = puts whatever input gets back into the box labelled name, so you can use it later." },
      { q: "You get an error after typing print(\"Hello). What's the most likely fix?", options: ["Restart the computer", "Change print to Print", "Add the missing closing quote", "Delete the brackets"], answer: 2, why: "The text started with a quote but never closed it, so Python doesn't know where the words end." },
      { q: "Your program says Nice to meet you, name instead of the person's name. What's wrong?", options: ["input is broken", "name was put in quotes inside print", "The program needs restarting", "Names can't be shown"], answer: 1, why: "\"name\" in quotes is just the word. Take the quotes off to use what's in the box." },
      { q: "Your code has three lines. In what order does Python run them?", options: ["Top to bottom", "Bottom to top", "Shortest first", "Random order"], answer: 0, why: "Python always starts at the top and works down, one line at a time." },
      { q: "You wrote Print(\"Hi\") and got an error. Why?", options: ["Hi needs to be in capitals", "You need two brackets", "Python cares about capitals: it's print", "print only works on numbers"], answer: 2, why: "Python treats Print and print as different words. Only print exists." },
      { q: "Which line asks for an age and keeps the answer?", options: ["print(\"Age? \")", "age = input(\"Age? \")", "input = age", "\"age\" = input()"], answer: 1, why: "input asks and waits; age = keeps the answer in a box called age." }
    ],
    links: [
      { title: "The official Python tutorial", url: "https://docs.python.org/3/tutorial/" },
      { title: "Python Tutor (watch your code run line by line)", url: "https://pythontutor.com/" }
    ]
  },

  "variables-and-types": {
    title: "Keep values in variables: text vs numbers",
    shelf: "coding",
    tags: ["python", "variables", "types", "string", "int", "float", "numbers", "maths", "beginner"],
    difficulty: "Beginner", time: "30 min", cost: "Free",
    summary: "A variable is a labelled box. What's in the box has a type: text, a whole number or a decimal. You'll store values, do maths, and learn why \"5\" and 5 aren't the same thing.",
    canDo: [
      "Keep a score, a name or a price and change it as the program runs.",
      "Do maths: totals, discounts, tips, how many days until something.",
      "Turn typed answers into numbers so you can calculate with them."
    ],
    words: [
      { word: "Variable", meaning: "A labelled box holding a value, like score = 10." },
      { word: "Type", meaning: "What kind of value it is: text, whole number or decimal." },
      { word: "str (string)", meaning: "Text, always in quotes: \"Sam\", \"5\"." },
      { word: "int (integer)", meaning: "A whole number with no quotes: 5, -3, 100." },
      { word: "float", meaning: "A number with a decimal point: 4.99, 0.5." },
      { word: "int() and float()", meaning: "Turn text like \"5\" into a number you can do maths with." },
      { word: "str()", meaning: "Turns a number into text so you can join it to other text." }
    ],
    analogy: "Variables are labelled storage tubs. A tub labelled score holds the number 10; you can empty it and put 11 in. The type is what's inside: you can add two tubs of numbers together, but adding a tub of words to a tub of numbers is like adding \"banana\" to 3. Python refuses.",
    tools: PY_TOOLS,
    steps: [
      { do: "Type: score = 10 then print(score) and run it.", happened: "Python made a box labelled score, put 10 in it, then showed what's inside. No quotes, so 10 is a number." },
      { do: "Add a line: score = score + 5 then print(score) again.", happened: "Python works out the right side first (10 + 5 = 15), then puts 15 back in the score box. The old 10 is replaced." },
      { do: `Type: price = 4.99 and qty = 3 then print(price * qty)`, happened: "* means multiply. 4.99 is a float (decimal) and 3 is an int; Python can mix them in maths and shows about 14.97." },
      { do: `Type: age = input("How old are you? ") then print(age + 1) and run it.`, happened: "You get a TypeError. input always gives back text, so age is \"30\", not 30. Python won't add text and a number." },
      { do: "Change the first of those lines to: age = int(input(\"How old are you? \"))", happened: "int() turns the text \"30\" into the number 30. Now age + 1 works and shows 31." },
      { do: `Type: print("Next year you'll be " + str(age + 1))`, happened: "+ between texts glues them together. str() turns the number 31 back into text so it can be glued on." },
      { do: "Type: print(type(age)) and run it.", happened: "Python shows <class 'int'>. type() tells you what kind of value is in a box, which is handy when an error mentions types." }
    ],
    diagram: DIAGRAMS["variables-and-types"],
    diagramCaption: "Each box has a label and a value. The kind of value is its type.",
    table: {
      head: ["Type", "What it holds", "Example"],
      rows: [
        ["str", "Text (always in quotes)", "name = \"Sam\""],
        ["int", "Whole numbers", "lives = 3"],
        ["float", "Decimals", "price = 4.99"],
        ["bool", "True or False", "is_raining = True"],
        ["maths signs", "+ add, - subtract, * times, / divide", "total = price * 3"]
      ]
    },
    mistakes: [
      "Forgetting that input() always gives text. Wrap it in int() or float() before doing maths.",
      "Putting quotes around numbers: \"5\" + \"5\" gives \"55\", not 10.",
      "Gluing text and a number with +. Use str() on the number, or a comma in print.",
      "Spaces or dashes in names: my score and my-score don't work. Use my_score."
    ],
    tryIt: [
      { task: "Make a tip calculator: ask for the bill, then show 20% of it.", hint: "Use float() because bills have pennies. 20% is the bill times 0.2.", answer: `bill = float(input("Bill total? "))\ntip = bill * 0.2\nprint("Tip:", tip)` },
      { task: "Start a score at 0, add 10 three times, then print it.", answer: `score = 0\nscore = score + 10\nscore = score + 10\nscore = score + 10\nprint(score)   # shows 30` },
      { task: "Predict, then check: what does print(\"5\" + \"5\") show? And print(5 + 5)?", answer: "\"5\" + \"5\" shows 55 (two pieces of text glued together).\n5 + 5 shows 10 (two numbers added)." }
    ],
    quiz: [
      { q: "lives = 3, then lives = lives - 1. What's in lives now?", options: ["3", "2", "lives - 1", "An error"], answer: 1, why: "Python works out 3 - 1 = 2 first, then puts 2 in the box." },
      { q: "You run print(\"7\" + \"3\"). What shows up?", options: ["10", "An error", "73", "7 + 3"], answer: 2, why: "Both are text (in quotes), so + glues them together." },
      { q: "age = input(\"Age? \") then age + 1 gives a TypeError. What's the fix?", options: ["Use int(input(\"Age? \"))", "Put 1 in quotes", "Use print instead", "Rename age to Age"], answer: 0, why: "input gives text. int() turns it into a number you can add to." },
      { q: "Which type is 4.99?", options: ["str", "int", "bool", "float"], answer: 3, why: "A number with a decimal point is a float." },
      { q: "You want to show \"Score: 50\" where score is the number 50. Which works?", options: ["print(\"Score: \" + score)", "print(\"Score: \" + str(score))", "print(Score: score)", "print(\"Score: score\")"], answer: 1, why: "str() turns 50 into text so it can be glued to more text." },
      { q: "Which variable name works in Python?", options: ["high score", "high-score", "2score", "high_score"], answer: 3, why: "No spaces, no dashes, can't start with a number. Underscores are fine." },
      { q: "A shop app shows a total of 4.995 instead of a price. Which type is total?", options: ["float", "int", "str", "bool"], answer: 0, why: "Decimals are floats. You'd round it for display later." },
      { q: "is_open = True. What type is that?", options: ["str", "bool", "int", "float"], answer: 1, why: "True and False (no quotes, capital first letter) are bools: yes-or-no values." }
    ],
    links: [
      { title: "Python tutorial: numbers and text", url: "https://docs.python.org/3/tutorial/introduction.html" },
      { title: "Python Tutor (see the boxes fill up)", url: "https://pythontutor.com/" }
    ]
  },

  "make-decisions": {
    title: "Make decisions with if",
    shelf: "coding",
    tags: ["python", "if", "else", "elif", "conditions", "decisions", "compare", "beginner"],
    difficulty: "Beginner", time: "30 min", cost: "Free",
    summary: "Programs choose what to do with if. You'll write one that checks someone's age and gives a different answer depending on it, then add more choices with elif.",
    canDo: [
      "Make a program react differently to different answers.",
      "Build quiz questions that say right or wrong.",
      "Check rules like \"free shipping over $50\" or \"game over at 0 lives\"."
    ],
    words: [
      { word: "if", meaning: "Run the indented lines below only when the question is a yes." },
      { word: "else", meaning: "Run these lines when the if question was a no." },
      { word: "elif", meaning: "Short for \"else if\": another question to try when the first was a no." },
      { word: "Condition", meaning: "The yes-or-no question after if, like age >= 18." },
      { word: "Indent", meaning: "The 4 spaces at the start of a line that show it belongs to the if above." },
      { word: "==", meaning: "Asks whether two things are the same. One = stores; two == compares." }
    ],
    analogy: "if is a bouncer at a door. He checks one thing: are you on the list? Yes, you go in. No, you're sent to the else door. elif is a second bouncer with a different list. He only checks; he never guesses.",
    tools: PY_TOOLS,
    steps: [
      { do: `Type: age = int(input("How old are you? "))`, happened: "This asks for an age and turns the answer into a number (from the variables guide)." },
      { do: "On the next line type: if age >= 18:", happened: "This is the question: is age 18 or more? The colon means the indented lines below belong to this question." },
      { do: `On the next line, indent 4 spaces and type: print("You can vote.")`, happened: "The 4 spaces matter. They tell Python this line only runs when the answer is yes." },
      { do: `Next line, back at the left edge: else:  then indented: print("Not yet!")`, happened: "else catches every no. One of the two prints will run, never both." },
      { do: "Run it twice: once typing 20, once typing 12.", happened: "20 >= 18 is yes, so you see You can vote. 12 >= 18 is no, so Python skips to else." },
      { do: `Between them add: elif age >= 16:  then indented: print("You can drive.") — test with 17.`, happened: "Python asks the questions in order and stops at the first yes. 17 fails the first question and passes the second." }
    ],
    diagram: DIAGRAMS["make-decisions"],
    diagramCaption: "The if asks one yes-or-no question. Only one path runs each time.",
    table: {
      head: ["Sign", "What it asks", "Example"],
      rows: [
        ["==", "Are these the same?", "if lives == 0:"],
        ["!=", "Are these different?", "if answer != \"yes\":"],
        [">", "Is the left bigger?", "if score > 100:"],
        [">=", "Is the left bigger or the same?", "if total >= 50:"],
        ["<", "Is the left smaller?", "if hp < 10:"],
        ["and / or", "Both true / at least one true", "if age >= 18 and has_id:"]
      ]
    },
    mistakes: [
      "Writing = instead of ==. One = stores a value; two == compares.",
      "Forgetting the colon at the end of the if, elif or else line.",
      "Not indenting the lines that belong to the if. Python uses the spaces to know what's inside.",
      "Forgetting int() around input(). Text can't be compared with a number.",
      "Comparing text with different capitals: \"Yes\" == \"yes\" is a no."
    ],
    tryIt: [
      { task: "Ask \"What's 3 + 4?\" and say Correct! or Try again.", hint: "Turn the answer into a number, then compare it with == 7.", answer: `answer = int(input("What's 3 + 4? "))\nif answer == 7:\n    print("Correct!")\nelse:\n    print("Try again.")` },
      { task: "Ask for a temperature in °F. Over 85 say \"Hot\", 60 to 85 say \"Nice\", below 60 say \"Bring a jacket\".", hint: "Use if, elif and else. Check the biggest first.", answer: `temp = int(input("Temperature? "))\nif temp > 85:\n    print("Hot")\nelif temp >= 60:\n    print("Nice")\nelse:\n    print("Bring a jacket")` },
      { task: "Make a password check: if they type \"open sesame\", say Welcome; otherwise say Access denied.", answer: `word = input("Password? ")\nif word == "open sesame":\n    print("Welcome")\nelse:\n    print("Access denied")` }
    ],
    quiz: [
      { q: "A game has: if lives == 0: print(\"Game over\"). The player has 2 lives. What happens?", options: ["Game over shows up", "Nothing shows up", "Python shows an error", "It prints 2"], answer: 1, why: "2 isn't equal to 0, so the question is a no and the indented line is skipped." },
      { q: "A shop gives free shipping at $50 or more. Which line gets it right?", options: ["if total > 50:", "if total == 50:", "if total >= 50:", "if total < 50:"], answer: 2, why: ">= includes exactly 50. With > a $50 order would miss out." },
      { q: "You typed if score = 10: and Python shows an error. Why?", options: ["score needs a capital S", "= stores a value; comparing needs ==", "10 needs quotes", "if can't use numbers"], answer: 1, why: "One = means 'put this in the box'. To ask 'is it the same?' you need ==." },
      { q: "Your age program crashes on age >= 18 when age came straight from input(). What's missing?", options: ["Quotes around 18", "A second else", "int() around input()", "A capital If"], answer: 2, why: "input always hands back text. int() turns the text \"20\" into the number 20 so it can be compared." },
      { q: "if temp > 85 / elif temp > 60 / else. The temperature is 90. How many messages print?", options: ["One: the first match", "Two", "Three", "None"], answer: 0, why: "Python stops at the first yes. elif and else are skipped." },
      { q: "The user types Yes but your code checks if answer == \"yes\". What happens?", options: ["It matches", "Python shows an error", "It doesn't match: capitals count", "It crashes the editor"], answer: 2, why: "Yes and yes are different text. You could use answer.lower() == \"yes\" to ignore capitals." },
      { q: "You forgot to indent the print under your if. What does Python say?", options: ["Nothing; it runs anyway", "IndentationError", "TypeError", "NameError"], answer: 1, why: "Python expected an indented block after the colon and didn't find one." },
      { q: "A ride needs height of 48 or more AND an adult. Which joins both checks?", options: ["or", "and", "else", "elif"], answer: 1, why: "and is only yes when both sides are yes." }
    ],
    links: [
      { title: "Python tutorial: if statements", url: "https://docs.python.org/3/tutorial/controlflow.html" },
      { title: "Python Tutor (watch which path runs)", url: "https://pythontutor.com/" }
    ]
  },

  "repeat-with-loops": {
    title: "Repeat things with loops",
    shelf: "coding",
    tags: ["python", "loop", "for", "while", "range", "repeat", "break", "beginner"],
    difficulty: "Beginner", time: "35 min", cost: "Free",
    summary: "A loop runs the same lines again and again, so you don't copy and paste. You'll count laps, go through a shopping list and keep a guessing game going until someone wins.",
    canDo: [
      "Do something 10 or 10,000 times with 2 lines of code.",
      "Go through every item in a list: every friend, every score, every file.",
      "Keep a game running until the player wins or quits."
    ],
    words: [
      { word: "Loop", meaning: "Lines that repeat." },
      { word: "for", meaning: "Repeat once for each item, or a set number of times." },
      { word: "range(5)", meaning: "The numbers 0, 1, 2, 3, 4: five numbers, starting at 0." },
      { word: "while", meaning: "Keep repeating as long as a question stays a yes." },
      { word: "break", meaning: "Jump out of the loop right now." },
      { word: "Infinite loop", meaning: "A loop that never stops because its question never becomes a no." }
    ],
    analogy: "A loop is laps around a track. for says how many laps to run, or which items to visit. while keeps running laps until something tells it to stop, like running until the whistle blows.",
    tools: PY_TOOLS,
    steps: [
      { do: "Type: for i in range(1, 6):", happened: "This sets up 5 laps. i is a box that holds the lap number: 1, then 2, up to 5. range stops just before 6." },
      { do: `Indented 4 spaces: print("Lap", i)  then run it.`, happened: "The indented line ran 5 times, with i changing each time: Lap 1 up to Lap 5." },
      { do: `New line at the left edge: shopping = ["eggs", "milk", "bread"]  then: for item in shopping:  and indented: print("Buy", item)`, happened: "This time the loop visits each thing in the list. item holds eggs, then milk, then bread." },
      { do: "Add a fourth item to the list and run it again.", happened: "You didn't change the loop at all, but it handles the new item. That's why loops beat copy and paste." },
      { do: `New program: secret = 7, then guess = 0, then while guess != secret:  and indented: guess = int(input("Guess: "))`, happened: "while keeps asking as long as the guess isn't the secret. When you type 7, the question becomes a no and the loop ends." },
      { do: `After the loop, at the left edge: print("You got it!")`, happened: "Lines after a loop run once the loop has finished." }
    ],
    diagram: DIAGRAMS["repeat-with-loops"],
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
      "A while loop that never ends because nothing inside it changes. Press Stop, then change the variable inside the loop.",
      "Forgetting to indent the lines that should repeat.",
      "Putting the line that should run once (like You got it!) inside the loop by mistake."
    ],
    tryIt: [
      { task: "Print the 5 times table from 5 x 1 to 5 x 10.", hint: "Loop i through range(1, 11) and print 5 * i.", answer: `for i in range(1, 11):\n    print("5 x", i, "=", 5 * i)` },
      { task: "Count down from 10 to 1, then print Liftoff!", hint: "range can count backwards: range(10, 0, -1).", answer: `for i in range(10, 0, -1):\n    print(i)\nprint("Liftoff!")` },
      { task: "Add up all the numbers in [4, 8, 15, 16] with a loop.", hint: "Start a total at 0 and add each number to it inside the loop.", answer: `numbers = [4, 8, 15, 16]\ntotal = 0\nfor n in numbers:\n    total = total + n\nprint(total)   # 43` }
    ],
    quiz: [
      { q: "for i in range(3): print(i). What shows up?", options: ["1 2 3", "0 1 2 3", "3", "0 1 2"], answer: 3, why: "range starts at 0 and stops just before the number you give it." },
      { q: "You want to send the same message to each of 20 friends in a list. What's the best tool?", options: ["A for loop over the list", "20 print lines", "One if statement", "A while loop with nothing that stops it"], answer: 0, why: "A for loop visits each item for you, and still works if the list grows to 200." },
      { q: "Your while lives > 0: loop never stops. What's the most likely cause?", options: ["range is missing", "lives never goes down inside the loop", "The list is empty", "print is spelled wrong"], answer: 1, why: "while only stops when its question becomes a no. If lives never changes, it never does." },
      { q: "You're checking a long list for \"milk\" and want to stop as soon as you find it. What do you use?", options: ["else", "range", "break", "print"], answer: 2, why: "break jumps straight out of the loop, so you don't check the rest for nothing." },
      { q: "You see You got it! printed after every wrong guess. What happened?", options: ["The print is indented inside the loop", "while is broken", "The secret is wrong", "You need break"], answer: 0, why: "Indented lines repeat with the loop. Move the print to the left edge so it runs once at the end." },
      { q: "Which range gives 1, 2, 3, 4, 5?", options: ["range(5)", "range(1, 5)", "range(1, 6)", "range(0, 5)"], answer: 2, why: "Start at 1, stop just before 6." },
      { q: "A game should keep going until the player types quit. Which loop fits best?", options: ["for i in range(10):", "while answer != \"quit\":", "if answer == \"quit\":", "for answer in \"quit\":"], answer: 1, why: "You don't know how many turns there'll be, so keep looping while the answer isn't quit." }
    ],
    links: [
      { title: "Python tutorial: for loops and range", url: "https://docs.python.org/3/tutorial/controlflow.html" },
      { title: "Python Tutor (watch each lap happen)", url: "https://pythontutor.com/" }
    ]
  },

  "store-lists": {
    title: "Keep lots of things in a list",
    shelf: "coding",
    tags: ["python", "list", "array", "append", "index", "len", "beginner"],
    difficulty: "Beginner", time: "30 min", cost: "Free",
    summary: "A list holds many values in one variable, in order. You'll build a to-do list, add to it, take things off, count it and loop through it.",
    canDo: [
      "Keep a to-do list, a high-score table or an inventory in one variable.",
      "Pick out the first, last or any item by its position.",
      "Combine lists with loops to handle any amount of data."
    ],
    words: [
      { word: "List", meaning: "Many values in one box, in order, inside square brackets: [\"a\", \"b\"]." },
      { word: "Item", meaning: "One value in the list." },
      { word: "Index", meaning: "An item's position number. The first is 0, not 1." },
      { word: "append()", meaning: "Add an item to the end of the list." },
      { word: "remove()", meaning: "Take a named item out of the list." },
      { word: "len()", meaning: "Count how many items are in the list." }
    ],
    analogy: "A list is an egg carton with numbered slots, except the first slot is number 0, not 1. You can add eggs at the end, take one out, or count how many are in there.",
    tools: PY_TOOLS,
    steps: [
      { do: `Type: todo = ["dishes", "laundry"]`, happened: "One variable now holds two items. Square brackets make a list; commas separate the items." },
      { do: `Add to the end: todo.append("homework")  then print(todo)`, happened: "The list grows: ['dishes', 'laundry', 'homework']. The dot means \"use this list's append tool\"." },
      { do: "Show the first item: print(todo[0])", happened: "You see dishes. The number in square brackets is the index, and counting starts at 0." },
      { do: "Show the last item: print(todo[-1])", happened: "You see homework. Negative numbers count back from the end, so -1 is always the last item." },
      { do: `Take one off: todo.remove("dishes")  then print(len(todo))`, happened: "dishes is gone, and len counts what's left: 2." },
      { do: "Loop over it: for job in todo:  then indented: print(\"To do:\", job)", happened: "Lists and loops work together: the loop visits each item in order." }
    ],
    diagram: DIAGRAMS["store-lists"],
    diagramCaption: "One list, three slots. The slot numbers start at 0.",
    table: {
      codeCol: 1,
      head: ["Do this", "Code", "Result for x = [\"a\", \"b\", \"c\"]"],
      rows: [
        ["Get the first item", "x[0]", "\"a\""],
        ["Get the last item", "x[-1]", "\"c\""],
        ["Add to the end", "x.append(\"d\")", "[\"a\", \"b\", \"c\", \"d\"]"],
        ["Remove an item", "x.remove(\"b\")", "[\"a\", \"c\"]"],
        ["Count the items", "len(x)", "3"],
        ["Check if it's there", "\"a\" in x", "True"]
      ]
    },
    mistakes: [
      "Counting from 1. In a list of 3 items, the slots are 0, 1 and 2, so x[3] is an IndexError.",
      "Leaving out a comma between items.",
      "Removing something that isn't in the list. Python gives a ValueError; check with in first.",
      "Using round brackets ( ) instead of square brackets [ ] to make a list."
    ],
    tryIt: [
      { task: "Make a list of 3 favourite games, add a fourth, then print how many there are.", answer: `games = ["Zelda", "Minecraft", "Valheim"]\ngames.append("Pokemon")\nprint(len(games))   # 4` },
      { task: "Ask for 3 names one at a time and put them in a list, then print the list.", hint: "Start with an empty list [] and append inside a loop of range(3).", answer: `names = []\nfor i in range(3):\n    names.append(input("Name? "))\nprint(names)` },
      { task: "Only remove \"milk\" if it's in the shopping list.", hint: "Use if \"milk\" in shopping:", answer: `shopping = ["eggs", "bread"]\nif "milk" in shopping:\n    shopping.remove("milk")\nprint(shopping)` }
    ],
    quiz: [
      { q: "colors = [\"red\", \"green\", \"blue\"]. What is colors[1]?", options: ["red", "green", "blue", "An error"], answer: 1, why: "Counting starts at 0, so slot 1 is the second item." },
      { q: "Your list has 3 items and you ask for items[3]. What happens?", options: ["You get the last item", "You get the first item", "You get None", "IndexError"], answer: 3, why: "3 items means slots 0, 1 and 2. There's no slot 3." },
      { q: "You want to add \"pizza\" to the end of your menu list. Which line?", options: ["menu[0] = \"pizza\"", "menu.append(\"pizza\")", "len(menu)", "menu.remove(\"pizza\")"], answer: 1, why: "append adds to the end. menu[0] = would replace the first item instead." },
      { q: "You don't know how long a list is but want its last item. Which works every time?", options: ["x[-1]", "x[len(x)]", "x[0]", "x.last"], answer: 0, why: "-1 counts back from the end. x[len(x)] is one slot past the end." },
      { q: "scores = [10, 20, 30]. What does len(scores) give?", options: ["30", "60", "3", "2"], answer: 2, why: "len counts items, not their values." },
      { q: "shopping.remove(\"milk\") crashes with ValueError. Why?", options: ["milk isn't in the list", "remove only works on numbers", "The list is too long", "You need append first"], answer: 0, why: "You can't remove what isn't there. Check with if \"milk\" in shopping: first." },
      { q: "Which line makes a list?", options: ["pets = (\"cat\" \"dog\")", "pets = \"cat, dog\"", "pets = [\"cat\", \"dog\"]", "pets = {cat, dog}"], answer: 2, why: "Square brackets with commas between the items." }
    ],
    links: [
      { title: "Python tutorial: lists", url: "https://docs.python.org/3/tutorial/introduction.html#lists" },
      { title: "Python Tutor (see the slots)", url: "https://pythontutor.com/" }
    ]
  },

  "make-functions": {
    title: "Make your own functions",
    shelf: "coding",
    tags: ["python", "function", "def", "return", "parameter", "argument", "reuse", "beginner"],
    difficulty: "Beginner", time: "35 min", cost: "Free",
    summary: "A function is a named set of steps you can use again and again. You'll make one that greets anyone you give it, and one that works out a price with tax and hands the answer back.",
    canDo: [
      "Stop copying and pasting the same lines: write them once, use them anywhere.",
      "Break a big program into small named pieces you can test one at a time.",
      "Build your own tools, like a tax or tip calculator, and reuse them."
    ],
    words: [
      { word: "Function", meaning: "A named set of steps you can run whenever you want." },
      { word: "def", meaning: "Short for define: starts making a function." },
      { word: "Call", meaning: "Use a function by writing its name with brackets: greet(\"Sam\")." },
      { word: "Parameter", meaning: "The name inside the def brackets for what the function expects, like name." },
      { word: "Argument", meaning: "The actual value you hand over when you call it, like \"Sam\"." },
      { word: "return", meaning: "Hand an answer back to the line that called the function." }
    ],
    analogy: "A function is a vending machine. You put something in (the argument), it does its job inside, and something comes out (the return value). You don't build a new machine every time you want a snack; you just press the button again.",
    tools: PY_TOOLS,
    steps: [
      { do: "Type: def greet(name):", happened: "You've started a function called greet that expects one thing, which it'll call name. The colon means the indented lines below are its steps." },
      { do: `Indented 4 spaces: print("Hi,", name)`, happened: "This is the function's job. Nothing happens yet: def only builds the machine." },
      { do: `At the left edge: greet("Sam")  then greet("Ava")  and run it.`, happened: "Each call runs the function once. The first time name holds Sam, the second time Ava. One function, two greetings." },
      { do: "Now type: def with_tax(price):  and indented: return price * 1.08", happened: "This function works something out and hands the answer back with return, instead of printing it." },
      { do: "At the left edge: total = with_tax(10)  then print(total)", happened: "with_tax(10) becomes 10.8, which goes into total. return lets you keep the answer and use it later." },
      { do: "Try print(with_tax(20) + with_tax(5)) and run it.", happened: "Each call works out its own answer, then the two are added. Functions can be used anywhere a value can." }
    ],
    diagram: DIAGRAMS["make-functions"],
    diagramCaption: "Something goes in, the function does its one job, and the answer comes back out.",
    table: {
      head: ["Word", "What it means", "Example"],
      rows: [
        ["def", "Start making a function", "def greet(name):"],
        ["parameter", "The name for what the function expects", "name"],
        ["argument", "The actual thing you hand it", "greet(\"Sam\")"],
        ["return", "Hand an answer back", "return price * 1.08"],
        ["two parameters", "A function can take more than one thing", "def area(w, h):"]
      ]
    },
    mistakes: [
      "Making a function but never calling it. def only builds the machine; greet(\"Sam\") uses it.",
      "Using print when you meant return. print shows the answer but hands nothing back, so you get None.",
      "Calling the function above the def line in your file. Python reads top to bottom.",
      "Forgetting the brackets when calling: greet without () doesn't run it."
    ],
    tryIt: [
      { task: "Write a function double(n) that returns n times 2. Print double(21).", answer: `def double(n):\n    return n * 2\n\nprint(double(21))   # 42` },
      { task: "Write area(w, h) for a rectangle and print the area of a 3 by 4 room.", answer: `def area(w, h):\n    return w * h\n\nprint(area(3, 4))   # 12` },
      { task: "Write a function that takes a score and returns \"Pass\" if it's 60 or more, otherwise \"Fail\".", hint: "Use if inside the function, with a return in each branch.", answer: `def grade(score):\n    if score >= 60:\n        return "Pass"\n    else:\n        return "Fail"\n\nprint(grade(75))` }
    ],
    quiz: [
      { q: "You wrote def cheer(): print(\"Go!\") and ran the file, but nothing shows. Why?", options: ["def is spelled wrong", "You need a return", "You never called cheer()", "print is broken"], answer: 2, why: "def only sets the function up. Nothing happens until a line says cheer()." },
      { q: "In def area(w, h): return w * h, what are w and h?", options: ["Parameters: the inputs the function expects", "Return values", "Error messages", "Lists"], answer: 0, why: "Parameters are the labelled slots you fill each time you call it, like area(3, 4)." },
      { q: "x = add_tax(5) gives x the value None. add_tax uses print instead of return. What's the fix?", options: ["Add another print", "Rename x", "Delete the def", "Change print to return"], answer: 3, why: "print shows the answer on screen; return actually hands it back so x can hold it." },
      { q: "You've pasted the same 6 lines into 4 places in your game. What's the cleaner way?", options: ["Make the file longer", "Put the lines in a function and call it 4 times", "Wrap them in an if", "Delete three copies"], answer: 1, why: "One function means one place to fix when something changes." },
      { q: "In greet(\"Sam\"), what is \"Sam\"?", options: ["A parameter", "The function's name", "An argument", "A return value"], answer: 2, why: "The value you hand over when you call it is the argument." },
      { q: "You call greet(\"Sam\") on line 1 and write def greet on line 3. What happens?", options: ["It works fine", "NameError: Python hasn't met greet yet", "It greets twice", "SyntaxError"], answer: 1, why: "Python reads top to bottom, so define functions before you call them." },
      { q: "def double(n): return n * 2. What does double(double(3)) give?", options: ["6", "9", "3", "12"], answer: 3, why: "The inner call gives 6, then double(6) gives 12." }
    ],
    links: [
      { title: "Python tutorial: defining functions", url: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions" },
      { title: "Python Tutor (watch a function get called)", url: "https://pythontutor.com/" }
    ]
  },

  "read-errors": {
    title: "Read an error without panicking",
    shelf: "coding",
    tags: ["python", "error", "debug", "debugging", "traceback", "bug", "fix", "beginner"],
    difficulty: "Beginner", time: "30 min", cost: "Free",
    summary: "An error is Python telling you exactly where it got confused. You'll learn to read the last line first, find the line number, and fix the five errors beginners see most.",
    canDo: [
      "Fix most of your own bugs without asking anyone.",
      "Know what to search for when you're stuck.",
      "Use print() to see what your program is really doing."
    ],
    words: [
      { word: "Error (exception)", meaning: "Python stopping because it can't carry on, with a message saying why." },
      { word: "Traceback", meaning: "The whole error message, showing which lines Python was running." },
      { word: "Bug", meaning: "A mistake that makes the program wrong, with or without an error message." },
      { word: "Debugging", meaning: "Finding and fixing bugs." },
      { word: "SyntaxError", meaning: "Something's written the wrong way, like a missing bracket." },
      { word: "Print debugging", meaning: "Adding print() lines to see what your variables hold." }
    ],
    analogy: "An error message is your GPS saying \"route lost\". It tells you where you were (the line number) and what went wrong (the last line). The car isn't broken; you just turn around.",
    tools: [
      { name: "Somewhere to run Python", budget: "Programiz online editor in your browser", best: "Thonny on your laptop (it highlights the error line)" },
      { name: "A search engine", budget: "Any search engine", best: "Search plus Python Tutor to watch your code" }
    ],
    steps: [
      { do: "Read the last line first. It names the kind of error and gives a short reason.", happened: "The last line is the most useful part, like NameError: name 'pirnt' is not defined." },
      { do: "Look for the word line and a number. Go to that line.", happened: "That's where Python noticed the problem." },
      { do: "Check the line just above it too.", happened: "A missing bracket or quote on the line before often only gets noticed on the next line." },
      { do: "Fix one thing, then run it again.", happened: "If you change many things at once, you won't know which one fixed it, or which one broke something new." },
      { do: "Still stuck? Copy the last line of the error into a search engine.", happened: "Millions of people have hit the same error. The first results usually explain it." },
      { do: "No error, but the answer's wrong? Add print() lines to show your variables just before the problem.", happened: "Seeing the real values usually shows the bug straight away, like a number that's secretly text." }
    ],
    diagram: DIAGRAMS["read-errors"],
    diagramCaption: "The two parts that matter: which line (top box) and what went wrong (bottom box).",
    table: {
      head: ["Error", "Usually means", "Example cause"],
      rows: [
        ["SyntaxError", "Something's written the wrong way", "print(\"hi\""],
        ["NameError", "You used a name Python doesn't know", "prnt(\"hi\")"],
        ["TypeError", "You mixed things that don't go together", "\"5\" + 5"],
        ["IndentationError", "The spaces at the start don't line up", "print(x) not indented under if x:"],
        ["IndexError", "That list slot doesn't exist", "items[10]"],
        ["ValueError", "Right type, wrong value", "int(\"hello\")"]
      ]
    },
    mistakes: [
      "Reading only the top of the error. The useful part is at the bottom.",
      "Changing lots of things at once, so you can't tell which one fixed it.",
      "Ignoring the line above the one Python points at.",
      "Thinking no error means no bug. Code can run and still give the wrong answer."
    ],
    tryIt: [
      { task: "This crashes. Read the error and fix it: total = \"10\" + 5", hint: "One is text, one is a number.", answer: `total = 10 + 5        # make both numbers\n# or\ntotal = int("10") + 5` },
      { task: "This runs but always prints 0. Add a print to find out why, then fix it.\ncount = 0\nfor x in [1, 2, 3]:\n    count = 0\n    count = count + 1\nprint(count)", hint: "Print count inside the loop. What happens to it each lap?", answer: "count = 0 inside the loop resets it every lap. Move it above the loop:\ncount = 0\nfor x in [1, 2, 3]:\n    count = count + 1\nprint(count)   # 3" },
      { task: "Fix this: if score > 10\n    print(\"High\")", answer: `if score > 10:\n    print("High")\nThe colon was missing.` }
    ],
    quiz: [
      { q: "You see: NameError: name 'pirnt' is not defined. What's the fix?", options: ["Install pirnt", "Spell print correctly", "Restart the computer", "Put quotes around pirnt"], answer: 1, why: "Python doesn't know a word called pirnt. It's a typo for print." },
      { q: "age = input(\"Age? \") then print(age + 1) gives a TypeError. What's the fix?", options: ["Use int(age) + 1", "Delete the print", "Add an if", "Put 1 in a list"], answer: 0, why: "input gives text. You can't add a number to text, so turn it into a number first." },
      { q: "The error points at line 8, but line 8 looks fine. Where do you look next?", options: ["Line 1", "The end of the file", "Line 7, just above", "Nowhere; it's a Python bug"], answer: 2, why: "An unclosed bracket or quote on line 7 only gets noticed when Python reaches line 8." },
      { q: "Which part of an error message do you read first?", options: ["The first line", "The file name", "The last line", "None of it"], answer: 2, why: "The last line names the error and why. Then you go find the line number." },
      { q: "int(\"hello\") gives which error?", options: ["ValueError", "NameError", "IndexError", "SyntaxError"], answer: 0, why: "int() takes text, so the type is fine, but \"hello\" isn't a number: the value is wrong." },
      { q: "Your program runs with no error but the total is wrong. What's the best next step?", options: ["Give up; it's correct", "Delete the program", "Add print() lines to see the values", "Run it 10 more times"], answer: 2, why: "Printing the variables shows what the program really did." },
      { q: "You changed 5 things and now it works. What's the problem?", options: ["Nothing at all", "You don't know which change fixed it", "Python will break tomorrow", "It needs restarting"], answer: 1, why: "Change one thing at a time so you learn what fixed it." },
      { q: "IndentationError: expected an indented block. What does Python want?", options: ["4 spaces before the line under your if, for or def", "A capital letter", "Quotes around the line", "A new file"], answer: 0, why: "After a line ending in a colon, Python expects indented lines below it." }
    ],
    links: [
      { title: "Python tutorial: errors and exceptions", url: "https://docs.python.org/3/tutorial/errors.html" },
      { title: "Python Tutor (step through to the crash)", url: "https://pythontutor.com/" }
    ]
  }
});
