
import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import UserPrompt from "../components/UserPrompt";
import AiResponse from "../components/AiResponse";

const Conversation = () => {
    const { conversation : {title, chats } ,} = useLoaderData() || {};
    // console.log(data);
    
  return (
    <>
      {/* Meta title */}
      <PageTitle title={`${title} | Fusionix`} />
      
      <motion.div className="">
        {chats.map((chat) => (
            <div key={chat.$id}>
                {/* User Prompt */}
                <UserPrompt text={chat.user_prompt} />

                {/* AiResponse */}
                <AiResponse aiResponse={chat.ai_response}/>
            </div>
        ))}
      </motion.div>
    </>
  )
}

export default Conversation;