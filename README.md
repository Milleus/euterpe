# Euterpe

Euterpe is a web crawler that searches a website for internal and external broken links. Crawler is written in Python. Demo dashboard was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Commands

### Crawler

Requires scrapy installed, `pip install scrapy`.

- `scrapy crawl check_anchor_tags -t <type> -o <filename>`

  **Note: this is only a prototype. Currently it only checks anchor tags**

  Runs crawler and logs output into a file.<br />
  `-t json -o file.json` will log output into file.json.<br/>
  `-t csv -o file.csv` will log output into file.csv.

### Demo Dashboard

Go into demo-dashboard folder and run either of these commands:

- `npm start`

  Runs the app in the development mode.<br />
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  The page will reload if you make edits.<br />
  You will also see any lint errors in the console.

- `npm test`

  Launches the test runner in the interactive watch mode.<br />
  See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- `npm run build`

  Builds the app for production to the `build` folder.<br />
  It correctly bundles React in production mode and optimizes the build for the best performance.

  The build is minified and the filenames include the hashes.<br />
  Your app is ready to be deployed!

  See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

- `npm run eject`

  **Note: this is a one-way operation. Once you `eject`, you can’t go back!**

  If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

  You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## To do

1. Allow input of website URL (currently hardcoded).
2. Allow checking of img src links.
3. Allow checking of script source links, css stylesheet links, favicon, etc?
4. Allow customisable settings for download timeout, DNS timeout, number of retries, etc.
5. Improve error handling.
6. Extract crawler statistics data (already exists but only in console).
