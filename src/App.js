import React, {Suspense} from "LibApp/react";

const UIComponent_Button = React.lazy(
  () => import('UIComponent/Button')
);

const DomainComponent_Button = React.lazy(
  () => import('DomainComponent/ButtonWrapper')
);

const DomainComponent_AppName = React.lazy(
  () => import('DomainComponent/AppName')
);

function App() {
  return (
    <div>
      <h1>Page2</h1>
      <Suspense fallback='Loading Remotes for Page2'>
        <DomainComponent_AppName />
        <div>
          <h2>Button from UIComponent in Page2</h2>
          <UIComponent_Button name="Page2" />
        </div>
        <div>
          <h2>Button from DomainComponent in Page2</h2>
          <DomainComponent_Button name="Page2" />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
