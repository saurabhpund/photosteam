import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LoginCTX } from "../context/LoginContext";

const useVerifyAuth = () => {
  const [isVerified, setIsVerified] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseUrl = "http://localhost:8080";
  const { setIsLogin } = useContext(LoginCTX);

  const verifyToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsVerified(false);
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(baseUrl + "/api/auth/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setIsVerified(res.data.valid === true);
        setIsLogin(res.data.valid === true);
      } catch (err) {
        setIsVerified(false);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    verifyToken();
  }, []);

  return { isVerified, loading };
};

export default useVerifyAuth;
