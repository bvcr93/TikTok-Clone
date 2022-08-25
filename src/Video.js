
import './Video.css'
import { useRef, useState } from 'react'

const Video = () => {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)
  const onVideoPress = ()=>{
    if(playing){
      videoRef.current.pause();
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }


  }
  return (
    <div className='video'>

       <video 
       className='video-player' 
       loop
      onClick={onVideoPress}
      ref={videoRef}
       src="https://v16-webapp.tiktok.com/85b206beda48e952ad0398e32c3165d6/6307e19c/video/tos/useast2a/tos-useast2a-pve-0068/2dc113d7ca0d4d2393c96e7f24c99acd/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3430&bt=1715&cs=0&ds=3&ft=ar5S8qXHmo0PDkbc4MaQ9RtJ~ObpkV1PCQ&mime_type=video_mp4&qs=0&rc=OGg3ZTk8ZzhlaTdmNjo2NkBpMzkzazw6Zm13ZTMzNzczM0BjLl8tMi00XzUxLi9jYzUzYSNvbF8ycjQwa3FgLS1kMTZzcw%3D%3D&l=202208251453470102170220771C2E51DE&btag=80000">

       </video>
        {/* <VideoFooter></VideoFooter> */}
        {/* <VideoSidebar></VideoSidebar> */}
    </div>
  )
}

export default Video