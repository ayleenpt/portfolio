import Swal from 'sweetalert2';
import '../../styles/about/Contact.css';

function Contact () {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a6ab9b25-7737-41bb-a3f0-5035a9fd019e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };

  return(
    <section className="contact">
      <form onSubmit={ onSubmit }>
        <h2>Get In Touch</h2>
        <div className="input-box">
          <div className="label-text">Full Name</div>
          <input type="text" className="field" placeholder="your name" name='name' required />
        </div>

        <div className="input-box">
          <div className="label-text">Email Address</div>
          <input type="text" className="field" placeholder="example@email.com" name='email' required />
        </div>

        <div className="input-box">
          <div className="label-text">Message</div>
          <textarea name="message" className="field message" placeholder="your message" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;