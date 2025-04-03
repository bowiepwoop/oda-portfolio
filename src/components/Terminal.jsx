import React, { useState, useEffect } from 'react';

function Terminal({ isLoading }) {
    const [terminalText, setTerminalText] = useState('');
    const loadingText = `> INITIALIZING SYSTEM...
  > CHECKING HARDWARE COMPONENTS...
  > LOADING NEURAL INTERFACE...
  > ESTABLISHING CONNECTION...
  > ACCESSING MAINFRAME...
  > LOADING USER PROFILE...
  > SYSTEM READY`;
  
    const standardText = `> SYSTEM BOOT INITIALIZED
  > LOADING USER PROFILE
  > ACCESSING NEURAL NETWORK
  > WELCOME TO THE SYSTEM
  > PORTFOLIO MODULES LOADED
  > READY FOR INPUT...`;
  
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
          <div className="terminal-title">SYSTEM.BOOT</div>
        </div>
        <div className="terminal-body">
          <pre>{terminalText}<span className="cursor">_</span></pre>
        </div>
      </div>
    );
}

export default Terminal;