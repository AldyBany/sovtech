const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-form">
                <div className="form-text">
                    <h2>Get in touch</h2>
                    <p>Fill out the form below and a dedicated client manager will contact you as soon as possible. For immediate assistance please call our sales number or support line.</p>

                    <form action="">
                        <label htmlFor="">butt</label>
                        <input type="text"/>

                        <label htmlFor="">Work Email</label>
                        <input type="text"/>

                        <label htmlFor="">Mobile phone number</label>
                        <input type="text"/>

                        <label htmlFor="">How can we help?</label>
                        <textarea></textarea>

                        <button>Submit</button>
                    </form>
                </div>
                <div className="form-img"></div>
            </div>
        </div>
    );
}
 
export default Contact;