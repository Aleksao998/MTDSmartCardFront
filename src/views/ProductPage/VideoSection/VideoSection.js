import React from "react";

const VideoSection = () => (
  <section
    id="video"
    className="section video-section"
    style={{ backgroundColor: "#f9f9ff" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="col-section-header">
            <h2>Easily embed a cool video for your app</h2>
            <p>
              No dolorem blandit theophrastus eos, nam eu persecuti repudiandae,
              duo hinc vide aliquip et. Ex atqui voluptatibus eum, cu case
              intellegebat eum, mea ex regione patrioque signiferumque. Pri ei
              solet graecis.
            </p>
          </div>
        </div>
        <div className="col-md-8">
          <div className="video-container">
            <iframe
              title="How to use!"
              src="https://www.youtube.com/embed/GIalL5fkhPM?rel=0&amp;showinfo=0"
              className="fullScreenVideo"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection;
