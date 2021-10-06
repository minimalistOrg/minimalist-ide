import React, { useState } from "react";
import { FunctionCallRow } from "./FunctionCallRow";
import { fakeCallRows } from "./fakeCallRows";

import './App.css';

export const App = () => {
  const [editorState] = useState(fakeCallRows);

  return (
    <div className="App">
      {editorState.functionRows.map((functionRow, index) =>
        <FunctionCallRow
          functionRow={functionRow}
          key={index}
        />
      )}
    </div>
  );
};
