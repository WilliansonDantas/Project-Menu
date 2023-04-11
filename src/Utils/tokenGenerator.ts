import * as jwt from 'jsonwebtoken';


const tokenGenerator = () => {
  const payload = {
    user: "user_test",
  };

  const secret = process.env.JWT_SECRET || "secret";
  const token = jwt.sign(payload, secret);

  return token;
};

export default tokenGenerator;
