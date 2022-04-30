import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Callback() {
    const router = useRouter()

    useEffect(() => {
        const querySplit = router.asPath.split('&')
        const access_token = querySplit[1].split('=')[1]
        window.location.href = `/api/cb?token=${access_token}`
    }, [])

    return <></>
}
