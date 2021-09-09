// Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

// When using Next.js you’ll most likely need to override the global App component to get access to some features like persisting state, or global layouts. This can be done by creating a file_app.js directly in the ./pages/ folder. If this file exists, then Next.js will use this instead of the default App.

// Next.js _app.js example
// https://jools.dev/nextjs-_appjs-example

// import navigation component
import TopNav from "../components/TopNav";
// import minified bootstrap - import bootstrap with npm i bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import Ant Design 
import "antd/dist/antd.css";
// import custom css
import "../public/css/styles.css";
import React from "react";

function MyApp({ Component, pageProps }) {
// The Component prop is the page view that will be rendered. We can use this to pass our own props to or wrap with layout/context components. 
// The pageProps prop is the props that each page will receive when rendered. It is important to remember to pass these along.
  return (
    <React.Fragment>
      {/* Bring the top navigation component */}
      <TopNav /> 
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
