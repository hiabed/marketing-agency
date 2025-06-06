import styles from '../styles/Video.module.css';

const Video = () => {
    return (
        <div className={styles.videoContainer}>
            <video className={styles.video} src="/video.mp4" autoPlay preload="none" loop="loop" muted="muted" >
            </video>
        </div>
    );
};

export default Video;