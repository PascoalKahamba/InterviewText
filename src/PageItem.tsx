import axios from "axios";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    async function useDetails() {
      const response = await axios.get<DetailsProps>(data.url);
      const json = response.data;
      setDetails([...details, json]);
      console.log(details);
      console.log(json);
    }
    useDetails();
  }, [setDetails]);

  return (
    <div>
      {details.map(({ name, base_experience, sprites }) => (
        <div key={name} className="flex">
          <img src={sprites.front_default} alt={`photo pokemon ${name}`} />
          <h2>{name}</h2>
          <p>{base_experience}</p>
        </div>
      ))}
    </div>
  );
};

export default PageItem;
