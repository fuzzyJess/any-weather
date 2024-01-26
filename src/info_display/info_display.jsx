
export const InfoDisplay = ({weather, day}) => {
    return (
    <div className="widget">
        <p>Happy {day}</p>
        <p>Today the weather is looking {weather}</p>
    </div>
    )
}