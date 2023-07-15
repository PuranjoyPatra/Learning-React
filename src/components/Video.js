import "./Video.css";
function Video({
  id,
  title,
  channel,
  views,
  times,
  verified,
  children,
  deleteVideo,
  editVideo,
}) {
  return (
    <>
      <div className='container'>
        <button
          className='close'
          onClick={(e) => {
            e.stopPropagation();
            deleteVideo(id);
          }}
        >
          X
        </button>
        <button
          className='edit'
          onClick={(e) => {
            e.stopPropagation();
            editVideo(id);
          }}
        >
          Edit
        </button>
        <div className='pic'>
          <img
            src='https://images.pexels.com/photos/942208/pexels-photo-942208.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt='thumbnail'
          />
        </div>

        <div className='title'>{title} - the complete guide</div>

        <div className='channel'>
          {channel} {verified && "⌚"}
        </div>
        <div className='views'>
          {views} views <span>|</span> {times}
        </div>
        {children}
      </div>
    </>
  );
}

export default Video;
