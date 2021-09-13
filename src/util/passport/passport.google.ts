import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { PrismaClient } from ".prisma/client";

const { user } = new PrismaClient();

const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_AUTH_CLIENTID as string,
    clientSecret: process.env.GOOGLE_AUTH_CLIENTSECRET as string,
    callbackURL: "/api/auth/google/callback",
  },
  async function (
    _accessToken: any,
    _refreshToken: any,
    profile: any,
    done: any
  ) {
    console.log("passport.google - GoogleStrategy : profile.emails[0]");
    console.log(profile.emails[0]);

    const email = profile.emails[0].value;
    const foundUser = await user.findUnique({
      where: {
        email,
      },
    });

    if (foundUser) {
      return done(null, foundUser);
    }

    const newUser = await user.create({
      data: {
        username: profile.displayName,
        email,
      },
    });

    return done(null, newUser);
  }
);

passport.serializeUser(function (user: any, done) {
  console.log("serializeUser : user");
  console.log(user);

  done(null, user.id);
});

passport.deserializeUser(async function (userId, done) {
  console.log("deserializeUser : userId");
  console.log(userId);

  let foundUser = await user.findUnique({
    where: {
      id: userId as number,
    },
  });

  if (foundUser) {
    const deserializableUser = {
      id: foundUser.id,
      username: foundUser.username,
      profileImg: foundUser.profileImg,
    };
    done(null, deserializableUser);
  } else {
    done({ message: "User not found by id." }, null);
  }
});

export default passport.use(googleStrategy);
