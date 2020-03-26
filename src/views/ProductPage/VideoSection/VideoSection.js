import React from "react";


const VideoSection = () => (
    <section id='video' class='section video-section' style={{backgroundColor:"#f9f9ff"}}>
        <div class='container' >
            <div class='row' >
                <div class='col-md-4' >
                    <div class='col-section-header' >
                        <h2>Easily embed a cool video for your app</h2>
                        <p>
                            No dolorem blandit theophrastus eos, nam eu persecuti repudiandae, duo hinc vide aliquip et. Ex atqui voluptatibus eum, cu case intellegebat eum, mea ex regione patrioque signiferumque. Pri ei solet graecis. 
                        </p>
                    </div>
                </div>
                <div class='col-md-8' >
                    <div class='video-container' >
                        <iframe src="https://www.youtube.com/embed/GIalL5fkhPM?rel=0&amp;showinfo=0" className="fullScreenVideo" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default VideoSection;