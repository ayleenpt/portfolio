import '../../styles/about/Contact.css';

function Contact () {
  return(
    <section className="contact">
      <form>
        <h2>Get In Touch</h2>
        <div className="input-box">
          <div className="label-text">Full Name</div>
          <input type="text" className="field" placeholder="your name" required />
        </div>

        <div className="input-box">
          <div className="label-text">Email Address</div>
          <input type="text" className="field" placeholder="example@email.com" required />
        </div>

        <div className="input-box">
          <div className="label-text">Message</div>
          <textarea type="text" className="field message" placeholder="your message" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;