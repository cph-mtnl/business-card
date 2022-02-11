const ContactButton = () => {

    const contact = () => {
        window.open('mailto:mtnl@cphbusiness.dk');
    }
    
    return (
        <div className="contact--container">
            <button className="contact--button" onClick={contact}>
                <i className="fas fa-envelope contact--icon"></i>
                Email
            </button>
        </div>
    );
}

export default ContactButton;