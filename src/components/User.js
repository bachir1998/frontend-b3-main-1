import Link from "next/link";
import Button from "../components/Button";

const User = ({article}) => {
    // console.log(article);
 
    const [isEditing, setIsEditing] = useState(false);
 
    const [editedContent, setEditContent] = useState("");
   
  
    const handleEdit = () => {
        const data = {
            author: article.author,
            content: editedContent ? editedContent : article.content,
            date: article.date
        }
        axios.put('http://localhost:3003/articles/' + article.id,data)
        .then(()=>{
 
            setIsEditing(false);
 
        })
        
    }
 
     return (
         <div className='article' style={{background: isEditing ? "#f3feff" : "white"}}>
             <div className="card-header">
                <h3>{article.author}</h3>
                <em>Posté le {dateParser(article.date)}</em>
             </div>
             {isEditing ? (
                 //autofocus : déjà prêt à écrire dedans
                 <textarea onChange={(e)=>setEditContent(e.target.value)}autoFocus defaultValue={editedContent ? editedContent : article.content}>
                 </textarea>
             ): (
                 <p>{editedContent ? editedContent : article.content}</p>
             )}
             
 
             <div className="btn-container">
                 {isEditing ? (
                     <button onClick={handleEdit}>Valider</button>
                 ) : (
                     <button  onClick={()=> setIsEditing(true)}>Edit</button>
 
                 )}
                 <DeleteArticle id={article.id}/> 
             </div>
             
         </div>
     );
 };
 
export default User;
