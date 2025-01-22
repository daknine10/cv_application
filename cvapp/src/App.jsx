import Input from "./Input"
import educations from "./educations"

export default function App() {
    return (
        <div className='container'>
            <Input educations={educations}/>
        </div>
    )
}