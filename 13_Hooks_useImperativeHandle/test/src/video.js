import { forwardRef, useImperativeHandle, useRef } from 'react'
import video1 from './video/Stephen Curry Mix - -Believer-.mp4'

function Video(props, ref) {
    const videoRef = useRef()
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    return (
        <video ref={videoRef} src={video1} width={280}  /> // controls la video mac dinh
    )
}

export default forwardRef(Video)