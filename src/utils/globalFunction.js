import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();
  return navigate;
};

export { useNavigation };
