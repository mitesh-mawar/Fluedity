import { NextApiResponse } from "next";

interface RateLimitOptions {
  interval: number;
  uniqueTokenPerInterval: number;
}

interface RateLimitResult {
  check: (res: NextApiResponse, limit: number, token: string) => Promise<void>;
}

export function rateLimit({
  interval,
  uniqueTokenPerInterval,
}: RateLimitOptions): RateLimitResult {
  const tokensMap = new Map();

  return {
    check: (res: NextApiResponse, limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const now = Date.now();
        const windowStart = now - interval;
        const tokenCount = tokensMap.get(token) || [];
        const validTokens = tokenCount.filter(
          (timestamp: number) => timestamp > windowStart
        );

        if (validTokens.length >= limit) {
          res.setHeader("X-RateLimit-Limit", limit);
          res.setHeader("X-RateLimit-Remaining", 0);
          reject(new Error("Rate limit exceeded"));
        } else {
          validTokens.push(now);
          tokensMap.set(token, validTokens);

          // Clean up old tokens
          if (tokenCount.length > uniqueTokenPerInterval) {
            tokensMap.set(token, tokenCount.slice(0, uniqueTokenPerInterval));
          }

          res.setHeader("X-RateLimit-Limit", limit);
          res.setHeader(
            "X-RateLimit-Remaining",
            Math.max(0, limit - validTokens.length)
          );
          resolve();
        }
      }),
  };
}
