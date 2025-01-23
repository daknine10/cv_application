import Input from "./Input"
import { useState } from "react"
import { general, educations, experiences } from "./educations"
import Preview from "./Preview"

export default function App() {
    const [generalObj, setGeneralObj] = useState(general)
    const [educationObj, setEducationObj] = useState(educations)
    const [experienceObj, setExperienceObj] = useState(experiences)

    const handleEducationDelete = (key) => {
        let newList = educationObj.filter((education) => education.id !== key);
        setEducationObj(newList);
    }

    const handleExperienceDelete = (key) => {
        let newList = experienceObj.filter((experience) => experience.id !== key);
        setExperienceObj(newList);
    }

    const handleGeneral = (e) => {
        e.preventDefault();
        const firstName = e.target[0].value;
        const lastName = e.target[1].value;
        const email = e.target[2].value;
        const tel = e.target[3].value;

        setGeneralObj({
            firstName: firstName,
            lastName: lastName,
            email: email,
            tel: tel,
        })
    }
    
    const handleEducational = (e) => {
        e.preventDefault();
        const dateFrom = e.target[0].value;
        const dateTo = e.target[1].value;
        const school = e.target[2].value;
        const city = e.target[3].value;
        const faculty = e.target[4].value;
        const description = e.target[5].value;
 
        setEducationObj([...educationObj,
            {
                id: crypto.randomUUID(),
                dateFrom: dateFrom,
                dateTo: dateTo,
                school: school,
                city: city,
                faculty: faculty,
                description: description,
            }
        ]
        )
    }
    
    const handleExperience = (e) => {
        e.preventDefault();
        const dateFrom = e.target[0].value;
        const dateTo = e.target[1].value;
        const company = e.target[2].value;
        const city = e.target[3].value;
        const position = e.target[4].value;
        const description = e.target[5].value;
        setExperienceObj([...experienceObj,
            {
                id: crypto.randomUUID(),
                dateFrom: dateFrom,
                dateTo: dateTo,
                company: company,
                city: city,
                position: position,
                description: description,
            }
        ]
        )
    }

    return (
        <div className='container'>

            <Input 
            handleGeneral={handleGeneral}
            handleExperience={handleExperience}
            handleEducational={handleEducational}
            handleExperienceDelete={handleExperienceDelete}
            handleEducationDelete={handleEducationDelete}
            educations={educationObj} 
            experiences={experienceObj}/>
            <Preview 
            general={generalObj}
            experiences={experienceObj}
            education={educationObj}/>
        </div>
    )
}