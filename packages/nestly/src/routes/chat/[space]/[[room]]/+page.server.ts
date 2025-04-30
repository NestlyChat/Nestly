import type { PageServerLoad } from "../$types"

export const load: PageServerLoad<{ guild: string, channel?: string }> = ({ params }) => {
    return params;
};