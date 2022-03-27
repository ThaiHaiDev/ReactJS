import { useRef } from 'react'
import Video from './video'


// Function component mặc định không bao h có ref nên phải xài forwardRef để truyền rè từ app qua component con

function App() {
  const videoRef = useRef()

  const handlePlay = () => {
    videoRef.current.play()
  }

  const handleStop = () => {
    videoRef.current.pause()
  }

  return (
    <div className="App">
        <Video ref={videoRef} />
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleStop}>Pause</button>
    </div>
  );
}

export default App;
