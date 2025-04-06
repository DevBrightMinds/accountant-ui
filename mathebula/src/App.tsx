import React from "react";
import { JSX } from "react";

import "./App.css";
import { AppNavigation } from "./infrastructure/navigation/AppNavigation";


const App: React.FC<{}> = (): JSX.Element => {
    return <AppNavigation />
}

export default App;