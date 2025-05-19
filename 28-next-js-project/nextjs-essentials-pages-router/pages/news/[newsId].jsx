import { useRouter } from "next/router"


export default function DetailPage(){
    const router = useRouter();

    const path = router.query.newsId

    return <h1>{path}</h1>
}