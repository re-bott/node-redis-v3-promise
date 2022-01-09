import redis from 'redis';

export type Overloads<T> =
	T extends {
		(...args: infer A1): infer R1;
		(...args: infer A2): infer R2;
		(...args: infer A3): infer R3;
		(...args: infer A4): infer R4;
		(...args: infer A5): infer R5;
		(...args: infer A6): infer R6;
		(...args: infer A7): infer R7;
		(...args: infer A8): infer R8;
		(...args: infer A9): infer R9;
	} ? {
		parameters: A1 | A2 | A3 | A4 | A5 | A6 | A7 | A8 | A9,
		returnType: R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9,
	} : T extends {
		(...args: infer A1): infer R1;
		(...args: infer A2): infer R2;
		(...args: infer A3): infer R3;
		(...args: infer A4): infer R4;
		(...args: infer A5): infer R5;
		(...args: infer A6): infer R6;
		(...args: infer A7): infer R7;
		(...args: infer A8): infer R8;
	} ? {
		parameters: A1 | A2 | A3 | A4 | A5 | A6 | A7 | A8,
		returnType: R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8,
	} : T extends {
		(...args: infer A1): infer R1;
		(...args: infer A2): infer R2;
		(...args: infer A3): infer R3;
		(...args: infer A4): infer R4;
		(...args: infer A5): infer R5;
		(...args: infer A6): infer R6;
		(...args: infer A7): infer R7;
	} ? {
		parameters: A1 | A2 | A3 | A4 | A5 | A6 | A7,
		returnType: R1 | R2 | R3 | R4 | R5 | R6 | R7,
	} : T extends {
		(...args: infer A1): infer R1;
		(...args: infer A2): infer R2;
		(...args: infer A3): infer R3;
		(...args: infer A4): infer R4;
		(...args: infer A5): infer R5;
		(...args: infer A6): infer R6;
	} ? {
		parameters: A1 | A2 | A3 | A4 | A5 | A6,
		returnType: R1 | R2 | R3 | R4 | R5 | R6,
	} : T extends {
		(...args: infer A1): infer R1;
		(...args: infer A2): infer R2;
		(...args: infer A3): infer R3;
		(...args: infer A4): infer R4;
		(...args: infer A5): infer R5;
	} ? {
		parameters: A1 | A2 | A3 | A4 | A5,
		returnType: R1 | R2 | R3 | R4 | R5,
	} : T extends {
		(...args: infer A1): infer R1;
		(...args: infer A2): infer R2;
		(...args: infer A3): infer R3;
		(...args: infer A4): infer R4;
	} ? {
		parameters: A1 | A2 | A3 | A4,
		returnType: R1 | R2 | R3 | R4,
	} : T extends {
		(...args: infer A1): infer R1;
		(...args: infer A2): infer R2;
		(...args: infer A3): infer R3;
	} ? {
		parameters: A1 | A2 | A3,
		returnType: R1 | R2 | R3,
	} : T extends {
		(...args: infer A1): infer R1;
		(...args: infer A2): infer R2;
	} ? {
		parameters: A1 | A2,
		returnType: R1 | R2,
	} : T extends {
		(...args: infer A1): infer R1;
	} ? {
		parameters: A1,
		returnType: R1,
	} : T extends {
		(): infer R;
	} ? {
		parameters: [],
		returnType: R,
	} : never;

export type Commands = Omit<redis.Commands<boolean>, 'move' | 'MOVE'>;

export type Callback<T> = redis.Callback<T>;

