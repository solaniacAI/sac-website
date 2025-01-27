import {useAPIFetch} from "~/composables/useAPIFetch";

export default defineEventHandler(async (event) => {
    // https://listra.xyz/api/v1
    const body = await readBody(event)
    try {
        const response = await useAPIFetch("/user/ton", {
            method: "post",
            body: body,
        })
        console.log(response)
    } catch (e: any) {
        console.log(e)
        return new Error(e)
    }
})