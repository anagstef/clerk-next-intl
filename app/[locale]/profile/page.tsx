import { UserProfile } from "@clerk/nextjs";

export default function Page() {
    return (
        <div>
            <h1>Profile Page</h1>
            <UserProfile />
        </div>
    );
}