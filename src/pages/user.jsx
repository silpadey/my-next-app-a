import { useRouter } from "next/router"

export default function UserPage() {
    const router = useRouter()
    // const { name, id, address } = router.query
    const name = router.query.name
    const id = router.query.id
    const address = router.query.address

    return (
        <>
            <h1>user {name}</h1>
            <h1>user {id}</h1>
            <h2>user {address}</h2>
        </>
    )
}