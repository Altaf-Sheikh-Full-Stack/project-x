import { Mutation, useMutation, useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { useNavigate } from "react-router"





const Schema = () => {
    const navigate = useNavigate()
    const creatingSchema = async () => {
        const res = await fetch("/api/auth/exp", {
            method: "POST",
            credentials: "include"
        })


        const data = await res.json()
        if (!res.ok) {
            throw new Error(data.message);
        }

        return data
    }


    const { data, error } = useQuery({
        queryKey: ["create Schema"],
        queryFn: creatingSchema,
    })

    if (data) {
        navigate("/connector")
    }

    if(error){
        console.log("not good")
    }

    return (
        <p>Creating your account</p>
    )
}

export default Schema