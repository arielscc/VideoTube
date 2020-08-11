import { useState, useEffect } from 'react';

const useInitialState = (URL) => {
  const [video, setVideo] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setVideo(data));
  }, []);
  console.log(video);
  return video;
};

export default useInitialState;
