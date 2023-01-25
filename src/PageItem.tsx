import axios from "axios";
import { useState, useEffect } from "react";
import useFetch from "./Hooks/useFetch";
import { DivFlex } from "./MyStyles";
interface PageProps {
  data: {
    name: string;
    url: string;
  };
}
interface DetailsProps {
  base_experience: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

const PageItem = ({ data }: PageProps) => {
  const [details, setDetails] = useState<DetailsProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function useDetails() {
      setLoading(true);
      const response = await axios.get<DetailsProps>(data.url);
      const json = response.data;
      setDetails([...details, json]);
      console.log(details);
      console.log(json);
      setLoading(false);
    }
    useDetails();
  }, [setDetails]);
  if (loading) return <div className="loading"></div>;
  return (
    <DivFlex>
      {details.map(({ name, base_experience, sprites }) => (
        <div key={name}>
          <img src={sprites.front_default} alt={`photo pokemon ${name}`} />
          <p>
            Nome: <span>{name}</span>
          </p>
          <p>
            Experiência: <span> {base_experience}</span>
          </p>
        </div>
      ))}
    </DivFlex>
  );
};

export default PageItem;
