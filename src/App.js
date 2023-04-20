import './App.css';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { useState,useEffect } from 'react';

function App() {
 const [html, setHtml] = useState('');
 const [css, setCss] = useState('');
 const [javascript, setJavascript] = useState('');
 const [delay, setDelay] = useState('');

 function onChangeHtml(newValue) {
   setHtml(newValue)
 }
 function onChangeCss(newValue) {
   setCss(newValue)
 }
 function onChangeJavascript(newValue) {
   setJavascript(newValue)
 }
const srcCode = `
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${javascript}</script>
    </html>
`
useEffect(()=>{
  setTimeout(()=>{
 setDelay(srcCode)
  }, 1000)

},[html,css,javascript])

  return (
   <>
   <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand p-2">
      <img src="https://www.pasha.org.pk/pashapk/2019/07/code-district.png" alt="image" width="30" height="30" className="d-inline-block align-text-top"/>
      Code Area
    </a>
  </div>
</nav>
   <div className='container-fluid'> 
    <div className='row'>
      <div className='col-lg-4 col-md-4 col-sm-12 bg-dark'>
      <div class="badge text-wrap" style={{width: '6rem',backgroundColor: 'darkred'}}>
  HTML
</div>
      <AceEditor
   height='50vh'
   width='100%'
   fontSize='18px'
   fontFamily= 'Inconsolata'
   enableBasicAutocompletion= {true}
   enableLiveAutocompletion={true}
   defaultValue= {`<!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />  
     </head>
     <body>
  
     
     </body>
     </html>`}
     mode="html"
     setOptions={{ useWorker: false }}
     onChange={onChangeHtml}
    theme="monokai"
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
  />
  </div>

  <div className='col-lg-4 col-md-4 col-sm-12 bg-dark'>
  <div class="badge text-wrap" style={{width: '6rem',backgroundColor: 'blue'}}>
  CSS
</div>
      <AceEditor
   height='50vh'
   width='100%'
   fontSize='18px'
   fontFamily= 'Inconsolata'
   enableBasicAutocompletion= {true}
   enableLiveAutocompletion={true}
   defaultValue={`/*Css here*/`}
    mode="css"
    setOptions={{ useWorker: false }}
    theme="monokai"
    onChange={onChangeCss}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
  />
  </div>

  <div className='col-lg-4 col-md-4 col-sm-12 bg-dark'>
  <div class="badge text-wrap" style={{width: '6rem',backgroundColor: 'darkorange'}}>
  JavaScript
</div>
      <AceEditor
   height='50vh'
   width='100%'
   fontSize='18px'
   fontFamily= 'Inconsolata'
   enableBasicAutocompletion= {true}
   enableLiveAutocompletion={true}
   defaultValue={`// javaScript here`}
    mode="javascript"
    setOptions={{ useWorker: false }}
    theme="monokai"
    onChange={onChangeJavascript}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
  />
  </div>
  </div>
  <div className='row' style={{backgroundColor:'rgb(220, 220, 220)',height:'40vh'}}>
    
  <iframe  
     srcDoc={delay}
     title= "Output"
     sandbox='allow-scripts'/>
     </div>
     </div>
   </>
  );
}
export default App;
