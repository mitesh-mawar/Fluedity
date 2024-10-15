interface RateLimitOptions {
  interval: number;
  uniqueTokenPerInterval: number;
}

interface RateLimitResult {
  check: (identifier: string, limit: number) => Promise<void>;
}

export function rateLimit({
  interval,
  uniqueTokenPerInterval,
}: RateLimitOptions): RateLimitResult {
  const tokensMap = new Map();

  return {
    check: (identifier: string, limit: number) =>
      new Promise<void>((resolve, reject) => {
        const now = Date.now();
        const windowStart = now - interval;
        const tokenCount = tokensMap.get(identifier) || [];
        const validTokens = tokenCount.filter(
          (timestamp: number) => timestamp > windowStart
        );

        if (validTokens.length >= limit) {
          reject(new Error("Rate limit exceeded"));
        } else {
          validTokens.push(now);
          tokensMap.set(identifier, validTokens);

          // Clean up old tokens
          if (tokenCount.length > uniqueTokenPerInterval) {
            tokensMap.set(
              identifier,
              tokenCount.slice(0, uniqueTokenPerInterval)
            );
          }

          resolve();
        }
      }),
  };
}
