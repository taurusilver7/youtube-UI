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
