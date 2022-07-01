import {useParams} from "react-router-dom"
import {useEffect,useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const Country=()=>{
    const navigate = useNavigate()
    const [cntry,setCntry] = useState({})
    const {country} =useParams()
    useEffect(()=>{
     axios.get(`http://localhost:8080/countries?country=${country}`).then((response)=>{
      setCntry(response.data)
      console.log(response.data)
     })
    },[country])
    const goToHome=()=>{
        navigate("/")
    }
    return(
        <div>
            <button onClick={()=>goToHome()}>Go to Home</button>
         <h1>Country:  {cntry[0]?.country}</h1> 
         <h1>Capital: {cntry[0]?.city}</h1>
        </div>
    )
}