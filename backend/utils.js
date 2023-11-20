export const getUserDataFromReq = (req) => {
    const { email, name, startDate, endDate, address, phone, prize, discription } = req.body; 
    return {
        email, name, startDate, endDate, address, phone, prize, discription
    };
  };