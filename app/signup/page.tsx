
import { redirect } from "next/navigation"

export default async function SignupPage() {
    return <section>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="text" placeholder="Username" />
        <button type="submit" onClick={async () => {
            'use server'
            redirect('/')
        }}>Sign Up</button>
    </section>
}