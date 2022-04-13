export class ServerError extends Error {
  sessionId?: string;
  requestId?: string;
  url?: string;
  status: number;
  isFatal: boolean;
  constructor(statusCode: number, message?: string) {
    super(message);
    this.name = ServerError.name;
    this.status = statusCode;
    this.isFatal = statusCode.toString().startsWith('5');
    Object.setPrototypeOf(this, ServerError.prototype);
  }
}
