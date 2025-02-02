
import { redirect } from "react-router-dom";


import account from "../../lib/appwrite";


const appLoader = async () => {

    const data = {};

    try {
        // Attemps to retrieve the user's account inforrmation
       data.user =  await account.get();
    } catch (err) {
        console.log(`Error getting user session: ${err.message}`);
        // Redirect to login page if account retrieval fails
        return redirect('/login');
    }

    return data;
}

export default appLoader;