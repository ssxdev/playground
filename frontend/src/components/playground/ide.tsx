'use client';

import Editor from '@monaco-editor/react';

export default function IDE() {
  return (
    <div className='flex h-full'>
      <div className='w-full'>
        <Editor
          height='80vh'
          defaultLanguage='javascript'
          defaultValue='Deno.serve(req => new Response("Hello!"));'
        />
      </div>
    </div>
  );
}
