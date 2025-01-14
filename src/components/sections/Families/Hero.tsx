import React, { Component } from "react";
import "./Hero.css";
import Typical from "react-typical";
import Image from "react-bootstrap/Image";
import { numberWithCommas } from "src/utils/utils";
import { PLACEMENT, APP_STORES, MEDIA } from "src/utils/constants";
import Mockup from "src/assets/Hero/Mockup.png";
import AppStoreButton from "src/components/buttons/AppStoreButton";

type LetterCounter = {
  letters: string;
};

export default class Hero extends Component<{}, LetterCounter> {
  tick() {
    const MAIL_SENT = 106126;
    const weekly_letters = 9000;
    const increment_seconds = weekly_letters / 604800;
    const startDate = new Date(2020, 9, 26, 0, 0, 0, 0);
    const today = new Date();

    const dif = today.getTime() - startDate.getTime();
    var dif_seconds = dif / 1000;

    this.setState({
      letters: numberWithCommas(
        Math.round(MAIL_SENT + dif_seconds * increment_seconds)
      ),
    });
  }
  componentWillMount() {
    this.tick();
  }

  // After the component did mount, we set the state each 6 minutes (6 min = 1 letter).
  componentDidMount() {
    setInterval(() => this.tick(), 360000);
  }

  genMediaArticle(media: MediaArticle): JSX.Element {
    return (
      <a href={media.link}>
        <Image
          src={media.logo}
          className="media-article mt-3 mt-md-0 mr-3"
          alt={`${media.name} Logo`}
        />
      </a>
    );
  }
  render() {
    return (
      <div className="px-3 px-md-5 mb-md-5 mb-0 py-4  d-flex flex-lg-row flex-column  w-100 justify-content-center align-items-center align-items-md-start">
        <div className="mw-100 d-flex flex-column align-items-lg-start">
          <div className="d-flex flex-column">
            <div className="d-flex flex-column flex-md-row ">
              <span className="p1 font-weight-bold">Send free&nbsp;</span>
              <Typical
                steps={[
                  "letters",
                  3000,
                  "photos",
                  3000,
                  "postcards",
                  3500,
                  "games",
                  3000,
                  "art",
                  3000,
                ]}
                loop={Infinity}
                wrapper="h1"
              />
            </div>
            <span className="p1 font-weight-bold">
              to your incarcerated <br /> loved ones
            </span>
          </div>
          <div className="p5 hero-subtitle mt-1">
            Staying connected to your loved ones and paying for basic needs
            shouldn't be a tradeoff. That's why we're a <b>nonprofit</b>.
          </div>
          <div className="d-flex flex-row mt-3">
            <div>
              <AppStoreButton
                placement={PLACEMENT.HERO}
                type={APP_STORES.APPLE}
              />
            </div>
            <div className="ml-3">
              <AppStoreButton
                placement={PLACEMENT.HERO}
                type={APP_STORES.GOOGLE}
              />
            </div>
          </div>

          <span className="blue letter-counter mt-4">
            Ameelio's community has sent over{" "}
            <span className="font-weight-bold">{this.state.letters}</span>{" "}
            letters, cards & photos.
          </span>
          <div className="d-flex flex-row mt-3 position-relative media-container flex-wrap">
            {MEDIA.map((media) => this.genMediaArticle(media))}
          </div>
        </div>
        <div
          className="main-illustration mt-5  mt-md-0 mb-md-5"
          data-aos="zoom-out-down"
        >
          <Image
            src={Mockup}
            className="main-illustration"
            alt={"Image of letter, postcard and mobile app"}
          />
        </div>
      </div>
    );
  }
}
