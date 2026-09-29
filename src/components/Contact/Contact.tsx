import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
       <p>Have a project idea or want to connect? Let's build something together.</p>

        <p>Let's connect and turn the idea into a reliable product.</p>
      </header>
      <div className="contacts">
        {/* <div>
        <a href="mailto:mohdashrafidrisi@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:mohdashrafidrisi@gmail.com">mohdashrafidrisi@gmail.com</a>
        </div> */}

     <div>
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=mohdashrafidrisi@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={emailIcon} alt="Email" />
  </a>

  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=mohdashrafidrisi@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    mohdashrafidrisi@gmail.com
  </a>
</div>


        <div>
        <a href="tel:+918318186384"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+918318186384">(+91) 8318186384</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}
