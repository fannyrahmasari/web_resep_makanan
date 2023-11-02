import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

const API_KEYS = "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"


const AIPage = () => {
    const [ typing, setTyping ] = useState(false)
    const [ messages, setMessages ] = useState([
        {
            message: "Hello, can I help you?",
            sender: "ChatGPT"
        }
    ])

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"
        }

        const newMessages = [...messages, newMessage]

        setMessages(newMessages)

        setTyping(true)

        await processMessageToChatGPT(newMessages)
    }

    async function processMessageToChatGPT(chatMessages){
        let apiMessages = chatMessages.map((messageObject) => {
            let role = ""
            if(messageObject.sender === "chatGPT"){
                role="assistant"
            } else {
                role = "user"
            }
            return { role: role, content: messageObject.message }
        })

        const systemMessage = {
            role: "system",
            content: "Speak like a pirate."
        }

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages 
            ]
        }

        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + API_KEYS, 
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody)
        }).then((data) => {
            return data.json()
        }).then((data) => {
            console.log(data)
            console.log(data.choices[0].message.content)
            setMessages(
                [...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: "ChatGPT"
                }]
            )
            setTyping(false)
        })
    }
 
    return(
            <>
            <div className='AIPage flex justify-center items-center mb-5'>
            <div style={{ position: "relative",height: "580px", width: "700px"}}>
                <MainContainer>
                    <ChatContainer>
                        <MessageList
                        scrollBehavior='smooth'
                        typingIndicator={typing ? <TypingIndicator content="Typing" /> : null}
                        >
                            {messages.map((message, i) => {
                                return <Message key={i} model={message} />
                            })}
                        </MessageList>
                        <MessageInput placeholder='Type messagae here' onSend={handleSend} />
                    </ChatContainer>
                </MainContainer>
            </div>
        </div>
        </>
    )
}

export default AIPage