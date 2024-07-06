## Before running your first scrub

Being these are written in TypeScript, it needs to be compiled to JS before running.

The easiest way I've found to do this is using `tsx`. I installed it globally with `npm install --global tsx`.

## Writing a scrub

Follow an example here. The jist is to create a new script that calls `runScript` and passes it a function. The rest is all standard Node/Mongo stuff.

## Running a scrub

Script files have a shebang telling the system to use `tsx`. The file needs to be executable though. `chmod +x <filename>` works for that.

The final thing needed is the MongoDB URI environment variable to be defined. This can be set in bash profile or exported manually before running the script.
