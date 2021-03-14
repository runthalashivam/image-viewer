## Image Viewer

Instagram client using ReactJS.

### How to use

1. Clone the repo and install required packages
```
git clone https://github.com/runthalashivam/image-viewer.git
cd image-viewer
npm install
```
2. Add authentication token - 
Open src/screens/login/Login.js and put your authentication token at Line #50.
```
sessionStorage.setItem('access-token', '<authentication_token>');
```
3. Start the application - 
```
npm start
```
4. Goto localhost:3000 and login - 
```
username - test_user
password - test_user
```