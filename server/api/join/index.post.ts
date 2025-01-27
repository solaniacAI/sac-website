import {useAPIFetch} from "~/composables/useAPIFetch";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    try {
        const res =  useAPIFetch('/waitlist/join', {
            method: 'post',
            body: body
        })
        console.log(res, 'res')
    } catch (e: any) {
        console.log(e)
        return new Error(e)
    }
})