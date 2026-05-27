const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;

passport.use(new GoogleStrategy(
    {
        clientID:
            process.env
                .GOOGLE_CLIENT_ID,
        clientSecret:
            process.env
                .GOOGLE_CLIENT_SECRET,
        callbackURL:
            "http://localhost:8080/auth/google/callback"
    }, async (
        accessToken,
        refreshToken,
        profile,
        done
    ) => {
        const user = {
            provider: "google",
            provider_id: profile.id,
            email: profile.emails[0].value,
            access_token: accessToken,
            refresh_token: refreshToken
        };
        return done(null, user);
    }
));

passport.use(new GithubStrategy(
        {
            clientID:
                process.env
                    .GITHUB_CLIENT_ID,
            clientSecret:
                process.env
                    .GITHUB_CLIENT_SECRET,
            callbackURL:
                "http://localhost:8080/auth/github/callback"
        }, async (
            accessToken,
            refreshToken,
            profile,
            done
        ) => {
            const user = {
                provider: "github",
                provider_id: profile.id,
                email: profile.emails ?.at(0) ?.value || `${profile.username}@github.local`,
                access_token: accessToken,
                refresh_token: refreshToken
            };
            return done(null, user);
        }
    )
);

module.exports = passport;