
class NotFound extends Error {
    constructor(message, options = {}) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super();

        const { code = 404, name, date } = options;
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);

        this.name = name || 'NotFound';
        this.code = code;
        this.message = message || 'No data found.';
        this.date = date || Date.now();
    }
}

class BadRequest extends Error {
    constructor(message, options = {}) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super();

        const { code = 400, name, date } = options;
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);

        this.name = name || 'BadRequest';
        this.code = code;
        this.message = message || 'Please correct the parameters.';
        this.date = date || Date.now();
    }
}

class ServerError extends Error {
    constructor(message, options = {}) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super();

        const { code = 500, name, date } = options;
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);

        this.name = name || 'ServerError';
        this.code = code;
        this.message = message || 'Unknown error in server.';
        this.date = date || Date.now();
    }
}

module.exports = {
    BadRequest,
    NotFound,
    ServerError,
}
