export const goToLoginPage = (history) => {
    history.push("/login");
  };
  
  export const goToApplicationFormPage = (history) => {
    history.push("/trips/application");
  };
  
  export const goToHomePage = (history) => {
    history.push("/");
  };
  
  export const goToLastPage = (history) => {
    history.goBack();
  };