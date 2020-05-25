const data = [
  {
    name: "Shinto Thomas",
    email: "sthomas@suyati.com",
  },
  {
    name: "Praphul",
    email: "pnangeelil@suyati.com",
  },
  {
    name: "Shamnad a V A",
    email: "sabdul@suyati.com",
  }
];


const ContactList = ({ contacts }) => {
  return  <React.Fragment>
    <table className="contacts-table">
     
      <tbody>
          <tr>
              <th>Name</th>
              <th>Email</th>
          </tr>
          {contacts.map((contacts, i) => {
              return <tr key={i}>
                  <td>{contacts.name}</td>
                  <td>{contacts.email}</td>
              </tr>
          })}
      </tbody>
  </table>
  </React.Fragment>
};

const contactManagement1 = <section id="contact-list">
<ContactList contacts={data}></ContactList>
</section>;

const contactManagement = React.createElement(
  "section",
  { id: "contact-list" },
  React.createElement("h1", null, "Contacts"),
  React.createElement(ContactList, { contacts: data }, null)
);

ReactDOM.render(contactManagement1, document.getElementById("react-container"));