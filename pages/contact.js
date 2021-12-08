import Styles from "../styles/Contact.module.css";
function contact() {
  return (
    <div className={Styles.container}>
      <div className={Styles.contact}>
        <div>
          <h3>Get In Touch!</h3>
        </div>
        <div className={Styles["contact-boxes"]}>
          <div className={Styles.wordbox}>
            <h3>Send Me A Message</h3>
          </div>
          <div className={Styles.formbox}>
            <form action="https://submit-form.com/QObGMX5B">
              <div className={Styles.contactform}>
                <input
                  type="hidden"
                  name="_redirect"
                  value="https://localhost:3000/thanks"
                />

                <label>Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Jared McCarver"
                  required=""
                />
                <label>Telephone Number</label>

                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Phone Number"
                  required=""
                />
                <label>Email</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                  required=""
                />
                <label>Your Message</label>

                <textarea
                  id="message"
                  className={Styles.messagebox}
                  name="message"
                  placeholder="Please enter your message..."
                  required=""
                ></textarea>
                <div className={Styles.submitline}>
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className={Styles.button}
                  >
                    Send Request &#8594;
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
