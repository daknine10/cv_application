//input general, educational, experience
import React, { useState } from 'react';
import arrow from './assets/arrow-down-icon.svg'


function General({ handleGeneral }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='section'>
            <div className='sectionHead'>
                <h2>General:</h2>
                <button className={isActive ? 'close' : 'open'} onClick={() => setIsActive(!isActive)}>
                    <img src={arrow} alt={isActive ? 'close' : 'open'} />
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

                <label htmlFor="city">City:</label>
                <input id="city" type="text" />

                <input type="submit" value="Submit" />
            </form>
        </>)}
        </div>
    )
}

function Educational({ educationsList, handleEducational, handleDelete }) {
    const [isActive, setIsActive] = useState(false);
    const [formData, setFormData] = useState({
        dateFrom: '',
        dateTo: '',
        school: '',
        city: '',
        faculty: '',
        description: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEducational(e);
        setFormData({
            dateFrom: '',
            dateTo: '',
            school: '',
            city: '',
            faculty: '',
            description: ''
        });
    };

    const handleEdit = (id) => {
        const education = educationsList.find(edu => edu.id === id);
        setFormData(education);
        handleDelete(id);
    };

    return (
        <div className='section'>
            <div className='sectionHead'>
                <h2>Education:</h2>
                <button className={isActive ? 'close' : 'open'} onClick={() => setIsActive(!isActive)}>
                    <img src={arrow} alt={isActive ? 'close' : 'open'} />
                </button>
            </div>
            {isActive && (
                <>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="dateFrom">Date from:</label>
                        <input type="month" name="dateFrom" id="dateFrom" value={formData.dateFrom} onChange={handleChange} />

                        <label htmlFor="dateTo">Date to:</label>
                        <input type="month" name="dateTo" id="dateTo" value={formData.dateTo} onChange={handleChange} />

                        <label htmlFor="school">Institution:</label>
                        <input id="school" type="text" name="school" value={formData.school} onChange={handleChange} />

                        <label htmlFor="city">City:</label>
                        <input id="city" type="text" name="city" value={formData.city} onChange={handleChange} />

                        <label htmlFor="faculty">Faculty:</label>
                        <input id="faculty" type="text" name="faculty" value={formData.faculty} onChange={handleChange} />

                        <label htmlFor="description">Description:</label>
                        <textarea name="description" id="description" value={formData.description} onChange={handleChange}></textarea>

                        <input type="submit" value="Submit" />
                    </form>

                    <div className='sub-list'>
                        {educationsList.map(education => (
                            <div className='sub-element' key={education.id}>
                                <h3>{education.school}</h3>
                                <h4>{education.faculty}</h4>
                                <button onClick={() => handleDelete(education.id)}>Remove</button>
                                <button onClick={() => handleEdit(education.id)}>Edit</button>
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
    const [formData, setFormData] = useState({
        dateFrom: '',
        dateTo: '',
        company: '',
        city: '',
        position: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleExperience(e);
        setFormData({
            dateFrom: '',
            dateTo: '',
            company: '',
            city: '',
            faculty: '',
            description: ''
        });
    };

    const handleEdit = (id) => {
        const experience = experiencesList.find(exp => exp.id === id);
        setFormData(experience);
        handleDelete(id);
    };

    return (
        <div className='section'>
            <div className='sectionHead'>
                <h2>Experience:</h2>
                <button className={isActive ? 'close' : 'open'} onClick={() => setIsActive(!isActive)}>
                    <img src={arrow} alt={isActive ? 'close' : 'open'} />
                </button>
            </div>
        {isActive && (
            <>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="dateFrom">Date from:</label>
                    <input type="text" name="dateFrom" id="dateFrom" value={formData.dateFrom} onChange={handleChange} />

                    <label htmlFor="dateTo">Date to:</label>
                    <input type="text" name="dateTo" id="dateTo" value={formData.dateTo} onChange={handleChange} />

                    <label htmlFor="company">Company:</label>
                    <input id="company" type="text" name="company" value={formData.company} onChange={handleChange} />

                    <label htmlFor="city">City:</label>
                    <input id="city" type="text" name="city" value={formData.city} onChange={handleChange} />

                    <label htmlFor="position">Position:</label>
                    <input id="position" type="text" name="position" value={formData.position} onChange={handleChange} />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" value={formData.description} onChange={handleChange}></textarea>
                    <input type="submit" value="Submit" />
                </form>

                <div className='sub-list'>  
                    {experiencesList.map(experience => (
                        <div className='sub-element' key={experience.id}>
                            <h3>{experience.company}</h3>
                            <h4>{experience.position}</h4>
                            <button onClick={() => handleDelete(experience.id)}>Remove</button>
                            <button onClick={() => handleEdit(experience.id)}>Edit</button>
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