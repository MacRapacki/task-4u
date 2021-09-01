import React, { useState } from "react";

import SetupImg1 from "../../images-svg/liveStream/setup1.jpg";
import SetupImg2 from "../../images-svg/liveStream/setup2.jpg";
import SetupImg3 from "../../images-svg/liveStream/setup3.jpg";
import SetupImg4 from "../../images-svg/liveStream/setup4.jpg";
import SetupImg5 from "../../images-svg/liveStream/setup5.jpg";
import SetupImg6 from "../../images-svg/liveStream/setup6.jpg";
import SetupImg7 from "../../images-svg/liveStream/setup7.jpg";
import SetupImg8 from "../../images-svg/liveStream/setup8.jpg";
import SetupImg9 from "../../images-svg/liveStream/setup9.jpg";
import SetupImg10 from "../../images-svg/liveStream/setup10.jpg";
import SetupImg11 from "../../images-svg/liveStream/setup11.jpg";

const data = [
  {
    question:
      "How to set up a live stream? (Centova Cast Control Panel and Mixxx)",
    answer:
      "If you would like to start broadcasting live using Mixxx, make sure you have all the software required:",
  },
  {
    question:
      "How to set up a live stream? (Centova Cast Control Panel and BUTT)",
    answer:
      "If you do not have all required software yet, download and install B.U.T.T. (Broadcast Using This Tool).  This simple app does not allow creating any playlists, so it can be used to broadcast the sound from your microphone, line-in input, an external mixer of from a different software.",
  },
  {
    question:
      "How to set up a live stream? (Centova Cast Control Panel and Winamp)",
    answer:
      "If you do not have all the required software yet, you can easily download Winamp and SHOUTcast DSP Plugin from our website.",
  },
  {
    question: "Recommended free broadcasting software",
    answer: " ",
  },
];

const FreeSHOUTcastQ = () => {
  const [isExpand, setIsExpand] = useState(0);

  const handleExpand = (index) => {
    setIsExpand(index);
  };

  return (
    <div className="questionOverlay">
      <div className={`questionWrapper  `} onClick={() => handleExpand(0)}>
        <p className={`question_title ${isExpand === 0 && "active"} `}>
          {data[0].question}
        </p>
        <div className={`answer  ${isExpand === 0 && "active"}`}>
          {data[0].answer}

          <p className="steps">
            <span>Download</span> and <span>install </span> Mixxx:{" "}
            <a href="https://mixxx.org/download/">mixxx.org/download </a>
            Download Lame MP3 codec and install it having installed Mixxx first.
          </p>

          <p className="steps">
            1. First of all, if you would like to use AutoDJ and broadcast live
            using Mixxx, you need to create at least one DJ account in Centova
            Cast Control Panel by selecting the DJ option in the menu of Centova
            Cast Control Panel.{"\n"} Restart the server after adding each DJ
            account. Only one DJ can be connected to the server at the time. If
            you do not use the AutoDJ feature or have a server without AutoDJ,
            you can skip this first step.
          </p>

          <p className="steps">
            2. <span>Open</span> Mixxx and select <span>Options</span> and{" "}
            <span>Preferences:</span>
          </p>
          <img src={SetupImg1} alt="instruction" className="stepsImg" />

          <p className="steps">
            3. If you would like to use a <span>microphone</span> , select it in
            the <span>Input</span> devices section.
          </p>
          <img src={SetupImg2} alt="instruction" className="stepsImg" />

          <p className="steps">
            4. To configure the connection to your Radio Server, select{" "}
            <span>Live Broadcasting</span> in the menu.
          </p>
          <img src={SetupImg3} alt="instruction" className="stepsImg" />

          <p className="steps">
            5. Open the Centova Cast Control Panel of your Radio Station and
            copy the following details from the Quick link section of your
            server:{"\n"} - Hostname (1){"\n"} - Port number (2){"\n"} - as the
            password use the password and username of the DJ account that you
            have created separated by a colon (:), e.g. "testdj:mypassword" (3)
            or source password that you have received by email.{"\n"} - Mount
            and Login – leave empty as presented below:
          </p>

          <p className="steps">
            <span>For a server with AutoDJ and a DJ account:</span>
          </p>
          <img src={SetupImg4} alt="instruction" className="stepsImg" />

          <p className="steps">
            <span>A server with no AutoDJ and no DJ account:</span>
          </p>
          <img src={SetupImg5} alt="instruction" className="stepsImg" />

          <p className="steps">
            6. Fill in Stream details, it is up to you what details will you
            use. These are Stream Details that will be seen by your listeners.
            We also recommend selecting the Public server option and UTF-8
            encoding for metadata.
          </p>
          <img src={SetupImg6} alt="instruction" className="stepsImg" />

          <p className="steps">
            7. Select the bitrate (audio quality) of the stream. If you use
            AutoDJ the bitrate of your live stream should be the same as the
            bitrate of your server/AutoDJ. If you do not use AutoDJ make sure
            that broadcasting bitrate does not exceed the maximum bitrate of
            your server. You can check the maximum broadcasting bitrate of your
            server in the Quick links section of your Centova Cast Control
            Panel.{"\n"} Select the audio coded for your stream. We recommend
            broadcasting in MP3 file format because it is supported by most of
            the players on the Intenet.
          </p>
          <img src={SetupImg7} alt="instruction" className="stepsImg" />

          <p className="steps">
            Click <span>Enable Live Broadcasting</span> to connect to the server
            and start broadcasting live.
          </p>
          <img src={SetupImg8} alt="instruction" className="stepsImg" />

          <p className="steps">
            You should see a confirmation that Mixxx has been successfully
            connected to the server:
          </p>
          <img src={SetupImg9} alt="instruction" className="stepsImg" />

          <p className="steps">
            If you see the same message as below, sure that you have downloaded
            and installed the{" "}
            <a href="https://fastcast4u.com/account/downloads.php?action=displaycat&catid=1">
              Lame MP3 codec from our website
            </a>{" "}
          </p>
          <img src={SetupImg10} alt="instruction" className="stepsImg" />

          <p className="steps">
            {" "}
            <span>
              Important: Restart (close and open) Mixxx software after
              installing the codec.
            </span>
          </p>
          <img src={SetupImg10} alt="instruction" className="stepsImg" />

          <p className="steps">
            {" "}
            Untick the <span>Enable Live Broadcasting</span> option to
            disconnect from the server.
          </p>
          <img src={SetupImg10} alt="instruction" className="stepsImg" />

          <p className="steps">
            You are ready to start broadcasting live!{`\n`}
            <a href="https://manual.mixxx.org/2.3/en/chapters/djing_with_mixxx.html">
              Learn more about DJing using Mixxx
            </a>{" "}
          </p>
        </div>
      </div>

      <div className={`questionWrapper  `} onClick={() => handleExpand(2)}>
        <p className={`question_title ${isExpand === 2 && "active"} `}>
          {data[2].question}
        </p>
        <p className={`answer  ${isExpand === 2 && "active"}`}>
          {data[2].answer}
        </p>
      </div>
    </div>
  );
};

export default FreeSHOUTcastQ;
