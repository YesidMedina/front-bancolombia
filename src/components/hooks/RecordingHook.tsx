import { useEffect, useState } from "react";

let recognition: any = null;
if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";
}

export const Recording = () => {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  useEffect(() => {
    if (!recognition) return;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      console.log("onresult event: ", event);
      setText(event.results[0][0].transcript)
      console.log(event.results[0][0].transcript);
      
      recognition.stop();
      setListening(false);
    };
  }, []);

  const startListening = () => {
    setText("");
    setListening(true);
    recognition.start();
    
  };

  const stopListening = () => {
    setListening(false);
    recognition.stop();
  };

  return {
    text,
    listening,
    startListening,
    stopListening,
    hasRecognitionSupport: !!recognition,
  };
};
