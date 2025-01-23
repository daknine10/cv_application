
function General( {general} ) {
    return (
        <div className="general">
            <h1>{general.firstName} {general.lastName}</h1>
            <h3>{general.email} ❖︎ {general.tel}</h3>
        </div>
    )
}

function Experience( {experiences} ) {
    return (
        <div className="experience-container">
            <h2>Work Experience</h2>
            {experiences.map(experience => (
                <div className="cv-element" key={experience.id}>

                    <div className="cv-header">
                        <h3>{experience.company}</h3>
                        <h3>{experience.dateFrom} - {experience.dateTo}</h3>
                    </div>
                    
                    <div className="cv-header">
                        <h4><i>{experience.position}</i></h4>
                        <h4><i>{experience.city}</i></h4>
                    </div>

                    <p>{experience.description}</p>

                </div>
            ))}
        </div>
    )
}

function Education({ education }) {
    return (
        <div className="education-container">
            <h2>Education</h2>
            {education.map(edu => (
                <div className="cv-element" key={edu.id}>

                    <div className="cv-header">
                        <h3>{edu.school}</h3>
                        <h3>{edu.dateFrom} - {edu.dateTo}</h3>
                    </div>
                    
                    <div className="cv-header">
                        <h4><i>{edu.faculty}</i></h4>
                        <h4><i>{edu.city}</i></h4>
                    </div>

                    <p>{edu.description}</p>

                </div>
            ))}
        </div>
    );
}

export default function Preview({ general, experiences, education }) {
    return (
        <div className="preview">
            <General general={general}/>
            <Experience experiences={experiences}/>
            <Education education={education}/>
        </div>
    )
}