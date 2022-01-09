import { Commands } from './custom_types';

export const commandsMap: Record<keyof Commands, undefined> = {
    object: undefined,
    monitor: undefined,
    MONITOR: undefined,
    info: undefined,
    INFO: undefined,
    ping: undefined,
    PING: undefined,
    publish: undefined,
    PUBLISH: undefined,
    auth: undefined,
    AUTH: undefined,
    client: undefined,
    CLIENT: undefined,
    hmset: undefined,
    HMSET: undefined,
    subscribe: undefined,
    SUBSCRIBE: undefined,
    unsubscribe: undefined,
    UNSUBSCRIBE: undefined,
    psubscribe: undefined,
    PSUBSCRIBE: undefined,
    punsubscribe: undefined,
    PUNSUBSCRIBE: undefined,
    append: undefined,
    APPEND: undefined,
    bgrewriteaof: undefined,
    BGREWRITEAOF: undefined,
    bgsave: undefined,
    BGSAVE: undefined,
    bitcount: undefined,
    BITCOUNT: undefined,
    bitfield: undefined,
    BITFIELD: undefined,
    bitop: undefined,
    BITOP: undefined,
    bitpos: undefined,
    BITPOS: undefined,
    blpop: undefined,
    BLPOP: undefined,
    brpop: undefined,
    BRPOP: undefined,
    brpoplpush: undefined,
    BRPOPLPUSH: undefined,
    cluster: undefined,
    CLUSTER: undefined,
    command: undefined,
    COMMAND: undefined,
    config: undefined,
    CONFIG: undefined,
    dbsize: undefined,
    DBSIZE: undefined,
    debug: undefined,
    DEBUG: undefined,
    decr: undefined,
    DECR: undefined,
    decrby: undefined,
    DECRBY: undefined,
    del: undefined,
    DEL: undefined,
    discard: undefined,
    DISCARD: undefined,
    dump: undefined,
    DUMP: undefined,
    echo: undefined,
    ECHO: undefined,
    eval: undefined,
    EVAL: undefined,
    evalsha: undefined,
    EVALSHA: undefined,
    exists: undefined,
    EXISTS: undefined,
    expire: undefined,
    EXPIRE: undefined,
    expireat: undefined,
    EXPIREAT: undefined,
    flushall: undefined,
    FLUSHALL: undefined,
    flushdb: undefined,
    FLUSHDB: undefined,
    geoadd: undefined,
    GEOADD: undefined,
    geohash: undefined,
    GEOHASH: undefined,
    geopos: undefined,
    GEOPOS: undefined,
    geodist: undefined,
    GEODIST: undefined,
    georadius: undefined,
    GEORADIUS: undefined,
    georadiusbymember: undefined,
    GEORADIUSBYMEMBER: undefined,
    get: undefined,
    GET: undefined,
    getbit: undefined,
    GETBIT: undefined,
    getrange: undefined,
    GETRANGE: undefined,
    getset: undefined,
    GETSET: undefined,
    hdel: undefined,
    HDEL: undefined,
    hexists: undefined,
    HEXISTS: undefined,
    hget: undefined,
    HGET: undefined,
    hgetall: undefined,
    HGETALL: undefined,
    hincrby: undefined,
    HINCRBY: undefined,
    hincrbyfloat: undefined,
    HINCRBYFLOAT: undefined,
    hkeys: undefined,
    HKEYS: undefined,
    hlen: undefined,
    HLEN: undefined,
    hmget: undefined,
    HMGET: undefined,
    hset: undefined,
    HSET: undefined,
    hsetnx: undefined,
    HSETNX: undefined,
    hstrlen: undefined,
    HSTRLEN: undefined,
    hvals: undefined,
    HVALS: undefined,
    incr: undefined,
    INCR: undefined,
    incrby: undefined,
    INCRBY: undefined,
    incrbyfloat: undefined,
    INCRBYFLOAT: undefined,
    keys: undefined,
    KEYS: undefined,
    lastsave: undefined,
    LASTSAVE: undefined,
    lindex: undefined,
    LINDEX: undefined,
    linsert: undefined,
    LINSERT: undefined,
    llen: undefined,
    LLEN: undefined,
    lpop: undefined,
    LPOP: undefined,
    lpush: undefined,
    LPUSH: undefined,
    lpushx: undefined,
    LPUSHX: undefined,
    lrange: undefined,
    LRANGE: undefined,
    lrem: undefined,
    LREM: undefined,
    lset: undefined,
    LSET: undefined,
    ltrim: undefined,
    LTRIM: undefined,
    mget: undefined,
    MGET: undefined,
    migrate: undefined,
    MIGRATE: undefined,
    mset: undefined,
    MSET: undefined,
    msetnx: undefined,
    MSETNX: undefined,
    OBJECT: undefined,
    persist: undefined,
    PERSIST: undefined,
    pexpire: undefined,
    PEXPIRE: undefined,
    pexpireat: undefined,
    PEXPIREAT: undefined,
    pfadd: undefined,
    PFADD: undefined,
    pfcount: undefined,
    PFCOUNT: undefined,
    pfmerge: undefined,
    PFMERGE: undefined,
    psetex: undefined,
    PSETEX: undefined,
    pubsub: undefined,
    PUBSUB: undefined,
    pttl: undefined,
    PTTL: undefined,
    quit: undefined,
    QUIT: undefined,
    randomkey: undefined,
    RANDOMKEY: undefined,
    readonly: undefined,
    READONLY: undefined,
    readwrite: undefined,
    READWRITE: undefined,
    rename: undefined,
    RENAME: undefined,
    renamenx: undefined,
    RENAMENX: undefined,
    restore: undefined,
    RESTORE: undefined,
    role: undefined,
    ROLE: undefined,
    rpop: undefined,
    RPOP: undefined,
    rpoplpush: undefined,
    RPOPLPUSH: undefined,
    rpush: undefined,
    RPUSH: undefined,
    rpushx: undefined,
    RPUSHX: undefined,
    sadd: undefined,
    SADD: undefined,
    save: undefined,
    SAVE: undefined,
    scard: undefined,
    SCARD: undefined,
    script: undefined,
    SCRIPT: undefined,
    sdiff: undefined,
    SDIFF: undefined,
    sdiffstore: undefined,
    SDIFFSTORE: undefined,
    select: undefined,
    SELECT: undefined,
    set: undefined,
    SET: undefined,
    setbit: undefined,
    SETBIT: undefined,
    setex: undefined,
    SETEX: undefined,
    setnx: undefined,
    SETNX: undefined,
    setrange: undefined,
    SETRANGE: undefined,
    shutdown: undefined,
    SHUTDOWN: undefined,
    sinter: undefined,
    SINTER: undefined,
    sinterstore: undefined,
    SINTERSTORE: undefined,
    sismember: undefined,
    SISMEMBER: undefined,
    slaveof: undefined,
    SLAVEOF: undefined,
    slowlog: undefined,
    SLOWLOG: undefined,
    smembers: undefined,
    SMEMBERS: undefined,
    smove: undefined,
    SMOVE: undefined,
    sort: undefined,
    SORT: undefined,
    spop: undefined,
    SPOP: undefined,
    srandmember: undefined,
    SRANDMEMBER: undefined,
    srem: undefined,
    SREM: undefined,
    strlen: undefined,
    STRLEN: undefined,
    sunion: undefined,
    SUNION: undefined,
    sunionstore: undefined,
    SUNIONSTORE: undefined,
    sync: undefined,
    SYNC: undefined,
    time: undefined,
    TIME: undefined,
    ttl: undefined,
    TTL: undefined,
    type: undefined,
    TYPE: undefined,
    unlink: undefined,
    UNLINK: undefined,
    unwatch: undefined,
    UNWATCH: undefined,
    wait: undefined,
    WAIT: undefined,
    watch: undefined,
    WATCH: undefined,
    zadd: undefined,
    ZADD: undefined,
    zcard: undefined,
    ZCARD: undefined,
    zcount: undefined,
    ZCOUNT: undefined,
    zincrby: undefined,
    ZINCRBY: undefined,
    zinterstore: undefined,
    ZINTERSTORE: undefined,
    zlexcount: undefined,
    ZLEXCOUNT: undefined,
    zrange: undefined,
    ZRANGE: undefined,
    zrangebylex: undefined,
    ZRANGEBYLEX: undefined,
    zrevrangebylex: undefined,
    ZREVRANGEBYLEX: undefined,
    zrangebyscore: undefined,
    ZRANGEBYSCORE: undefined,
    zrank: undefined,
    ZRANK: undefined,
    zrem: undefined,
    ZREM: undefined,
    zremrangebylex: undefined,
    ZREMRANGEBYLEX: undefined,
    zremrangebyrank: undefined,
    ZREMRANGEBYRANK: undefined,
    zremrangebyscore: undefined,
    ZREMRANGEBYSCORE: undefined,
    zrevrange: undefined,
    ZREVRANGE: undefined,
    zrevrangebyscore: undefined,
    ZREVRANGEBYSCORE: undefined,
    zrevrank: undefined,
    ZREVRANK: undefined,
    zscore: undefined,
    ZSCORE: undefined,
    zunionstore: undefined,
    ZUNIONSTORE: undefined,
    scan: undefined,
    SCAN: undefined,
    sscan: undefined,
    SSCAN: undefined,
    hscan: undefined,
    HSCAN: undefined,
    zscan: undefined,
    ZSCAN: undefined,
};

export default Object.keys(commandsMap) as (keyof Commands)[];
