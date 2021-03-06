declare namespace loadtest {
  export function loadTest(options: LoadTestOptions, err: Function): void;

  export interface LoadTestOptions {
    url: string;
    concurrency?: number;
    maxRequests?: number;
    maxSeconds?: number;
    timeOut?: number;
    cookies?: string[];
    headers?: { [headerName: string]: string };
    method?: 'GET'|'POST'|'PUT'|'PATCH'|'DELETE';
    body?: string|Object;
    contentType?: string;
    requestsPerSecond?: number;
    requestGenerator?(params: any, options: any, client: any, callback: Function);
    agentKeepAlive?: boolean;
    quiet?: boolean;
    indexParam?: boolean;
    insecure?: boolean;
    secureProtocol?: string;
    statusCallback?(latency: LoadTestResult, result: any, error: Error): void;
  }

  export interface LoadTestResult {
    totalErrors: number,
    totalRequests: number,
    totalTimeSeconds: number,
    percentiles: { [percentile: number]: number }
    rps: number,
    meanLatencyMs: number,
    minLatencyMs: number,
    maxLatencyMs: number,
    errors: { [statusCode: string]: number }
  }
}

export = loadtest;
export as namespace loadtest;