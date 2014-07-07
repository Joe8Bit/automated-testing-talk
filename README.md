This repo contains the walk through contents of a talk based on automated testing techniques and practices.

---

### Step 1 - The good path
The implementation of a basic calculator in Angular and 100% unit test coverage of unit tests. According to the 'Step 1' user story as defined in `user_story.md`.

* View type bug.

### Step 2 - The bad path
The implementation of a basic calculator in Angular, with 100% unit test coverage of both the good and bad path. According to the 'Step 2' user story as defined in `user_story.md`.

### Step 3 - End-to-end tests
The implementation of a basic calculator in Angular, with 100% unit test coverage of both the good and bad path, plus end-to-end test coverage of all of the acceptance criteria. According to the 'Step 3' user story as defined in `user_story.md`.

### Step 4 - Remote cross-browser testing
The implementation of a basic calculator in Angular, with 100% unit test coverage of both the good and bad path, plus end-to-end test coverage of all of the acceptance criteria in both supported browsers remotely on Saucelabs. According to the 'Step 3' user story as defined in `user_story.md`.

---

### Running
First `cd` into the step you wish to run:
    
    npm install & bower install
    grunt serve // to start the app
    grunt test // to run the unit tests and generate the coverage report
    ./node_modules/protractor/bin/protractor test/protractor.js // to run the e2e tests
    
    SAUCE_USERNAME=[your saucelabs username] SAUCE_ACCESS_KEY=[your saucelabs access key] ./node_modules/protractor/bin/protractor test/protractor.js // to run the e2e tests on saucelabs


