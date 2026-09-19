import React from "react";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

const App = () => {
  return (
    <>
      <header>
        <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
    </>
    // <div>
    //   <h1 class="text-3xl font-bold hover:underline w-fit hover:cursor-pointer">
    //     Hello world!
    //   </h1>
    // </div>
  );
};

export default App;
