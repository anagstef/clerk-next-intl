'use client';
import { useUser } from "@clerk/nextjs";

export const Greeting = () => {
    const { user } = useUser();
    return (
        <h3>Hello, {user?.firstName || 'stranger'}</h3>
    )
}

export default Greeting;