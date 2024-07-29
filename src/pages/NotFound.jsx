import { useNavigate } from "react-router-dom"
 
  
  export default function NotFound() {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    return (
      <div>
      <h1>Not Found page</h1>
      <p>The page you tried to access does not exist.</p>
      <div className="flexGrow">
                <button onClick={goBack}>Go Back</button>
            </div>
    </div>
    )
  }
  