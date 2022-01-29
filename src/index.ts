import redis, { RedisError } from 'redis';
import { Client, Parameters, ReturnType, PromiseCommands } from './custom_types';
import commands from './commands';

export function createClient(
    port: number,
    host?: string,
    options?: redis.ClientOpts
): Client;

export function createClient(
    unixSocket: string,
    options?: redis.ClientOpts
): Client;

export function createClient(
    redisUrl: string,
    options?: redis.ClientOpts
): Client;

export function createClient(options?: redis.ClientOpts): Client;

export function createClient(...args: any[]): Client {
    const client = redis.createClient(...args) as unknown as Record<keyof PromiseCommands, (...a: any[]) => void>;

    const promiseCommands = commands.reduce((agg: PromiseCommands, cmd: keyof PromiseCommands) => {
        const handler = (...a: Parameters<typeof cmd>[]) => new Promise((resolve, reject) => {
            const cb = (error: RedisError, value: ReturnType<typeof cmd>) => {
                if (error) reject(error);
                else resolve(value);
            };

            client[cmd](...a, cb);
        });
        return { ...agg, [cmd]: handler };
    }, {} as PromiseCommands);

    return {
        ...promiseCommands,
        native: client as redis.RedisClient,
    };
}

export const v3 = redis;