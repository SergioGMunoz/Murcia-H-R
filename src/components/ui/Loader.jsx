import { ClipLoader
 } from "react-spinners";

function Loader() {
  return (
        <div class="loader-container">
        <ClipLoader
            color="#B88E2F"
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
        </div>
    
  );
}

export default Loader;
