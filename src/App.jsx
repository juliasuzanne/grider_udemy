import ProfileCard from "./ProfileCard";
import "bulma/css/bulma.css";
// have to put extension for non-js/ts
// is image is less than 9.7kb gets inlined(single string), otherwise served up as a separate file
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

export default function App() {
  return (
    <div>
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <p className="title"> Personal Digital Assistants</p>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                image={AlexaImage}
                title="Alexa"
                handle="@alexa"
                description="Alexa was created by Amazon and helps you buy things."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                image={CortanaImage}
                title="Cortana"
                handle="@cortana"
                description="Cortana was made by Microsoft. What knows what it does?"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                image={SiriImage}
                title="Siri"
                handle="@siri"
                description="Siri was made by Apple and is being phased out."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
