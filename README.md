# commit-overview

### Part 1: Commit overview
Retrieve all commits of the last month in the git project that you love on Github.
The API call to do this is: GET https://api.github.com/repos/{git_repo}/commits
Show the commits in a list, newest on top. The list items should at least show the first line of
each commit message and its timestamp. A commit should be rendered in a separate
component.

### Part 2: Commit detail page
The user should be able to see the details of a specific commit in a clear manner on a separate
page. The details should include the commit messages (which can span multiple lines). Any
extra information that you would like to present can also be shown there.

### Part 3: Date range of the commit overview
The user should be able to change the date range of the commit overview. For example, the
entire last year, or just commits since 2 days ago.

### Part 4: Testing
Of course you wrote unit tests for the app you just created. If you did not do so, do it now!

### Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
