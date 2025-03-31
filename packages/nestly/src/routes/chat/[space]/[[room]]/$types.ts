import type { ServerLoadEvent } from '@sveltejs/kit';
import type { MaybePromise } from 'elysia';

export type PageServerLoad<
    Params extends Record<string, string> = Record<string, string>,
    ParentData extends Record<string, any> = Record<string, any>,
    RouteId extends string | null = string | null
> = (event: ServerLoadEvent<Params, ParentData, RouteId>) => MaybePromise<void | Record<string, any>>;
