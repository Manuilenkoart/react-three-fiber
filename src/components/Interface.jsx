import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import { useEffect, useState } from "react";

const useData = () => {
  const { setAnimationIndex } = useCharacterAnimations();

  const [newJarAmount, setNewJarAmount] = useState(0);
  const [jarData, setJarData] = useState({
    jarAmount: 0,
    jarGoal: 0,
    description: "",
    name:''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setJarData(() => data);

        const { jarAmount } = data;

        if (jarAmount > newJarAmount) {
          setAnimationIndex(0); // Set to dance animation

          setTimeout(() => {
            setAnimationIndex(1); // Revert to idle animation after 5 seconds
          }, 9000);
        }

        setNewJarAmount(jarAmount);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    const intervalId = setInterval(fetchData, 10000); // Fetch every 10 seconds

    return () => clearInterval(intervalId);
  }, [newJarAmount, setAnimationIndex]);

  return {
    jarData,
  };
};

export default useData;
