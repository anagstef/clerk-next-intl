import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <>
            <div>SIGN-IN PAGE</div>
            <SignIn routing="hash" />
        </>
    );
}