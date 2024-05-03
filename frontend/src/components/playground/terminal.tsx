'use client';

import { Terminal } from '@xterm/xterm';
import { useEffect, useRef } from 'react';
import '@xterm/xterm/css/xterm.css';

export default function TerminalIDE() {
  const terminalRef = useRef(null);

  useEffect(() => {
    const terminal = new Terminal();
    terminal.open(terminalRef.current!);
    // Customize further as needed
    terminal.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
    // return () => {
    //   terminal.dispose();
    // };
  }, []);

  return <div ref={terminalRef} />;
}
