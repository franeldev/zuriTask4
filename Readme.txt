Zuri Task4: NodeJS File System Task

1. A Script file created.
2. The result directory is created and checked if it actually exists.
3. Fetched data from the fake JSON PLACEHOLDER POSTS using the native `https.get` method, while dropping the likes of axios and node-fetch.
4. The JSON data API fetched is written to a file called posts.json using the fileSytem(fs.writeFile) method.
5. After listening to the on data response, the on end resp gets called or invoked having the posts.json script or file placed under the result directory thats created already.
6. Lastly, we check for errors.


RESOURCE:
JSON API
https://jsonplaceholder.typicode.com/posts


