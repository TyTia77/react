import { Header } from './components/header/header';

import { TimelineComponent } from '../timeline/timeline.component'

export const Layout = ({children}: any) => (
  <div>
    <Header/>
    <main>
      <div>
        {children}
      </div>
      {/* <Footer/> */}

      <TimelineComponent />
    </main>
  </div>
)