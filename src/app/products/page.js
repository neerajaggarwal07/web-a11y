"use client";
import React from "react";
import Header from "../components/Header/header";

import Footer from "../components/Footer/footer";
import LineChart from "../components/LineChart/linechart";

import TextGif from "../components/TextGif/textigif";
import PageHeader from "../components/PageHeader/pageheader";
import TextImage from "../components/TextImage/textimage";

export default function Products() {
  return (
    <>
      <Header />
      <main className="container-fluid p-0 mb-5 mt-5">
        <PageHeader />
        <TextImage />
        <TextGif />
        <LineChart />
        <div className="container">
          <div className="row">
            <h3 className="mb-3 mt-5">
              {" "}
              Steps for Money Management and Financial Planning
            </h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/CU4l_rs50Kk"
              title="Steps for Money Management and Financial Planning"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h3 className="mb-3 mt-5">
              {" "}
              Steps for Money Management and Financial Planning
            </h3>
            <audio
              class="react-audio-player "
              controls
              id="audio-124011600441"
              preload="metadata"
              src="audio/podcast.mp3"
              title="Top 5 popular finance podcasts in India to help you manage your money"
            >
              <p>
                {" "}
                Your browser does not support HTML audio. Here is a{" "}
                <a href="audio/podcast.mp3">link to the audio</a> instead.
              </p>
            </audio>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
