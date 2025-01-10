


import PageTitle from "./components/PageTitle"

import TopAppBar from "./components/TopAppBar"

function App() {
  return (
    <>
      <PageTitle title='Fusionix - Know About Anything'/>

      <div className="">
        {/* Sidebae */}

        <div className="">
          {/* Top app bar */}
          <TopAppBar />

          {/* Main content */}
          <div className="">
            <div className=""></div>
          </div>

          {/* Prompt feild */}
          <div className="">
            <p className="">
              Fusionix may display inaccurate info,
              including about people, so double-check its responses.
              <a href="https://support.google.com/gemini?p=privacy_notice" target="_blank" className="">
                Your privacy & Gemini Apps
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
