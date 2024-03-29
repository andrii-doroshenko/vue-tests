// googleAuthPlugin.js
import { reactive, readonly, provide, inject } from "vue";

const googleAuthState = reactive({
  isInit: false,
  isAuthorized: false,
  currentUser: null,
});

export const GoogleAuthProviderSymbol = Symbol();

export const createGoogleAuth = () => {
  console.log(window.gapi);
  const auth2 = window.gapi.auth2.getAuthInstance();

  googleAuthState.isInit = true;
  googleAuthState.isAuthorized = auth2.isSignedIn.get();
  googleAuthState.currentUser = auth2.currentUser.get();

  auth2.isSignedIn.listen((isSignedIn) => {
    googleAuthState.isAuthorized = isSignedIn;
  });

  auth2.currentUser.listen((user) => {
    googleAuthState.currentUser = user;
  });

  return {
    googleAuthState: readonly(googleAuthState),
    signIn: async () => {
      await auth2.signIn();
    },
    signOut: async () => {
      await auth2.signOut();
    },
  };
};

export const provideGoogleAuth = () => {
  provide(GoogleAuthProviderSymbol, createGoogleAuth());
};

export const useGoogleAuth = () => {
  const googleAuth = inject(GoogleAuthProviderSymbol);
  if (!googleAuth) {
    throw new Error(
      "useGoogleAuth must be used within a Vue component with provideGoogleAuth.",
    );
  }
  return googleAuth;
};
