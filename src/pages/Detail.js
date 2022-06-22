import { useParams } from "react-router-dom";
const Detail = () => {
  let { id } = useParams();

  return (
    <div>
      <h3>test ID: {id}</h3>
    </div>
  );
};

export default Detail;
