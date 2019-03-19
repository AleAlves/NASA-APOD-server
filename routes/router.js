module.exports = (app) => {

  const ServiceController = app.controllers.service;
  const LoginController = app.controllers.login;
  const APODController = app.controllers.apod;

  const api_v1 = '/api/v1';

  //API 
  app.get('/', ServiceController.index);
  app.get(api_v1 + '/version', ServiceController.version);

  //Login
  app.get(api_v1 + '/init',LoginController.init);
  app.post(api_v1 + '/ticket',LoginController.ticket);
  app.post(api_v1 + '/login',LoginController.login);

  //APOD
  app.post(api_v1+'/apod', APODController.apod);
  
}