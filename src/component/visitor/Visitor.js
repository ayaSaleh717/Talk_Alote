import {useEffect,useState} from 'react'

function Visitor() {

    const [visits, setVisits] = useState(0);

    useEffect(() => {
      const storedVisits = Number(localStorage.getItem("visitCounter"));
      setVisits(storedVisits + 1);
    }, []);
  
    useEffect(() => {
      localStorage.setItem("visitCounter", visits);
    }, [visits]);
  
  
  return  <div className="visit section">Visitors {visits}</div>
  
}

export default Visitor