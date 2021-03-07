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