const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialised URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain, including PORT)
console.log(myUrl.host);
// Hostname (doesn't include the PORT)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialised query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add parameter
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
