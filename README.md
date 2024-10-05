# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to Export Form Data Results (stored in Firestore) to CSV:

[Firestore Console](https://console.firebase.google.com/u/4/project/isauw-88012/firestore)

1. Run the following command to install dependencies (with legacy peer dependencies):
   `npm i --legacy-peer-deps`
2. Download the serviceAccountKey.json file from (Firebase --> project settings --> Service Accounts --> Generate new private key)
   Link: [Firestore Project Settings](https://console.firebase.google.com/u/4/project/isauw-88012/settings/serviceaccounts/adminsdk)
3. Rename the downloaded file to serviceAccountKey.json, and save it in the root directory
4. `node exportFirestoreToCSVComp (name of database that you want to export eg. stamp-quest)`


## To Access .env File in Vercel

### Steps to Add Environment Variables

1. **Navigate to Your Project on Vercel:**
   - Log in to your Vercel account and select your project from the dashboard.

2. **Access Environment Variables Settings:**
   - Go to the "Settings" tab of your project.
   - Select "Environment Variables" from the sidebar.

3. **Add Each Environment Variable:**
   - Click the "Add New" button to create a new environment variable.
   - Enter the key and value exactly as they appear in your `.env.local` file. Make sure the keys start with `REACT_APP_` as required by Create React App.
     For example:
     - **Key:** `REACT_APP_FIREBASE_API_KEY`
     - **Value:** `YourFirebaseAPIKey`

4. **Select Environment:**
   - Choose the environment you want these variables to be available in (`Production`, `Preview`, or `Development`).

5. **Deploy Your Project:**
   - After adding all necessary variables, deploy or redeploy your Vercel project so that it can access these variables during build and runtime.

6. **Access Variables in Code:**
   - Your environment variables will be accessible in your React app via `process.env.REACT_APP_YOUR_VARIABLE`.

### Tips:
- Ensure that your `.env.local` file is added to `.gitignore` to avoid pushing sensitive data to your repository.
- Do not expose any sensitive keys or credentials directly in your codebase.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

