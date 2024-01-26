
export const InfoDisplay = ({weather, day}) => {
    return (
    <div className="widget">
        <p>Happy {day}</p>
        { weather == "Susurrous" || weather == "Beclouded" ? 
        <p>Today the weather is looking</p> :
        <p>Today you'll experience</p>}
        <h1>{weather}</h1>
    </div>
    )
}