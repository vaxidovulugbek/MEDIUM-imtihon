import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Bell from './component/Bell/Bell';
// import Following from './component/Following/Following';
import HeaderAdd from './component/HeaderAdd/HeaderAdd';
import Input from './component/Input/Input';
import Menu from './component/Menu/Menu';
import MoreAbout from './component/MoreAbout/MoreAbout';
import SaveAll from './component/Save/SaveAll/SaveAll';
import Savee from './component/Save/Savee';
import SaveTargetInfo from './component/Save/SaveTargetInfo/SaveTargetInfo';
import Signup from './component/Signup/Signup';
import Stories from './component/Stories/Stories';

function App() {
  let [savemodal, setsavemodal] = useState(true)

  let [modalobj, setmodalobj] = useState([])
  let [modalobjtwo, setmodalobjtwo] = useState([])
  
  let [published, setpublished] = useState([])

  let [comments, setComments] = useState(false)

  let [newinput, setnewinput ] = useState([])
  let [newtextcontent, setnewtextcontent ] = useState("")

  let [Titleinput, setTitleinput ] = useState([])

  let [textarea, settextarea ] = useState([])
  let [newtextarea, setnewtextarea] = useState("")

  let [storyText, setStoryText] = useState([])  
  let [emptyStory, setEmptyStory] = useState('')

  let [inputnameetwo, setinputnameetwo] = useState("")
  let [savetarget, setsavetarget] = useState([])

  let [inputwatch, setinputwatch] = useState("")
  let [savetargetwatch, setwatch] = useState([])

  let [namehendler, namehendlering] = useState("")
  let [newcomment, setnewcomment] = useState(null)

  return (
    <div className="App">    
      <Routes>
          <Route path='/' element={ <Signup namehendler={namehendler} namehendlering={namehendlering} setinputnameetwo={setinputnameetwo} />}></Route>
          <Route path='menu' element={ <Menu comments={comments}  inputnameetwo={inputnameetwo} namehendler={namehendler} />}></Route>
          <Route path='save' element={ <Savee savetarget={savetarget} savemodal={savemodal}
           setsavemodal={setsavemodal}
           modalobj={modalobj}
           setmodalobj={setmodalobj}
           modalobjtwo={modalobjtwo}
           setmodalobjtwo={setmodalobjtwo}
           />}></Route>

          <Route path='home' element={ <HeaderAdd 
          modalobj={modalobj}
          setmodalobj={setmodalobj}
          modalobjtwo={modalobjtwo}
          setmodalobjtwo={setmodalobjtwo}
          savemodal={savemodal}
          setsavemodal={setsavemodal}
          published={published}
          setsavetarget={setsavetarget}
          savetargetwatch={savetargetwatch}
          
          />}></Route>
          <Route path='stories' element={ <Stories storyText={storyText} published={published} />}></Route>
          <Route path='Input' element={ <Input storyText={storyText} 
            setStoryText={setStoryText}
            emptyStory={emptyStory}
            setEmptyStory={setEmptyStory}
            comments={comments}
            
            setinputwatch={setinputwatch}
            inputwatch={inputwatch}
            setwatch={setwatch}
            savetargetwatch={savetargetwatch}

            settextarea={settextarea} textarea={textarea} newtextarea={newtextarea} setnewtextarea={setnewtextarea} Titleinput={Titleinput} setTitleinput={setTitleinput}  published={published} setpublished={setpublished} newinput={newinput} setnewinput={setnewinput} newtextcontent={newtextcontent} setnewtextcontent={setnewtextcontent}  />}></Route>
          <Route path='moreabout/:id' element={ <MoreAbout newcomment={newcomment} setnewcomment={setnewcomment} savetargetwatch={savetargetwatch} published={published} setComments={setComments} comments={comments} />}></Route>
          <Route path='bell' element={ <Bell />}></Route>
          <Route path='savetargetinfo/:id' element={ <SaveTargetInfo savetarget={savetarget} modalobjtwo={modalobjtwo} setComments={setComments} comments={comments} />}></Route>
          <Route path='saveall' element={ <SaveAll modalobjtwo={modalobjtwo}/>}></Route>

      </Routes>
    </div>
  );
}

export default App;

