import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <>
            <div>SIGN-UP PAGE</div>
            <SignUp routing="hash" />
        </>
    );
}