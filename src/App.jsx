import { useState } from "react";
import "./App.css";

function App() {
  const onDotMenuClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    alert("ты че бля");
  };

  return (
    <div className="container">
      <section className="info">
        <div className="profile_picture">
          <img src="https://raw.githubusercontent.com/earthddx/linktreedupe/refs/heads/main/public/borat.avif" />
        </div>
        <h1>Artem Murzo</h1>
        <h3>Niiice!</h3>
      </section>
      <section className="buttons">
        <div className="button_wrapper">
          <div
            className="button"
            onClick={() =>
              window.open("https://artemmurzo.netlify.app/", "_self")
            }
          >
            <span className="label">My🚀website</span>
            <span className="dotted_menu" onClickCapture={onDotMenuClick} />
          </div>
        </div>
        <div className="button_wrapper">
          <div
            className="button"
            onClick={() => window.open("https://github.com/earthddx", "_self")}
          >
            <span className="label">
              <strong>
                Git<span className="hub">Hub</span>
              </strong>
            </span>
            <span className="dotted_menu" onClickCapture={onDotMenuClick} />
          </div>
        </div>
        <div className="button_wrapper">
          <div
            className="button"
            onClick={() =>
              window.open("https://www.linkedin.com/in/artemmurzo/", "_self")
            }
          >
            <span className="label">Corporate💕Tinder</span>
            <span className="dotted_menu" onClickCapture={onDotMenuClick} />
          </div>
        </div>
        <div className="button_wrapper">
          <div
            className="button"
            onClick={() =>
              window.open("https://giphy.com/gifs/GbPru204dTDfG", "_self")
            }
          >
            <span className="label">
              🍆💦<strong>FREE OF</strong>🍆💦 YES I HAVE ONE
            </span>
            <span className="dotted_menu" onClickCapture={onDotMenuClick} />
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="socials">
          <div
            className="twitter"
            onClick={() => window.open("https://x.com/ArtemMurzo", "_self")}
          >
            <svg
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              class="sc-gKsewC khwrDj"
            >
              <title data-testid="svgTitle" id="title_0.3594657192860844">
                X
              </title>
              <path d="m2.538 3 7.425 9.928L2 21h1.5l7.033-7.067L16 21h5.232l-7.662-9.995 6.955-7.514h-1.5L13 10 7.77 3H2.538Zm1.994 1h2.645l12.087 16h-2.525L4.532 4Z"></path>
            </svg>
          </div>
          <div
            className="facebook"
            onClick={() =>
              window.open("https://www.facebook.com/artem.murzo", "_self")
            }
          >
            <svg
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              class="sc-gKsewC khwrDj"
            >
              <title data-testid="svgTitle" id="title_0.21055543436578894">
                Facebook
              </title>
              <path d="M23,12A11,11,0,1,0,10.279,22.865h0a11.08,11.08,0,0,0,3.436,0h0A10.952,10.952,0,0,0,23,12ZM10.859,21.935v-6.9a.5.5,0,0,0-.5-.5H8.193V12.5h2.166a.5.5,0,0,0,.5-.5V9.686c0-2.278,1.264-3.585,3.459-3.585a15.392,15.392,0,0,1,1.858.137V7.89h-.824l-.019,0a2,2,0,0,0-2.181,1.735,1.8,1.8,0,0,0-.011.4V12a.5.5,0,0,0,.5.5H15.97l-.312,2.035H13.641a.5.5,0,0,0-.5.5v6.9A10.124,10.124,0,0,1,10.859,21.935Zm3.282-.166V15.535h1.946a.5.5,0,0,0,.5-.425l.465-3.035a.5.5,0,0,0-.494-.575H14.141V10.016a1.267,1.267,0,0,1,.308-.821,1.218,1.218,0,0,1,.9-.3h1.324a.5.5,0,0,0,.5-.5V5.806a.5.5,0,0,0-.42-.494A16.661,16.661,0,0,0,14.325,5.1c-2.754,0-4.466,1.757-4.466,4.585V11.5H7.693a.5.5,0,0,0-.5.5v3.035a.5.5,0,0,0,.5.5H9.859v6.234a10,10,0,1,1,4.282,0Z"></path>
            </svg>
          </div>
          <div
            className="spotify"
            onClick={() =>
              window.open(
                "https://open.spotify.com/user/1293854296?si=pEAKQLEES1idvRFMsywKKg",
                "_self"
              )
            }
          >
            <svg
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              class="sc-gKsewC khwrDj"
            >
              <title data-testid="svgTitle" id="title_0.434798730431311">
                Spotify
              </title>
              <path d="M18,10.561a.494.494,0,0,1-.245-.065,15.2,15.2,0,0,0-10.95-1.55.5.5,0,0,1-.232-.973A16.2,16.2,0,0,1,18.25,9.626a.5.5,0,0,1-.247.935Z"></path>
              <path d="M16.646,13.632a.5.5,0,0,1-.249-.066,12.459,12.459,0,0,0-9.121-1.292.5.5,0,1,1-.237-.971A13.458,13.458,0,0,1,16.9,12.7a.5.5,0,0,1-.25.933Z"></path>
              <path d="M15.312,16.583a.5.5,0,0,1-.251-.068,9.777,9.777,0,0,0-7.295-1.033.5.5,0,0,1-.245-.97,10.768,10.768,0,0,1,8.043,1.139.5.5,0,0,1-.252.932Z"></path>
              <path d="M12,23A11,11,0,1,1,23,12,11.013,11.013,0,0,1,12,23ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Z"></path>
            </svg>
          </div>
        </div>
        <h6>🥦 not created with linktree, i don't have money</h6>
        <div className="image_wrapper">
          <img src="https://raw.githubusercontent.com/earthddx/linktreedupe/refs/heads/main/public/ples.jpg" />
        </div>
      </section>
    </div>
  );
}

export default App;
