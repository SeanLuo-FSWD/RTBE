import cors from "cors";
import express from "express";
import passport from "passport";
import session from "express-session";
import client_port from "../../env.config";

module.exports = (app: any) => {
  app.use(
    cors({
      origin: client_port,
      methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
      credentials: true,
    })
  );

  app.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
      },
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static("public"));
};
