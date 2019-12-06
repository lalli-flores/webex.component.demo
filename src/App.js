import React, {useEffect, Fragment} from 'react';
import webex from 'webex';
import WebexSDKAdapter from '@webex/sdk-component-adapter';
import {WebexAvatar, WebexDataProvider} from '@webex/components';

async function App() {
  const sdkAdapter = new WebexSDKAdapter(new webex({
    credentials: 'VALID TOKEN',
  }));

  useEffect(() => {
    (async function register() {
      await sdkAdapter.connect();
    })();
  }, []);

  return (
    <Fragment>
      <WebexDataProvider adapter={sdkAdapter}>
        <WebexAvatar personID="Y2lzY29zcGFyazovL3VzL1BFT1BMRS8zOTliZTMxZS0yYjRmLTQzOGYtYmUyNi1hNzRhZTZjY2U2MmM" />
      </WebexDataProvider>
    </Fragment>
  );
}

export default App;
