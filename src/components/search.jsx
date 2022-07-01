import {useEffect,useState} from "react"
import axios from "axios"
import "./search.css"
import {Link} from "react-router-dom"
export const Search=()=>{
    const [data,setData] = useState([])
    const [search,setSearch] = useState("")
    const [res,setRes] = useState([])
    useEffect(() =>{
      axios.get("http://localhost:8080/countries").then((response)=>{
        setData(response.data)
      })
    },[])
    useEffect(() => {
     setRes([])
    data.filter((val)=>{
        if(val.country.toLowerCase().includes(search.toLowerCase())){
            setRes(res=>[...res,val])
        }
    })
    },[search])
    return(
        <div >
            <h1>Home</h1>
            <Link to={"/"}>
                <input value={search} className="s-input" onChange={(e) =>setSearch(e.target.value)} type="text" placeholder="Search Countries" />
                </Link>
             
             {search!==""?<div className={search!==""?"search":null}>
                {res.map((cont)=>{
                return(
                    <Link to={`/countries/${cont.country}`} key={cont.country}><h3>{cont.country}</h3></Link>
                )
                })}
             </div>:null}
        </div>
    )
}