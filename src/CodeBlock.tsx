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

        <div className="code-block-close">x</div>
      </div>

      <div className="code-block-body">
        a <a>+</a> b
      </div>
    </div>
  );
};
