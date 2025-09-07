import axios from "axios"

export async function getSession() {
    try {
        const res = await axios.get("http://localhost:8000/auth/session", {
            withCredentials: true,
        });

        if (!res) {
            return "Guest"
        }
        const session = res.data.session
        if (!session) {
            return "Guest"
        }
        return res.data.name

    } catch (err) {

        return "Guest"
    }

}