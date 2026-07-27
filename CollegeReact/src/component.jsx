function Profilecard(){
const studentName = "Prithvi";
const marks = 85;
const hasBadge = marks>=80;
const imageUrl = "https:picsum,photos/100" 

return(
    <div className="profile-card">
    <img scr={imgUrl} alt="student"/>
    <h2>{studentName}</h2>
    <p>Marks:{marks}</p>
     {hasBadge &&<p>Top Scorer Badge</p>}
    </div>
);

}
export default Profilecard;