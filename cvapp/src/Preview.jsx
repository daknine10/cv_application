
function General( {general} ) {
    return (
        <div className="general">
            <h1>{general.firstName} {general.lastName}</h1>
            <h2>{general.email} ❖︎ {general.tel}</h2>
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
                        <h3>{experience.dateFrom}-{experience.dateTo}</h3>
                    </div>
                    
                    <h3><i>{experience.position}</i></h3>
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
                    
                    <h3><i>{edu.faculty}</i></h3>
                    <p>{edu.description}</p>
                </div>
            ))}
        </div>
    );
}

export default function Preview({ general, experiences, education }) {
    return (
        <div>
            <General general={general}/>
            <Experience experiences={experiences}/>
            <Education education={education}/>
        </div>
    )
}