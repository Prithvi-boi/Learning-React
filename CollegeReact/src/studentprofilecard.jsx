
export default function StudentCard({name, course="Not enrolled"}) {
    return(
        <div>
            <h3>Student {name}</h3>
            <p>Course: some {course}</p>
        </div>
    )
}