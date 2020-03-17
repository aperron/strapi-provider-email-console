# strapi-provider-email-console
A fake email provider for Strapi, use in development environment.

1. yarn add strapi-provider-email-console
2. select "Console" in Strapi admin > Plugins > email > parameter > provider

# Example

`POST /auth/forgot-password`

```verilog
[2020-03-17T15:08:48.979Z] debug SendEmail mock: 
        to: perron.anthony@gmail.com 
        from: Administration Panel <no-reply@strapi.io> 
        subject: Reset password 
        text: <p>We heard that you lost your password. Sorry about that!</p>

<p>But don’t worry! You can use the following link to reset your password:</p>

<p>http://localhost:3000/changepassword?code=09512c0a7b268ea47a2000abd8427703c6df92771dcc52efe634f5a04bc7533db16ced943c78ae1bb5e70141b1b29190e029d662d01d2825efee64f3762a02e5</p>

<p>Thanks.</p>
```





















