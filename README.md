# Weather Map
A weather app built with Openweathermap API. This application leverages an OpenWeatherMap API which gives us weather information and some great reverse geolocation.    

## Getting Started  
To be able to run the web application locally, or even distribute it, you will have to link your own API key. You must keep it secret. So I suggest you dont change the file structure, file names (except when adding your files) and your _.gitignore_.  

### Getting your API key  
Go to **[openweathermap](https://openweathermap.org)**  
1. Create an account or sign in.
2. To get your key click on **Your Name** then **My API keys**  
  ![1](https://user-images.githubusercontent.com/98871804/156530942-0702493b-34b1-4cb1-85d3-f04c88f2916f.png)
3. To generate your key. Type the name of your application, then generate 
  ![2](https://user-images.githubusercontent.com/98871804/156531843-d78e0476-cee2-441e-8e84-31e1ecc9b364.png)
4. Your API key is generated, copy it and we will link it with our web application in VS Code
  ![3](https://user-images.githubusercontent.com/98871804/156532562-bbfac6d9-bc73-4d05-ab83-42edcf0a9197.png)
5. Open this project in VS code and create `config.js` inside the `src` folder. The created file will look opaque because of the _.gitignore_ configuration to not track it.
  ![4](https://user-images.githubusercontent.com/98871804/156533779-103543c6-c86f-446e-bef2-b442ee6a7680.png)
6. On the `config.js` file add the following line. 
    ```javascript
    const API_KEY = 'Your API key';
    ```  
    ![5](https://user-images.githubusercontent.com/98871804/156534893-d44df324-3f7e-4c2e-8564-d120af4c906a.png)

### Additional Configuration  
I installed an NPM package to help me with an enforced code syntax called ESLint. If you want your environment to mirror my style of code, run   
  ```bash
  npm i
  ```

# Good Luck
