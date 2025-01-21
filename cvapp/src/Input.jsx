//input general, educational, experience 

function General({ handleGeneral }) {
    return (
        <div>
            <label htmlFor="first-name">First Name:</label>
            <input id="first-name" type="text" />

            <label htmlFor="last-name">Last Name:</label>
            <input id="last-name" type="text" />

            <label htmlFor="email">Email:</label>
            <input id="email" type="text" />

            <label htmlFor="tel">Tel.:</label>
            <input id="tel" type="text" />

            <button onClick={handleGeneral}></button>
        </div>
    )
}

function Educational({ handleEducational }) {

}

function Experience ({ handleExperience }) {

}

function Input({ handleGeneral, handleEducational, handleExperience }) {

}