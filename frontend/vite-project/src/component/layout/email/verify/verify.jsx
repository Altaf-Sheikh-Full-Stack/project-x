import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const Verify = () => {



    const [pop, setPop] = useState("")

    const navigate = useNavigate()
    const { id } = useParams();


    const verify = async () => {
        setPop("Verifying your email...")
        const res = await fetch("/api/auth/verifying", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        })

        const data = res.json()
        if (!res.ok) {
            throw new Error(data.message);

        }


        return data
    }

    const mutation = useMutation({
        mutationFn: verify,

        onSuccess: (data) => {
            console.log(data)
            setPop("Email verified, Email verified...")
            navigate("/schema")
        },

        onError: (error) => {
            setPop("The link is invalid or expired.")
        }


    });




    useEffect(() => {
        if (id) {
            mutation.mutate(id);
        }
    }, [id]);



    return (

        <p>{pop}</p>
    );
};

export default Verify;