# Text Adventure - MOIRAI 2

We decided to base our game concept off a popular adventure game Moirai from 2016.
https://www.pcgamer.com/a-brief-history-of-moirai-one-of-pcs-most-disturbing-games/

What we're trying to achieve is user input influencing the next round of gameplay by the NEXT user, not next session.
For example, if we have a player who chooses to write a message on a wall during their game,
the next player can read the previous player's message on the same wall.

The game will be a short text or browser adventure game, featuring 3-5 rooms of puzzles and interactions,
with decisions that can influence the next player's gameplay.

Greg Zaragoza == Natasha Ortiz == Brigitte Powers

# User Story

```md
AS a gamer who likes tabletop and pen&paper games that feature consequences and user-inputs
I WANT a console-style adventure game but with some modernized quality-of-life features that allows my actions and inputs to affect the next round of gameplay
SO THAT I can play an exploration game on-the-go in a browser, and be able to pickup where ever I left off last time
```

GIVEN an adventure game in-browser

WHEN I visit the homepage for the first time
THEN I am prompted to create an account or login

WHEN I am NOT logged in
THEN I am redirected to create an account or sign-in

WHEN I AM logged in
THEN I am prompted to create a new game or load my save file

WHEN I try to make a new game
THEN I am taken to the character creation screen

WHEN I try to load my save file
THEN I am exactly where I left off last session with the same inventory, map, and data loaded

-

\

# MVP Functionality

### (what information can the user see? What actions can they do?)

- make a character
- save and access user character data // checkpoint // save
- 4-5 rooms to explore
- manage inventory / change equipment / loadout
- view character stats and inventory
- display via frontend or console emulator (undecided)
- user interactions and decisions made in-game to be influenced by the previous player's decisions
- user intereactions and decisions made in-game TO INFLUENCE the next player's game

# API Routes

- /
- /login -- save feature tie-in
- /inventory
- /stats
- /new-character
- /map

### (list of general API and homepage routes you expect)

# 3rd Party API/SDK/LIBRARY ideas

- NPM Text Adventure Package
- Tailwind.css
- https://typeitjs.com/
