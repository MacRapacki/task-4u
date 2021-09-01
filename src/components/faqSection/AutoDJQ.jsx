import React, { useState } from "react";

import AutoDjStep1 from "../../images-svg/autodjSteps/autodj1.jpg";
import AutoDjStep2 from "../../images-svg/autodjSteps/autodj2.jpg";
import AutoDjStep3 from "../../images-svg/autodjSteps/autodj3.jpg";
import AutoDjStep4 from "../../images-svg/autodjSteps/autodj4.jpg";
import Upload1 from "../../images-svg/autodjSteps/upload1.jpg";
import Upload2 from "../../images-svg/autodjSteps/upload2.jpg";
import Upload3 from "../../images-svg/autodjSteps/upload3.jpg";
import Upload4 from "../../images-svg/autodjSteps/upload4.jpg";
import Upload5 from "../../images-svg/autodjSteps/upload5.jpg";
import Upload6 from "../../images-svg/autodjSteps/upload6.jpg";

const data = [
  {
    question: "What is AutoDJ?",
    answer:
      "AutoDJ lets you upload music and pre-recorded shows to your free radio server (like a free music cloud) and create playlists online so you can listen and share your stream on the Internet. Everything can be accessed via your web browser, not need to install anything on your computer.",
  },
  {
    question: "Playlist Setup",
    answer:
      "To learn how to add tracks to a playlists in AutoDJ, watch the video",
  },
  {
    question: "How many tracks can I upload?",
    answer:
      "You have 1GB of disc space for your tracks. If it’s full, remove old tracks to upload new.",
  },
  {
    question: "How to activate AutoDJ (Centova Cast Control Panel)",
    answer:
      "When you get a new server, AutoDJ is disabled by default. To enable AutoDJ, perform the instructions described below. ",
  },
  {
    question:
      "How to upload your audio files to AutoDJ? (Centova Cast Control Panel)",
    answer:
      "To learn how to add tracks to playlists in AutoDJ see the tutorial below:",
  },
];

const FreeSHOUTcastQ = () => {
  const [isExpand, setIsExpand] = useState(0);

  const handleExpand = (index) => {
    setIsExpand(index);
  };

  return (
    <>
      <div className="questionOverlay">
        <div className={`questionWrapper  `} onClick={() => handleExpand(0)}>
          <p className={`question_title ${isExpand === 0 && "active"} `}>
            {data[0].question}
          </p>
          <p className={`answer  ${isExpand === 0 && "active"}`}>
            {data[0].answer}
          </p>
        </div>

        <div className={`questionWrapper  `} onClick={() => handleExpand(1)}>
          <p className={`question_title ${isExpand === 1 && "active"} `}>
            {data[1].question}
          </p>
          <p className={`answer  ${isExpand === 1 && "active"}`}>
            {data[1].answer}
            <iframe
              width="100%"
              height="315"
              max-width="1000"
              src="https://www.youtube.com/embed/s307CQqzo4g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </p>
        </div>

        <div className={`questionWrapper  `} onClick={() => handleExpand(2)}>
          <p className={`question_title ${isExpand === 2 && "active"} `}>
            {data[2].question}
          </p>
          <p className={`answer  ${isExpand === 2 && "active"}`}>
            {data[2].answer}
          </p>
        </div>

        <div className={`questionWrapper  `} onClick={() => handleExpand(3)}>
          <p className={`question_title ${isExpand === 3 && "active"} `}>
            {data[3].question}
          </p>
          <div className={`answer  ${isExpand === 3 && "active"}`}>
            {data[3].answer}
            <p className="steps">1. Stop your server</p>
            <img src={AutoDjStep1} alt="instruction" className="stepsImg" />

            <p className="steps">
              {`2. Go to Settings -> AutoDJ -> Permitted and enabled.`}
            </p>
            <img src={AutoDjStep2} alt="instruction" className="stepsImg" />

            <p className="steps">
              3. Select {`-> AutoDJ ->`} Permitted and enabled and click Update
            </p>
            <img src={AutoDjStep3} alt="instruction" className="stepsImg" />

            <p className="steps">4. AutoDJ icon should appear in the menu</p>
            <img src={AutoDjStep4} alt="instruction" className="stepsImg" />

            <p className="steps">
              <span>
                Notice: The server will not start unless there will be some
                files uploaded onto the server and added to a playlist.
              </span>
              Once you have enabled AutoDJ you can upload some audio files onto
              the server by selecting AutoDJ {`-> Files ->`} Upload.
            </p>
          </div>
        </div>

        <div className={`questionWrapper  `} onClick={() => handleExpand(4)}>
          <p className={`question_title ${isExpand === 4 && "active"} `}>
            {data[4].question}
          </p>
          <p className={`answer  ${isExpand === 4 && "active"}`}>
            {data[4].answer}{" "}
            <p className="steps">
              1. Select MEDIA hyperlink in the panel on the left side of Centova
              Control Panel, under the AutoDJ section
            </p>
            <img src={Upload1} alt="instruction" className="stepsImg" />
            <p className="steps">
              2. Drag and drop an artist, an album or a song of your choice into
              the desired playlist. Note that you can hold CTRL button in order
              to select multiple entries
            </p>
            <img src={Upload2} alt="instruction" className="stepsImg" />
            <img src={Upload3} alt="instruction" className="stepsImg" />
            <img src={Upload4} alt="instruction" className="stepsImg" />
            <img src={Upload5} alt="instruction" className="stepsImg" />
            <p className="steps">
              3.In order to go back to the main Centova Control Panel click
              RETURN at the bottom of the page.
            </p>
            <img src={Upload6} alt="instruction" className="stepsImg" />
          </p>
        </div>
      </div>
    </>
  );
};

export default FreeSHOUTcastQ;
