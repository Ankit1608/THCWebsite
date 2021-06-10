import React from "react";
import "./App.css";
import Routes from "./pages/Routes";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { withAuthenticator } from '@aws-amplify/ui-react'
Amplify.configure(awsExports);
function App() {
  return <Routes />;
}

export default App
{
  /* <Homepage />
<SearchPage />
<ItemPage />
<Payment/> */
}
