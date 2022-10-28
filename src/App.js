import {useEffect, useState} from "react";
export default function App() {
    const [contacts, setContacts] = useState([]);
 
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => { 
          if(res.ok) return res.json(); 
          else throw new Error("Status Code :" + res.status) 
        })
        .then(data => setContacts(data))
    }, []);

    return (
      <div className="App">
        {contacts.map((contact) => (
              <h1>{contact.phone}</h1>  )

        )};
      </div>
    );
}

