import MonacoEditor from '@monaco-editor/react'

const CodeEditor = () => {
  return <MonacoEditor 
  theme="dark" 
  height="500px" 
  language="javascript"
  options={{
    wordWrap:'on',
    minimap: {enabled: false},
    showUnused: false,
    folding: false,
    lineNumbersMinChars: 3,
    fontSize: 16,
    scrollBeyondLastLine: false,
    automaticLayout: true
}}
  />
}

export default CodeEditor