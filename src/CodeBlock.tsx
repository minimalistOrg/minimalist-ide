import React from 'react';

import './CodeBlock.css';

export const CodeBlock = () => {
  // Add namespace

  return (
    <div className="code-block">
      <div className="code-block-header">
        <div className="code-block-name">
          plus<span className="code-block-arguments">(a, b)</span>
        </div>

        <button className="code-block-close">x</button>
      </div>

      <div className="code-block-body">
        a <button className="function-call">+</button> b
      </div>
    </div>
  );
};
