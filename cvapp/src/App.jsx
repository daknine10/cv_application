import Input from "./Input"
import { educations, experiences } from "./educations"

const handleGeneral = (e) => {
    e.preventDefault();
    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const email = e.target[2].value;
    const tel = e.target[3].value;
}

const handleEducational = (e) => {
    e.preventDefault();
    const dateFrom = e.target[0].value;
    const dateTo = e.target[1].value;
    const institution = e.target[2].value;
    const faculty = e.target[3].value;
    const description = e.target[4].value;
}

const handleExperience = (e) => {
    e.preventDefault();
    const dateFrom = e.target[0].value;
    const dateTo = e.target[1].value;
    const company = e.target[2].value;
    const position = e.target[3].value;
    const description = e.target[4].value;
}

export default function App() {
    return (
        <div className='container'>
            <Input handleGeneral={handleGeneral} educations={educations} experiences={experiences}/>
        </div>
    )
}