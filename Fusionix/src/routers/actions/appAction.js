

import account from "../../lib/appwrite";

const userPromptAction = async (formData) => {
    const userPrompt = formData.get('user_prompt');
    // console.log(userPrompt);

    // Get current user info
    const user = await account.get();

    // Get a conversation title based on user prompt
    return null;
};

/**
 * Handles incoming requests based on the 'request_type' from data.
 * @async
 * @function appAction
 * @param {Object} request - The incoming request object containiing the form data.
 * @returns {Promise<*>} - Returns the result of the action based on the request_type (e.g, 'userPromptAction' or ' conversationAction) 
 **/

const appAction = async ({ request }) => {
    const formData = await request.formData();
    const requestType = formData.get('request_type');

    // console.log(requestType);
    if(requestType === 'user_prompt') {
        return await userPromptAction(formData);
    }
    
};

export default appAction;