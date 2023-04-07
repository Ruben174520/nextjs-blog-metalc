import styles from "./Video.module.css";
const Video = () => {
  return (
    <video className={styles.video} controls={false} autoPlay loop muted>
      <source
        src="https://resource.flexclip.com/templates/video/720p/recycle-infographic.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
