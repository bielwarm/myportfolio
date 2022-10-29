import { useEffect, useReducer, useState } from "react";
import Tag from "./Tag";

export default function Typewriter({ open, textToType, work, tags }) {

    const [startTypewriter, setStartTypewriter] = useState(false);

    useEffect(() => {
        if (open) {
            const timeout = setTimeout(() => {
                setStartTypewriter(true);
            }, 1800);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setStartTypewriter(false);
            }, 450);
            return () => clearTimeout(timeout);
        };
    }, [open, startTypewriter])

    function reducer(state, action) {
        return { ...state, [action.type]: action.payload };
    };
    const initialState = textToType.reduce((a, string, index) => ({ ...a, [index]: "" }), {});

    const [textState, dispatch] = useReducer(reducer, initialState);

    const [i, setI] = useState(0);

    useEffect(() => {
        if (startTypewriter) {
            const timeout = setTimeout(() => {
                textState[i].length < textToType[i].length && dispatch({ type: i, payload: textToType[i].slice(0, textState[i].length + 1) })
                // string.length < textToType[i].length && setString(textToType[i].slice(0, string.length + 1));
            }, 45);
            if (i + 1 < textToType.length && textState[i].length === textToType[i].length) {
                setI(i + 1);
            };
            return () => clearTimeout(timeout);
        } else if (!startTypewriter && textState[i].length > 0) {
            textToType.map((string, index) => {
                dispatch({ type: index, payload: "" })
            })
            setI(0);
        }
    }, [i, startTypewriter, textState]);


    return (
        <div>
            {Object.values(textState).map((typedString, index) => {
                return <span>{work && index === 2 ? <a href={typedString}>{typedString}</a> : typedString}{index + 1 !== textToType.length && typedString.length === textToType[index].length && <br />}</span>
            })}
            <span className={(i === 0 && textState[i].length === 0) || (i + 1 === textToType.length && textState[i].length === textToType[i].length) ? "flicker" : ""}>|</span>
            {work && (i + 1 === textToType.length && textState[i].length === textToType[i].length) && <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", fontSize: "1rem" }}>
                {tags.map((tag, index) => {
                    return <Tag tagName={tag} key={index} delay={index} />
                })}
            </div>}
        </div>
    );
}