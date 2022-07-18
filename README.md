# Youtube Video sharing UI

> A react powered video sharing application, with styled components & functional components with hooks.

## Build

Refactor the starter template to suit the basic requirements of the application.
import `react-router-dom` and `styled-components` dependencies to the build.

Split the index page into Menu & Main components wrapped in a Container. The Main component holds a Navbar & Video Wrapper components.
Split the Menu & Main components in 1:7 aspect ratio on the screen.

- Create nav buttons in the Menu components and customize a theme provider. Creata a state to mangage the theme modes.

Style the Navbar with an Input & Search styled-components. Add the sign-in button from Menu component.

- Add specific routes to the project to add navigation between pages. The main routes are the index & video pages (with an video:id) identifier.

- Create the Card component to display the video thumbnails in the home page.

- Specify the routes for navigating between the home & videos pages using the Link elements.
- Style the Video component, add the features into the components.
- Create a comments wrappers, and an induvidual comment component.

- The Recommendation section has video thumbnails as in the home page, but in horizontal display. Use props to change the orientation of the component and other minor adjustments.

Custom utility class: `display: ${(props) => props.type === 'sm' && "flex"}`

- Add hover effects on menu buttons in the home page.

## Login Component

- Add a route to the routes for Login page. Create a login page in the pages. Style the login form for sign-in and register fields in the login form with styled-components.

## UI - Server.

- Create a state to manage the fetched videos from the server & a useEffect() to fetch the data on refresh.

- Map the fetched items into the Card component, and populate the data-values in the component.

- Import axios and fetch the data from server API endpoint. Create a proxy in the package.json to avoid repetetions.

- Add two more paths to the App (trends & sub) and add the route paths in the Menu component. If the axios fetch doesn't respond to the proxy, restart the react-app to kickstart the server to link up with the react-application.

- Implement the sign-in function on the UI. create pieces of states for every input field & populate the values to an handler function.

- The handler function fires a post request to the server to provide with the user data to the UI.
  To populate the user information in various no-linking components, a context-api, or a global state-management is imported.

### Redux-toolkit.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
