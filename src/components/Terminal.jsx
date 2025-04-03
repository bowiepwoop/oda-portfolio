import React, { useState, useEffect } from 'react';

function Terminal({ isLoading }) {
    const [terminalText, setTerminalText] = useState('');
    const loadingText = `
  > initializing portfolio . . .
  > checking hardware components . . .
  > loading neural interface . . .
  > establishing connection . . .
  > accessing mainframe . . .
  > loading user profile . . .
  > portfolio ready`;
  
    const standardText = `> system boot initialized . . .
  > loading user profile . . .
  > accessing neural interface . . .
  > w e l c o m e t o t h e s y s t e m !
  > portfolio modules loaded
  > ready for input . . .`;
  
    const fullText = isLoading ? loadingText : standardText;
  
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < fullText.length) {
          setTerminalText(prevText => prevText + fullText.charAt(index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);
  
      return () => clearInterval(interval);
    }, [fullText]);
  
    return (
      <div className="terminal-container loading-terminal">
        <div className="terminal-header">
          <div className="terminal-title">system.boot</div>
        </div>
        <div className="terminal-body">
          <pre>{terminalText}<span className="cursor">_</span></pre>
        </div>
      </div>
    );
}

export default Terminal;