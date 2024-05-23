import { Request, Response } from "express";
// error handling when error occurred
export const errorRespond = (err: any, _req?: Request, res?: Response) => {
  const response = {
    status: false,
    statusCode: err?.status || 500,
    data: [],
    error: [],
    message: err?.message || "Something went wrong",
    extra: err?.extra,
  };
  const status = err?.status ? parseInt(err.status) : 500;
  return res?.status(status).json(response);
};

// success response and return data
export const successRespond = (arr: any, _req?: Request, res?: Response) => {
  const response = {
    status: true,
    statusCode: 200,
    data: arr?.data,
    error: [],
    message: arr?.message,
  };
  const status = 200;
  return res?.status(status).json(response);
};

// success response and return data
export const successRespondHtml = (data: any, _req?: Request, res?: Response) =>
  res?.status(200).type(".html").send(data);
