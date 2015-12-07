# jwt-tester

Usage:

```bash
~/a/s/n/jwt-tester ./gen-token.js -a transcoder
Token is "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHAiOiJ0cmFuc2NvZGVyIiwiaWF0IjoxNDQ5NTI1NjA3LCJleHAiOjE0ODEwNjE2MDd9.LGGA7yyc20_ZG9gr01xze9glSplKeSV_cxRZ_HtbFoQ".

~/a/s/n/jwt-tester ./verify-token.js -t eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHAiOiJ0cmFuc2NvZGVyIiwiaWF0IjoxNDQ5NTI1NjA3LCJleHAiOjE0ODEwNjE2MDd9.LGGA7yyc20_ZG9gr01xze9glSplKeSV_cxRZ_HtbFoQ
Decoded token is:
 { app: 'transcoder', iat: 1449525607, exp: 1481061607  }
```