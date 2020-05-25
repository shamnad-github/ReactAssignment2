const data = [
    {
        name: "Shamnad",
        email: "sabdul@suyati.com"
    },
    {
        name: "Surya",
        email: "sratheesan@suyati.com"
    },
    {
        name: "Sreeraj",
        email: "snamboot@suyati.com"
    },
];

const style = {
    "borderSpacing": "15px"
};

const ContactList = (props) => {

    const contact = props.contact;

    return <table style={style}>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            {contact.map((contact, i) => {
                return <tr key={i}>
                    <td> {contact.name}</td>
                    <td>{contact.email}</td>
                </tr>
            })}
        </tbody>
    </table>
};


const contactM = <section id="contact-list">
    <h1>Contacts</h1>
    <ContactList contact={data}></ContactList>
</section>

const props = {
    contact: data
};

ReactDOM.render(contactM, document.getElementById("react"));
