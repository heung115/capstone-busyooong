import React from "react";
import './VoiceComponent.css'
import { VoiceToText } from "./VoiceToText";

const VoiceComponent = () => {
    const { transcript, listening, toggleListening } = VoiceToText();

    return (
        <div>
            <h1 className="title">음성인식 테스트</h1>
            <div className="res-containner">
                <textarea
                    className="voice-script"
                    value={transcript}
                    onChange={() => {}}
                ></textarea>
                <button className="record-button" onClick={toggleListening}>
                    {listening ? "Recording..." : "Click to record"}
                </button>
            </div>
        </div>
    );
};

export {VoiceComponent};