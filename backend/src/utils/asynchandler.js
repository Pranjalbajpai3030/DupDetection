import { request } from "express";

const asyncHandler = (requesthandler) => (req, res, next) => {
    return Promise.resolve(requesthandler(req, res, next)).catch(next);
}
    
export default asyncHandler;
