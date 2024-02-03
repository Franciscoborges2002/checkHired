//import { RAPID_API_KEY } from "@env";
import { useState, useEffect } from "react";
import axios from "axios";

//const rapidApiKey = process.env.RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      ...query,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      //const response = await axios.request(options);

      let data = [
        {
          job_id: 1,
          employer_logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0",
          companyName: "Facebook",
          employer_name: "Facebook",
          job_title: "React Developer",
          job_publisher: "Linked in",
          job_country: "PT",
          job_google_link:"https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=8yv3oA_2-UYAAAAAAAAAAA%3D%3D",
          job_highlights: {
            Qualifications: [
              'qualification 1', 'qualification 2', 'qualification 3', 'qualification 4'
            ],
            Responsibilities: [
              'responsibilities 1', 'responsibilities 2', 'responsibilities 3', 'responsibilities 4'
            ]
          },
          job_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          job_id: 2,
          employer_logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg",
          companyName: "Google",
          employer_name: "Google",
          job_title: "Frontend Engineer",
          job_publisher: "Indeed",
          job_country: "PT",
        },
        {
          job_id: 3,
          employer_logo: "URL_DO_LOGO",
          companyName: "Microsoft",
          employer_name: "Microsoft",
          job_title: "Software Engineer",
          job_publisher: "Glassdoor",
          job_country: "PT",
        },
        {
          job_id: 4,
          employer_logo: "URL_DO_LOGO",
          companyName: "Empresa 1",
          employer_name: "Empresa 1",
          job_title: "Desenvolvedor Full Stack",
          job_publisher: "LinkedIn",
          job_country: "PT",
        },
        {
          job_id: 5,
          employer_logo: "URL_DO_LOGO",
          companyName: "Empresa 2",
          employer_name: "Empresa 2",
          job_title: "Engenheiro de Software",
          job_publisher: "Glassdoor",
          job_country: "PT",
        },
        {
          job_id: 6,
          employer_logo: "URL_DO_LOGO",
          companyName: "Empresa 1",
          employer_name: "Empresa 1",
          job_title: "Desenvolvedor Full Stack",
          job_publisher: "LinkedIn",
          job_country: "PT",
        },
        {
          job_id: 7,
          employer_logo: "URL_DO_LOGO",
          companyName: "Empresa 2",
          employer_name: "Empresa 2",
          job_title: "Engenheiro de Software",
          job_publisher: "Glassdoor",
          job_country: "PT",
        },
        {
          job_id: 8,
          employer_logo: "URL_DO_LOGO",
          companyName: "Empresa 1",
          employer_name: "Empresa 1",
          job_title: "Desenvolvedor Full Stack",
          job_publisher: "LinkedIn",
          job_country: "PT",
        },
        {
          job_id: 9,
          employer_logo: "URL_DO_LOGO",
          companyName: "Empresa 2",
          employer_name: "Empresa 2",
          job_title: "Engenheiro de Software",
          job_publisher: "Glassdoor",
          job_country: "PT",
        },
      ];

      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
