import IntroImage from "./IntroImage";

function Invitation() {
    return (
      <div className="intro-page invitation">
        <section className="invitation-text">
          <p className="regular">Dennis y Andy te invitan a su</p>
          <p className="highlight">Open House</p>
          <p className="regular">16 de septiembre a las 18:00</p>
        </section>
        <IntroImage description="kitchen view" src="src/assets/kitchen-view.png" />
      </div>
    );
}

export default Invitation;
