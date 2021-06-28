export const goToLogin = (history) => {
    history.push("/login");
  };
  
  export const goToSignUp = (history) => {
    history.push("/signup");
  };
  
  export const goToFeed = (history) => {
    history.push(`/feed`);
  };
  
  export const goToPostPage = (history, id) => {
    history.push(`/posts/${id}/comments`);
  };

  export const goBackFeed = (history) => {
    history.push(`/feed`)
  };

  export const goBackOtherPages = (history, currentPage) => {
    history.push(`/feed?page=${currentPage}`)
  }