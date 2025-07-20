import { useEffect, useState } from "react";

const Animations = {
  dance: 0,
  idle: 1,
};
const initialJar = {
  jarAmount: 0,
  jarGoal: 0,
  description: "",
  name: "",
};

export const useApp = () => {
  const [animationIndex, setAnimationIndex] = useState(Animations.idle);
  const [newJarAmount, setNewJarAmount] = useState(0);
  const [jarData, setJarData] = useState(initialJar);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BE_URL +
            "?clientId=" +
            import.meta.env.VITE_JAR_CLIENT_ID
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = (await response.json()) ?? initialJar;
        setJarData(() => data);

        const { jarAmount } = data;

        if (jarAmount > newJarAmount) {
          setAnimationIndex(Animations.dance);

          setTimeout(() => {
            setAnimationIndex(Animations.idle);
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
    animationIndex,
  };
};
