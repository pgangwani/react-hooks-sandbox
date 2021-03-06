import React from "react";

// Layout Helper
import Section from "./Section";

// Hooks :)
import Counter from "../Hooks/Counter";
import DocTitle from "../Hooks/DocTitle";
import Inputs from "../Hooks/Inputs";
import SavedInputs from "../Hooks/SavedInputs";
import Resize from "../Hooks/Resize";

import WindowWidth from "../Hooks/WindowWidth";
import ResizeOptimized from "../Hooks/ResizeOptimized";
import External from "../Hooks/External";
import ObjectIs from "../Hooks/ObjectIs";
import Visitors from "../Hooks/Visitors";

import Calculator from "../Hooks/Calculator";

function App() {
  return (
    <div className="App">
      <Section title="React Hooks" />
      <Section subtitle="Basic">
        <Counter />
        <DocTitle />
        <Inputs />
        <SavedInputs />
        <Resize />
      </Section>
      <Section subtitle="Advanced">
        <WindowWidth />
        <ResizeOptimized />
        <External />
        <ObjectIs />
      </Section>
      <Section subtitle="Visitors">
        <Visitors />
      </Section>
      <Section subtitle="Context">
        <Calculator />
      </Section>
    </div>
  );
}

export default App;
