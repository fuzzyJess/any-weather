import { useState } from "react"

function submit() { 

}

export const Picker = () => {
    const [lat, setLat] = useState("")
    const [long, setLong] = useState("")
    return (
        <div className="picker">
        <label>Latitude:
            <input
            type="text" 
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            />
        </label>
        <label>Longitude:
            <input 
            type="text"
            value={long}
            onChange={(e) => setLong(e.target.value)}/>
        </label>
        <button className="submit-button" onClick={submit()}>
            Submit
        </button>
        </div>
    )
}