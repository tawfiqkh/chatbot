import {Button, TextField} from "@vaadin/react-components";
import {useState} from "react";
import {ChatAIService} from "Frontend/generated/endpoints";
import Markdown from "react-markdown";

const Chat = () =>{

    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState<string>("")

    async function send(){
        ChatAIService.ragChat(question)
            .then(res => setAnswer(res))
            .catch(err => console.error(err));
    }
    return(
        <div className="p-m">
            <h3>Chat bot</h3>
            <div className="bg-light m-auto d-flex justify-center border">
                <Markdown>
                    {answer}
                </Markdown>
            </div>
            <div>
                <TextField style={{width: '80%'}}
                           onChange={(e) => setQuestion(e.target.value)}
                />
                <Button theme="primary" onClick={send}>Send</Button>
            </div>
        </div>
    )
}
export default Chat;