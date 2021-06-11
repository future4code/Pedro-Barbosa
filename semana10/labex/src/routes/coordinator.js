export const goToLoginPage = (history) => {
    history.push("/login");
  };
  
  export const goToApplicationFormPage = (history) => {
    history.push("/trips/application");
  };
  
  export const goToHomePage = (history) => {
    history.push("/");
  };

  export const goToCreateTripPage = (history) => {
    history.push("/admin/trips/create");
  };

  export const goToTripDetailsPage = (history, id) => {
    history.push(`/admin/trips/${id}`)
}

  export const goToAdminHomePage = (history) => {
    history.push("/admin/trips/list");
  }