import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
    const [text,setText] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate(`/meal/${text}`)
        setText('')
       
        
    }
  return (
    <div id='hero'>
        <form id="myform" onSubmit={handleSubmit}>
            <input id="searchInput" type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Search food by name...'/>
            <button><i className="ri-search-line"></i></button>
        </form>
    </div>
  )
}

export default Hero