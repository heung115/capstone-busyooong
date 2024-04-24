import { useEffect } from "react"
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const VoiceToText = () => {
    const { transcript, listening } = useSpeechRecognition();

    useEffect(() => {
        if (!listening && transcript) {
            /*
             * 서버 통신 코드 추가 예정
             */
            console.log("Current listening:", transcript);
        }
    }, [listening, transcript]);

    const toggleListening = () => {
        if (!listening) {
            SpeechRecognition.startListening({
                language: "ko-KR",
                continuous: false,
            });
        }
    };

    return { transcript, listening, toggleListening };
};

export { VoiceToText };