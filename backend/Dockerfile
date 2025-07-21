# step1 : Use the official Node.js 18 image as the base docker image 
FROM node:18

#step2: Create a working directory inside the container and switch to it
WORKDIR /app

#step3: Copy package.json and package-lock.json to the working directory to install dependencies

COPY package*.json ./

#step4: Install dependencies using npm 

RUN npm install 

#step5: Copy all the remainig project files to the working directory 

COPY . . 

#step6: Expose port 3000 so the app can be accessed outside the container 

EXPOSE 5000

#step7: Define the command to start app when the container runs 
CMD ["npm", "start"]

