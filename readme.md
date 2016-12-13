Financials
==========

Setup Instructions
------------------

1.  Copy config/\*.example to config/\*.properties.  Modify as needed.
2.  Copy src/main/frontend/dotenv.example to src/main/frontend/.env.  Modify as needed.
3.  Copy src/main/proxy/dotenv.example to src/main/proxy/.env.  Modify as needed.
4.  Run *npm install* in src/main/frontend
5.  Run *npm install* in src/main/proxy
6.  Modify your OS hosts file to make sure finweb.kuali.co is pointing to localhost.

Running System
--------------

You will need to run 3 processes to do development.

1.  Run *npm run watch* in src/main/frontend.  This watches and builds your client Javascript.
2.  run *npm run start* in src/main/proxy.  This runs a proxy server at https://finweb.kuali.co:8443
3.  Run *org.kuali.FinApplication* in Intellij.  This will run the Java api application.

The application will be available at https://finweb.kuali.co:8443/
