
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";

function Contact() {

  return (
    <section id="contact">
      <div className="container" >
        <Pagetitle title="Get in Touch" />

        <div className="row"  style={{display:"flex", justifyContent:"center"}}>
          <div className="col-md-4">
            <div className="contact-info">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h3>Let's talk about everything!</h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p>
                  Send me an{" "}
                  <a href="mailto:iordan.alexandru97@yahoo.com">email</a>. 👋
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
