//input general, educational, experience
import React, { useState } from 'react';

function General({ handleGeneral }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='section'>
            <div className='sectionHead'>
                <h2>General:</h2>
                <button className='open' onClick={() => setIsActive(!isActive)}>
                    {isActive ? 'CLOSE' : 'OPEN'}
                </button>
            </div>
        {isActive && (
        <>
            <form onSubmit={ handleGeneral }>
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
        </>)}
        </div>
    )
}

function Educational({ educationsList, handleEducational, handleDelete }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='section'>
            <div className='sectionHead'>
                <h2>Educational:</h2>
                <button className='open' onClick={() => setIsActive(!isActive)}>
                    {isActive ? 'CLOSE' : 'OPEN'}
                </button>
            </div>
            {isActive && (
                <>
                    <form onSubmit={handleEducational}>
                        <label htmlFor="date-from">Date from:</label>
                        <input type="month" name="date-from" id="date-from" />

                        <label htmlFor="date-to">Date to:</label>
                        <input type="month" name="date-to" id="date-to" />

                        <label htmlFor="school">Institution:</label>
                        <input id="school" type="text" />

                        <label htmlFor="faculty">Faculty:</label>
                        <input id="faculty" type="text" />

                        <label htmlFor="description">Description:</label>
                        <textarea name="description" id="description"></textarea>

                        <input type="submit" value="Submit" />
                    </form>

                    <div className='sub-list'>
                        {educationsList.map(education => (
                            <div className='sub-element' key={education.id}>
                                <p>{education.dateFrom} - {education.dateTo}</p>
                                <h3>{education.school}</h3>
                                <h4>{education.faculty}</h4>
                                <button onClick={() => handleDelete(education.id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

function Experience ({ experiencesList, handleExperience, handleDelete }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='section'>
            <div className='sectionHead'>
                <h2>Experience:</h2>
                <button className='open' onClick={() => setIsActive(!isActive)}>
                    {isActive ? 'CLOSE' : 'OPEN'}
                </button>
            </div>
        {isActive && (
            <>
                <form onSubmit={handleExperience}>
                    <label htmlFor="date-from">Date from:</label>
                    <input type="month" name="date-from" id="date-from" />

                    <label htmlFor="date-to">Date to:</label>
                    <input type="month" name="date-to" id="date-to" />

                    <label htmlFor="school">Company:</label>
                    <input id="school" type="text" />

                    <label htmlFor="faculty">Position:</label>
                    <input id="faculty" type="text" />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description"></textarea>

                    <input type="submit" value="Submit" />
                </form>

                <div className='sub-list'>  
                    {experiencesList.map(experience => (
                        <div className='sub-element' key={experience.id}>
                            <p>{experience.dateFrom} - {experience.dateTo}</p>
                            <h3>{experience.company}</h3>
                            <h4>{experience.position}</h4>
                            <button onClick={() => handleDelete(experience.id)}>Remove</button>
                        </div>
                    ))}
                </div>
            </>)}  
        </div>
    )
}

export default function Input({ handleGeneral, handleEducational, handleExperience, handleEducationDelete, handleExperienceDelete, educations, experiences }) {
    return (
        <div className='inputSection'>
            <General handleGeneral={handleGeneral}/>
            <Educational handleEducational={handleEducational} educationsList={educations} handleDelete={handleEducationDelete}/>
            <Experience handleExperience={handleExperience} experiencesList={experiences} handleDelete={handleExperienceDelete}/>
        </div>
    )
}