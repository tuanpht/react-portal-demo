import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './main';

const Home = lazy(() => import('../screens/Home'));
const MilkyWay = lazy(() => import('../screens/MilkyWay'));
const Sun = lazy(() => import('../screens/Sun'));
const Namek = lazy(() => import('../screens/Namek'));
const NotFound = lazy(() => import('../screens/NotFound'));

function Routes() {
  return (
    <Suspense fallback={'Loading...'}>
      <Switch>
        <Route exact path="/">
          <Main>
            <Home />
          </Main>
        </Route>
        <Route exact path="/milkyway">
          <Main>
            <MilkyWay />
          </Main>
        </Route>
        <Route exact path="/sun">
          <Main>
            <Sun />
          </Main>
        </Route>
        <Route exact path="/namek">
          <Main>
            <Namek />
          </Main>
        </Route>
        <Route>
          <Main>
            <NotFound />
          </Main>
        </Route>
      </Switch>
    </Suspense>
  );
}

export default Routes;
