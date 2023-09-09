import { useEffect, useReducer, useState, useCallback } from "react";
import Tag from "./Tag";

export default function Typewriter({ open, textToType, work, tags, url, setContentLength, skipTypewriter }) {

    const [startTypewriter, setStartTypewriter] = useState(false);

    const handleTimeout = useCallback((start, delay) => {
        const timeout = setTimeout(() => {
            setStartTypewriter(start);
        }, delay);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        return open ? handleTimeout(true, 1800) : handleTimeout(false, 450);
    }, [open, startTypewriter, handleTimeout])

    function reducer(state, action) {
        return { ...state, [action.type]: action.payload };
    };
    const initialState = textToType.reduce((a, _, index) => ({ ...a, [index]: "" }), {});

    const [textState, dispatch] = useReducer(reducer, initialState);

    const [i, setI] = useState(0);

    useEffect(() => {
        if (skipTypewriter) {
            textToType.forEach((text, index) => {
                dispatch({ type: index, payload: text });
            });
            setI(textToType.length - 1);
        } else if (startTypewriter) {
            if (startTypewriter) {
                const timeout = setTimeout(() => {
                    textState[i].length < textToType[i].length && dispatch({ type: i, payload: textToType[i].slice(0, textState[i].length + 1) })
                    // string.length < textToType[i].length && setString(textToType[i].slice(0, string.length + 1));
                }, 25);
                if (i + 1 < textToType.length && textState[i].length === textToType[i].length) {
                    setI(i + 1);
                };
                return () => clearTimeout(timeout);
            } else if (!startTypewriter && textState[i].length > 0) {
                textToType.forEach((_, index) => {
                    dispatch({ type: index, payload: "" })
                })
                setI(0);
            }
        }
    }, [i, startTypewriter, textState, textToType, skipTypewriter]);

    useEffect(() => {
        const values = textState ? Object.values(textState) : []
        setContentLength && values.length > 0 && setContentLength(values.reduce((accumulator, current) => accumulator + current.length, 0))
        // console.log(setContentLength)
    }, [textState, setContentLength])



    return (
        <div>
            {Object.values(textState).map((typedString, index) => {
                return <span key={index}>{url && index === 4 ? <a target="_blank" rel="noreferrer" href={typedString}>{typedString}</a> : typedString}{index + 1 !== textToType.length && typedString.length === textToType[index].length && <br />}</span>
            })}
            <span className={(i === 0 && textState[i].length === 0) || (i + 1 === textToType.length && textState[i].length === textToType[i].length) ? "flicker" : ""}>|</span>
            {work && (i + 1 === textToType.length && textState[i].length === textToType[i].length) &&
                <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", fontSize: "1rem", marginTop: "1rem" }}>
                    {tags.map((tag, index) => {
                        return <Tag tagName={tag} key={index} delay={index} />
                    })}
                </div>
            }
        </div>
    );
}