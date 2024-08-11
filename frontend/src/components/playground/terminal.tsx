'use client';

import { Terminal } from '@xterm/xterm';
import { useEffect, useRef } from 'react';
import { AttachAddon } from '@xterm/addon-attach';
import '@xterm/xterm/css/xterm.css';

export default function TerminalIDE() {
  const terminalRef = useRef(null);
  const isRendered = useRef(false);

  useEffect(() => {
    if (isRendered.current) return;
    isRendered.current = true;

    const term = new Terminal();
    term.open(terminalRef.current!);
    term.write('Hello from xterm.js \r\n');
    const socket = new WebSocket(
      'ws://localhost:2375/containers/1d69236a1b73/attach/ws?stdin=1&stdout=1&stderr=1&logs=1'
    );
    const attachAddon = new AttachAddon(socket);

    term.loadAddon(attachAddon);

    term.onData((data) => {
      socket.send(data);
    });

    return () => {
      term.dispose();
    };
  }, []);

  return <div ref={terminalRef} />;
}
