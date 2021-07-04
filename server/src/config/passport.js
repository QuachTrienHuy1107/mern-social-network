/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const passportGoogle = require("passport-google-oauth20");
const User = require("../model/user/UserSchema");

const GoogleStrategy = passportGoogle.Strategy;

function configPassport(passport) {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: "/api/auth/google/callback",
            },
            async (accessToken, refreshToken, profile, done) => {
                console.log("profile", profile);
                console.log("accessToken", accessToken);
                console.log("refreshToken", refreshToken);
                const newUser = {
                    googleId: profile.id,
                    displayName: profile.displayName,
                    // username: `${profile.name?.familyName} ${profile.name?.givenName}`,
                    image: profile.photos[0].value,
                };

                try {
                    let user = await User.findOne({ googleId: profile.id });
                    if (user) {
                        return done(null, user);
                    } else {
                        user = new User(newUser);
                        user.save();
                        return done(done, user);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        )
    );

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
}

module.exports = configPassport;
