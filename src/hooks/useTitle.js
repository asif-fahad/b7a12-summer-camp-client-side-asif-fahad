import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Fahad's Sports`;
    }, [title])
}

export default useTitle;