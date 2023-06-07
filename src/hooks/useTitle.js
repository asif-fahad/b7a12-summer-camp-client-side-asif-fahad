import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Fahad's Toys`;
    }, [title])
}

export default useTitle;