export type OverloadCommands<T> =
	T extends { // OverloadedKeyCommand & OverloadedSetCommand
		(...args: [...infer A1, Callback<infer R1>]): unknown;
		(...args: [...infer A2, Callback<infer R2>]): unknown;
		(...args: [...infer A3, Callback<infer R3>]): unknown;
		(...args: [...infer A4, Callback<infer R4>]): unknown;
		(...args: [...infer A5, Callback<infer R5>]): unknown;
		(...args: [...infer A6, Callback<infer R6>]): unknown;
		(...args: [key: string, ...args: Array<unknown>]): unknown;
		(...args: Array<unknown>): unknown;
	} ? {
		parameters: A1 | A2 | A3 | A4 | A5 | A6,
		returnType: R1 | R2 | R3 | R4 | R5 | R6,
	} : T extends { // OverloadedCommand & OverloadedListCommand
		(...args: [...infer A1, Callback<infer R1>]): unknown;
		(...args: [...infer A2, Callback<infer R2>]): unknown;
		(...args: [...infer A3, Callback<infer R3>]): unknown;
		(...args: [...infer A4, Callback<infer R4>]): unknown;
		(...args: [...infer A5, Callback<infer R5>]): unknown;
		(...args: [...infer A6, Callback<infer R6>]): unknown;
		(...args: Array<any>): unknown;
	} ? {
		parameters: A1 | A2 | A3 | A4 | A5 | A6,
		returnType: R1 | R2 | R3 | R4 | R5 | R6,
	} : T extends {
		(...args: [...infer A1, Callback<infer R1>]): unknown;
		(...args: [...infer A2, Callback<infer R2>]): unknown;
		(...args: [...infer A3, Callback<infer R3>]): unknown;
		(...args: [...infer A4, Callback<infer R4>]): unknown;
		(...args: [...infer A5, Callback<infer R5>]): unknown;
		(...args: [...infer A6, Callback<infer R6>]): unknown;
		(...args: [...infer A7, Callback<infer R7>]): unknown;
		(...args: [...infer A8, Callback<infer R8>]): unknown;
		(...args: [...infer A9, Callback<infer R9>]): unknown;
	} ? {
		parameters: A1 | A2 | A3 | A4 | A5 | A6 | A7 | A8 | A9,
		returnType: R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9,
	} : T extends {
		(...args: [...infer A1, Callback<infer R1>]): unknown;
		(...args: [...infer A2, Callback<infer R2>]): unknown;
		(...args: [...infer A3, Callback<infer R3>]): unknown;
		(...args: [...infer A4, Callback<infer R4>]): unknown;
		(...args: [...infer A5, Callback<infer R5>]): unknown;
		(...args: [...infer A6, Callback<infer R6>]): unknown;
		(...args: [...infer A7, Callback<infer R7>]): unknown;
		(...args: [...infer A8, Callback<infer R8>]): unknown;
	} ? {
		parameters: A1 | A2 | A3 | A4 | A5 | A6 | A7 | A8,
		returnType: R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8,
	} : T extends {
		(...args: [...infer A1, Callback<infer R1>]): unknown;
		(...args: [...infer A2, Callback<infer R2>]): unknown;
		(...args: [...infer A3, Callback<infer R3>]): unknown;
		(...args: [...infer A4, Callback<infer R4>]): unknown;
		(...args: [...infer A5, Callback<infer R5>]): unknown;
		(...args: [...infer A6, Callback<infer R6>]): unknown;
		(...args: [...infer A7, Callback<infer R7>]): unknown;
	} ? {
		parameters: A1 | A2 | A3 | A4 | A5 | A6 | A7,
		returnType: R1 | R2 | R3 | R4 | R5 | R6 | R7,
	} : T extends {
		(...args: [...infer A1, Callback<infer R1>]): unknown;
		(...args: [...infer A2, Callback<infer R2>]): unknown;
		(...args: [...infer A3, Callback<infer R3>]): unknown;
		(...args: [...infer A4, Callback<infer R4>]): unknown;
		(...args: [...infer A5, Callback<infer R5>]): unknown;
		(...args: [...infer A6, Callback<infer R6>]): unknown;
	} ? {
		parameters: A1 | A2 | A3 | A4 | A5 | A6,
		returnType: R1 | R2 | R3 | R4 | R5 | R6,
	} : T extends {
		(...args: [...infer A1, Callback<infer R1>]): unknown;
		(...args: [...infer A2, Callback<infer R2>]): unknown;
		(...args: [...infer A3, Callback<infer R3>]): unknown;
		(...args: [...infer A4, Callback<infer R4>]): unknown;
		(...args: [...infer A5, Callback<infer R5>]): unknown;
	} ? {
		parameters: A1 | A2 | A3 | A4 | A5,
		returnType: R1 | R2 | R3 | R4 | R5,
	} : T extends {
		(...args: [...infer A1, Callback<infer R1>]): unknown;
		(...args: [...infer A2, Callback<infer R2>]): unknown;
		(...args: [...infer A3, Callback<infer R3>]): unknown;
		(...args: [...infer A4, Callback<infer R4>]): unknown;
	} ? {
		parameters: A1 | A2 | A3 | A4,
		returnType: R1 | R2 | R3 | R4,
	} : T extends {
		(...args: [...infer A1, Callback<infer R1>]): unknown;
		(...args: [...infer A2, Callback<infer R2>]): unknown;
		(...args: [...infer A3, Callback<infer R3>]): unknown;
	} ? {
		parameters: A1 | A2 | A3,
		returnType: R1 | R2 | R3,
	} : T extends {
		(...args: [...infer A1, Callback<infer R1>]): unknown;
		(...args: [...infer A2, Callback<infer R2>]): unknown;
	} ? {
		parameters: A1 | A2,
		returnType: R1 | R2,
	} : T extends {
		(...args: [...infer A1, Callback<infer R1>]): unknown;
	} ? {
		parameters: A1,
		returnType: R1,
	} : T extends {
		(...args: [Callback<infer R>]): unknown;
	} ? {
		parameters: [],
		returnType: R,
	} : T extends {
		(operation: string, destkey: string, ...args: Array<string | Callback<number>>): unknown;
	} ? {
		parameters: [operation: string, destkey: string, ...args: string[]],
		returnType: number,
	} : never;

type Handler<K extends keyof Commands> =
	Commands[K] extends infer C
	? (...args: OverloadCommands<C>['parameters']) => Promise<OverloadCommands<C>['returnType']>
	: never;

export type PromiseCommands = {
	[K in keyof Commands]: Handler<K>
}

export type Client = PromiseCommands & {
	native: redis.RedisClient
};

export type Parameters<C extends keyof Commands> = Overloads<Handler<C>>['parameters'];
export type ReturnType<C extends keyof Commands> = Overloads<Handler<C>>['returnType'];
