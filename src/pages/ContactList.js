import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="text-center">Your Contact List</h2>
        <div className="row mt-5">
          {contacts.map((contact, index) => (
            <div className="col-md-4" key={index}>
              <div className="card p-3">
                <h3>{contact.name}</h3>
                <p>{contact.phone}</p>
                <Link to={{
                  pathname: `/contact-list/${index}`,
                  state: { contact }, // Pass the contact as state
                }} className="btn btn-secondary">View Detail</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
