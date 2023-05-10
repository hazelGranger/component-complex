import { useEffect, useRef } from "react";

export default function useAutoHeightTextArea(value: string) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const textAreaElement = textAreaRef.current;
        if (textAreaRef != null && textAreaElement != null) {

            textAreaElement.style.height = "0px";
            const scrollHeight = textAreaElement.scrollHeight;
            textAreaElement.style.height = `${scrollHeight}px`;
        }
    }, [value, textAreaRef]);

    return { textAreaRef };
}
