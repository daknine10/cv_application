//input general, educational, experience
import React, { useState } from 'react';

function General({ handleGeneral }) {
    return (
        <div>
            <form action="" onSubmit={handleGeneral}>
                <label htmlFor="first-name">First Name:</label>
                <input id="first-name" type="text" />

                <label htmlFor="last-name">Last Name:</label>
                <input id="last-name" type="text" />

                <label htmlFor="email">Email:</label>
                <input id="email" type="text" />

                <label htmlFor="tel">Tel.:</label>
                <input id="tel" type="text" />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

function Educational({ educationsList, handleEducational }) {
    const [educationList, setEducationList] = useState(educationsList)
    const handleDelete = (key) => {
        let newList = educationList.filter((education) => education.id !== key);
        setEducationList(newList);
    }

    return (
        <div>
            <form action="" onSubmit={handleEducational}>
                <label htmlFor="date-from">Date from:</label>
                <input type="date" name="date-from" id="date-from" />

                <label htmlFor="date-to">Date to:</label>
                <input type="date" name="date-to" id="date-to" />

                <label htmlFor="school">Institution:</label>
                <input id="school" type="text" />

                <label htmlFor="faculty">Faculty:</label>
                <input id="faculty" type="text" />

                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description"></textarea>

                <input type="submit" value="Submit" />
            </form>

            <div>  
                {educationList.map(education => (
                    <div key={education.id}>
                        <p>{education.dateFrom} - {education.dateTo}</p>
                        <h2>{education.faculty}</h2>
                        <h3>{education.school}</h3>
                        <button onClick={() => handleDelete(education.id)}>Remove</button>
                    </div>
                ))}
            </div>  
        </div>
    )
}

function Experience ({ handleExperience }) {
    return (
        <div>
            <form action="" onSubmit={handleExperience}>
                <label htmlFor="date-from">Date from:</label>
                <input type="date" name="date-from" id="date-from" />

                <label htmlFor="date-to">Date to:</label>
                <input type="date" name="date-to" id="date-to" />

                <label htmlFor="school">Company:</label>
                <input id="school" type="text" />

                <label htmlFor="faculty">Position:</label>
                <input id="faculty" type="text" />

                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description"></textarea>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default function Input({ handleGeneral, handleEducational, handleExperience, educations }) {
    return (
        <div>
            <General />
            <Educational educationsList={educations}/>
            <Experience />
        </div>
    )
}