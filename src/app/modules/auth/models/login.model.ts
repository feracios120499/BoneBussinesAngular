export class LogInModel {
  public Username: string | undefined;
  public Password: string | undefined;
  public UserData = `${navigator.appName};${(new Date()).getTimezoneOffset() / 60};${navigator.platform};${screen.width};${screen.height};${screen.colorDepth};${screen.pixelDepth}`;
}
