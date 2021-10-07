import React, { useState } from "react";
import { FunctionCallRow } from "./FunctionCallRow";
import { editorStateMock } from "./mocks/editorStateMock";

import './App.css';
import './styles/helpers.css';

export const App = () => {
  const [editorState] = useState(editorStateMock);

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
